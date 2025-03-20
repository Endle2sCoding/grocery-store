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
    'field',
    `disabled_${disabled}`,
    `size_${size}`,
    `left-icon_${Boolean(slots.leftIcon)}`,
    `right-icon_${Boolean(slots.rightIcon)}`
  ]">
    <slot
      v-if="slots.label"
      class="field__label"
      name="label"
    ></slot>
    <div class="field__container">
      <div
        v-if="slots.leftIcon"
        class="field__left-icon"
        @click="onSubmit"
      >
        <slot name="leftIcon"></slot>
      </div>
      <input
        @input="(e: Event) => onChange?.((e.target as HTMLInputElement).value)"
        @keyup.enter="onSubmit"
        :disabled="disabled"
        :class="['field__input', `size_${size}`]"
        :placeholder="placeholder"
        type="text"
      />
      <div
        v-if="slots.rightIcon"
        class="field__right-icon"
        @click="onSubmit"
      >
        <slot name="rightIcon"></slot>
      </div>
    </div>
  </div>

</template>
<style scoped>
.field:deep(.typography) {
  color: var(--grayscale-hard);
}

.field__container {
  position: relative;
}

.field__left-icon,
.field__right-icon {
  position: absolute;
  cursor: pointer;
}


.field__input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--grayscale-light);
  background: var(--main-surface);
  color: var(--main-on-surface);
}

.field__input:focus {
  border: 1px solid var(--main-secondary);
  caret-color: var(--main-secondary);
  box-shadow: var(--shadow-secondary-m);
  transition: all ease-in-out .3s;
}

.field__input ::placeholder {
  color: var(--grayscale-hard);
}

.field__input:disabled {
  border: 1px solid var(--grayscale-light);
  background: var(--grayscale-light);
}

.field.size_m .field__input {
  padding: 8px 16px;
  font-size: 16px;
}

.field.size_l .field__input {
  padding: 12px 16px;
  font-size: 24px;
}

.field.left-icon_true.size_m .field__left-icon {
  top: 8px;
  left: 8px;
}

.field.left-icon_true.size_m .field__input {
  padding-left: 40px;
}

.field.right-icon_true.size_m .field__right-icon {
  top: 8px;
  right: 8px;
}

.field.right-icon_true.size_m .field__input {
  padding-right: 40px;
}

.field.left-icon_true.size_l .field__left-icon {
  top: 8px;
  left: 8px;
  padding: 6px;
}

.field.left-icon_true.size_l .field__input {
  padding-left: 56px;
}

.field.right-icon_true.size_l .field__right-icon {
  top: 8px;
  right: 8px;
  padding: 6px;
}

.field.right-icon_true.size_l .field__input {
  padding-right: 56px;
}
</style>
