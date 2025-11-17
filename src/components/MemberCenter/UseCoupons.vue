<script setup>
import { ref } from "vue";

import { useUserStore } from "../../store/Auth.ts";

const userStore = useUserStore();

userStore.getCouponList(userStore.userId);
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- 標題 -->
    <div class="pb-4 border-b border-slate-200">
      <h2 class="text-2xl font-semibold text-slate-800">我的優惠券</h2>
    </div>

    <!-- 優惠券列表 -->
    <div class="flex flex-col gap-4">
      <!-- 優惠券卡片範例 (之後可改成 v-for) -->
      <div
        class="bg-white border border-slate-200 rounded-lg p-5 flex items-center gap-4"
        v-for="item in userStore.useCoupons"
      >
        <div class="flex-1">
          <h3 class="text-base font-semibold text-slate-900 mb-1">
            {{ item.name }}
          </h3>
          <p class="text-sm text-slate-600 mb-2">{{ item.description }}</p>
          <div class="flex items-center gap-4 text-xs text-slate-500">
            <span>有效期限: {{ item.expire_until.split("T")[0]
 }}</span>
            <span class="px-2 py-1 bg-green-100 text-green-700 rounded"
              >可使用</span
            >
          </div>
        </div>
        <button
          class="px-5 py-2 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-colors"
        >
          使用
        </button>
      </div>

      <!-- 空狀態提示 -->
      <!-- <div class="text-center py-12 text-slate-500">
        <i class="fa-solid fa-ticket text-4xl mb-4 opacity-30"></i>
        <p>目前沒有可用的優惠券</p>
      </div> -->
    </div>
  </div>
</template>
