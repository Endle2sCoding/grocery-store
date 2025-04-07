import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { PersonType } from "./personTypes";
import AvatarPng from "@/shared/assets/images/avatar.png";

export const usePersonStore = defineStore('isAuth', () => {
  const isAuth = ref<boolean>(true);
  const person = reactive<PersonType>(
    {
      name: "Алексей",
      avatar: AvatarPng
    }
  );
  const setIsAuth = (value: boolean) => isAuth.value = value;

  return { isAuth, setIsAuth, person };
});
