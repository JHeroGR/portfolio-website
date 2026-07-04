<template>
  <div class="blog-app">
    <header class="blog-navbar">
      <div class="navbar-content">
        <h1 class="blog-title">Joel's Blog</h1>
        <button @click="goHome" class="back-button">← Back to Portfolio</button>
      </div>
    </header>

    <main class="blog-main">
      <div class="blog-container">
        <div class="blog-header">
          <h2>Thoughts & Insights</h2>
          <p class="subtitle">A collection of my thoughts on web development and technology</p>
        </div>

        <div class="blog-posts">
          <article v-for="post in blogPosts" :key="post.id" class="blog-post">
            <div class="post-metadata">
              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-subtitle">{{ post.subtitle }}</p>
              <time class="post-date">{{ formatDate(post.dateCreated) }}</time>
            </div>

            <div class="post-body">
              <p v-if="post.text.length > 280" class="post-excerpt">
                {{ truncateText(post.text, 280) }}
                <button 
                  @click="toggleExpand(post.id)" 
                  class="read-more-btn"
                >
                  {{ post.expanded ? '▼ Show Less' : '▶ Read More' }}
                </button>
              </p>
              <p v-else class="post-text">{{ post.text }}</p>

              <transition name="expand">
                <div v-if="post.expanded && post.text.length > 280" class="expanded-content">
                  <p class="post-text">{{ post.text }}</p>
                </div>
              </transition>
            </div>
          </article>
        </div>
      </div>
    </main>

    <footer class="blog-footer">
      <p>&copy; 2024 Joel Gutierrez. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BlogApp',
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: 'Getting Started with Vue.js',
          subtitle: 'A beginner\'s guide to building reactive web applications',
          dateCreated: new Date('2024-06-15'),
          text: 'Vue.js is a progressive JavaScript framework that makes building interactive user interfaces simple and enjoyable. Whether you\'re building a small widget or a full-featured application, Vue scales from a simple library to a sophisticated framework. Vue\'s reactivity system automatically tracks dependencies and efficiently updates the DOM when data changes. One of the best parts about Vue is its gentle learning curve - if you know HTML, CSS, and JavaScript, you can pick up Vue in a matter of days. It combines the best ideas from React and Angular while being easier to learn than both.',
          expanded: false
        },
        {
          id: 2,
          title: 'Understanding React Hooks',
          subtitle: 'Deep dive into modern React development patterns',
          dateCreated: new Date('2024-05-22'),
          text: 'Hooks are functions that let you "hook into" React features. They allow you to use state and other React features without writing a class component. The useState Hook lets you add state to functional components, which previously was only available in class components. The useEffect Hook lets you perform side effects in functional components - it serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined. Understanding hooks is crucial for writing modern, clean React code that\'s easier to understand and maintain. Custom hooks allow you to extract component logic into reusable functions.',
          expanded: false
        },
        {
          id: 3,
          title: 'Web Performance Optimization Tips',
          subtitle: 'Strategies to make your websites faster and more efficient',
          dateCreated: new Date('2024-04-10'),
          text: 'Web performance is critical for user experience and SEO. Slow websites lead to higher bounce rates and lower conversion rates. There are many techniques to optimize performance: minimizing and compressing assets, lazy loading images, code splitting, using a Content Delivery Network (CDN), and caching strategies. Browser Developer Tools can help identify performance bottlenecks. Lighthouse is an excellent tool for auditing your site\'s performance, accessibility, and best practices. Remember that performance optimization is an ongoing process - always monitor and improve based on real user metrics. Start by measuring your baseline performance and then systematically address the bottlenecks.',
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
    },
    goHome() {
      window.close();
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.blog-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(180deg, #f5f7fa 0%, #e9ecef 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Navbar Styles */
.blog-navbar {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-title {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.back-button {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 0.7rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: white;
  transform: translateX(-5px);
}

/* Main Content */
.blog-main {
  flex: 1;
  padding: 60px 2rem;
}

.blog-container {
  max-width: 900px;
  margin: 0 auto;
}

.blog-header {
  text-align: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 3px solid #667eea;
}

.blog-header h2 {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 15px;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

/* Blog Posts */
.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.blog-post {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 5px solid #667eea;
}

.blog-post:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  transform: translateY(-3px);
}

.post-metadata {
  margin-bottom: 20px;
}

.post-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
}

.post-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 10px;
  font-style: italic;
}

.post-date {
  display: block;
  font-size: 0.95rem;
  color: #999;
  font-weight: 500;
}

.post-body {
  color: #555;
}

.post-text,
.post-excerpt {
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
  color: #555;
}

.read-more-btn {
  background: none;
  border: none;
  color: #667eea;
  font-weight: 600;
  cursor: pointer;
  margin-left: 5px;
  padding: 0;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.read-more-btn:hover {
  color: #764ba2;
  text-decoration: underline;
}

.expanded-content {
  margin-top: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-left: 3px solid #764ba2;
  border-radius: 5px;
}

.expanded-content .post-text {
  margin: 0;
}

/* Animations */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s ease;
}

.expand-enter-from {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to {
  opacity: 1;
  max-height: 1000px;
}

.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
}

.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

/* Footer */
.blog-footer {
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 30px 2rem;
  text-align: center;
  color: #666;
  margin-top: 60px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-content {
    flex-direction: column;
    gap: 1rem;
  }

  .blog-main {
    padding: 40px 1rem;
  }

  .blog-header h2 {
    font-size: 2rem;
  }

  .blog-post {
    padding: 20px;
  }

  .post-title {
    font-size: 1.5rem;
  }

  .post-subtitle {
    font-size: 1rem;
  }

  .back-button {
    width: 100%;
  }
}
</style>
