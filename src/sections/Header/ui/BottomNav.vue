<script lang="ts" setup>
import AppContainer from '@/shared/ui/AppContainer/AppContainer.vue';
import { reactive, ref } from 'vue';
import { usePersonStore } from '@/entities/Person';
import { storeToRefs } from 'pinia';
import { UserMenu } from '@/features/UserMenu';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';
import { Nav } from '@/widgets/Nav';

const personStore = usePersonStore();
const { person, isAuth } = storeToRefs(personStore);
const { setIsAuth } = personStore;

const userMenu = reactive({
  avatar: person.value.avatar,
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
  <div class="bottomNav">
    <AppContainer class="container">
      <AppButton
        decoration="none"
        @mouseenter="toggleDropdownIsShow"
      >
        <template v-slot:leftIcon>
          <AppIcon type="menu" />
        </template>
      </AppButton>

      <Nav />
      <UserMenu
        v-if="isAuth"
        :data="userMenu"
        class=""
      />
      <AppButton
        v-if="!isAuth"
        class=""
        @click="() => setIsAuth(true)"
      >
        Войти
        <template v-slot:rightIcon>
          <AppIcon type="login" />
        </template>
      </AppButton>

    </AppContainer>
  </div>
</template>
<style scoped>
.bottomNav {
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
  display: grid;
  align-items: center;
  min-height: var(--bottom-nav-height);

  background: var(--main-surface);
  box-shadow: var(--shadow-default-s);
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
