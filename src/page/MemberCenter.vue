<script setup>
import { computed, ref } from "vue";

import MemberMenu from "../components/MemberCenter/MemberMenu.vue";
import UseCoupons from "../components/MemberCenter/UseCoupons.vue";
import UserOrder from "../components/MemberCenter/UserOrder.vue";
import UserProfile from "../components/MemberCenter/UserProfile.vue";
import { useUserStore } from "../store/Auth.ts";

const userStore = useUserStore();

let userPoint = ref(localStorage.getItem("userPoint")); //會員點數
let userInfo = ref(null); // 會員資訊
let userOrder = ref(null); //會員已訂購訂單

const memberCenterMaps = {
  useCoupons: UseCoupons,
  userProfile: UserProfile,
  userOrder: UserOrder,
};

const currentPage = ref("userProfile");

const currentView = computed(() => {
  return memberCenterMaps[currentPage.value];
});

function getOrderList() {
  const result = localStorage.getItem("userInfo");
  userInfo.value = JSON.parse(result);
  userOrder.value = userInfo.value.orders;
}

getOrderList();
</script>

<template>
  <div class="md:w-[1200px] mx-auto h-auto py-8 px-4">
    <!-- 頁面標題 -->
    <h2 class="text-center text-4xl font-bold text-slate-900 mb-8">會員中心</h2>

    <!-- 主要內容區 -->
    <main class="w-full flex md:flex-row flex-col gap-6">
      <!-- 左側選單 - 使用 MemberMenu 元件 -->
      <MemberMenu @update:active-menu="currentPage = $event" />

      <!-- 右側內容區 -->
      <div class="flex-1 min-h-[620px]">
        <div
          class="bg-white border border-slate-200 rounded-lg p-6 h-full overflow-y-auto"
        >
          <Transition name="fade" mode="out-in">
            <component
              :is="currentView"
              :key="currentPage"
              :userInfo="userInfo"
              :userOrder="userOrder"
            />
          </Transition>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 淡入淡出過渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
