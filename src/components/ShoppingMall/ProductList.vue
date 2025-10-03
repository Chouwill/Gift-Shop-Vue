<script setup>
import { ref } from "vue";
import { FwbButton } from "flowbite-vue";

const propsItems = defineProps({
  productsLists: Array,
});
</script>

<template>
  <div class="list-box w-[100%] border flex flex-col">
    <div
      class="w-full border flex flex-wrap justify-center items-center gap-4 py-5"
    >
      <div
        class="flex flex-col gap-1 bg-white-500 w-[200px] rounded-sm border border-gray-200 shadow-lg hover:scale-105"
        v-for="item in propsItems.productsLists"
        :key="item.id"
      >
        <img
          class="w-[100%] h-[200px] object-cover"
          :src="item.image_url"
          alt=""
        />
        <h2 class="text-center">{{ item.name }}</h2>
        <h2 class="text-center">{{ item.price }}</h2>
        <fwb-button
          class="w-full bg-[#1E293B] text-white flex justify-center items-center py-3 rounded-none"
        >
          <template #prefix>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </template>
          Buy
        </fwb-button>
      </div>
    </div>
  </div>
</template>
