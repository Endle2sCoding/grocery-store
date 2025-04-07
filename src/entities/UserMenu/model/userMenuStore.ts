import { defineStore } from "pinia";
import { reactive } from "vue";
import type { UserMenuType } from "./userMenuTypes";



export const useUserMenuStore = defineStore('user-menu', () => {
  const menu = reactive<UserMenuType>([
    { label: "Профиль", link: "/profile" },
    { label: "Выход", action: "logout" },
  ]);
  const setMenu = () => menu;
  return { menu, setMenu };
});
