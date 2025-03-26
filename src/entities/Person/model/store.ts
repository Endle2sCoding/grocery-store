import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const usePersonStore = defineStore('isAuth', () => {
  const isAuth = ref(false);
  const person = reactive({ name: "Алексей" });
  const setIsAuth = (value: boolean) => isAuth.value = value;

  return { isAuth, setIsAuth, person };
});
