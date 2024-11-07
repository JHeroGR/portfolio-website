<template>
  <div class="d-flex flex-column min-vh-100">

  <h1 class='logo'>Joel Gutierrez</h1>
  <NavBarComponent />
  <router-view />
  <FooterComponent />
</div>

</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: { 
    NavBarComponent, FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app h1 {
  padding-top: 20px;
}

</style>
