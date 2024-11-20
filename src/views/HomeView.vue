<template>
  <div class="hello">
    <h1>I am Joel Gutierrez</h1> 
    <h1>I am a coder, developer, and designer. </h1>
    <h1>Take a look at my <router-link to="/work">work</router-link> and <router-link to="/contact">contact</router-link> me for an interview or job.</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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

.hello h1 {
  padding-left: 10px;
  padding-right: 10px;
}

.hello h1 a {
  text-decoration: underline;
  text-decoration-color: #006538;
    color: #42b983;
    -webkit-text-stroke: 0.5px #00361e;

}
</style>
