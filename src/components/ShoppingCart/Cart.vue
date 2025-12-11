<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useProductStore } from "@/stores/useCart";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const productStore = useProductStore();
productStore.fetchProduct();

const productTotal = computed(() => {
  return productStore.cartLists.reduce(function (sum, currentValue) {
    console.log("sum累加值", sum);
    console.log("currentValue當前的值", currentValue);
    return sum + currentValue.price * currentValue.quantity;
  }, 0);
});

function goCheckOut() {
  router.push("/OrderCheckout");
}
</script>

<template>
  <div>
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box relative">
        <div class="modal-header flex justify-between items-center">
          <h3 class="text-lg font-bold">購物車</h3>
          <button><i class="fa-solid fa-x"></i></button>
        </div>
        <div class="cart-detail border">
          <div
            class="cart-product my-3 flex justify-between items-center bg-gray-100 py-4"
            v-for="item in productStore.cartLists"
            :key="item.id"
          >
            <div
              class="product-info border flex justify-between items-center gap-3"
            >
              <div>
                <img class="w-[80px] h-[80px]" :src="item.image_url" alt="" />
              </div>
              <div class="product-text">
                <div>{{ item.name }}</div>
                <div>${{ item.price }}</div>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-center border gap-4">
                <div class="flex items-center gap-3">
                  <button
                    class="btn w-8 h-8 hover:bg-amber-100"
                    @click="productStore.reduceQuantity(item)"
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <div>{{ item.quantity }}</div>
                  <button
                    class="btn w-8 h-8 hover:bg-amber-100"
                    @click="productStore.addQuantity(item)"
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>

                <div class="product-total pr-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center py-2 !border">
          <button class="btn ms-3 bg-slate-100">清空購物車</button>
          <div class="flex justify-center items-center gap-4 !border">
            <div class="flex justify-end items-end flex-col gap-1">
              <p class="text-slate-600">總計</p>

              <h2 class="text-xl font-bold">NT${{ productTotal }}</h2>
            </div>
            <button class="btn me-3 text-white bg-amber-600 hover:bg-amber-500" @click="goCheckOut">
              前往結帳
            </button>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
* {
  border: none !important;
}
</style>
