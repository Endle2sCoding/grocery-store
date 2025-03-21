<script lang="ts" setup>
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';
import AppTypography from '@/shared/ui/AppTypography/AppTypography.vue';
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const navItems = reactive([
  { label: "Изюранное", icon: "favorites", count: 0, link: "/favorites" },
  { label: "Заказы", icon: "orders", count: 0, link: "/favorites" },
  { label: "Корзина", icon: "cart", count: 0, link: "/favorites" },
]);
</script>
<template>
  <div class="nav">
    <ul class="nav__list">
      <li
        :key="item.link"
        v-for="item in navItems"
      >
        <RouterLink
          :to="item.link "
          class="nav__link"
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
    </ul>
  </div>
</template>
<style scoped>
.nav__list {
  display: flex;
  gap: 24px;
  align-items: center;
}

.nav__link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--main-on-surface);
}

.nav__link-icon {
  width: 24px;
  height: 24px;
}

.nav__link-count {
  position: absolute;
  top: -6px;
  right: 6px;
  padding: 1px 6px;
  color: var(--main-on-primary);
  background: var(--main-primary);
  border-radius: 4px;
  font-size: 10px;
}
</style>
