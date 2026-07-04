<template>
  <div class="app-shell d-flex flex-column min-vh-100">
    <ParticlesComponent />
    <NavBarComponent />
    <div class="router-view-shell">
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <div :key="$route.fullPath" class="page-shell">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import ParticlesComponent from '@/components/ParticlesComponent.vue'
import NavBarComponent from '@/components/NavBarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useTheme } from '@/composables/useTheme'

export default {
  name: 'App',
  components: {
    ParticlesComponent,
    NavBarComponent,
    FooterComponent,
  },
  setup() {
    useTheme()
  }
}
</script>

<style>
:root {
  --app-bg: #f6fbf9;
  --app-surface: #ffffff;
  --app-text: #243746;
  --app-muted: #4f6474;
  --app-accent: #42b883;
  --app-accent-strong: #35495e;
  --app-border: #dce8e1;
}

:root[data-theme='dark'] {
  --app-bg: #07111f;
  --app-surface: #122137;
  --app-text: #eef6ff;
  --app-muted: #9fb0c7;
  --app-accent: #42b883;
  --app-accent-strong: #64d7aa;
  --app-border: #22344d;
}

body {
  margin: 0;
  background: var(--app-bg);
  color: var(--app-text);
  transition: background-color 0.25s ease, color 0.25s ease;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background: var(--app-bg);
  color: var(--app-text);
}

#app h1 {
  padding-top: 20px;
}

.text-muted {
  color: var(--app-muted) !important;
}

.app-shell {
  background:
    linear-gradient(135deg, rgba(66, 184, 131, 0.12) 0%, rgba(53, 73, 94, 0.05) 100%),
    var(--app-bg);
  color: var(--app-text);
}

.router-view-shell {
  position: relative;
  flex: 1 0 auto;
  overflow: hidden;
}

.page-shell {
  width: 100%;
  min-height: 100%;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(24px);
  opacity: 0;
}

.slide-leave-from {
  transform: translateX(-24px);
  opacity: 0;
}
</style>
