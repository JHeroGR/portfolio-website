<template>
  <main class="blog-detail py-5">
    <div class="container text-start">
      <router-link class="back-link mb-4 d-inline-flex align-items-center" to="/blog">
        <i class="bi bi-arrow-left me-2"></i>
        Back to blog
      </router-link>

      <article v-if="post" class="detail-card p-4 p-md-5 rounded-4 shadow-sm">
        <p class="blog-detail__eyebrow">{{ post.category }}</p>
        <h1 class="display-6 fw-bold">{{ post.title }}</h1>
        <p class="text-muted mt-3">{{ post.publishedAt }} · {{ post.readTime }}</p>
        <p class="lead mt-4">{{ post.excerpt }}</p>

        <div v-for="(section, index) in post.sections" :key="index" class="mt-4">
          <h2 class="h5 fw-semibold">{{ section.heading }}</h2>
          <p v-for="(paragraph, paragraphIndex) in section.content" :key="paragraphIndex" class="mt-3 mb-0">
            {{ paragraph }}
          </p>
        </div>

        <section class="comment-section mt-5">
          <h2 class="h5 fw-semibold">Comments</h2>
          <form class="comment-form mt-3" @submit.prevent="submitComment">
            <label class="form-label" for="comment-name">Name</label>
            <input id="comment-name" v-model="newComment.name" class="form-control mb-3" placeholder="Your name" required />

            <label class="form-label" for="comment-body">Comment</label>
            <textarea id="comment-body" v-model="newComment.body" class="form-control" rows="3" placeholder="Share your thoughts" required></textarea>

            <button class="btn btn-outline-success mt-3" type="submit">Post comment</button>
          </form>

          <div v-if="comments.length" class="comments-list mt-4">
            <div v-for="(comment, index) in comments" :key="index" class="comment-card p-3 rounded-3 mt-3">
              <p class="fw-semibold mb-1">{{ comment.name }}</p>
              <p class="mb-0">{{ comment.body }}</p>
            </div>
          </div>
          <p v-else class="text-muted mt-3">No comments yet. Be the first to share an idea.</p>
        </section>
      </article>

      <div v-else class="detail-card p-4 rounded-4 shadow-sm">
        <h1 class="h3">Article not found</h1>
        <p class="mb-0">The requested post is not available yet. Choose another article from the blog index.</p>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '@/data/blogPosts'
import { useSeo } from '@/composables/useSeo'

export default {
  name: 'BlogDetailView',
  setup() {
    const route = useRoute()
    const { applySeo } = useSeo()

    const post = computed(() => posts.find((entry) => entry.slug === route.params.slug))
    const comments = ref([])
    const newComment = reactive({ name: '', body: '' })

    const submitComment = () => {
      if (!newComment.name.trim() || !newComment.body.trim()) return

      comments.value.push({
        name: newComment.name.trim(),
        body: newComment.body.trim()
      })

      newComment.name = ''
      newComment.body = ''
    }

    onMounted(() => {
      if (post.value) {
        applySeo({
          title: post.value.title,
          description: post.value.excerpt
        })
      } else {
        applySeo({
          title: 'Blog post not found',
          description: 'The requested blog post could not be found.'
        })
      }
    })

    return { post, comments, newComment, submitComment }
  }
}
</script>

<style scoped>
.blog-detail {
  color: var(--app-text);
}

.back-link {
  color: var(--app-accent);
  text-decoration: none;
  font-weight: 600;
}

.detail-card {
  background: var(--app-surface);
  border: 1px solid var(--app-border);
}

.blog-detail__eyebrow {
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--app-accent);
  font-weight: 700;
}

.comment-section {
  border-top: 1px solid var(--app-border);
  padding-top: 1.5rem;
}

.comment-form .form-control {
  background: var(--app-surface);
  color: var(--app-text);
  border-color: var(--app-border);
}

.comment-card {
  background: rgba(66, 184, 131, 0.08);
  border: 1px solid rgba(66, 184, 131, 0.15);
}
</style>
