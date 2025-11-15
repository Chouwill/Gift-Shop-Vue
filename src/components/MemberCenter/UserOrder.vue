<script setup>
import { ref, onMounted, computed } from "vue";

const orderLists = ref([]);
const cardDetail = ref(false);
const userInfoStr = localStorage.getItem("userInfo");
const parseOrder = JSON.parse(userInfoStr || "null").orders;

orderLists.value = parseOrder;

console.log("----", orderLists.value);

const pageItems = 3;
let currentPage = ref(1);

// console.log("000000", orderList.value);

const orderFake = ref([
  {
    title: "1. Noteworthy technology acquisitions 2021",
    context:
      "1. Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.",
  },
  {
    title: "2. Noteworthy technology acquisitions 2021",
    context:
      "2. Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.",
  },
  {
    title: "3. Noteworthy technology acquisitions 2021",
    context:
      "3. Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.",
  },
  {
    title: "4. Noteworthy technology acquisitions 2021",
    context:
      "4. Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.",
  },
  {
    title: "5. Noteworthy technology acquisitions 2021",
    context:
      "5. Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.",
  },
  {
    title: "6. Noteworthy technology acquisitions 2021",
    context:
      "6. Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.",
  },
  {
    title: "7. Noteworthy technology acquisitions 2021",
    context:
      "7. Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.",
  },
  {
    title: "8. Noteworthy technology acquisitions 2021",
    context:
      "8. Here are the biggest enterprise technology acquisitions of 2021 sofar, in reverse chronological order.",
  },
]);

const computedData = computed(() => {
  return orderLists.value.slice(
    (currentPage.value - 1) * pageItems,
    currentPage.value * pageItems
  );
});

function nextPage() {
  try {
    currentPage.value++;
    console.log(currentPage);
  } catch (error) {
    console.log(error);
  }
}
function returnPage() {
  currentPage.value--;
}

const hasPrevPage = computed(() => currentPage.value > 1); //  是否上一頁
const hasNextPage = computed(
  () => currentPage.value < Math.ceil(orderLists.value.length / pageItems)
);
const currentData = computedData; // 計算
</script>

<template>
  <div class="flex flex-col h-[500px] gap-6 overflow-y-auto">
    <!-- 標題區 -->
    <div
      class="flex items-center justify-between pb-4 border-b border-slate-200"
    >
      <h2 class="text-2xl font-semibold text-slate-800">訂單總覽</h2>
      <div class="text-sm text-slate-500">
        共 {{ orderLists.length }} 筆訂單
      </div>
    </div>

    <!-- 訂單卡片列表 -->
    <div class="flex flex-col gap-4">
      <div
        class="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors duration-200 cursor-pointer"
        v-for="item in computedData"
        :key="item.order_id"
        @click="cardDetail = !cardDetail"
      >
        <!-- 訂單資訊頭部 -->
        <div class="flex justify-between items-center p-5 bg-slate-50">
          <div class="flex flex-col gap-1">
            <div class="text-sm text-slate-500">訂單編號</div>
            <div class="text-base font-semibold text-slate-900">
              {{ item.order_id }}
            </div>
          </div>
          <div class="flex flex-col gap-1 items-end">
            <div class="text-sm text-slate-500">訂單金額</div>
            <div class="text-lg font-semibold text-slate-900">
              NT$ {{ item.amount.toLocaleString() }}
            </div>
          </div>
          <div
            class="px-4 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded"
          >
            已完成
          </div>
        </div>

        <!-- 訂單狀態流程 -->
        <div class="flex items-center justify-around p-6 bg-white">
          <!-- 訂單已成立 -->
          <div class="flex flex-col items-center gap-2 w-24">
            <div
              class="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center"
            >
              <i class="fa-solid fa-list text-white text-xl"></i>
            </div>
            <p class="text-xs text-slate-600 text-center font-medium">
              訂單已成立
            </p>
            <div class="text-xs text-slate-400">
              {{ item.order_date.split("T")[0] }}
            </div>
          </div>

          <!-- 連接線 -->
          <div class="flex-1 h-0.5 bg-emerald-500 mx-2"></div>

          <!-- 付款資訊確認 -->
          <div class="flex flex-col items-center gap-2 w-24">
            <div
              class="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center"
            >
              <i class="fa-solid fa-money-bill-wave text-white text-xl"></i>
            </div>
            <p class="text-xs text-slate-600 text-center font-medium">
              付款確認
            </p>
            <div class="text-xs text-slate-400">
              {{ item.order_date.split("T")[0] }}
            </div>
          </div>

          <!-- 連接線 -->
          <div class="flex-1 h-0.5 bg-emerald-500 mx-2"></div>

          <!-- 訂單已出貨 -->
          <div class="flex flex-col items-center gap-2 w-24">
            <div
              class="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center"
            >
              <i class="fa-solid fa-truck text-white text-xl"></i>
            </div>
            <p class="text-xs text-slate-600 text-center font-medium">
              訂單已出貨
            </p>
            <div class="text-xs text-slate-400">
              {{ item.order_date.split("T")[0] }}
            </div>
          </div>

          <!-- 連接線 -->
          <div class="flex-1 h-0.5 bg-emerald-500 mx-2"></div>

          <!-- 完成訂單 -->
          <div class="flex flex-col items-center gap-2 w-24">
            <div
              class="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center"
            >
              <i class="fa-solid fa-check text-white text-xl"></i>
            </div>
            <p class="text-xs text-slate-600 text-center font-medium">
              完成訂單
            </p>
            <div class="text-xs text-slate-400">
              {{ item.order_date.split("T")[0] }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分頁控制 -->
    <div class="flex justify-center items-center gap-4 pt-4">
      <button
        class="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        @click="returnPage"
        :disabled="!hasPrevPage"
      >
        上一頁
      </button>

      <div
        class="px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded"
      >
        {{ currentPage }} / {{ Math.ceil(orderLists.length / pageItems) }}
      </div>

      <button
        class="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        @click="nextPage"
        :disabled="!hasNextPage"
      >
        下一頁
      </button>
    </div>
  </div>
</template>

<style scoped>
/* 移除所有 debug border */
</style>
