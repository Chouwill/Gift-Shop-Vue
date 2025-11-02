<script setup>
import { FwbButtonGroup, FwbButton, FwbInput, FwbRadio } from "flowbite-vue";

</script>

<template>
  <div
    class="menuBar md:w-[300px] w-[400px] md:h-[350px] flex md:flex-col flex-row justify-start items-center gap-3 mt-5 bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300"
  >
    <fwb-button class="md:!w-[150px] md:mt-3"
      >我的帳戶 {{ userStore.userPoint }}<i class="fa-solid fa-diamond"></i
    ></fwb-button>
    <fwb-button class="md:!w-[150px]">訂單總覽</fwb-button>
    <fwb-button class="md:!w-[150px]">我的優惠卷</fwb-button>
    <!-- <fwb-button color="alternative">Button Alternative</fwb-button>
  <fwb-button color="red">Button Red</fwb-button> -->
  </div>
</template>
