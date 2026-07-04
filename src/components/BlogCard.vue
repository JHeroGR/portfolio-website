<template>
  <router-link
    class="blog-card text-decoration-none"
    :to="{ name: 'blog-detail', params: { slug: post.slug } }"
  >
    <article class="card h-100 border-0 shadow-sm blog-card__inner">
      <div class="card-body text-start">
        <p class="small text-uppercase mb-2 blog-card__eyebrow">{{ post.category }}</p>
        <h3 class="h5 fw-semibold mb-3">{{ post.title }}</h3>
        <p class="mb-3">{{ post.excerpt }}</p>
      </div>
      <div class="card-footer border-0 bg-transparent d-flex justify-content-between align-items-center">
        <span class="small">{{ post.readTime }}</span>
        <span class="small">{{ post.publishedAt }}</span>
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.blog-card {
  display: block;
  color: inherit;
}

.blog-card__inner {
  background: var(--app-surface);
  color: var(--app-text);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.blog-card:hover .blog-card__inner {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(15, 23, 42, 0.12);
}

.blog-card__eyebrow {
  letter-spacing: 0.16em;
  color: var(--app-accent);
}
</style>
