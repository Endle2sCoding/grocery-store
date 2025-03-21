vtemm
<script lang="ts" setup>
import AppAvatar from '@/shared/ui/AppAvatar/AppAvatar.vue';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';
import AppTypography from '@/shared/ui/AppTypography/AppTypography.vue';

interface Props {
  data: {
    avatar: string;
    name: string;
    menu: [];
  };
}
const { data } = defineProps<Props>();
const { avatar, name } = data;
</script>
<template>
  <div class="userMenu">
    <AppAvatar
      :src=avatar
      class="user-menu__avatar"
    />
    <AppTypography
      class="user-menu__name"
      tagName="span"
      size="s"
    >{{ name }}</AppTypography>
    <AppButton
      class="user-manu__button"
      decoration="none"
    >
      <AppIcon type="chevron" />
    </AppButton>
  </div>
</template>
<style scoped>
.userMenu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 10px;
  width: 217px;
  padding: 8px;
}

.user-menu__avatar,
.user-menu__name,
.user-manu__button {
  cursor: pointer;
}
</style>
