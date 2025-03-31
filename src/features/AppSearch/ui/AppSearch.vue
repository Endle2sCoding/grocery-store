<script setup lang="ts">
import AppField from '@/shared/ui/AppField/AppField.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';

const onChangeSearch = (value: string) => {
  console.log("value", value);
};
const onSearch = () => {
  console.log("Send to server");
};
</script>

<template>
  <AppField
    :onChange="onChangeSearch"
    :onSubmit="onSearch"
    :placeholder="'Найти товар'"
    class="input__serach"
  >
    <template #rightIcon>
      <AppIcon type="search" />
    </template>
  </AppField>


  <!-- <AppField
    size="l"
    :onChange="onChangeSearch"
    :onSubmit="onSearch"
    :placeholder="'Найти товар'"
    class="input__serach"
  >
    <template #rightIcon>
      <AppIcon type="search" />
    </template>
    <template #leftIcon>
      <AppIcon type="search" />
    </template>
  </AppField> -->
</template>

<style scoped>
.input__serach {
  width: 374px;
}
</style>
