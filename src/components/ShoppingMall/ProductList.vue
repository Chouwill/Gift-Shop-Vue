<script setup>
import { ref, watchEffect } from "vue";
import { FwbButton } from "flowbite-vue";
import { useCart } from "../../composables/useCart";

const props = defineProps(["card", "shoppingList"]);
const { addCart } = useCart();

watchEffect(() => {
  console.log("商城列表組件", props.card);
  console.log("購物車列表組件", props.shoppingList);
});
</script>

<template>
  <div class="w-full">
    <div class="w-full flex flex-wrap justify-center items-start gap-6 py-8">
      <div
        class="flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden w-[220px] hover:border-slate-300 transition-colors"
        v-for="item in props.card"
        :key="item.id"
      >
        <!-- 商品圖片 -->
        <div class="w-full h-[220px] bg-slate-100">
          <img
            class="w-full h-full object-cover"
            :src="item.image_url"
            :alt="item.name"
          />
        </div>

        <!-- 商品資訊 -->
        <div class="p-4 flex flex-col gap-2">
          <h3 class="text-sm font-medium text-slate-900 line-clamp-2 min-h-[40px]">
            {{ item.name }}
          </h3>
          <p class="text-lg font-semibold text-slate-900">
            NT$ {{ item.price.toLocaleString() }}
          </p>

          <!-- 加入購物車按鈕 -->
          <button
            @click="addCart(item)"
            class="w-full py-2.5 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-colors flex items-center justify-center gap-2"
          >
            <svg
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 移除舊的 shadow 樣式 */
</style>
