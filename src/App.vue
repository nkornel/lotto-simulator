<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <p class="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sit unde impedit eum animi ut minima in aut dolor, ea, facilis atque dignissimos minus obcaecati, totam esse dolorum sequi voluptas.   </p>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>