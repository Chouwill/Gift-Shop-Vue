<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Cart from "../components/ShoppingCart/Cart.vue";
import { ListFormat } from "typescript";

const cartList = ref([]);
</script>

<template>
  <div class="container-layout w-full flex justify-center flex-col">
    <Header />
    <div class="flex-1 relative">
      <router-view  :list="cartList"/>

      <Cart :list="cartList" class="fixed right-10 bottom-5" />
    </div>
  </div>
</template>
