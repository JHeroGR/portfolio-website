const blogPosts = [
  {
    id: 1,
    title: 'Design Systems That Scale',
    subtitle: 'How thoughtful foundations make product teams faster',
    dateCreated: '2024-06-18',
    text: 'A strong design system helps teams ship faster because it clarifies patterns, components, and interactions before problems show up. A good system is a shared language that reduces friction between design, engineering, and product. When your tokens, components, and content guidelines are consistent, your product feels cohesive even as it grows.'
  },
  {
    id: 2,
    title: 'Accessibility as a Daily Practice',
    subtitle: 'Practical steps for building inclusive experiences',
    dateCreated: '2024-05-29',
    text: 'Accessibility is not a checklist at the end of a launch. It is a habit that shows up in color contrast decisions, semantic HTML, keyboard support, and the way we write content. Small consistent habits lead to a much better experience for everyone, especially when your audience uses assistive technology or moves through your site in unexpected ways.'
  },
  {
    id: 3,
    title: 'Shipping Better with Static Sites',
    subtitle: 'Why performance and simplicity still matter',
    dateCreated: '2024-04-22',
    text: 'Static sites continue to surprise teams because they are easy to host, quick to load, and safe to maintain. By pairing a simple build process with content-focused architecture, you can publish fast and keep the experience polished. A well-structured static site is often the most reliable way to share ideas and documentation.'
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
    const needsReadMore = post.text.length > 260;
    const excerpt = truncateText(post.text, 260);

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
