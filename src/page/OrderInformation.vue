<script setup>
import { ref, computed } from "vue";
import { getCoupons } from "../api/method";

import { useUserStore } from "../store/Auth.ts";
const userPoint = localStorage.getItem("userPoint");

const name = ref("");
const phone = ref("");
const zipCode = ref("");
const address = ref("");

const shoppingList = ref();
// 配送資訊
const deliveryInfo = ref({
  // 超商付款
  pickupPayment: 60,

  // 郵寄
  homeDelivery: 100,

  // 快速配送
  fastDelivery: 350,
});

const pickedPayment = ref("cash");
const pickedShipping = ref("home");
const pickedDiscount = ref("");
const pickedCoupons = ref("");
const inputText = ref("");

const isShowModal = ref(false);
const Coupons = ref([]);

function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}

async function getTickets() {
  try {
    const res = await getCoupons();

    console.log(res);

    Coupons.value = res.data.items;

    console.log(JSON.stringify(Coupons.value));
  } catch (e) {
    console.log(e);
  }
}

getTickets();

function getShoppingList() {
  shoppingList.value = JSON.parse(localStorage.getItem("shoppingList"));

  console.log(shoppingList.value);
}

getShoppingList();

function pickValue(value) {
  console.log("被選中", value);
}

console.log("被選中", pickedCoupons.value);
console.log("被選中", inputText.value);

