<template lang="">
    <p>Dark theme: {{isDark}}</p>

    <button @click="toggleDark()">
    Toggle Color Mode
  </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: 'body',
  valueDark: 'dark',
  valueLight: 'light'
});
const toggleDark = useToggle(isDark);

</script>

<style>
.dark {
  background: #353839; 
  color: #F9F4F5;
}

.light {
  background: #F9F4F5;
  color: #353839;
}

/* isDark ? '#fff' : '#353839' */
</style>