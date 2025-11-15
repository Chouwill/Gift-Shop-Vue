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
  <div class="profile-from flex flex-col !border h-[500px] gap-3">
    <h2>訂單總覽</h2>

    <div
      class="order-card md:w-[100%] !border flex flex-col justify-center items-center gap-3"
    >
      <div
        class="flex flex-col w-full items-center bg-blue-50 border-2 border-blue-400 rounded-lg shadow-xl md:flex-row md:max-w-xl hover:bg-blue-100 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 dark:border-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700"
        v-for="item in computedData"
        :key="item.title"
      >
        <div
          :class="[
            'flex flex-row w-full flex-wrap border justify-between items-start p-4 leading-normal',
            cardDetail ? 'h-50' : '',
          ]"
          @click="cardDetail = !cardDetail"
        >
          <div class="w-[50%] !border">
            <h5
              class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white"
            >
              訂單編號{{ item.order_id }}
            </h5>
            <h5
              class="text-base mb-3 font-normal text-gray-700 dark:text-gray-400"
            >
              訂單金額:
              {{ item.amount }}
            </h5>
          </div>
          <div class="pay-status !border w-[50%]">已完成</div>
          <div class="w-full !border flex items-center justify-around">
            <div
              class="status-box md:w-[120px] md:h-[150px] gap-2 flex justify-center items-center flex-col"
            >
              <div
                class="status !border-4 !border-green-500 md:w-[60px] md:h-[60px] flex justify-center items-center rounded-[100%]"
              >
                <i
                  class="fa-solid fa-list md:text-3xl block text-green-500"
                ></i>
              </div>
              <p class="text-xs">訂單已成立</p>
              <div class="text-sm">{{ item.order_date.split("T")[0] }}</div>
            </div>
            <div
              class="status-box md:w-[120px] md:h-[150px] gap-2 flex justify-center items-center flex-col"
            >
              <div
                class="status !border-4 !border-green-500 w-[45px] h-[45px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-[100%]"
              >
                <i
                  class="fa-solid md:text-3xl text-2xl fa-money-bill-wave text-green-500"
                ></i>
              </div>
              <p class="text-xs">付款資訊確認</p>
              <div class="text-sm">{{ item.order_date.split("T")[0] }}</div>
            </div>
            <div
              class="status-box md:w-[120px] md:h-[150px] gap-2 flex justify-center items-center flex-col"
            >
              <div
                class="status !border-4 !border-green-500 md:w-[60px] md:h-[60px] flex justify-center items-center rounded-[100%]"
              >
                <i
                  class="fa-solid fa-truck md:text-3xl block text-green-500"
                ></i>
              </div>
              <p class="text-xs">訂單已出貨</p>
              <div class="text-sm">{{ item.order_date.split("T")[0] }}</div>
            </div>
            <div
              class="status-box md:w-[120px] md:h-[150px] gap-2 flex justify-center items-center flex-col"
            >
              <div
                class="status !border-4 !border-green-500 md:w-[60px] md:h-[60px] flex justify-center items-center rounded-[100%]"
              >
                <i
                  class="fa-solid fa-check md:text-3xl block text-green-500"
                ></i>
              </div>
              <p class="text-xs">完成訂單</p>
              <div class="text-sm">{{ item.order_date.split("T")[0] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="page !border flex justify-center items-center">
        <!-- Previous Button -->
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="returnPage"
          v-if="hasPrevPage"
        >
          Previous
        </a>

        <div>{{ currentPage }}</div>
        <!-- Next Button -->
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="nextPage"
          v-if="hasNextPage"
        >
          Next
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.status-box {
  border: 2px solid red !important;
}
</style>
