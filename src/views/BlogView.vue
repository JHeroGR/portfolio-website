<template>
  <div class="blog-container">
    <div class="blog-header">
      <h1>Blog</h1>
      <p class="blog-subtitle">Thoughts, insights, and stories from my journey</p>
    </div>
    
    <div class="blog-posts">
      <div v-for="post in blogPosts" :key="post.id" class="blog-post">
        <div class="post-header">
          <h2>{{ post.title }}</h2>
          <p class="post-subtitle">{{ post.subtitle }}</p>
          <p class="post-date">{{ formatDate(post.dateCreated) }}</p>
        </div>
        
        <div class="post-content">
          <p v-if="post.text.length > 280" class="post-text">
            {{ truncateText(post.text, 280) }}...
            <a href="#" @click.prevent="toggleExpand(post.id)" class="read-more">
              {{ post.expanded ? 'Read less' : 'Read more' }}
            </a>
          </p>
          <p v-else class="post-text">{{ post.text }}</p>
          
          <div v-if="post.expanded && post.text.length > 280" class="expanded-text">
            {{ post.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogView',
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: 'Getting Started with Vue.js',
          subtitle: 'A beginner\'s guide to building reactive web applications',
          dateCreated: new Date('2024-06-15'),
          text: 'Vue.js is a progressive JavaScript framework that makes building interactive user interfaces simple and enjoyable. Whether you\'re building a small widget or a full-featured application, Vue scales from a simple library to a sophisticated framework. Vue\'s reactivity system automatically tracks dependencies and efficiently updates the DOM when data changes. One of the best parts about Vue is its gentle learning curve - if you know HTML, CSS, and JavaScript, you can pick up Vue in a matter of days.',
          expanded: false
        },
        {
          id: 2,
          title: 'Understanding React Hooks',
          subtitle: 'Deep dive into modern React development patterns',
          dateCreated: new Date('2024-05-22'),
          text: 'Hooks are functions that let you "hook into" React features. They allow you to use state and other React features without writing a class component. The useState Hook lets you add state to functional components, which previously was only available in class components. The useEffect Hook lets you perform side effects in functional components - it serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined. Understanding hooks is crucial for writing modern, clean React code that\'s easier to understand and maintain.',
          expanded: false
        },
        {
          id: 3,
          title: 'Web Performance Optimization Tips',
          subtitle: 'Strategies to make your websites faster and more efficient',
          dateCreated: new Date('2024-04-10'),
          text: 'Web performance is critical for user experience and SEO. Slow websites lead to higher bounce rates and lower conversion rates. There are many techniques to optimize performance: minimizing and compressing assets, lazy loading images, code splitting, using a Content Delivery Network (CDN), and caching strategies. Browser Developer Tools can help identify performance bottlenecks. Lighthouse is an excellent tool for auditing your site\'s performance, accessibility, and best practices. Remember that performance optimization is an ongoing process - always monitor and improve based on real user metrics.',
          expanded: false
        }
      ]
    }
  },
  methods: {
    truncateText(text, length) {
      if (text.length > length) {
        return text.substring(0, length);
      }
      return text;
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    toggleExpand(postId) {
      const post = this.blogPosts.find(p => p.id === postId);
      if (post) {
        post.expanded = !post.expanded;
      }
    }
  }
}
</script>

<style scoped>
.blog-container {
  min-height: 80vh;
  padding: 60px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.blog-header {
  text-align: center;
  margin-bottom: 60px;
  padding-bottom: 40px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}

.blog-header h1 {
  font-size: 3.5rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.blog-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
}

.blog-posts {
  max-width: 900px;
  margin: 0 auto;
}

.blog-post {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.blog-post:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.post-header {
  margin-bottom: 20px;
}

.post-header h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: left;
}

.post-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  text-align: left;
  margin-bottom: 8px;
}

.post-date {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: left;
  font-style: italic;
}

.post-content {
  text-align: left;
}

.post-text {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 15px;
}

.read-more {
  color: #ffd700;
  text-decoration: none;
  font-weight: bold;
  margin-left: 5px;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #ffed4e;
  text-decoration: underline;
}

.expanded-text {
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-left: 3px solid #ffd700;
  border-radius: 5px;
  margin-top: 15px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px;
  }
}

@media only screen and (max-width: 768px) {
  .blog-container {
    padding: 40px 20px;
  }

  .blog-header h1 {
    font-size: 2.5rem;
  }

  .blog-post {
    padding: 20px;
  }

  .post-header h2 {
    font-size: 1.5rem;
  }
}
</style>
