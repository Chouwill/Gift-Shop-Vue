<script setup>
import { ref } from "vue";
// import { useProductStore } from "../store/Products";
import { useProductStore } from "../store/Products-opt";
import ShopFilter from "../components/ShoppingMall/ShopFilter.vue";
import ProductList from "../components/ShoppingMall/ProductList.vue";

// const productStore = useProductStore();
const countStore = useProductStore();

const productsLists = ref();

// console.log("商城接收商品：", productStore.products);

async function getProducts() {
  // const products = await productStore.fetchProducts();

  // console.log("取回得商品：", products);
  countStore.fetchProducts();
  const products = await countStore.fetchProducts();

  productsLists.value = countStore.allProducts;
  console.log("測試ＯＰＴ2", productsLists.value);
}

getProducts();
</script>

<template>
  <div class="md:w-[1200px] border mx-auto my-5">
    <ShopFilter />
    <ProductList :productsLists/>
  </div>
</template>
