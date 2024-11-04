<template>
  <div class='logo'>Joel Gutierrez</div>
  <NavBarComponent />
  <router-view/>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';

export default {
  name: 'App',
  components: { 
    NavBarComponent,
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

</style>
