<script setup>
import { ref, computed } from "vue";
import {
  FwbRadio,
  FwbModal,
  FwbButton,
  FwbListGroup,
  FwbListGroupItem,
  FwbP,
} from "flowbite-vue";
import { getCoupons } from "../api/method";

const picked = ref();

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
</script>

<template>
  <div class="md:w-[1200px] !border mx-auto my-5">
    <div class="payment-form !w-[700px] !border">
      <h2>選擇優惠方式</h2>
      <fwb-list-group>
        <fwb-list-group-item>
          <fwb-radio
            v-model="picked"
            label="會員點數折抵"
            name="list-radio"
            value="Svelte"
            class="md:!w-[500px] border p-1 my-2 bg-amber-300"
          />
        </fwb-list-group-item>
        <fwb-list-group-item>
          <fwb-radio
            v-model="picked"
            label="優惠券"
            name="list-radio"
            value="Vue JS"
            class="md:!w-[500px] border p-1 my-2 bg-amber-300"
          >
            >
            <fwb-button @click="showModal"> Open modal </fwb-button>
          </fwb-radio>
        </fwb-list-group-item>
      </fwb-list-group>
    </div>
    <div class="payment-form !w-[700px] !border">
      <h2>選擇付款方式</h2>
      <fwb-list-group>
        <fwb-list-group-item>
          <fwb-radio
            v-model="picked"
            label="超商取貨付款"
            name="list-radio"
            value="Svelte"
            class="md:!w-[500px] border p-1 my-2 bg-amber-300"
          />
        </fwb-list-group-item>
        <fwb-list-group-item>
          <fwb-radio
            v-model="picked"
            label="信用卡線上付清"
            name="list-radio"
            value="Vue JS"
            class="md:!w-[500px] border p-1 my-2 bg-amber-300"
          />
        </fwb-list-group-item>
      </fwb-list-group>
    </div>
    <div class="send-form !w-[700px] !border">
      <h2>選擇配送方式</h2>
      <fwb-list-group>
        <fwb-list-group-item>
          <fwb-radio
            v-model="picked"
            label="超商取貨"
            name="list-radio"
            value="Svelte"
            class="md:!w-[500px] border p-1 my-2 bg-amber-300"
          />
        </fwb-list-group-item>
        <fwb-list-group-item>
          <fwb-radio
            v-model="picked"
            label="宅配到府"
            name="list-radio"
            value="Vue JS"
            class="md:!w-[500px] border p-1 my-2 bg-amber-300"
          />
        </fwb-list-group-item>
        <fwb-list-group-item>
          <fwb-radio
            v-model="picked"
            label="郵寄"
            name="list-radio"
            value="React"
            class="md:!w-[500px] border p-1 my-2 bg-amber-300"
          />
        </fwb-list-group-item>
      </fwb-list-group>
    </div>

    <fwb-modal v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">選擇優惠券</div>
      </template>
      <template #body>
        <h2>運費優惠卷</h2>
        <div class="Coupons relative" v-for="item in Coupons" :key="item.id">
          <div
            class="ticket !border !border-amber-600 h-[150px] flex gap-3 my-2"
          >
            <div
              class="title-box w-[450px] text-center flex justify-center items-center flex-col bg-[#3fbea7]"
            >
              <i class="fa-solid fa-ticket text-8xl text-[#055b46]"></i>
              <h4 class="ticketTitle text-left">{{ item.description }}卷</h4>
            </div>
            <div
              class="title-box w-[200px] flex justify-center items-center flex-col bg-white"
            ></div>
            <fwb-radio
              v-model="picked"
              label=""
              name="list-radio"
              value="Svelte"
              class="flex justify-end items-center me-5"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-between">
          <fwb-button @click="closeModal" color="alternative">
            Decline
          </fwb-button>
          <fwb-button @click="closeModal" color="green"> I accept </fwb-button>
        </div>
      </template>
    </fwb-modal>
  </div>
</template>

<style></style>
