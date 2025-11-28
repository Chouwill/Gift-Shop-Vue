<script setup lang="ts">
import HeroBanner from "@/components/IndexPage/HeroBanner.vue";
import CategoryHighlight from "@/components/IndexPage/CategoryHighlight.vue";
import { useProductStore } from "@/stores/useCart";
const productStore = useProductStore();

productStore.fetchProduct();
console.log(productStore.products);
</script>

<template>
  <div>
    <HeroBanner />
    <CategoryHighlight />
  </div>
</template>
