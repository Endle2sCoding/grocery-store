<script lang="ts" setup>
import { AppSearch } from '@/features/AppSearch';
import { UserMenu } from '@/features/UserMenu';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import AppContainer from '@/shared/ui/AppContainer/AppContainer.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';
import AppLogo from '@/shared/ui/AppLogo/AppLogo.vue';
import { Nav } from '@/widgets/Nav';
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import AvatarPng from "@/shared/assets/images/avatar.png";


const userMenu = reactive({
  avatar: AvatarPng,
  name: "Алексей",
  menu: []
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

      <div class="header__catatlog">
        <AppButton
          color="secondary"
          leftIcon
        >
          <template v-slot:leftIcon>
            <AppIcon type="menu" />
          </template>
          Каталог
        </AppButton>
      </div>

      <div class="header__search">
        <AppSearch />
      </div>

      <Nav />

      <UserMenu :data="userMenu" />

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
  gap: 40px;
}

.header__catatlog {
  width: 140px;
}
</style>
