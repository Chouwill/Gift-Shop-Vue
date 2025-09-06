<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="bg-gray-50 min-h-screen flex items-center justify-center">
    <div class="p-6 max-w-xl">
      <!-- 直接用 Tailwind utility -->
      <h2
        class="text-2xl md:text-4xl font-extrabold text-indigo-600 tracking-tight mb-4"
      >
        這是直接套用的 h2（text-2xl → md:text-4xl）
      </h2>

      <!-- 範例：用更多樣式 -->
      <h2
        class="text-xl sm:text-2xl font-semibold uppercase text-emerald-700 bg-emerald-100 inline-block px-3 py-1 rounded-lg shadow-sm"
      >
        另一個樣式範例（響應式 + 背景）
      </h2>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
