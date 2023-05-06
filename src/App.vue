<template>
  <router-view v-slot="{ Component, route }">
    <!-- <template v-if="Component"> -->
    <component :is="Component" :key="route.name"></component>
    <!-- </template> -->
  </router-view>
</template>
<script lang="ts" setup>
console.log(11121, '11121');
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
