<script lang="ts" setup>
import { AppSearch } from '@/features/AppSearch';
import { UserMenu } from '@/features/UserMenu';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import AppContainer from '@/shared/ui/AppContainer/AppContainer.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';
import AppLogo from '@/shared/ui/AppLogo/AppLogo.vue';
import { Nav } from '@/widgets/Nav';
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import AvatarPng from "@/shared/assets/images/avatar.png";
import { usePersonStore } from '@/entities/Person';
import { storeToRefs } from 'pinia';
import DropdownMenu from '@/widgets/DropdownMenu/ui/DropdownMenu.vue';
import { useScreenStore } from '@/entities/Screen';
import BottomNav from './BottomNav.vue';

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

const dropdownIsShow = ref(false);

const toggleDropdownIsShow = () => dropdownIsShow.value = !dropdownIsShow.value;

const { platformWidth } = storeToRefs(useScreenStore());

</script>
<template>
  <header class="header">
    <div class="header__contetnt">
      <AppContainer class="container">

        <RouterLink
          to="/"
          class="header__logo"
        >
          <AppLogo
            orientation="horizontal"
            colorful
            bgColor="white"
            :withText="platformWidth === 'desctop'"
          />
        </RouterLink>

        <AppButton
          class="header__catatlog"
          color="secondary"
          leftIcon
          @mouseenter="toggleDropdownIsShow"
        >
          <template v-slot:leftIcon>
            <AppIcon type="menu" />
          </template>
          Каталог
        </AppButton>

        <AppSearch class="header__search" />
        <Nav class="header__nav" />
        <UserMenu
          v-if="isAuth"
          :data="userMenu"
          class="header__user-menu"
        />
        <AppButton
          v-else
          class="header__login"
          @click="() => setIsAuth(true)"
        >
          Войти
          <template v-slot:rightIcon>
            <AppIcon type="login" />
          </template>
        </AppButton>
      </AppContainer>
    </div>
    <DropdownMenu
      @mouseleave="toggleDropdownIsShow"
      v-if="dropdownIsShow"
    />
    <BottomNav />
  </header>
</template>


<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: var(--main-surface);
  box-shadow: var(--shadow-default-s);
}

.header__contetnt {
  background: var(--main-surface);
  box-shadow: var(--shadow-default-s);
  position: relative;
  z-index: 1;
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  gap: 20px;
}

.header__catatlog {
  max-width: 120px;
}

.header__user-menu {
  width: 217px;
}

.header__login {
  width: 167px;
}

@media screen and (max-width: 1200px) {

  .header__login:deep(.app-typography),
  .header__catatlog:deep(.app-typography) {
    display: none;
    pointer-events: none;
  }

  .header__login {
    width: max-content;
  }

  .header__catatlog {
    width: max-content;
  }

  .header__user-menu {
    min-width: 120px;
    width: fit-content;
  }

  .header__search {
    max-width: 324px;
  }
}

@media screen and (max-width: 767px) {

  .header__catatlog,
  .header__nav,
  .header__user-menu {
    display: none;
  }

  .header__logo {
    display: flex;
    align-items: center;
  }

  .header__logo:deep(svg) {
    width: 39px;
  }
}
</style>
