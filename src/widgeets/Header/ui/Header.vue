<script lang="ts" setup>
import { AppSearch } from '@/features/AppSearch';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import AppContainer from '@/shared/ui/AppContainer/AppContainer.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';
import AppLogo from '@/shared/ui/AppLogo/AppLogo.vue';
import { RouterLink } from 'vue-router';


</script>
<template>
  <header class="header">
    <AppContainer class="container">
      <AppLogo
        orientation="horizontal"
        colorful
        withText
        bgColor="white"
      />
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
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>

    </AppContainer>


  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
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
