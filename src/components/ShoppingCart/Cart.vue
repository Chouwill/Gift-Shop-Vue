<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useProductStore } from "@/stores/useCart";

const modalCart = ref(true);
const productStore = useProductStore();
productStore.fetchProduct();


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
        <div class="cart-detail">
          <div
            class="cart-product !border flex justify-between items-center"
            v-for="item in productStore.cartLists"
            :key="item.id"
          >
            <div
              class="product-info border flex justify-between items-center gap-3"
            >
              <div>
                <img
                  class="w-[80px] h-[80px]"
                  :src="item.image_url"
                  alt=""
                />
              </div>
              <div class="product-text">
                <div>{{ item.name }}</div>
                <div>${{ item.price }}</div>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-center border gap-4">
                <div class="flex items-center gap-3">
                  <button class="btn w-8 h-8 hover:bg-amber-100" @click="productStore.reduceQuantity(item)">
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <div>{{ item.quantity }}</div>
                  <button class="btn w-8 h-8 hover:bg-amber-100" @click="productStore.addQuantity(item)">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>

                <div class="product-total pr-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>
