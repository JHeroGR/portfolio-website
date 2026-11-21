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
      </article>
      <div v-else class="detail-card p-4 rounded-4 shadow-sm">
        <h1 class="h3">Article not found</h1>
        <p class="mb-0">The requested post is not available yet. Choose another article from the blog index.</p>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '@/data/blogPosts'
import { useSeo } from '@/composables/useSeo'

export default {
  name: 'BlogDetailView',
  setup() {
    const route = useRoute()
    const { applySeo } = useSeo()

    const post = computed(() => posts.find((entry) => entry.slug === route.params.slug))
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

    return { post }
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

</style>
