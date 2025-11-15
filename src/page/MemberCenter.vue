<script setup>
import { FwbButtonGroup, FwbButton, FwbInput, FwbRadio } from "flowbite-vue";
import { computed, onMounted, ref } from "vue";

import MemberMenu from "../components/MemberCenter/MemberMenu.vue";
import UseCoupons from "../components/MemberCenter/UseCoupons.vue";
import UserOrder from "../components/MemberCenter/UserOrder.vue";
import UserProfile from "../components/MemberCenter/UserProfile.vue";
// import MemberMenu from "../components/MemberCenter/MemberMenu.vue";
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

// const currentView = computed(() => memberCenterMaps[currentPage.value]);
const currentView = computed(() => {
  console.log(" currentPage.value =", currentPage.value);
  console.log(" 找到的組件 =", memberCenterMaps[currentPage.value]);
  return memberCenterMaps[currentPage.value];
});
function getOrderList() {
  const result = localStorage.getItem("userInfo");

  userInfo.value = JSON.parse(result);
  userOrder.value = userInfo.value.orders;
}

getOrderList();
console.log("point", userPoint.value);

console.log("使用者資訊", userInfo.value);
console.log("已訂購項目", userOrder.value);
</script>

<template>
  <div class="md:w-[1200px] mx-auto h-auto">
    <h2 class="text-center text-4xl">會員中心</h2>
    <main class="md:w-full h-auto flex md:flex-row flex-col gap-3 !border">
      <div
        class="menuBar md:w-[300px] w-[400px] md:h-[620px] flex md:flex-col flex-row justify-start items-center gap-3 mt-5 bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300"
      >
        <fwb-button
          @click="currentPage = 'userProfile'"
          class="md:!w-[150px] md:mt-3"
          >我的帳戶 {{ userPoint }} <i class="fa-solid fa-diamond"></i
        ></fwb-button>
        <fwb-button @click="currentPage = 'userOrder'" class="md:!w-[150px]"
          >訂單總覽</fwb-button
        >
        <fwb-button @click="currentPage = 'useCoupons'" class="md:!w-[150px]"
          >我的優惠卷</fwb-button
        >
      </div>

      <div class="md:w-[700px] mt-5 h-auto">
        <div
          :class="[
            'profile flex flex-col gap-3 md:w-[600px] h-[620px] bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300',
            currentPage === 'userOrder' ? 'md:w-[700px]' : 'md:w-[600px]',
          ]"
        >
          <component
            :is="currentView"
            :userInfo="userInfo"
            :userOrder="userOrder"
          />
          <!-- <div class="profile-from flex flex-col gap-3">
            <h2>我的檔案</h2>

            <div class="flex justify-start items-center gap-3">
              <label for="email">使用者帳號</label>
              <h2>XXXP</h2>
            </div>
            <div class="flex justify-start items-center gap-3">
              <label for="email">姓名/暱稱</label>
              <input type="text" class="!border w-[150px] h-[30px]" />
            </div>
            <div class="flex justify-start items-center gap-3">
              <label for="email">郵件信箱</label>
              <h2>XXXP@gmail.com</h2>
            </div>
            <div class="flex justify-start items-center gap-3">
              <label for="email">性別</label>
              <div class="flex gap-3">
                <div>
                  <input type="radio" id="Man" name="Gender" value="Man" />
                  <label for="Man">男生</label>
                </div>
                <div>
                  <input type="radio" id="Girl" name="Gender" value="Girl" />
                  <label for="Girl">女生</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Other"
                    name="Gender"
                    value="Other"
                    checked
                  />
                  <label for="Other">其他</label>
                </div>
              </div>
            </div>
            <div class="flex justify-start items-center gap-3">
              <label for="email">生日</label>
              <input type="date" name="" id="" class="!border w-[140px]" />
            </div>
            <button
              class="w-[100px] py-1 bg-amber-400 mx-auto mt-4 rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200"
            >
              儲存
            </button>
          </div>  -->
        </div>
      </div>
    </main>
  </div>
</template>
