<template>
  <div class="hello">
    <p>I am Joel Gutierrez, I am a coder, developer, and designer. Take a look at my <router-link to="/work">work</router-link> and <router-link to="/contact">contact</router-link> me for an interview or job.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
