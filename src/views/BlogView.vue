<template>
  <main class="blog-page py-5">
    <div class="container">
      <header class="text-start mb-5">
        <p class="blog-page__eyebrow">Journal</p>
        <h1 class="display-5 fw-bold">Writing for thoughtful product experiences.</h1>
        <p class="lead">
          This blog layout combines a simple content model, semantic routes, and a clear reading flow for future articles.
        </p>
      </header>

      <section v-if="featuredPost" class="featured-card mb-5 p-4 rounded-4 shadow-sm">
        <div class="row g-4 align-items-center">
          <div class="col-lg-8 text-start">
            <p class="small text-uppercase mb-2">Featured article</p>
            <h2 class="h3 fw-semibold">{{ featuredPost.title }}</h2>
            <p class="mb-3">{{ featuredPost.excerpt }}</p>
            <router-link class="btn btn-outline-primary" :to="{ name: 'blog-detail', params: { slug: featuredPost.slug } }">
              Read article
            </router-link>
          </div>
          <div class="col-lg-4 text-start">
            <p class="mb-1"><strong>Category:</strong> {{ featuredPost.category }}</p>
            <p class="mb-1"><strong>Read time:</strong> {{ featuredPost.readTime }}</p>
            <p class="mb-0"><strong>Published:</strong> {{ featuredPost.publishedAt }}</p>
          </div>
        </div>
      </section>

      <section class="row row-cols-1 row-cols-md-2 g-4 mb-5">
        <div v-for="bp in blogposts" :key="bp.slug" class="col">
          <BlogCardComponent :post="bp"/>
        </div>
      </section>

      <section class="text-start architecture-card p-4 rounded-4 shadow-sm">
        <h2 class="h4 fw-semibold">Suggested basic architecture</h2>
        <ul class="mt-3 mb-0">
          <li>Content stored in a single data module for easy maintenance.</li>
          <li>Route-based detail pages for individual articles.</li>
          <li>SEO metadata updated per article and page.</li>
          <li>A theme toggle that supports light, dark, and system preferences.</li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
import BlogCardComponent from '@/components/BlogCardComponent.vue';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';


export default {
  name: 'BlogView',
  components: {
    BlogCardComponent,
  },
  data() {
    return {
      blogposts: []
    }
  },
  mounted() {
    this.fetchPosts()
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData();
    next()
  },
  methods: {
    async fetchPosts () {
        const colRef = collection(db, 'blogposts')
        try {
          const querySnapshot = await getDocs(colRef)

          this.blogposts = querySnapshot.docs.map(doc => ({
            id: doc.slug,
            ...doc.data()
          }))
          console.log('blogposts:', this.blogposts)
      } catch (error) {
        console.error('Failed to read blogposts', error)
      }
    }
  }
}


// export default {
//   name: 'BlogView',
//   components: {
//     BlogCardComponent
//   },
//   setup() {
//     const { applySeo } = useSeo()
    
//     const blogposts = ref([])

//     const fetchPosts = async() => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'blogposts'))
//         blogposts.value = querySnapshot.docs.map(doc => ({
//             id: doc.slug,
//             ...doc.data()
//         }))
//         console.log(blogposts.value)
//       } catch (e) {
//         console.log('query has not returned')
//       }
//     }

  //   onMounted(() => {
  //     fetchPosts()
  //     applySeo({
  //       title: 'Blog',
  //       description: 'A structured blog experience with article cards, SEO metadata, and light/dark/system theming.'
  //     })
  //   })

  //   return {
  //     posts: computed(() => posts),
  //     featuredPost: computed(() => featuredPost),
  //     blogposts
  //   }
  // }
// }
</script>

<style scoped>
.blog-page {
  color: var(--app-text);
}

.lead {
  color: var(--app-muted);
}

.blog-page__eyebrow {
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--app-accent);
  font-weight: 700;
}

.featured-card,
.architecture-card {
  background: var(--app-surface);
  border: 1px solid var(--app-border);
}
</style>
