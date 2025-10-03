<script setup>
import { ref } from "vue";
import { FwbInput } from "flowbite-vue";
import { FwbButton } from "flowbite-vue";

import { FwbSelect } from "flowbite-vue";
const name = ref("");

const selected = ref("");
const countries = [
  { value: "us", name: "United States" },
  { value: "ca", name: "Canada" },
  { value: "fr", name: "France" },
];
</script>

<template>
  <div class="filter-container w-full">
    <div
      class="filter-box border border-red-300 m-auto w-[90%] flex flex-wrap gap-2 justify-center items-center py-4md:flex md:flex-nowrap"
    >
      <div
        class="flex md:w-[45%] mt-3 justify-center items-center gap-4 mx-auto border border-green-300"
      >
        <fwb-input
          v-model="name"
          placeholder=""
          label="搜尋商品"
          class="md:w-260px w-[171px]"
        />
        <fwb-select
          v-model="selected"
          :options="countries"
          label="分類"
          class="md:w-[260px] w-[171px]"
        />
      </div>
      <div
        class="flex md:w-[45%] mt-3 justify-center items-center gap-4 mx-auto border border-green-300"
      >
        <fwb-input
          v-model="name"
          placeholder=""
          label="最低價"
          class="md:w-260px w-[171px]"
        />
        <fwb-input
          v-model="selected"
          :options="countries"
          label="最高價"
          class="md:w-[260px] w-[171px]"
        />
      </div>

      <div class="md:w-[10%] md:mt-10 flex justify-center items-center border">
        <fwb-button
          color="Light"
          class="md:[130px]my-auto text-center rounded-md bg-[#EAEAEA] text-black hover:opacity-80"
          >清除全部</fwb-button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  /* border: none !important; */
}
</style>
