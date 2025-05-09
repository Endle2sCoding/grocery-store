vtemm
<script lang="ts" setup>
import { usePersonStore } from '@/entities/Person';
import AppAvatar from '@/shared/ui/AppAvatar/AppAvatar.vue';
import AppButton from '@/shared/ui/AppButton/AppButton.vue';
import AppIcon from '@/shared/ui/AppIcon/AppIcon.vue';
import AppTypography from '@/shared/ui/AppTypography/AppTypography.vue';
import { ref } from 'vue';


interface Props {
  data: {
    avatar: string;
    name: string;
    menu: { label: string, link?: string, action?: string; }[];
  };
}
const { setIsAuth } = usePersonStore();

const { data } = defineProps<Props>();
const { avatar, name } = data;

const isOpen = ref<boolean>(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const onClickItem = (action: string) => {
  console.log("user-menu onClickItem action", action);
  if (action === "logout") {
    setIsAuth(false);
  }
};
</script>
<template>
  <div class="user-menu__wrapper">
    <div :class="['user-menu', `is-open_${isOpen}`]">
      <AppAvatar
        :src=avatar
        class="user-menu__avatar"
        @click="toggleMenu"
      />
      <AppTypography
        class="user-menu__name"
        tagName="span"
        size="s"
        @click="toggleMenu"
      >{{ name }}</AppTypography>
      <AppButton
        class="user-menu__button"
        decoration="none"
        color="clear"
        @click="toggleMenu"
      >
        <AppIcon
          type="chevron"
          class="chevron"
        />
      </AppButton>
      <ul
        v-if="isOpen === true"
        class="user-menu__list"
      >
        <li
          v-for="item in data.menu"
          :key="item.label"
          class="list__item"
          @click="() => {
            if (item.action) {
              onClickItem(item.action);
            }
          }"
        >
          <RouterLink
            class="list__link"
            v-if="item.link"
            :to="item.link"
          >
            <AppTypography
              class="item__text"
              tagName="span"
              size="m"
            >
              {{ item.label }}
            </AppTypography>
          </RouterLink>
          <AppTypography
            class="item__text"
            v-else
            tagName="span"
            size="m"
          >
            {{ item.label }}
          </AppTypography>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.user-menu__wrapper {
  height: 100%;
  z-index: 0;
  width: 217px;
}

.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 10px;
  padding: 18px 8px;
  width: 100%;
  z-index: 1;
}

.user-menu__avatar,
.user-menu__name,
.user-menu__button {
  cursor: pointer;
}

.user-menu__button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-menu__list {
  display: grid;
  gap: 10px;
  grid-column: 1 / 4;
  width: 100%;
}


.is-open_true.user-menu {
  background-color: var(--main-surface);
  box-shadow: var(--shadow-default-s);
  border-radius: 4px;
}


.list__item {
  padding: 8px;
  cursor: pointer;
}

.chevron {
  margin: 0 auto;
}

.is-open_true .chevron {
  transform: rotate(180deg);
}

@media screen and (max-width: 1200px) {
  .user-menu__wrapper {
    width: 150px;
    position: relative;
    width: 56px;
    min-height: 76px;
  }

  .user-menu.is-open_true {
    position: absolute;
    top: 0;
    left: -74px;
    width: 150px;
  }


  .user-menu {
    grid-template-columns: 1fr;

  }


  .user-menu__avatar {
    margin-left: auto;
  }

  .user-menu__name,
  .user-menu__button {
    display: none;
  }


  @media screen and (max-width: 767px) {


    .user-menu__wrapper {
      position: relative;
      width: 56px;
      min-height: 76px;
    }

    .user-menu.is-open_true {
      position: absolute;
      top: -119px;
      left: -74px;
      width: 150px;
      z-index: 1;
    }

    .user-menu {
      transform: rotate(180deg);
    }

    .user-menu__list {
      transform: rotate(180deg);
    }

    .user-menu__avatar {
      transform: rotate(180deg);
    }

    .is-open_true>>>.user-menu__avatar {
      position: absolute;
      top: -57px;
      left: 28px;

    }
  }
}
</style>
