<template>
  <h1 class='logo'>Joel Gutierrez</h1>
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
  padding-top: 5%;
}

</style>
