<script lang="ts" setup>
import { useSlots } from 'vue';
import AppTypography from '../AppTypography/AppTypography.vue';

interface Props {
  color?: "primary" | "secondary" | "grayscale" | "error" | "clear";
  decoration?: "default" | "outlined" | "none";
  size?: "l" | "m" | "s";
  disabled?: boolean;
}
const slots = useSlots();
const {
  color = "primary",
  decoration = "primary",
  size = "m",
  disabled = false,
} = defineProps<Props>();

</script>

<template>
  <button
    :class="[
      'app-button',
      `size_${size}`,
      `decoration_${decoration}`,
      `color_${color}`
    ]"
    :disabled="disabled"
  >
    <slot
      v-if="slots.leftIcon"
      name="leftIcon"
    ></slot>
    <AppTypography
      v-if="slots.default"
      :class="['button_text', `color_${color}`]"
      size="s"
      tagName="p"
    >
      <slot></slot>
    </AppTypography>
    <slot
      v-if="slots.rightIcon"
      name="rightIcon"
    ></slot>
  </button>
</template>

<style scoped>
.app-button {
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

.app-button.size_s {
  padding: 8px;
  gap: 8px;
}

.app-button.size_m {
  padding: 8px;
  gap: 8px;
}

.app-button.size_l {
  padding: 16px;
  gap: 8px;
}

.color_primary {
  background: var(--main-primary);
  color: var(--main-on-secondary);
}

.color_secondary {
  background: var(--main-secondary);
  color: var(--main-on-secondary)
}

.color_clear {
  background: none;
}

.app-button.decoration_none {
  background-color: unset;
  border-color: unset;
}

.app-button.decoration_none:deep(path) {
  fill: var(--main-on-surface);

}
</style>
