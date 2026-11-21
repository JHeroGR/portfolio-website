import { onMounted, ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const themeMode = ref('system')
const resolvedTheme = ref('light')

function getSystemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveTheme(mode) {
  if (mode === 'system') return getSystemTheme()
  return mode === 'dark' ? 'dark' : 'light'
}

function applyTheme(mode) {
  if (typeof document === 'undefined') return

  const nextMode = ['light', 'dark', 'system'].includes(mode) ? mode : 'system'
  const nextResolvedTheme = resolveTheme(nextMode)

  themeMode.value = nextMode
  resolvedTheme.value = nextResolvedTheme
  document.documentElement.setAttribute('data-theme', nextResolvedTheme)
  document.documentElement.style.colorScheme = nextResolvedTheme
  localStorage.setItem(STORAGE_KEY, nextMode)
}

export function useTheme() {
  onMounted(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    applyTheme(savedTheme || 'system')

    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleSystemChange = () => {
        if (themeMode.value === 'system') {
          applyTheme('system')
        }
      }

      mediaQuery.addEventListener('change', handleSystemChange)
    }
  })

  watch(themeMode, (currentMode) => {
    if (currentMode === 'system') {
      applyTheme('system')
    }
  })

  return {
    themeMode,
    resolvedTheme,
    setTheme: (mode) => applyTheme(mode),
    toggleTheme: () => {
      if (themeMode.value === 'dark') {
        applyTheme('light')
      } else if (themeMode.value === 'light') {
        applyTheme('system')
      } else {
        applyTheme('dark')
      }
    }
  }
}
