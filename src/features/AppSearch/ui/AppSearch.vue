<script setup lang="ts">
import AppField from '@/shared/ui/AppField/AppField.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';
import AppTypography from '@/shared/ui/AppTypography/AppTypography.vue';

const onChangeSearch = (value: string) => {
  console.log("value", value);
  return "";
};
</script>

<template>
  <div style="display: flex;">
    <AppField
      :onChange="onChangeSearch"
      :placeholder="'Найти товар'"
    >
      <template #label>
        <AppTypography>
          Text
        </AppTypography>
      </template>
      <template #rightIcon>
        <AppIcon type="search" />
      </template>
      <template #leftIcon>
        <AppIcon type="search" />
      </template>
    </AppField>

  </div>
</template>
