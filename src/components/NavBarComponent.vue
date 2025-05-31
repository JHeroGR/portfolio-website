<template>
    <h1 class='h1'>Joel Gutierrez</h1>

    <nav id='desktop-nav'>
        <router-link to="/">Home</router-link> |
        <router-link to="/work">Work</router-link> |
        <router-link to="/certificates">Certificates</router-link> |
        <router-link to="/about">About</router-link> |
        <!-- <router-link to="/services">Services</router-link> | -->
        <router-link to="/contact">Contact</router-link>
    </nav>
    <nav id='mobile-nav'>
        <router-link to="/">Home</router-link> |
        <router-link to="/work">Work</router-link> |
        <router-link to="/certificates">Certificates</router-link> |
        <router-link to="/about">About</router-link> |
        <!-- <router-link to="/services">Services</router-link> | -->
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

nav a {
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}

nav a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #006538;
    color: #42b983;
    -webkit-text-stroke: 0.5px #00361e;

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