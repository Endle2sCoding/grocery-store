<script lang="ts" setup>
defineProps({});
</script>
<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
