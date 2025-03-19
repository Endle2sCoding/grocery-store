<script lang="ts" setup>
interface Props {
  type: "menu" | "search";
}
;
const { type } = defineProps<Props>();
</script>
<template>
  <svg
    v-if="type === 'menu'"
    width="24.000000"
    height="24.000000"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <desc>
      Created with Pixso.
    </desc>
    <defs />
    <rect
      id="feather-icon / menu"
      rx="0.000000"
      width="23.000000"
      height="23.000000"
      transform="translate(0.500000 0.500000)"
      fill="#FFFFFF"
      fill-opacity="0"
    />
    <path
      id="Shape (Stroke)"
      d="M2.5 12C2.5 11.72 2.72 11.5 3 11.5L21 11.5C21.27 11.5 21.5 11.72 21.5 12C21.5 12.27 21.27 12.5 21 12.5L3 12.5C2.72 12.5 2.5 12.27 2.5 12Z"
      fill="#FFFFFF"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Shape (Stroke)"
      d="M2.5 6C2.5 5.72 2.72 5.5 3 5.5L21 5.5C21.27 5.5 21.5 5.72 21.5 6C21.5 6.27 21.27 6.5 21 6.5L3 6.5C2.72 6.5 2.5 6.27 2.5 6Z"
      fill="#FFFFFF"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Shape (Stroke)"
      d="M2.5 18C2.5 17.72 2.72 17.5 3 17.5L21 17.5C21.27 17.5 21.5 17.72 21.5 18C21.5 18.27 21.27 18.5 21 18.5L3 18.5C2.72 18.5 2.5 18.27 2.5 18Z"
      fill="#FFFFFF"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
  </svg>
  <svg
    v-if="type === 'search'"
    width="24.000000"
    height="24.000000"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <desc>
      Created with Pixso.
    </desc>
    <defs />
    <rect
      id="feather-icon / search"
      rx="0.000000"
      width="23.000000"
      height="23.000000"
      transform="translate(0.500000 0.500000)"
      fill="#FFFFFF"
      fill-opacity="0"
    />
    <path
      id="Oval (Stroke)"
      d="M2.5 10.5C2.5 6.08 6.08 2.5 10.5 2.5C14.91 2.5 18.5 6.08 18.5 10.5C18.5 14.91 14.91 18.5 10.5 18.5C6.08 18.5 2.5 14.91 2.5 10.5ZM10.5 3.5C6.63 3.5 3.5 6.63 3.5 10.5C3.5 14.36 6.63 17.5 10.5 17.5C14.36 17.5 17.5 14.36 17.5 10.5C17.5 6.63 14.36 3.5 10.5 3.5Z"
      fill="#414141"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Shape (Stroke)"
      d="M15.44 15.44C15.64 15.25 15.95 15.25 16.15 15.44L21.35 20.64C21.54 20.84 21.54 21.15 21.35 21.35C21.15 21.54 20.84 21.54 20.64 21.35L15.44 16.15C15.25 15.95 15.25 15.64 15.44 15.44Z"
      fill="#414141"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
  </svg>
</template>
<style scoped></style>
