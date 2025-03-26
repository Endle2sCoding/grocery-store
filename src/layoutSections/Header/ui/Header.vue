<script lang="ts" setup>
import { AppSearch } from '@/features/AppSearch';
import { UserMenu } from '@/features/UserMenu';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import AppContainer from '@/shared/ui/AppContainer/AppContainer.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';
import AppLogo from '@/shared/ui/AppLogo/AppLogo.vue';
import { Nav } from '@/widgets/Nav';
import { computed, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import AvatarPng from "@/shared/assets/images/avatar.png";
import { usePersonStore } from '@/entities/Person';


const personStore = usePersonStore();
console.log(personStore);
const person = computed(() => personStore.person);
const isAuth = computed(() => personStore.isAuth);

const userMenu = reactive({
  avatar: AvatarPng,
  name: person.value.name,
  menu: [
    { label: "Профиль", link: "/profile" },
    { label: "Выход", action: "logout" },
  ]
})

</script>
<template>
  <header class="header">
    <AppContainer class="container">
      <RouterLink to="/">
        <AppLogo
          orientation="horizontal"
          colorful
          withText
          bgColor="white"
        />
      </RouterLink>

      <AppButton
        class="header__catatlog"
        color="secondary"
        leftIcon
      >
        <template v-slot:leftIcon>
          <AppIcon type="menu" />
        </template>
        <!-- <AppTypography> -->
        Каталог
        <!-- </AppTypography> -->
      </AppButton>

      <AppSearch class="header__search" />
      <Nav />
      <UserMenu
        class="header__user-menu"
        :data="userMenu"
      />
      <!-- <AppButton v-else>Log in</AppButton> -->

    </AppContainer>


  </header>
</template>
vte

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

.container {
  display: flex;
  align-items: center;
  height: 72px;
  gap: 20px;
}

.header__catatlog {
  width: 140px;
}

.header__user-menu {
  width: 217px;
}
</style>
