<template lang="">
    <h1 class='logo'>Joel Gutierrez</h1>

    <nav id='desktop-nav'>
        <router-link to="/">Home</router-link> |
        <router-link to="/work">Work</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
    </nav>
    <nav id='mobile-nav'>

        <router-link to="/">Home</router-link> |
        <router-link to="/work">Work</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavBarComponent'
}
</script>

<style>
    
nav {
  padding: 30px;
  font-size: larger;
}

nav .logo {
    font-weight: bold;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
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