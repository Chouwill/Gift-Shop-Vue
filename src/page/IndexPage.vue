<script setup lang="ts">
import HeroBanner from "../components/IndexPage/HeroBanner.vue";
import CategoryHighlight from "../components/IndexPage/CategoryHighlight.vue";
import CategoryGrid from "../components/IndexPage/CategoryGrid.vue";
import LookCarousel from "../components/IndexPage/LookCarousel.vue";

import { useProductStore } from "../stores/useCart";
const productStore = useProductStore();

productStore.fetchProduct();
console.log(productStore.products);
</script>

<template>
  <div>
    <HeroBanner />
    <CategoryHighlight />
    <CategoryGrid :data="productStore.products" />
    <LookCarousel :data="productStore.products"/>
  </div>
</template>
