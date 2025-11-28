<script setup lang="ts">
import { ref, computed } from "vue";

// const props = defineProps(["data"]);
const props = defineProps({
  data: { type: Array, required: true },
});

console.log(props);
const gridCard = computed(() => {
  return Array.isArray(props.data)
    ? props.data
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
    : [];
});
</script>

<template>
  <div class="w-full flex flex-col items-center gap-8 py-12">
    <div
      class="w-full max-w-5xl flex flex-col md:flex-row md:odd:flex-row-reverse border border-slate-200 rounded-lg overflow-hidden bg-white hover:border-slate-300 transition-colors"
      v-for="item in gridCard"
      :key="item.id"
    >
      <!-- 商品資訊區 -->
      <div
        class="md:w-1/2 flex flex-col justify-center items-center p-8 bg-slate-50"
      >
        <h2 class="text-2xl font-semibold text-slate-900 mb-3 text-center">
          {{ item.name }}
        </h2>
        <p class="text-3xl font-bold text-slate-800">NT$ {{ item.price }}</p>
      </div>

      <!-- 商品圖片區 -->
      <div class="md:w-1/2 h-[400px] bg-slate-100">
        <img
          class="object-cover w-full h-full"
          :src="item.image_url"
          :alt="item.name"
        />
      </div>
    </div>
  </div>
</template>
