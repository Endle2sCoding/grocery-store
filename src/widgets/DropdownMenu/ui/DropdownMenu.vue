<script lang="ts" setup>
import { useCatalogStore } from '@/entities/Catalog';
import AppContainer from '@/shared/ui/AppContainer/AppContainer.vue';
import AppTypography from '@/shared/ui/AppTypography/AppTypography.vue';

const catalogStore = useCatalogStore();
const { catalogSections } = catalogStore;

</script>

<template>
  <div class="dropdown-menu">
    <AppContainer>
      <ul class="dropdown-meun__list">
        <li
          class="list__item"
          v-for="section in catalogSections"
          :key="section.label"
        >
          <RouterLink :to="section.link">
            <AppTypography
              size="s"
              tag-name="span"
              bold
              class="item__text"
            >
              {{ section.label }}
            </AppTypography>
          </RouterLink>
        </li>
      </ul>
    </AppContainer>
  </div>
</template>
<style scoped>
.dropdown-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--main-surface);
  box-shadow: var(--shadow-default-s);
  animation: 0.7s forwards slideDown;
  opacity: 0;
}

.dropdown-meun__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24px;
  grid-column-gap: 40px;
  padding: 40px 0;

}

.item__text {
  transition: all linear .3s;
}

.item__text:hover {
  color: var(--main-primary);
}

@keyframes slideDown {
  from {
    top: 0;
    opacity: 0;
  }

  to {
    top: 72px;
    opacity: 1;
  }
}
</style>
