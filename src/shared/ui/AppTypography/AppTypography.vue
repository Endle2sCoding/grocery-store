<script lang="ts" setup>
interface Props {
  tagName?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5";
  bold?: boolean;
  size?: "xs" | "s" | "m" | "l" | "xl";
}
const { tagName = "p" } = defineProps<Props>()

</script>

<template>
  <component
    :is="tagName"
    :class="['typography', size ? `size_${size}` : '', bold ? 'bold' : '', `tag_${tagName}`]"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
.typography {
  line-height: 150%;
  font-style: normal;
}

.bold {
  font-weight: 700;
}

.typography.size_xs {
  font-size: 12px;
}

.typography.size_s {
  font-size: 16px;
}

.typography.size_m {
  font-size: 18px;
}

.typography.size_l {
  font-size: 24px;
}

.typography.size_xl {
  font-size: 36px;
}

.tag_h5 {
  font-size: 18px;
  font-weight: 700;
}

.tag_h4 {
  font-size: 24px;
  font-weight: 700;

}

.tag_h3 {
  font-size: 36px;
  font-weight: 700;

}

.tag_h2 {
  font-size: 48px;
  font-weight: 700;

}

.tag_h1 {
  font-size: 64px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .typography.size_xs {
    font-size: 8px;
  }

  .typography.size_s {
    font-size: 12px;
  }

  .typography.size_m {
    font-size: 14px;
  }

  .typography.size_l {
    font-size: 20px;
  }

  .typography.size_xl {
    font-size: 32px;
  }

  .tag_h5 {
    font-size: 16px;
  }

  .tag_h4 {
    font-size: 20px;

  }

  .tag_h3 {
    font-size: 24px;

  }

  .tag_h2 {
    font-size: 36px;

  }

  .tag_h1 {
    font-size: 48px;
  }
}
</style>
