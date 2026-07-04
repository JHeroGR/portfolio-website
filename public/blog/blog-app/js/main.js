const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Vue.js',
    subtitle: 'A beginner\'s guide to building reactive web applications',
    dateCreated: '2024-06-15',
    text: 'Vue.js is a progressive JavaScript framework that makes building interactive user interfaces simple and enjoyable. Whether you are building a small widget or a full-featured application, Vue scales from a simple library to a sophisticated framework. Vue\'s reactivity system automatically tracks dependencies and efficiently updates the DOM when data changes. One of the best parts about Vue is its gentle learning curve - if you know HTML, CSS, and JavaScript, you can pick up Vue in a matter of days.'
  },
  {
    id: 2,
    title: 'Understanding React Hooks',
    subtitle: 'Deep dive into modern React development patterns',
    dateCreated: '2024-05-22',
    text: 'Hooks are functions that let you hook into React features. They allow you to use state and other React features without writing a class component. The useState Hook lets you add state to functional components, which previously was only available in class components. The useEffect Hook lets you perform side effects in functional components - it serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.'
  },
  {
    id: 3,
    title: 'Web Performance Optimization Tips',
    subtitle: 'Strategies to make your websites faster and more efficient',
    dateCreated: '2024-04-10',
    text: 'Web performance is critical for user experience and SEO. Slow websites lead to higher bounce rates and lower conversion rates. There are many techniques to optimize performance: minimizing and compressing assets, lazy loading images, code splitting, using a Content Delivery Network (CDN), and caching strategies. Lighthouse is an excellent tool for auditing your site\'s performance, accessibility, and best practices.'
  }
];

const storageKey = 'blog-theme-preference';
const themeSelect = document.getElementById('themeSelect');
const root = document.documentElement;

function getPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  const resolvedTheme = theme === 'system' ? getPreferredTheme() : theme;
  root.setAttribute('data-theme', resolvedTheme);
  root.style.colorScheme = resolvedTheme;

  if (themeSelect) {
    themeSelect.value = theme;
  }
}

function setTheme(theme) {
  localStorage.setItem(storageKey, theme);
  applyTheme(theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem(storageKey) || 'system';
  applyTheme(savedTheme);

  if (themeSelect) {
    themeSelect.addEventListener('change', (event) => setTheme(event.target.value));
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener?.('change', () => {
    if ((localStorage.getItem(storageKey) || 'system') === 'system') {
      applyTheme('system');
    }
  });
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function truncateText(text, length) {
  return text.length > length ? `${text.substring(0, length)}...` : text;
}

function toggleExpand(postId) {
  const post = blogPosts.find((entry) => entry.id === postId);
  if (post) {
    post.expanded = !post.expanded;
    renderPosts();
  }
}

function renderPosts() {
  const container = document.getElementById('blogPosts');
  if (!container) {
    return;
  }

  container.innerHTML = blogPosts.map((post) => {
    const needsReadMore = post.text.length > 280;
    const excerpt = truncateText(post.text, 280);

    return `
      <article class="blog-post">
        <div class="post-metadata">
          <h3 class="post-title">${post.title}</h3>
          <p class="post-subtitle">${post.subtitle}</p>
          <time class="post-date">${formatDate(post.dateCreated)}</time>
        </div>
        <div class="post-body">
          ${needsReadMore ? `
            <p class="post-excerpt">
              ${excerpt}
              <button class="read-more-btn" type="button" onclick="toggleExpand(${post.id})">
                ${post.expanded ? 'Show Less' : 'Read More'}
              </button>
            </p>
            ${post.expanded ? `<div class="expanded-content"><p class="post-text">${post.text}</p></div>` : ''}
          ` : `<p class="post-text">${post.text}</p>`}
        </div>
      </article>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderPosts();
});
