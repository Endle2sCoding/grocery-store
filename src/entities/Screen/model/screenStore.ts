import { defineStore } from "pinia";
import { ref } from "vue";
import type { PlatformWidthType } from "./screenTypes";


export const useScreenStore = defineStore('screen', () => {
  const platformWidth = ref<PlatformWidthType>("desctop");
  const setPlatformWidth = (width: number) => {
    if (width >= 1200) return platformWidth.value = "desctop";
    if (width >= 768) return platformWidth.value = "tablet";
    else return platformWidth.value = "mobile";
  };

  return { platformWidth, setPlatformWidth };
});
