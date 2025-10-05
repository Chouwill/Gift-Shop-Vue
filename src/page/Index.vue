<script setup>
import { ref, onMounted } from "vue";
import HeroBanner from "../components/IndexPage/HeroBanner.vue";
import CategoryHighlight from "../components/IndexPage/CategoryHighlight.vue";

import CategoryGrid from "../components/IndexPage/CategoryGrid.vue";
import LookCarousel from "../components/IndexPage/LookCarousel.vue";
import { useProductStore } from "../store/Products";

const productStore = useProductStore();

 productStore.fetchProducts();
 console.log(productStore.products);
 

</script>

<template>
  <div>
    <HeroBanner />
    <CategoryHighlight />
    <CategoryGrid :card="productStore.products" />
    <LookCarousel :card="productStore.products" />
    <!-- <h2>首頁</h2> -->
  </div>
</template>
