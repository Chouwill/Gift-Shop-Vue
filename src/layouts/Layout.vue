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
      <Transition name="page" mode="out-in">
        <router-view :list="cartList" />
      </Transition>

      <Cart :list="cartList" class="fixed right-10 bottom-5" />
    </div>
  </div>
</template>

<style scoped>
/* 頁面路由切換淡入淡出效果 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
