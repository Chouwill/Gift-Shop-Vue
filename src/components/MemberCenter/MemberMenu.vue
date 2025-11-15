<script setup>
import { ref } from "vue";
import { useUserStore } from "@/store/Auth";

const userStore = useUserStore();
const activeMenu = ref("userProfile"); // 當前選中的選單項

// 定義 emit 事件
const emit = defineEmits(["update:active-menu"]);

// 切換選單並發送事件
function handleMenuClick(menu) {
  activeMenu.value = menu;
  emit("update:active-menu", menu);
}
</script>

<template>
  <div
    class="menuBar md:w-[280px] w-full flex md:flex-col flex-row justify-start items-stretch gap-2 bg-white border border-slate-200 rounded-lg p-4"
  >
    <!-- 帳戶資訊卡片 -->
    <div
      class="w-full bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-lg p-4 mb-2"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs text-amber-100 mb-1">我的點數</p>
          <p class="text-2xl font-semibold">{{ userStore.userPoint || 0 }}</p>
        </div>
        <i class="fa-solid fa-gem text-3xl text-white opacity-80"></i>
      </div>
    </div>

    <!-- 選單按鈕群組 -->
    <button
      class="w-full px-4 py-3 text-left text-sm font-medium rounded transition-colors"
      :class="
        activeMenu === 'userProfile'
          ? 'bg-amber-600 text-white'
          : 'bg-slate-50 text-slate-700 hover:bg-amber-50 hover:text-amber-700'
      "
      @click="handleMenuClick('userProfile')"
    >
      <i class="fa-solid fa-user mr-3"></i>
      我的帳戶
    </button>

    <button
      class="w-full px-4 py-3 text-left text-sm font-medium rounded transition-colors"
      :class="
        activeMenu === 'userOrder'
          ? 'bg-amber-600 text-white'
          : 'bg-slate-50 text-slate-700 hover:bg-amber-50 hover:text-amber-700'
      "
      @click="handleMenuClick('userOrder')"
    >
      <i class="fa-solid fa-box mr-3"></i>
      訂單總覽
    </button>

    <button
      class="w-full px-4 py-3 text-left text-sm font-medium rounded transition-colors"
      :class="
        activeMenu === 'useCoupons'
          ? 'bg-amber-600 text-white'
          : 'bg-slate-50 text-slate-700 hover:bg-amber-50 hover:text-amber-700'
      "
      @click="handleMenuClick('useCoupons')"
    >
      <i class="fa-solid fa-ticket mr-3"></i>
      我的優惠券
    </button>
  </div>
</template>
