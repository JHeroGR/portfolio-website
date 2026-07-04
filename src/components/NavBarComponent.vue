<template>
  <header class="navbar-shell">
    <h1 class="h1 mb-3">Joel Gutierrez</h1>

    <div class="navbar-controls">
      <nav id="desktop-nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/work">Work</router-link> |
        <router-link to="/certificates">Certificates</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/blog">Blog</router-link> |
        <router-link to="/contact">Contact</router-link>
      </nav>
      <nav id="mobile-nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/work">Work</router-link> |
        <router-link to="/certificates">Certificates</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/blog">Blog</router-link> |
        <router-link to="/contact">Contact</router-link>
      </nav>
      <ThemeToggle :model-value="themeMode" @update:modelValue="setTheme" />
    </div>
  </header>
</template>

<script>
import ThemeToggle from '@/components/ThemeToggle.vue'
import { useTheme } from '@/composables/useTheme'

export default {
  name: 'NavBarComponent',
  components: {
    ThemeToggle
  },
  setup() {
    const { themeMode, setTheme } = useTheme()
    return { themeMode, setTheme }
  }
}
</script>

<style scoped>
.navbar-shell {
  padding: 1.5rem 1rem 0.5rem;
  position: relative;
  z-index: 5;
}

.navbar-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}

nav {
  padding: 12px 0;
  font-size: larger;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.35rem;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

nav a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: var(--app-accent);
  color: var(--app-accent);
}

#mobile-nav {
  display: none;
}

@media only screen and (max-width: 600px) {
  #desktop-nav {
    display: none;
  }

  #mobile-nav {
    display: block;
  }
}
</style>