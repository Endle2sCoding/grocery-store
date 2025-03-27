<script lang="ts" setup>
interface Props {
  type: "menu" | "search" | "orders" | "favorites" | "cart" | "chevron" | string;
}
;
const { type } = defineProps<Props>();
</script>
<template>
  <div style="{{paddingTop:'5px', backgound:'red'}}">
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
        d="M12.7 4.25C13.83 3.13 15.35 2.49 16.94 2.49C18.53 2.49 20.06 3.13 21.19 4.25C22.31 5.38 22.95 6.9 22.95 8.5C22.95 10.09 22.31 11.61 21.19 12.74L12.35 21.58C12.15 21.77 11.83 21.77 11.64 21.58L2.8 12.74C0.46 10.39 0.46 6.6 2.8 4.25C5.14 1.91 8.94 1.91 11.29 4.25L11.99 4.96L12.7 4.25ZM16.94 3.49C15.62 3.49 14.34 4.02 13.41 4.96L12.35 6.02C12.25 6.11 12.13 6.16 11.99 6.16C11.86 6.16 11.73 6.11 11.64 6.02L10.58 4.96C8.63 3.01 5.46 3.01 3.51 4.96C1.55 6.91 1.55 10.08 3.51 12.03L11.99 20.52L20.48 12.03C21.42 11.09 21.95 9.82 21.95 8.5C21.95 7.17 21.42 5.9 20.48 4.96C19.54 4.02 18.27 3.49 16.94 3.49Z"
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


    <svg
      v-if="type === 'chevron'"
      width="13.000000"
      height="7.000000"
      viewBox="0 0 13 7"
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
        d="M0.14 0.14C0.34 -0.05 0.65 -0.05 0.85 0.14L6.5 5.79L12.14 0.14C12.34 -0.05 12.65 -0.05 12.85 0.14C13.04 0.34 13.04 0.65 12.85 0.85L6.85 6.85C6.65 7.04 6.34 7.04 6.14 6.85L0.14 0.85C-0.05 0.65 -0.05 0.34 0.14 0.14Z"
        fill="#414141"
        fill-opacity="1.000000"
        fill-rule="evenodd"
      />
    </svg>


    <svg  v-if="type === 'login'" width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<rect id="feather-icon / log-in" rx="0.000000" width="23.000000" height="23.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<path id="Shape (Stroke)" d="M13.5 2C13.5 1.72 13.72 1.5 14 1.5L19 1.5C20.37 1.5 21.5 2.61 21.5 4L21.5 20C21.5 21.38 20.37 22.5 19 22.5L14 22.5C13.72 22.5 13.5 22.27 13.5 22C13.5 21.72 13.72 21.5 14 21.5L19 21.5C19.82 21.5 20.5 20.82 20.5 20L20.5 4C20.5 3.17 19.82 2.5 19 2.5L14 2.5C13.72 2.5 13.5 2.27 13.5 2Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/>
	<path id="Shape (Stroke)" d="M10.64 7.64C10.83 7.45 11.16 7.45 11.35 7.64L15.35 11.64C15.54 11.84 15.54 12.15 15.35 12.35L11.35 16.35C11.16 16.54 10.83 16.54 10.64 16.35C10.45 16.15 10.45 15.84 10.64 15.64L14.29 12L10.64 8.35C10.45 8.15 10.45 7.84 10.64 7.64Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/>
	<path id="Shape (Stroke)" d="M2.5 12C2.5 11.72 2.72 11.5 3 11.5L15 11.5C15.27 11.5 15.5 11.72 15.5 12C15.5 12.27 15.27 12.5 15 12.5L3 12.5C2.72 12.5 2.5 12.27 2.5 12Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd"/>
</svg>

  </div>

</template>
<style scoped></style>
