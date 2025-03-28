import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import type { CatalogSectionType } from "./catalogTypes";

export const useCatalogStore = defineStore("catalog", () => {
  const catatlog = reactive<{ sections: CatalogSectionType[]; }>(
    {
      sections: [
        { label: "Молоко, сыр, яйцо", link: "/" },
        { label: "Напитки", link: "/" },
        { label: "Бакалея", link: "/" },
        { label: "Непродовольственные товары", link: "/" },
        { label: "Хлеб", link: "/" },
        { label: "Кондитерские изделия", link: "/" },
        { label: "Здоровое питание", link: "/" },
        { label: "Детское питание", link: "/" },
        { label: "Фрукты и овощи", link: "/" },
        { label: "Чай, кофе", link: "/" },
        { label: "Зоотовары", link: "/" },
        { label: "Мясо, птица, колбаса", link: "/" },
        { label: "Замороженные продукты", link: "/" },
      ]
    }
  );

  const catalogSections = computed(() => catatlog.sections);
  const setCatalogSections = (sections: CatalogSectionType[]) => catatlog.sections = sections;

  return { catalogSections, setCatalogSections };
});
