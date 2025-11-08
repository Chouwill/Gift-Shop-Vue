<script setup>
import { ref, computed } from "vue";

import {
  FwbRadio,
  FwbModal,
  FwbButton,
  FwbListGroup,
  FwbListGroupItem,
  FwbP,
  FwbInput,
} from "flowbite-vue";
import { getCoupons } from "../api/method";
const name = ref("");

const pickedCoupons = ref();
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

const couponDescriptions = [
  { code: "D65-7D", description: "全館 65 折，限時 7 天使用。" },
  { code: "D75-7D", description: "全館 75 折，限時 7 天使用。" },
  { code: "D80-7D", description: "全館 8 折優惠券，限時 7 天。" },
  { code: "D85-7D", description: "全館 85 折優惠券，限時 7 天。" },
  { code: "D90-7D", description: "全館 9 折優惠券，限時 7 天。" },
  { code: "D95-7D", description: "全館 95 折優惠券，限時 7 天。" },
  { code: "FS1000-30D", description: "滿 1000 元即享免運，使用期限 30 天。" },
  { code: "FS500-14D", description: "滿 500 元免運費，使用期限 14 天。" },
  { code: "SHIP60-7D", description: "可折抵運費 60 元，使用期限 7 天。" },
  { code: "SHIP80-7D", description: "可折抵運費 80 元，使用期限 7 天。" },
  { code: "FIX100-7D", description: "滿 600 元現折 100 元，使用期限 7 天。" },
  {
    code: "FIX200-14D",
    description: "滿 1000 元現折 200 元，使用期限 14 天。",
  },
  { code: "BP100-14D", description: "贈送 100 點紅利點數，可用於下次消費。" },
  { code: "BP200-14D", description: "贈送 200 點紅利點數，可用於下次消費。" },
  { code: "BP300-30D", description: "贈送 300 點紅利點數，30 天內領取。" },
  { code: "D88-3D", description: "限時 88 折券，使用期限 3 天。" },
  { code: "D70-3D", description: "限時 7 折券，使用期限 3 天。" },
  { code: "D95-1H", description: "95 折快閃券，有效時間僅 1 小時！" },
  { code: "D99-1H", description: "99 折快閃券，限時 1 小時使用。" },
  { code: "FS1500-60D", description: "滿 1500 元免運，使用期限 60 天。" },
];

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
  <div
    class="md:w-[900px] py-5 flex flex-wrap md:flex-row flex-col h-auto mx-auto my-7 shadow-2xl rounded-xl bg-[#eeeded]"
  >
    <div
      class="select-option w-full !border-green-3px flex md:w-[50%] justify-center items-center flex-col md:gap-3 gap-1"
    >
      <div class="payment-form w-[250px] md:w-[400px] border">
        <h2>選擇優惠方式</h2>

        <fwb-radio
          v-model="picked"
          label="會員點數折抵"
          name="list-radio"
          value="Svelte"
          class="md:!w-[270px] w-[150px] border p-1 my-2 bg-amber-300"
        />

        <fwb-radio
          v-model="pickedCoupons"
          label=""
          name="list-radio"
          value="Vue JS"
          class="md:!w-[270px] w-full border p-1 my-2 bg-amber-300"
          @click="showModal"
        >
          優惠卷
        </fwb-radio>
      </div>
      <div class="payment-form w-[250px] md:!w-[400px] border">
        <h2>選擇付款方式</h2>

        <fwb-radio
          v-model="picked"
          label="貨到付款"
          name="list-radio"
          value="Svelte"
          class="md:!w-[270px] border p-1 my-2 bg-amber-300"
        />

        <fwb-radio
          v-model="picked"
          label="信用卡線上付清"
          name="list-radio"
          value="Vue JS"
          class="md:!w-[270px] border p-1 my-2 bg-amber-300"
        />
      </div>
      <div class="send-form w-[250px] md:!w-[400px] border">
        <h2>選擇配送方式</h2>
        <!--
        <fwb-radio
          v-model="picked"
          label="超商取貨"
          name="list-radio"
          value="Svelte"
          class="md:!w-[270px] border p-1 my-2 bg-amber-300"
        /> -->

        <fwb-radio
          v-model="picked"
          label="宅配到府"
          name="list-radio"
          value="Vue JS"
          class="md:!w-[270px] border p-1 my-2 bg-amber-300"
        />

        <fwb-radio
          v-model="picked"
          label="郵寄"
          name="list-radio"
          value="React"
          class="md:!w-[270px] border p-1 my-2 bg-amber-300"
        />
      </div>
    </div>
    <div class="md:w-[50%] flex flex-1 justify-center items-center">
      <div
        class="md:w-[95%] h-[680px] mx-auto overflow-y-auto flex justify-center items-center"
      >
        <table class="md:w-[100%] mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>商品名稱<br />數量</th>
              <th>價格</th>
              <th>小計</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in cartItems"
              :key="item.name"
              class="overflow-y-auto"
            >
              <th>
                <div class="w-[70px] h-[70px] md:!w-[100px] md:!h-[100px]">
                  <img
                    :src="item.itemImage"
                    alt=""
                    class="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </th>
              <th>
                <div
                  class="w-[100px] flex flex-col justify-center items-center gap-2 mx-auto"
                >
                  <h2 class="text-sm">{{ item.itemName }}</h2>
                  <div class="flex justify-center items-center gap-3">
                    <h2>{{ item.itemQuantity }}</h2>
                  </div>
                </div>
              </th>
              <th>
                {{ item.itemPrice }}
              </th>
              <th v-if="item.itemQuantity === 1">
                {{ item.itemPrice }}
              </th>
              <th v-else="item.itemQuantity >= 2">
                {{ itemTotal }}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      class="w-full border border-green-500 rounded-md flex justify-between items-end"
    >
      <div
        class="border md:w-[700px] h-[100%] flex justify-center items-center flex-col gap-5"
      >
        <div class="flex border w-full justify-center items-center gap-5">
          <fwb-input
            v-model="name"
            placeholder="enter your first name"
            label="訂購人"
            class="w-[250px] !border"
          />
          <fwb-input
            v-model="name"
            placeholder="enter your first name"
            label="訂購人電話"
            class="w-[250px]"
          />
        </div>
        <div class="flex border w-full justify-center items-center gap-5">
          <fwb-input
            v-model="name"
            placeholder="enter your first name"
            label="郵遞區號"
            class="w-[250px] !border"
          />
          <fwb-input
            v-model="name"
            placeholder="enter your first name"
            label="寄送地址"
            class="w-[250px]"
          />
        </div>
      </div>
      <table class="PaymentTable">
        <tr>
          <!-- <td colspan="4"></td> -->
          <!-- <td>2</td>
          <td>3</td>
          <td>4</td> -->
        </tr>
        <tr>
          <td colspan="4">商品總金額：35555</td>
          <!-- <td>商品總金額：35555</td> -->
          <!-- <td>35555</td> -->
          <!-- <td>4c</td> -->
        </tr>
        <tr>
          <td colspan="4">運費：60</td>
          <!-- <td colspan="2">運費：60</td> -->
          <!-- <td>3e</td>
          <td>4f</td> -->
        </tr>
        <tr>
          <td colspan="4">優惠折抵：50</td>
          <!-- <td colspan="2">優惠折抵：50</td> -->
          <!-- <td>3d</td>
          <td>4j</td> -->
        </tr>
        <tr>
          <td colspan="4">會員折抵:60</td>
          <!-- <td colspan="2">會員折抵:60</td> -->
          <!-- <td>3k</td> -->
        </tr>
        <tr>
          <td colspan="4">總計：900</td>
          <!-- <td colspan="1">總計：900</td> -->
          <!-- <td>3t</td> -->
          <!-- <td>4m</td> -->
        </tr>
      </table>
    </div>
    <div
      class="w-full border border-green-500 rounded-md flex justify-end items-end"
    >
      <div class="w-[250px] flex justify-center items-center">
        <fwb-button
          @click="closeModal"
          class="w-[150px] h-[50px] bg-[#956bd0] !border !border-[4px]"
        >
          下訂單
        </fwb-button>
      </div>
    </div>
    <div class="couppon-modal !w-[300px]">
      <fwb-modal
        v-if="isShowModal"
        @close="closeModal"
        class="!border-[5px] !border-red-500"
      >
        <template #header>
          <div class="flex items-center text-lg">選擇優惠券</div>
        </template>
        <template #body>
          <div
            class="!border-[6px] !border-yellow-400 md:w-full w-[350px] !p-0"
          >
            <h2>運費優惠卷</h2>
            <div
              class="Coupons md:w-full w-[350px] relative !border-[3px] !border-blue-500"
              v-for="item in Coupons"
              :key="item.id"
            >
              <div
                class="ticket !border-[3px] h-[100px] !border-green-500 flex gap-3 my-2"
              >
                <div
                  class="title-box md:w-[450px] !border-[4px] !border-purple-600 w-[300px] h-[100px] text-center flex justify-center items-center flex-col bg-[#3fbea7]"
                >
                  <i
                    class="fa-solid fa-ticket md:text-7xl text-2xl text-[#055b46]"
                  ></i>
                  <h4 class="ticketTitle md:text-sm text-xs text-left">
                    {{ item.description }}卷
                  </h4>
                </div>
                <div
                  class="title-box w-full !border-[4px] !border-pink-500 flex justify-center items-center flex-col bg-white"
                ></div>
                <fwb-radio
                  @click="pickValue(item)"
                  label=""
                  name="list-radio"
                  :value="item.code"
                  class="flex justify-end items-center me-5"
                />
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div
            class="md:w-full w-[350px] flex justify-end gap-5 !border-[5px] !border-orange-500"
          >
            <fwb-button
              @click="closeModal"
              class="w-[68px] h-[44px] bg-[#e5e2e2] !border !border-[4px]"
            >
              取消
            </fwb-button>
            <fwb-button
              @click="closeModal"
              class="w-[68px] h-[44px] bg-[#956bd0] !border !border-[4px]"
            >
              確認
            </fwb-button>
          </div>
        </template>
        {{ pickedCoupons }}
      </fwb-modal>
    </div>
  </div>
</template>

<style scoped>
/* button {
  max-width: 68px;
  max-height: 44px;
  border: 2px solid #e5e2e2 !important;
} */
</style>
