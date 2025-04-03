<script lang="ts" setup>
import AppContainer from '@/shared/ui/AppContainer/AppContainer.vue';
import { DropdownMenu } from '@/widgets/DropdownMenu';
import { Nav } from '@/widgets/Nav';
import { reactive, ref } from 'vue';
import AvatarPng from "@/shared/assets/images/avatar.png";
import { usePersonStore } from '@/entities/Person';
import { storeToRefs } from 'pinia';
import { UserMenu } from '@/features/UserMenu';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';

const personStore = usePersonStore();
const { person, isAuth } = storeToRefs(personStore);
const { setIsAuth } = personStore;

const userMenu = reactive({
  avatar: AvatarPng,
  name: person.value.name,
  menu: [
    { label: "Профиль", link: "/profile" },
    { label: "Выход", action: "logout" },
  ]
});
const dropdownIsShow = ref<boolean>(false);
const toggleDropdownIsShow = () => dropdownIsShow.value = !dropdownIsShow.value;

</script>
<template>
  <AppContainer class="bottomNav">
    <!-- <DropdownMenu
      @mouseleave="toggleDropdownIsShow"
      v-if="dropdownIsShow"
    />

    <AppButton
      class="footer__catatlog"
      decoration="none"
      leftIcon
      @mouseenter="toggleDropdownIsShow"
    >
      <template v-slot:leftIcon>
        <AppIcon type="menu" />
      </template>
</AppButton>
<Nav />

-->

    <UserMenu
      v-if="isAuth"
      :data="userMenu"
      class=""
    />
    <AppButton
      v-else
      class=""
      @click="() => setIsAuth(true)"
    >
      Войти
      <template v-slot:rightIcon>
        <AppIcon type="login" />
      </template>
    </AppButton>

  </AppContainer>
</template>
<style scoped>
.bottomNav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  align-items: center;
  height: var(--bottom-nav-height);

  background: var(--main-surface);
  box-shadow: var(--shadow-default-s);
  min-height: var(--footer-height);
}

.footer__catatlog {
  width: 40px;
}
</style>
