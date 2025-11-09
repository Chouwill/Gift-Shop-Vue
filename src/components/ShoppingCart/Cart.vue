<script lang="ts" setup>
import { computed, ref } from "vue";
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

const { cartList, addQuantity, deleteQuantity } = useCart();

// const props = defineProps(["list"]);
// 簡寫  v-for 就不用props.list 直接 list 渲染
const props = defineProps(["list"]);

const localList = ref([]);
const itemTotal = ref(0);
const cartTotal = ref(0);

localList.value = props.list;
// watchEffect(()=>{
// console.log("props",props.list);

// })

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
</script>

<template>
  <div class="cart-container border fixed">
    <fwb-button class="w-20 h-20 rounded-[100%]" @click="showModal">
      <i class="fa-solid fa-cart-shopping text-4xl"></i>
    </fwb-button>

    <fwb-modal size="2xl" v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="w-[90%] flex justify-center items-center pl-20 py-2">
          <h2 class="text-xl font-semibold text-gray-800">購物車lll</h2>
        </div>
      </template>
      <template #body>
        <table class="md:w-[500px] mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>商品名稱<br />數量</th>
              <th>價格</th>
              <th>小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartList" :key="item.id">
              <th>
                <img :src="item.image_url" alt="" />
              </th>
              <th>
                <div
                  class="w-[100px] flex flex-col justify-center items-center gap-2 mx-auto border"
                >
                  <h2 class="text-sm">{{ item.name }}</h2>
                  <div class="flex justify-center items-center gap-3">
                    <fwb-button
                      @click="deleteQuantity(item)"
                      class="md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex justify-center items-center"
                      color="default"
                      ><i class="fa-solid fa-minus"></i
                    ></fwb-button>
                    <h2>{{ item.quantity }}</h2>
                    <fwb-button
                      @click="addQuantity(item)"
                      class="md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex justify-center items-center"
                      color="default"
                      ><i class="fa-solid fa-plus"></i
                    ></fwb-button>
                  </div>
                </div>
              </th>
              <th>
                {{ item.price }}
              </th>
              <th v-if="item.quantity === 1">
                {{ item.price }}
              </th>
              <th v-else="item.quantity >= 2">
                {{ itemTotal }}
              </th>
            </tr>
          </tbody>
        </table>
      </template>
      <template #footer>
        <table class="border md:w-[450px] mx-auto">
          <tbody>
            <tr class="">
              <th>總計</th>
              <th colspan="2">000</th>
            </tr>
          </tbody>
        </table>
      </template>
    </fwb-modal>
  </div>
</template>

<style scoped>
:deep(.fwb-modal) {
  border: 2px solid rebeccapurple !important;
}

/* .cart-box{
      border: 2px solid rebeccapurple;
    } */
</style>