const cartItems = [
  {
    itemId: "gift-shopx00003",
    itemImage: "https://picsum.photos/id/1011/200/200",
    itemName: "極細自動鉛筆",
    itemPrice: "25.00",
    itemQuantity: 4,
  },

  {
    itemId: "gift-shopx00035",
    itemImage: "https://picsum.photos/id/1025/200/200",
    itemName: "簡約陶瓷筆筒組",
    itemPrice: "320.00",
    itemQuantity: 1,
  },
  {
    itemId: "gift-shopx00034",
    itemImage: "https://picsum.photos/id/1026/200/200",
    itemName: "庭園復古燈塔造型燈",
    itemPrice: "2980.00",
    itemQuantity: 1,
  },
  {
    itemId: "gift-shopx00033",
    itemImage: "https://picsum.photos/id/1027/200/200",
    itemName: "復古雕花鎮紙台",
    itemPrice: "1680.00",
    itemQuantity: 3,
  },
  {
    itemId: "gift-shopx00032",
    itemImage: "https://picsum.photos/id/1028/200/200",
    itemName: "經典真皮雙扣後背包",
    itemPrice: "3280.00",
    itemQuantity: 1,
  },
];
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- 頁面標題 -->
    <h1 class="text-3xl font-bold text-slate-900 text-center mb-8">訂單資訊</h1>

    <div class="flex flex-col lg:flex-row gap-6">
      <!-- 左側：選項區 -->
      <div class="flex-1 space-y-6">
        <!-- 優惠方式 -->
        <div class="bg-white border border-slate-200 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-slate-900 mb-4">
            選擇優惠方式
          </h2>
          <div class="space-y-3">
            <label
              class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition-all"
              :class="
                pickedDiscount === 'points'
                  ? 'border-amber-500 bg-amber-50'
                  : ''
              "
            >
              <input
                type="radio"
                v-model="pickedDiscount"
                value="points"
                name="discount"
                class="w-5 h-5 text-amber-600 focus:ring-amber-400 flex-shrink-0"
              />
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-semibold text-slate-900"
                    >會員點數折抵</span
                  >
                  <span
                    class="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded"
                    >可用 {{ userPoint }} 點</span
                  >
                </div>
                <p class="text-xs text-slate-500 mt-0.5">每點折抵 NT$ 1</p>
              </div>
            </label>

            <label
              class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition-all"
              :class="
                pickedDiscount === 'coupon'
                  ? 'border-amber-500 bg-amber-50'
                  : ''
              "
              @click="showModal"
            >
              <input
                type="radio"
                v-model="pickedDiscount"
                value="coupon"
                name="discount"
                class="w-5 h-5 text-amber-600 focus:ring-amber-400 flex-shrink-0"
              />
              <div class="flex-1">
                <span class="text-sm font-semibold text-slate-900">優惠券</span>
                <p class="text-xs text-slate-500 mt-0.5">點擊選擇可用優惠券</p>
              </div>
            </label>
          </div>
        </div>

        <!-- 付款方式 -->
        <div class="bg-white border border-slate-200 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-slate-900 mb-4">
            選擇付款方式
          </h2>
          <div class="space-y-3">
            <label
              class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition-all"
              :class="
                pickedPayment === 'cash' ? 'border-amber-500 bg-amber-50' : ''
              "
            >
              <input
                type="radio"
                v-model="pickedPayment"
                value="cash"
                name="payment"
                class="w-5 h-5 text-amber-600 focus:ring-amber-400 flex-shrink-0"
              />
              <div class="flex-1">
                <span class="text-sm font-semibold text-slate-900"
                  >貨到付款</span
                >
                <p class="text-xs text-slate-500 mt-0.5">收到商品時付款</p>
              </div>
            </label>

            <label
              class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition-all"
              :class="
                pickedPayment === 'credit' ? 'border-amber-500 bg-amber-50' : ''
              "
            >
              <input
                type="radio"
                v-model="pickedPayment"
                value="credit"
                name="payment"
                class="w-5 h-5 text-amber-600 focus:ring-amber-400 flex-shrink-0"
              />
              <div class="flex-1">
                <span class="text-sm font-semibold text-slate-900"
                  >信用卡線上付清</span
                >
                <p class="text-xs text-slate-500 mt-0.5">安全快速結帳</p>
              </div>
            </label>
          </div>
        </div>

        <!-- 配送方式 -->
        <div class="bg-white border border-slate-200 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-slate-900 mb-4">
            選擇配送方式
          </h2>
          <div class="space-y-3">
            <label
              class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition-all"
              :class="
                pickedShipping === 'home' ? 'border-amber-500 bg-amber-50' : ''
              "
            >
              <input
                type="radio"
                v-model="pickedShipping"
                value="home"
                name="shipping"
                class="w-5 h-5 text-amber-600 focus:ring-amber-400 flex-shrink-0"
              />
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-semibold text-slate-900"
                    >宅配到府</span
                  >
                  <span class="text-xs font-medium text-slate-600"
                    >NT$ {{ deliveryInfo.homeDelivery }}</span
                  >
                </div>
                <p class="text-xs text-slate-500 mt-0.5">3-5 個工作天送達</p>
              </div>
            </label>

            <label
              class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition-all"
              :class="
                pickedShipping === 'store' ? 'border-amber-500 bg-amber-50' : ''
              "
            >
              <input
                type="radio"
                v-model="pickedShipping"
                value="store"
                name="shipping"
                class="w-5 h-5 text-amber-600 focus:ring-amber-400 flex-shrink-0"
              />
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-semibold text-slate-900"
                    >超商取貨付款</span
                  >
                  <span class="text-xs font-medium text-slate-600">NT$ 60</span>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">3-5 個工作天到店</p>
              </div>
            </label>

            <label
              class="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-amber-400 hover:bg-amber-50 transition-all"
              :class="
                pickedShipping === 'fast' ? 'border-amber-500 bg-amber-50' : ''
              "
            >
              <input
                type="radio"
                v-model="pickedShipping"
                value="fast"
                name="shipping"
                class="w-5 h-5 text-amber-600 focus:ring-amber-400 flex-shrink-0"
              />
              <div class="flex-1">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-semibold text-slate-900"
                    >快速配送</span
                  >
                  <span class="text-xs font-medium text-slate-600"
                    >NT$ {{ deliveryInfo.fastDelivery }}</span
                  >
                  <span
                    class="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded"
                    >限時</span
                  >
                </div>
                <p class="text-xs text-slate-500 mt-0.5">24 小時內送達</p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <!-- 右側：購物車明細 -->
      <div class="flex-1 lg:max-w-xl">
        <div class="bg-white border border-slate-200 rounded-lg p-6">
          <h2 class="text-lg font-semibold text-slate-900 mb-4">購物車明細</h2>

          <div class="max-h-[500px] overflow-y-auto mb-6">
            <div class="space-y-3">
              <div
                v-for="item in shoppingList"
                :key="item.itemId"
                class="flex gap-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div class="w-20 h-20 flex-shrink-0">
                  <img
                    :src="item.image_url"
                    :alt="item.itemName"
                    class="w-full h-full object-cover rounded border border-slate-200"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-sm font-semibold text-slate-900 mb-1 line-clamp-2"
                  >
                    {{ item.itemName }}
                  </h3>
                  <div
                    class="flex items-center gap-2 text-xs text-slate-600 mb-1"
                  >
                    <span>單價 NT$ {{ item.price }}</span>
                    <span>×</span>
                    <span>{{ item.quantity }}</span>
                  </div>
                  <p class="text-sm font-bold text-amber-600">
                    NT$
                    {{
                      (parseFloat(item.price) * item.quantity).toFixed(
                        2
                      )
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- 金額統計 -->
          <div class="border-t-2 border-slate-200 pt-4 space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-slate-600">商品總金額</span>
              <span class="font-semibold text-slate-900">NT$ 35,555</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-slate-600">運費</span>
              <span class="font-semibold text-slate-900">NT$ 60</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-emerald-600">優惠折抵</span>
              <span class="font-semibold text-emerald-600">- NT$ 50</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-emerald-600">會員折抵</span>
              <span class="font-semibold text-emerald-600">- NT$ 60</span>
            </div>
            <div
              class="flex justify-between items-center p-3 bg-amber-50 rounded-lg border-2 border-amber-200 mt-3"
            >
              <span class="text-base font-bold text-slate-900">應付總計</span>
              <span class="text-xl font-bold text-amber-600">NT$ 35,505</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 訂購人資訊 -->
    <div class="mt-6 bg-white border border-slate-200 rounded-lg p-6">
      <h2 class="text-lg font-semibold text-slate-900 mb-4">訂購人資訊</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2"
            >訂購人</label
          >
          <input
            v-model="name"
            type="text"
            placeholder="請輸入姓名"
            class="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2"
            >訂購人電話</label
          >
          <input
            v-model="phone"
            type="tel"
            placeholder="請輸入電話"
            class="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2"
            >郵遞區號</label
          >
          <input
            v-model="zipCode"
            type="text"
            placeholder="請輸入郵遞區號"
            class="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-2"
            >寄送地址</label
          >
          <input
            v-model="address"
            type="text"
            placeholder="請輸入寄送地址"
            class="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
          />
        </div>
      </div>
    </div>

    <!-- 下訂單按鈕 -->
    <div
      class="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 p-6 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-lg"
    >
      <div class="text-center sm:text-left">
        <p class="text-sm text-slate-600">完成訂單後將為您保留商品</p>
        <p class="text-xs text-slate-500 mt-1">請於 7 天內完成付款</p>
      </div>
      <button
        class="w-full sm:w-auto px-10 py-3.5 bg-amber-600 text-white text-base font-bold rounded-lg hover:bg-amber-500 active:scale-95 transition-all"
      >
        確認下訂單
      </button>
    </div>
    <!-- 優惠券彈窗 -->
    <Transition name="modal">
      <div
        v-if="isShowModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        @click.self="closeModal"
      >
        <div
          class="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden"
        >
          <!-- Header -->
          <div
            class="flex items-center justify-between p-6 border-b border-slate-200"
          >
            <h3 class="text-xl font-semibold text-slate-900">選擇優惠券</h3>
            <button
              @click="closeModal"
              class="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <i class="fa-solid fa-xmark text-2xl"></i>
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 overflow-y-auto max-h-[60vh]">
            <h4 class="text-sm font-semibold text-slate-700 mb-4">
              可用優惠券
            </h4>
            <div class="space-y-3">
              <label
                v-for="item in Coupons"
                :key="item.id"
                class="flex items-center gap-4 p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <input
                  type="radio"
                  v-model="pickedCoupons"
                  :value="item.code"
                  name="coupon"
                  class="w-4 h-4 text-amber-600 focus:ring-amber-400"
                  @change="pickValue(item)"
                />
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <i class="fa-solid fa-ticket text-2xl text-emerald-600"></i>
                    <span class="text-sm font-semibold text-slate-900">{{
                      item.code
                    }}</span>
                  </div>
                  <p class="text-sm text-slate-600">{{ item.description }}</p>
                </div>
              </label>
            </div>
          </div>

          <!-- Footer -->
          <div
            class="flex justify-end gap-3 p-6 border-t border-slate-200 bg-slate-50"
          >
            <button
              @click="closeModal"
              class="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-slate-200 transition-colors"
            >
              取消
            </button>
            <button
              @click="closeModal"
              class="px-5 py-2 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-colors"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Modal 淡入淡出動畫 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white {
  transform: scale(0.95);
}

.modal-leave-to .bg-white {
  transform: scale(0.95);
}
</style>
