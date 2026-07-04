<template>
  <div class="theme-toggle" role="group" :aria-label="'Theme preference'">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="theme-toggle__option"
      :class="{ active: modelValue === option.value }"
      :aria-pressed="modelValue === option.value"
      @click="$emit('update:modelValue', option.value)"
    >
      <i :class="option.icon"></i>
      <span class="visually-hidden">{{ option.label }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ThemeToggle',
  props: {
    modelValue: {
      type: String,
      default: 'system'
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      options: [
        { value: 'light', label: 'Light', icon: 'bi bi-brightness-high' },
        { value: 'system', label: 'System', icon: 'bi bi-circle-half' },
        { value: 'dark', label: 'Dark', icon: 'bi bi-moon' }
      ]
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--app-border);
  border-radius: 999px;
  background: var(--app-surface);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  flex-shrink: 0;
  width: 7.2rem;
  max-width: 7.2rem;
  min-width: 7.2rem;
  box-sizing: border-box;
}

.theme-toggle__option {
  border: 0;
  border-radius: 999px;
  width: 2.1rem;
  height: 2.1rem;
  min-width: 2.1rem;
  min-height: 2.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--app-muted);
  background: transparent;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
  padding: 0;
  flex: 0 0 auto;
}

.theme-toggle__option:hover {
  color: var(--app-accent);
  transform: translateY(-1px);
}

.theme-toggle__option.active {
  background: var(--app-accent);
  color: white;
}
</style>
