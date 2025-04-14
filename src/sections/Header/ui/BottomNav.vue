<script lang="ts" setup>
import AppContainer from '@/shared/ui/AppContainer/AppContainer.vue';
import { reactive, ref } from 'vue';
import { usePersonStore } from '@/entities/Person';
import { storeToRefs } from 'pinia';
import { UserMenu } from '@/features/UserMenu';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';
import AppTypography from '@/shared/ui/AppTypography/AppTypography.vue';

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

const navItems = reactive([
  { label: "Изюранное", icon: "favorites", count: 0, link: "/favorites" },
  { label: "Заказы", icon: "orders", count: 0, link: "/favorites" },
  { label: "Корзина", icon: "cart", count: 0, link: "/favorites" },
]);

</script>
<template>
  <div class="bottom-nav">
    <AppContainer class="container">
      <ul class="bottom-nav__list">
        <li class="list__item">
          <AppButton
            size="xs"
            decoration="none"
            color="clear"
            @mouseenter="toggleDropdownIsShow"
          >
            <AppIcon type="menu" />
            <AppTypography
              tagName="span"
              size="xs"
            >
              Каталог
            </AppTypography>
          </AppButton>
        </li>
        <li
          :key="item.link"
          v-for="item in navItems"
          class="list__item"
        >
          <RouterLink
            v-if="item.link"
            :to="item.link"
            class="link__item"
          >
            <AppIcon
              class="nav__link-icon"
              :type="`${item.icon}`"
            />
            <AppTypography
              size="xs"
              tag-name="span"
            >
              {{ item.label }}
            </AppTypography>
            <span
              v-if="item.count > 0"
              class="nav__link-count"
            >
              {{ item.count }}
            </span>
          </RouterLink>
        </li>
        <li class="list__item">
          <UserMenu
            v-if="isAuth"
            :data="userMenu"
            class="bottom-nav__user-menu"
          />
          <AppButton
            v-if="!isAuth"
            @click="() => setIsAuth(true)"
          >
            Войти
            <template v-slot:rightIcon>
              <AppIcon type="login" />
            </template>
          </AppButton>
        </li>
      </ul>

    </AppContainer>
  </div>
</template>
<style scoped>
.bottom-nav {
  display: none;
  position: fixed;
  transform: rotate(180deg);
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  min-height: var(--bottom-nav-height);
  background: var(--main-surface);
  box-shadow: var(--shadow-default-s);
}

.container {
  width: 100%;
}

.bottom-nav__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: rotate(180deg);
}

.link__item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.nav__link-count {
  position: absolute;
  top: -6px;
  right: 0px;
  padding: 1px 6px;
  color: var(--main-on-primary);
  background: var(--main-primary);
  border-radius: 4px;
  font-size: 10px;
}

@media screen and (max-width: 767px) {
  .bottom-nav {
    display: flex;
  }
}
</style>
