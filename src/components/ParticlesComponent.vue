<template>
  <div>
    <button @click="changeTheme('dark')">Dark Theme</button>
    <button @click="changeTheme('light')">Light Theme</button>
    <vue-particles
      :key="particlesKey"
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="currentParticlesOptions"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "ParticlesComponent",
  setup() {
    const darkParticlesOptions = ref({});
    const lightParticlesOptions = ref({});
    const currentParticlesOptions = ref({});
    const particlesKey = ref(0); // Used to force re-render

    const particlesLoaded = async (container) => {
      console.log("Particles container loaded", container);
    };

    const changeTheme = (theme) => {
      switch (theme) {
        case "light":
          currentParticlesOptions.value = { ...lightParticlesOptions.value };
          break;
        case "dark":
          currentParticlesOptions.value = { ...darkParticlesOptions.value };
          break;
        default:
          currentParticlesOptions.value = { ...lightParticlesOptions.value };
          break;
      }
      particlesKey.value++; // Increment key to force re-render
    };

    onMounted(() => {
      lightParticlesOptions.value = {
        background: { color: { value: "#cac7c6" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#353839" },
          links: { color: "#353839", distance: 150, enable: true, opacity: 0.5, width: 1 },
          move: { direction: "none", enable: true, outModes: "bounce", speed: 6 },
          number: { density: { enable: true }, value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      };

      darkParticlesOptions.value = {
        background: { color: { value: "#353839" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#cac7c6" },
          links: { color: "#cac7c6", distance: 150, enable: true, opacity: 0.5, width: 1 },
          move: { direction: "none", enable: true, outModes: "bounce", speed: 6 },
          number: { density: { enable: true }, value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      };

      currentParticlesOptions.value = { ...lightParticlesOptions.value }; // Default
    });

    return { particlesKey, currentParticlesOptions, particlesLoaded, changeTheme };
  },
};
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
