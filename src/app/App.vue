<script setup lang="ts">
import { useScreenStore } from '@/entities/Screen';
import { BottomNav } from '@/sections/BottomNav';
import { Header } from '@/sections/Header';
import { onMounted, onUnmounted } from 'vue';

const { setPlatformWidth } = useScreenStore();
const onResize = () => {
  setPlatformWidth(window.innerWidth);
};
onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <Header />
  <RouterView />
  <BottomNav />
</template>
