<template>
  <vue-particles id="tsparticles" :options="particlesOptions" />
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'ParticlesComponent',
  setup() {
    const particlesOptions = ref({})

    const getTheme = () => {
      return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    }

    const buildParticlesOptions = (theme) => {
      const isDark = theme === 'dark'

      return {
        background: {
          color: { value: isDark ? '#07111f' : '#f6fbf9' }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: { enable: true, mode: 'grab' }
          },
          modes: {
            push: { quantity: 4 }
          }
        },
        particles: {
          color: {
            value: isDark ? ['#42b883', '#64d7aa', '#eef6ff'] : ['#35495e', '#42b883', '#2e7d5f']
          },
          links: {
            color: isDark ? '#42b883' : '#35495e',
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            speed: 2.2
          },
          number: { density: { enable: true }, value: 60 },
          opacity: { value: 0.45 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }
    }

    onMounted(() => {
      particlesOptions.value = buildParticlesOptions(getTheme())

      const observer = new MutationObserver(() => {
        particlesOptions.value = buildParticlesOptions(getTheme())
      })

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      })

      return () => observer.disconnect()
    })

    return {
      particlesOptions
    }
  }
}
</script>

<style>
#tsparticles {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
}
</style>
