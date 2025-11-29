<script setup lang="ts">
import SearchFilter from "@/components/ShoppingMall/SearchFilter.vue";
import ProductList from "@/components/ShoppingMall/ProductList.vue";

import { useProductStore } from "@/stores/useCart";

const productStore = useProductStore();
productStore.fetchProduct();
console.log(productStore.products);
</script>

<template>
  <div class="md:w-[1200px] border mx-auto my-5">
    <SearchFilter />
    <ProductList :data="productStore.products"/>
  </div>
</template>
