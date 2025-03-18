<script lang="ts" setup>
import AppTypography from '../AppTypography/AppTypography.vue';

interface Props {
  disabled?: boolean;
  size?: "l" | "m";
  placeholder?: string;
}

const { disabled, size = "m", placeholder = "Type text" } = defineProps<Props>()

</script>
<template>
  <div class="field">
    <slot name="label"></slot>
    <div class="field__container">
      <slot name="leftIcon"></slot>
      <input
        :disabled="disabled"
        :class="['field__input', 'size_${ size }']"
        :placeholder="placeholder"
        type="text"
      />
      <slot name="rightIcon"></slot>
    </div>
  </div>

</template>
<style scoped>
.field {
  display: block;
}
</style>
