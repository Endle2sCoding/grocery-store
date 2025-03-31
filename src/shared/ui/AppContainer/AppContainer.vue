<script lang="ts" setup>
</script>
<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>
<style scoped>
.app-container {
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
}

@media screen and (max-width: 1200px) {
  /* .app-container {
    max-width: var(--mobile);
  } */
}
</style>
