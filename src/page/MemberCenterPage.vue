<script setup lang="ts">
import { ref, computed } from "vue";

import MemberOverview from "@/components/MemberCenter/MemberOverview.vue";
import OrderOverview from "@/components/MemberCenter/OrderOverview.vue";
// import CouponOverview from "@/components/MemberCenter/CouponOverview.vue";

const tabList = [
  {
    key: "memberOverview",
    label: "會員資料",
  },
  {
    key: "orderOverview",
    label: "訂單總覽",
  },
  // {
  //   key: "couponOverview",
  //   label: "優惠券總覽",
  // },
];

/**
 * ② 給 Vue 用的「key → component 對照表」
 * 不拿來 v-for
 */
const tabMap = {
  memberOverview: MemberOverview,
  orderOverview: OrderOverview,
  // couponOverview: CouponOverview,
};

/**
 * ③ 狀態：目前選中的 tab
 * 👉 決定一開始顯示誰
 */
const currentTab = ref("memberOverview");

/**
 * ④ computed：根據 currentTab 算出要顯示的 component
 */
const currentComponent = computed(() => {
  return tabMap[currentTab.value];
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="w-[90%] max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- 左側：點數卡片和 Tab 選單 -->
        <div class="w-full lg:w-[280px] flex-shrink-0 space-y-4">
          <!-- 點數卡片 -->
          <div
            class="card bg-gradient-to-br from-amber-500 to-amber-600 shadow-md rounded-lg overflow-hidden border border-amber-300"
          >
            <div class="card-body p-6">
              <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col gap-1">
                  <div class="text-sm text-amber-100 font-medium">我的點數</div>
                  <div class="text-4xl font-bold text-white">0</div>
                </div>
                <div class="text-amber-100">
                  <i class="fa-solid fa-diamond text-4xl"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Tab 選單 -->
          <div class="space-y-3">
            <div
              v-for="tab in tabList"
              :key="tab.key"
              @click="currentTab = tab.key"
              class="card bg-white hover:bg-amber-50 transition-all duration-200 cursor-pointer shadow-sm rounded-lg border"
              :class="{
                'bg-amber-50 border-amber-300 shadow-md':
                  currentTab === tab.key,
                'border-gray-200 hover:border-amber-200':
                  currentTab !== tab.key,
              }"
            >
              <div class="card-body p-4">
                <div
                  class="text-base font-medium text-center transition-colors"
                  :class="{
                    'text-amber-700 font-semibold': currentTab === tab.key,
                    'text-gray-700': currentTab !== tab.key,
                  }"
                >
                  {{ tab.label }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右側：動態組件顯示區 -->
        <div class="flex-1">
          <div
            class="bg-white rounded-lg shadow-md border border-gray-200 p-6 lg:p-8"
          >
            <component :is="currentComponent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
