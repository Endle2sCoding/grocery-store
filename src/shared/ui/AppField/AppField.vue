<script lang="ts" setup>
import { useSlots } from 'vue';

interface Props {
  disabled?: boolean;
  size?: "l" | "m";
  placeholder?: string;

  onChange: (value: string) => void;
  onSubmit: () => void;
}
// interface Emits {
//   onChange: (value: string) => void;
// }
// const { onChange } = defineEmits<Emits>();


const { disabled = false, size = "m", placeholder, onChange } = defineProps<Props>();
const slots = useSlots();

</script>
<template>
  <div :class="[
    'app-field',
    `disabled_${disabled}`,
    `size_${size}`,
    `left-icon_${Boolean(slots.leftIcon)}`,
    `right-icon_${Boolean(slots.rightIcon)}`
  ]">
    <slot
      v-if="slots.label"
      class="app-field__label"
      name="label"
    ></slot>
    <div class="app-field__container">
      <div
        v-if="slots.leftIcon"
        class="app-field__left-icon"
        @click="onSubmit"
      >
        <slot name="leftIcon"></slot>
      </div>
      <input
        @input="(e: Event) => onChange?.((e.target as HTMLInputElement).value)"
        @keyup.enter="onSubmit"
        :disabled="disabled"
        :class="['app-field__input', `size_${size}`]"
        :placeholder="placeholder"
        type="text"
      />
      <div
        v-if="slots.rightIcon"
        class="app-field__right-icon"
        @click="onSubmit"
      >
        <slot name="rightIcon"></slot>
      </div>
    </div>
  </div>

</template>
<style scoped>
.app-field:deep(.typography) {
  color: var(--grayscale-hard);
}

.app-field__container {
  position: relative;
}

.app-field__left-icon,
.app-field__right-icon {
  position: absolute;
  cursor: pointer;
}


.app-field__input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--grayscale-light);
  background: var(--main-surface);
  color: var(--main-on-surface);
}

.app-field__input:focus {
  border: 1px solid var(--main-secondary);
  caret-color: var(--main-secondary);
  box-shadow: var(--shadow-secondary-m);
  transition: all ease-in-out .3s;
}

.app-field__input ::placeholder {
  color: var(--grayscale-hard);
}

.app-field__input:disabled {
  border: 1px solid var(--grayscale-light);
  background: var(--grayscale-light);
}

.app-field.size_m .app-field__input {
  padding: 8px 16px;
  font-size: 16px;
}

.app-field.size_l .app-field__input {
  padding: 12px 16px;
  font-size: 24px;
}

.app-field.left-icon_true.size_m .app-field__left-icon {
  top: 8px;
  left: 8px;
}

.app-field.left-icon_true.size_m .app-field__input {
  padding-left: 40px;
}

.app-field.right-icon_true.size_m .app-field__right-icon {
  top: 8px;
  right: 8px;
}

.app-field.right-icon_true.size_m .app-field__input {
  padding-right: 40px;
}

.app-field.left-icon_true.size_l .app-field__left-icon {
  top: 8px;
  left: 8px;
  padding: 6px;
}

.app-field.left-icon_true.size_l .app-field__input {
  padding-left: 56px;
}

.app-field.right-icon_true.size_l .app-field__right-icon {
  top: 8px;
  right: 8px;
  padding: 6px;
}

.app-field.right-icon_true.size_l .app-field__input {
  padding-right: 56px;
}
</style>
