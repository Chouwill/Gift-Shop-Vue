<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <div class="container-layout w-full flex justify-center flex-col">
    <Header />
    <div class="flex-1 relative mt-17">
      <Transition name="page" mode="out-in">
        <router-view />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
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
