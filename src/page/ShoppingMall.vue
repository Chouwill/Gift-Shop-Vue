<script setup>
import { ref, watchEffect } from "vue";
// import { useProductStore } from "../store/Products";
import { useProductStore } from "../store/Products";
import ShopFilter from "../components/ShoppingMall/ShopFilter.vue";
import ProductList from "../components/ShoppingMall/ProductList.vue";

const productStore = useProductStore();

defineProps(["list"]);

productStore.fetchProducts();
watchEffect(() => {
  console.log("商城", productStore.products);
});
</script>

<template>
  <div class="md:w-[1200px] border mx-auto my-5">
    <ShopFilter />
    <ProductList :card="productStore.products ?? []" :shoppingList="list" />
  </div>
</template>
