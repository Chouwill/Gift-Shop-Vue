<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import {
  FwbButton,
  FwbModal,
  FwbA,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";
import { useCart } from "../../composables/useCart";
import router from "@/router";

const { cartList, addQuantity, deleteQuantity, clearCart } = useCart();

const isShowModal = ref(false);

function closeModal() {
  isShowModal.value = false;
  const body = document.querySelector("body");

  console.log(body);
  // const result = ;

  if (body) {
    console.log("有");
    body.style.overflow = ""; // 空字串 ＝＝ 預設
  } else {
    console.log("無");
  }
}
function showModal() {
  isShowModal.value = true;
  const body = document.querySelector("body");

  console.log(body);
  // const result = ;

  if (body) {
    console.log("有");
    body.style.overflow = "hidden";
  } else {
    console.log("無");
  }
}

// function deleteQuantity(item: any) {
//   if (item.itemQuantity <= 0) {
//     item.itemQuantity = 0;
//   } else {
//     console.log("當前選中", item.itemQuantity--);
//     itemTotal.value = item.itemQuantity * item.itemPrice;
//   }
//   // console.log("list?", localList.value.item.itemQuantity++);
// }

console.log("00000", cartList.value);

function shoppingCheckout() {
  console.log("0000");
  router.push({ name: "Order" });

  console.log("目前購物清單", cartList.value);
  localStorage.setItem("shoppingList", JSON.stringify(cartList.value));
}
</script>

<template>
  <div class="cart-container fixed bottom-6 right-6 z-50">
    <!-- 購物車浮動按鈕 -->
    <button
      class="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors shadow-lg"
      @click="showModal"
    >
      <i class="fa-solid fa-cart-shopping text-2xl"></i>
    </button>

    <!-- 購物車彈窗 -->
    <fwb-modal size="2xl" v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex justify-center items-center py-2">
          <h2 class="text-xl font-semibold text-slate-800">購物車</h2>
        </div>
      </template>

      <template #body>
        <div class="max-w-2xl mx-auto">
          <!-- 購物車商品列表 -->
          <div class="flex flex-col gap-4">
            <div
              v-for="item in cartList"
              :key="item.id"
              class="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200"
            >
              <!-- 商品圖片 -->
              <div
                class="w-20 h-20 flex-shrink-0 bg-white rounded overflow-hidden"
              >
                <img
                  class="w-full h-full object-cover"
                  :src="item.image_url"
                  :alt="item.name"
                />
              </div>

              <!-- 商品資訊 -->
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-medium text-slate-900 truncate">
                  {{ item.name }}
                </h3>
                <p class="text-sm text-slate-600 mt-1">
                  NT$ {{ item.price.toLocaleString() }}
                </p>
              </div>

              <!-- 數量控制 -->
              <div class="flex items-center gap-3">
                <button
                  @click="deleteQuantity(item)"
                  class="w-8 h-8 bg-slate-200 hover:bg-amber-100 rounded flex items-center justify-center transition-colors"
                >
                  <i class="fa-solid fa-minus text-sm"></i>
                </button>
                <span
                  class="text-sm font-medium text-slate-900 w-8 text-center"
                >
                  {{ item.quantity }}
                </span>
                <button
                  @click="addQuantity(item)"
                  class="w-8 h-8 bg-slate-200 hover:bg-amber-100 rounded flex items-center justify-center transition-colors"
                >
                  <i class="fa-solid fa-plus text-sm"></i>
                </button>
              </div>

              <!-- 小計 -->
              <div class="text-right min-w-[80px]">
                <p class="text-sm font-semibold text-slate-900">
                  NT$ {{ (item.price * item.quantity).toLocaleString() }}
                </p>
              </div>
            </div>

            <!-- 空購物車提示 -->
            <div
              v-if="cartList.length === 0"
              class="text-center py-12 text-slate-500"
            >
              <i class="fa-solid fa-cart-shopping text-4xl mb-4 opacity-30"></i>
              <p>購物車是空的</p>
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <div
          class="flex justify-between items-center px-6 py-4 bg-slate-50 border-t border-slate-200"
        >
          <button
            @click="clearCart"
            class="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-slate-200 transition-colors"
          >
            清空購物車
          </button>

          <div class="flex items-center gap-6">
            <div class="text-right">
              <p class="text-sm text-slate-600">總計</p>
              <p class="text-xl font-bold text-slate-900">
                NT$
                {{
                  cartList
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toLocaleString()
                }}
              </p>
            </div>

            <button
              class="px-6 py-2.5 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-colors"
              @click="shoppingCheckout"
            >
              前往結帳
            </button>
          </div>
        </div>
      </template>
    </fwb-modal>
  </div>
</template>

<style scoped>
/* 移除舊的 debug border */
</style>
