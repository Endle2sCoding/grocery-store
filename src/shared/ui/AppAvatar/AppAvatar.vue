<script lang="ts" setup>

interface Props {
  src: string;
}
const { src } = defineProps<Props>();
</script>
<template>
  <div class="app-avatar">
    <img
      class="app-avatar__img"
      :src="src"
      alt="avatar"
    >
  </div>
</template>
<style scoped>
.app-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: lightgray;
}

.app-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
