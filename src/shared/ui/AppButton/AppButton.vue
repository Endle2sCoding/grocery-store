<script lang="ts" setup>
import AppTypography from '../AppTypography/AppTypography.vue';

interface Props {
  color?: "primary" | "secondary" | "grayscale" | "error";
  decoration?: "default" | "outlined" | "none";
  size?: "L" | "M" | "S";
  disabled?: boolean;
}
const {
  color = "primary",
  decoration = "clear",
  size = "M",
  disabled = false,
} = defineProps<Props>();

</script>

<template>
  <button
    :class="[
      'button',
      `size_${size}`,
      `decoration_${decoration}`,
      `color_${color}`
    ]"
    :disabled="disabled"
  >
    <slot name="leftIcon"></slot>
    <AppTypography
      class="button_text"
      size="s"
      tagName="p"
    >
      <slot></slot>
    </AppTypography>
    <slot name="rightIcon"></slot>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 100%;
}

.button_text {
  width: 100%;
  text-align: center;
}

.size_S {
  padding: 8px;
  gap: 8px;
}

.size_M {
  padding: 8px;
  gap: 8px;
}

.size_L {
  padding: 16px;
  gap: 8px;
}

.color_secondary {
  background: var(--main-secondary);
  color: var(--main-on-secondary)
}
</style>
