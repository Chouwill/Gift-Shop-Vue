<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useProductStore } from "@/stores/useCart";

const productStore = useProductStore();
productStore.fetchProduct();

const productTotal = computed(() => {
  return productStore.cartLists.reduce(function (sum, currentValue) {
    console.log("sum累加值", sum);
    console.log("currentValue當前的值", currentValue);
    return sum + currentValue.price * currentValue.quantity;
  }, 0);
});
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="w-[90%] max-w-7xl flex flex-col lg:flex-row gap-8 mx-auto">
      <!-- 左側：優惠、付款、配送選項 -->
      <div class="w-full lg:w-[50%] space-y-8">
        <!-- 選擇優惠方式 -->
        <div class="select-discount space-y-4">
          <h2 class="text-2xl font-bold mb-4">選擇優惠方式</h2>

          <div
            class="card bg-amber-50 hover:bg-amber-100 transition-colors w-full max-w-md border border-amber-200"
          >
            <div
              class="card-body !border flex flex-row justify-start items-center gap-5"
            >
              <input
                type="radio"
                name="radio-4"
                class="radio bg-white border-amber-300 checked:bg-amber-500 checked:text-amber-700 checked:border-amber-600"
              />
              <div class="flex flex-col gap-2">
                <div class="flex justify-center items-center gap-2">
                  <h2 class="font-bold">會員點數折抵</h2>
                  <div
                    class="w-[75px] h-[20px rounded-xs bg-emerald-200 flex justify-center items-center"
                  >
                    <h2 class="text-xs text-emerald-700">可用 450 點</h2>
                  </div>
                </div>
                <p>每點折抵 NT$ 1</p>
                <input
                  type="number"
                  class="input validator h-[35px]"
                  required
                  placeholder="Type a number between 1 to 10"
                  min="1"
                  max="10"
                  title="Must be between be 1 to 10"
                />
              </div>
            </div>
          </div>

          <div
            class="card bg-amber-50 hover:bg-amber-100 transition-colors w-full max-w-md border border-amber-200"
          >
            <div
              class="card-body !border flex flex-row justify-start items-center gap-5"
            >
              <input
                type="radio"
                name="radio-4"
                class="radio bg-white border-amber-300 checked:bg-amber-500 checked:text-amber-700 checked:border-amber-600"
              />
              <div class="flex flex-col">
                <h2>優惠卷</h2>
                <p class="text-xs text-slate-500">點擊選擇可用優惠券</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 選擇付款方式 -->
        <div class="select-pay space-y-4">
          <h2 class="text-2xl font-bold mb-4">選擇付款方式</h2>

          <div
            class="card bg-amber-50 hover:bg-amber-100 transition-colors w-full max-w-md border border-amber-200"
          >
            <div
              class="card-body !border flex flex-row justify-start items-center gap-5"
            >
              <input
                type="radio"
                name="radio-4"
                class="radio bg-white border-amber-300 checked:bg-amber-500 checked:text-amber-700 checked:border-amber-600"
              />
              <div class="flex flex-col gap-2">
                <div class="flex justify-center items-center gap-2">
                  <h2 class="font-bold">信用卡</h2>
                  <div
                    class="w-[75px] h-[20px rounded-xs bg-emerald-200 flex justify-center items-center"
                  >
                    <!-- <h2 class="text-xs text-emerald-700">可用 450 點</h2> -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card bg-amber-50 hover:bg-amber-100 transition-colors w-full max-w-md border border-amber-200"
          >
            <div
              class="card-body !border flex flex-row justify-start items-center gap-5"
            >
              <input
                type="radio"
                name="radio-4"
                class="radio bg-white border-amber-300 checked:bg-amber-500 checked:text-amber-700 checked:border-amber-600"
              />
              <div class="flex flex-col">
                <h2 class="font-bold">貨到付款</h2>
              </div>
            </div>
          </div>
        </div>

        <!-- 選擇配送方式 -->
        <div class="select-delivery space-y-4">
          <h2 class="text-2xl font-bold mb-4">選擇配送方式</h2>

          <div
            class="card bg-amber-50 hover:bg-amber-100 transition-colors w-full max-w-md border border-amber-200"
          >
            <div
              class="card-body !border flex flex-row justify-start items-center gap-5"
            >
              <input
                type="radio"
                name="radio-4"
                class="radio bg-white border-amber-300 checked:bg-amber-500 checked:text-amber-700 checked:border-amber-600"
              />
              <div class="flex flex-col gap-2">
                <div class="flex flex-col justify-center items-center gap-1">
                  <div class="title flex gap-2">
                    <h2 class="font-bold">宅配到府</h2>
                    <h2 class="font-bold">NT$100</h2>
                  </div>
                  <h2 class="font-bold">3-5個工作天送達</h2>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card bg-amber-50 hover:bg-amber-100 transition-colors w-full max-w-md border border-amber-200"
          >
            <div
              class="card-body !border flex flex-row justify-start items-center gap-5"
            >
              <input
                type="radio"
                name="radio-4"
                class="radio bg-white border-amber-300 checked:bg-amber-500 checked:text-amber-700 checked:border-amber-600"
              />
              <div class="flex flex-col gap-2">
                <div class="flex flex-col justify-center items-center gap-1">
                  <div class="title flex gap-2">
                    <h2 class="font-bold">快速配送</h2>
                    <h2 class="font-bold">NT$350</h2>
                  </div>
                  <h2 class="font-bold">24小時內送達</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側：購物車明細 -->
      <div
        class="cart-detail w-full lg:w-[50%] bg-white rounded-lg shadow-md p-6"
      >
        <h2 class="text-2xl font-bold text-center mb-6">購物車明細</h2>

        <!-- 購物車商品列表 -->
        <div class="space-y-4 mb-6">
          <div
            class="cart-product flex justify-between items-center bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
            v-for="item in productStore.cartLists"
            :key="item.id"
          >
            <div class="product-info flex items-start gap-4 flex-1">
              <div class="bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  class="w-20 h-20 object-cover"
                  :src="item.image_url"
                  alt="商品圖片"
                />
              </div>
              <div class="product-text flex-1">
                <div class="text-sm text-gray-600 mb-1">
                  單價 ${{ item.price }} x {{ item.quantity }}
                </div>
                <div class="text-lg text-amber-600 font-bold">
                  NT$ {{ item.price * item.quantity }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 金額計算區域 -->
        <div class="border-t pt-4 space-y-3">
          <div class="flex justify-between text-gray-700">
            <span class="text-base">商品總金額</span>
            <span class="text-base font-medium">NT${{ productTotal }}</span>
          </div>
          <div class="flex justify-between text-gray-700">
            <span class="text-base">運費</span>
            <span class="text-base font-medium">NT${{ productTotal }}</span>
          </div>
          <div class="flex justify-between text-green-700">
            <span class="text-base">優惠折抵</span>
            <span class="text-base font-medium">-NT${{ productTotal }}</span>
          </div>
          <div class="flex justify-between bg-amber-100 rounded-lg p-4 mt-4">
            <h2 class="text-lg font-bold text-gray-800">應付總計</h2>
            <h2 class="text-xl font-bold text-amber-700">
              NT${{ productTotal }}
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div
      class="order-form w-[90%] max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8 mt-8"
    >
      <h2 class="text-2xl font-bold mb-6">訂購人資訊</h2>

      <form class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset class="fieldset">
            <legend
              class="fieldset-legend text-sm font-semibold text-gray-700 mb-2"
            >
              訂購人
            </legend>
            <input
              type="text"
              class="input w-full !border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="請輸入訂購人姓名"
            />
          </fieldset>
          <fieldset class="fieldset">
            <legend
              class="fieldset-legend text-sm font-semibold text-gray-700 mb-2"
            >
              訂購人電話
            </legend>
            <input
              type="text"
              class="input w-full !border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="請輸入聯絡電話"
            />
          </fieldset>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset class="fieldset">
            <legend
              class="fieldset-legend text-sm font-semibold text-gray-700 mb-2"
            >
              郵遞區號
            </legend>
            <input
              type="text"
              class="input w-full !border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="請輸入郵遞區號"
            />
          </fieldset>
          <fieldset class="fieldset">
            <legend
              class="fieldset-legend text-sm font-semibold text-gray-700 mb-2"
            >
              寄送地址
            </legend>
            <input
              type="text"
              class="input w-full !border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="請輸入完整地址"
            />
          </fieldset>
        </div>
      </form>

      <div class="flex justify-center mt-8">
        <button
          class="btn btn-warning w-full max-w-md py-3 text-lg font-semibold rounded-lg hover:bg-amber-600 transition-colors"
        >
          確認下訂單
        </button>
      </div>
    </div>
  </div>
</template>
