<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const props = defineProps({
  data: { type: Array, required: true },
});
const page = ref(1);

const itemsGroup = 7;

function autoPlayCarousel() {
  //   setInterval(() => {
  //     page.value++;
  //   }, 2000);
}

function nextPage() {
  //   autoPlayCarousel();
  setInterval(() => {
    page.value++;
  }, 2000);
}
function returnPage() {
  page.value--;
}

const computedItems = computed(() => {
  return Array.isArray(props.data)
    ? props.data.slice(page.value - 1, page.value * itemsGroup)
    : [];
  //   return cardItems.value.slice(page - 1, page * itemsGroup);
});

nextPage();
</script>

<template>
  <div class="w-full py-12 bg-slate-50">
    <!-- 標題區 -->
    <div class="flex justify-center items-center gap-6 mb-8">
      <h2 class="text-4xl font-bold text-slate-900">Look</h2>
      <h2 class="text-4xl font-bold text-slate-800">PPC</h2>

      <!-- 控制按鈕 -->
      <div class="flex gap-2 ml-4">
        <button
          @click="returnPage"
          class="w-10 h-10 bg-slate-200 hover:bg-amber-100 rounded flex items-center justify-center transition-colors"
        >
          <!-- <i class="fa-solid fa-chevron-left text-slate-700"></i> -->
          <img class="w-10 h-10" src="../../assset/icon/angle-left-solid-full.svg" alt="">

        </button>
        <button
          @click="nextPage"
          class="w-10 h-10 bg-slate-200 hover:bg-amber-100 rounded flex items-center justify-center transition-colors"
        >
          <!-- <i class="fa-solid fa-chevron-right text-slate-700"></i> -->
           <img class="w-10 h-10" src="../../assset/icon/angle-right-solid-full.svg" alt="">
        </button>
      </div>
    </div>

    <!-- 輪播區 -->
    <div class="carousel flex gap-4 w-full overflow-x-hidden px-4">
      <div
        class="w-[250px] h-[250px] flex-shrink-0 bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors"
        v-for="item in computedItems"
        :key="item.id"
      >
        <img
          class="w-full h-full object-cover"
          :src="item.image_url"
          :alt="item.name"
        />
      </div>
    </div>
  </div>
</template>
