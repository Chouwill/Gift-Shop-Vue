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
  <div class="w-full bg-slate-50 border-y border-slate-200 py-6">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row gap-4 items-end">
        <!-- 搜尋 + 分類 -->
        <div class="flex flex-col md:flex-row gap-4 flex-1">
          <div class="flex-1">
            <label class="block text-sm font-medium text-slate-700 mb-2">
              搜尋商品
            </label>
            <input
              v-model="name"
              type="text"
              placeholder="請輸入商品名稱..."
              class="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          <div class="flex-1">
            <label class="block text-sm font-medium text-slate-700 mb-2">
              分類
            </label>
            <select
              v-model="selected"
              class="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-gray-400 transition-colors"
            >
              <option value="">全部分類</option>
              <option v-for="country in countries" :key="country.value" :value="country.value">
                {{ country.name }}
              </option>
            </select>
          </div>
        </div>

        <!-- 價格區間 -->
        <div class="flex flex-col md:flex-row gap-4 flex-1">
          <div class="flex-1">
            <label class="block text-sm font-medium text-slate-700 mb-2">
              最低價
            </label>
            <input
              v-model="name"
              type="number"
              placeholder="0"
              class="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          <div class="flex-1">
            <label class="block text-sm font-medium text-slate-700 mb-2">
              最高價
            </label>
            <input
              v-model="selected"
              type="number"
              placeholder="10000"
              class="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
        </div>

        <!-- 清除按鈕 -->
        <div class="flex items-center">
          <button
            class="px-6 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-slate-200 transition-colors"
          >
            清除全部
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 移除 debug border */
</style>
