<script lang="ts" setup>
interface Props {
  type: "menu" | "search" | "orders" | "favorites" | "cart" | string;
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
  <svg
    v-if="type === 'orders'"
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
      id="Frame 211"
      rx="0.000000"
      width="23.000000"
      height="23.000000"
      transform="translate(0.500000 0.500000)"
      fill="#FFFFFF"
      fill-opacity="0"
    />
    <path
      id="Shape (Stroke)"
      d="M11.33 1.89L3.33 5.89L3.33 5.89C2.82 6.15 2.5 6.67 2.5 7.23L2.5 16.76C2.49 17.33 2.81 17.85 3.32 18.11L11.32 22.11C11.74 22.32 12.24 22.32 12.66 22.11L20.66 18.11L20.66 18.11C21.17 17.85 21.49 17.33 21.5 16.76L21.5 7.24C21.49 6.67 21.17 6.15 20.66 5.89L20.66 5.89L12.66 1.89C12.24 1.68 11.75 1.68 11.33 1.89ZM10.88 1C11.58 0.65 12.41 0.65 13.11 1L13.11 1L21.11 5C21.96 5.42 22.49 6.29 22.5 7.23L22.5 16.77C22.49 17.71 21.96 18.58 21.11 19L13.11 23C12.4 23.35 11.58 23.35 10.87 23L2.87 19L2.87 19C2.02 18.57 1.49 17.7 1.5 16.75L1.5 7.23C1.5 6.29 2.03 5.42 2.88 5L10.88 1L10.88 1Z"
      fill="#414141"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Shape (Stroke)"
      d="M1.87 5.93C1.99 5.68 2.29 5.58 2.54 5.71L11.99 10.44L21.45 5.71C21.7 5.58 22 5.68 22.12 5.93C22.25 6.18 22.15 6.48 21.9 6.6L12.22 11.44C12.08 11.51 11.91 11.51 11.77 11.44L2.09 6.6C1.84 6.48 1.74 6.18 1.87 5.93Z"
      fill="#414141"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Shape (Stroke)"
      d="M12 10.5C12.27 10.5 12.5 10.72 12.5 11L12.5 22.76C12.5 23.03 12.27 23.26 12 23.26C11.72 23.26 11.5 23.03 11.5 22.76L11.5 11C11.5 10.72 11.72 10.5 12 10.5Z"
      fill="#414141"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Shape (Stroke)"
      d="M6.55 3.27C6.67 3.02 6.97 2.92 7.22 3.05L17.22 8.05C17.47 8.17 17.57 8.47 17.44 8.72C17.32 8.97 17.02 9.07 16.77 8.94L6.77 3.94C6.52 3.82 6.42 3.52 6.55 3.27Z"
      fill="#414141"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
  </svg>
  <svg
    v-if="type === 'favorites'"
    width="
    21.903076"
    height="19.231812"
    viewBox="0 0 21.9031 19.2318"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <desc>
      Created with Pixso.
    </desc>
    <defs />
    <path
      id="Shape (Stroke)"
      d="M11.65 1.75C12.78 0.63 14.3 0 15.9 0C17.49 0 19.01 0.63 20.14 1.75C21.27 2.88 21.9 4.41 21.9 6C21.9 7.59 21.27 9.12 20.14 10.24L11.3 19.08C11.1 19.28 10.79 19.28 10.59 19.08L1.75 10.24C-0.59 7.9 -0.59 4.1 1.75 1.75C4.1 -0.59 7.9 -0.59 10.24 1.75L10.95 2.46L11.65 1.75ZM15.9 1C14.57 1 13.3 1.52 12.36 2.46L11.3 3.52C11.21 3.61 11.08 3.67 10.95 3.67C10.81 3.67 10.69 3.61 10.59 3.52L9.53 2.46C7.58 0.51 4.41 0.51 2.46 2.46C0.51 4.41 0.51 7.58 2.46 9.53L10.95 18.02L19.43 9.53C20.37 8.6 20.9 7.32 20.9 6C20.9 4.67 20.37 3.4 19.43 2.46C18.5 1.52 17.22 1 15.9 1Z"
      fill="#414141"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
  </svg>
  <svg
    v-if="type === 'cart'"
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
      id="feather-icon / shopping-cart"
      rx="0.000000"
      width="23.000000"
      height="23.000000"
      transform="translate(0.500000 0.500000)"
      fill="#FFFFFF"
      fill-opacity="0"
    />
    <path
      id="Oval (Stroke)"
      d="M5.5 21C5.5 19.61 6.61 18.5 8 18.5C9.38 18.5 10.5 19.61 10.5 21C10.5 22.38 9.38 23.5 8 23.5C6.61 23.5 5.5 22.38 5.5 21ZM8 19.5C7.17 19.5 6.5 20.17 6.5 21C6.5 21.82 7.17 22.5 8 22.5C8.82 22.5 9.5 21.82 9.5 21C9.5 20.17 8.82 19.5 8 19.5Z"
      fill="#414141"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Oval (Stroke)"
      d="M17.5 21C17.5 19.61 18.61 18.5 20 18.5C21.38 18.5 22.5 19.61 22.5 21C22.5 22.38 21.38 23.5 20 23.5C18.61 23.5 17.5 22.38 17.5 21ZM20 19.5C19.17 19.5 18.5 20.17 18.5 21C18.5 21.82 19.17 22.5 20 22.5C20.82 22.5 21.5 21.82 21.5 21C21.5 20.17 20.82 19.5 20 19.5Z"
      fill="#414141"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
    <path
      id="Union"
      d="M1 0.5C0.72 0.5 0.5 0.72 0.5 1C0.5 1.27 0.72 1.5 1 1.5L4.58 1.5C5.33 5.79 6.1 10.06 6.74 14.37C6.93 15.59 7.98 16.5 9.22 16.5L19.35 16.5C20.55 16.5 21.57 15.65 21.81 14.49L23.25 7.29C23.43 6.36 22.72 5.5 21.77 5.5L7.16 5.5C6.85 5.5 6.57 5.58 6.34 5.74L5.49 0.91C5.45 0.67 5.24 0.5 5 0.5L1 0.5ZM6.66 7.07C6.62 6.77 6.85 6.5 7.16 6.5L21.77 6.5C22.09 6.5 22.33 6.78 22.26 7.09L20.83 14.29C20.69 14.99 20.07 15.5 19.35 15.5L9.22 15.5C8.47 15.5 7.84 14.95 7.73 14.22L6.66 7.07Z"
      fill="#414141"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
  </svg>

</template>
<style scoped></style>
