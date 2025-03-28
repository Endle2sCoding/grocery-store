import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { PersonType } from "./personTypes";

export const usePersonStore = defineStore('isAuth', () => {
  const isAuth = ref<boolean>(true);
  const person = reactive<PersonType>({ name: "Алексей" });
  const setIsAuth = (value: boolean) => isAuth.value = value;

  return { isAuth, setIsAuth, person };
});
