<template>
  <div class="d-flex flex-column min-vh-100">
    <ParticlesComponent />
    <NavBarComponent />
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    <FooterComponent />
  </div>

</template>

<script>
import ParticlesComponent from '@/components/ParticlesComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: { 
    ParticlesComponent,
    NavBarComponent, 
    FooterComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

#app h1 {
  padding-top: 20px;
}

/* Transitions */
/* Slide transition */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);

}
.slide-leave {
  transform: translateX(-100%);
}

/* .dark {
  background: #16171d; it's better to use a dark grey color instead of pure black 
  color: #fff;
} */
</style>
