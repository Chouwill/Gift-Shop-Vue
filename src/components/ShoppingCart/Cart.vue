<template>
  <div class="cart-container border fixed">
    <fwb-button class="w-20 h-20 rounded-[100%]" @click="showModal">
      <i class="fa-solid fa-cart-shopping text-4xl"></i>
    </fwb-button>

    <fwb-modal size="2xl" v-if="isShowModal" @click="closeModal">
      <template #header>
        <div class="w-[90%] flex justify-center items-center pl-20 py-2">
          <h2 class="text-xl font-semibold text-gray-800">購物車</h2>
        </div>
      </template>
      <template #body>
        <table class="md:w-[500px] mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>商品名稱<br />數量</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.name">
              <th>
                <img :src="item.img" alt="" />
              </th>
              <th>
                <div
                  class="w-[100px] flex flex-col justify-center items-center gap-2 mx-auto border"
                >
                  <h2 class="text-sm">{{ item.name }}</h2>
                  <div class="flex justify-center items-center gap-3">
                    <fwb-button
                      class="md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex justify-center items-center"
                      color="default"
                      ><i class="fa-solid fa-minus"></i
                    ></fwb-button>
                    <h2>{{ item.quantity }}</h2>
                    <fwb-button
                      class="md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex justify-center items-center"
                      color="default"
                      ><i class="fa-solid fa-plus"></i
                    ></fwb-button>
                  </div>
                </div>
              </th>
              <th>{{ item.price }}</th>
            </tr>
          </tbody>
        </table>
      </template>
      <template #footer>
        <table class="md:w-[500px] mx-auto">
          <tbody>
            <tr class="">
              <th>總計</th>
              <th colspan="ㄉ">000</th>
            </tr>
          </tbody>
        </table>
      </template>
    </fwb-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
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
const cartItems = [
  {
    name: 'Apple MacBook Pro 17"',
    quantity: 1,
    price: 2999,
    img: "https://picsum.photos/seed/cart-0/96/96",
  },
  {
    name: "Microsoft Surface Pro",
    quantity: 5,
    price: 1999,
    img: "https://picsum.photos/seed/cart-1/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-2/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-3/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-4/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-5/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-6/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-7/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-8/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-9/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-10/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-11/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-12/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-13/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-14/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-15/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-16/96/96",
  },
  {
    name: "Magic Mouse 2",
    quantity: 6,
    price: 7000,
    img: "https://picsum.photos/seed/cart-17/96/96",
  },
];

const isShowModal = ref(false);

function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}
</script>

<style scoped>
:deep(.fwb-modal) {
  border: 2px solid rebeccapurple !important;
}

/* .cart-box{
      border: 2px solid rebeccapurple;
    } */
</style>
