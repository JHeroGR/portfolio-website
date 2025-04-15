<template>
    <h2>404 NOT FOUND</h2>   
    <h3>Redirecting back to home...</h3>
</template>

<script>
export default {
    name: "NotFoundView",
    mounted() {
    setTimeout(() => {
      this.$router.push('/');
    }, 2000); // redirect after 2s
  }
}
</script>