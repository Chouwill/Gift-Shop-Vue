<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Cart from "../components/ShoppingCart/Cart.vue";
</script>

<template>
  <div class="container-layout w-full flex justify-center flex-col">
    <Header />
    <div class="flex-1 relative">
      <router-view />

      <Cart
        class="fixed right-10 bottom-5"
      />
    </div>
  </div>
</template>
