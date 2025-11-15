<script setup>
import { ref } from "vue";

const cancelBtn = ref(false);

const menuBar = ref(true);

function handleChange() {
  menuBar.value = !menuBar.value;

  cancelBtn.value = !cancelBtn.value;

  console.log(menuBar.value);
}
</script>

<template>
  <header class="w-full bg-white border-b-2 border-slate-200">
    <!-- 主要 Header 區 (Logo + 導航 + 功能) -->
    <div class="max-w-7xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between gap-8">
        <!-- Logo + 導航 (左側) -->
        <div class="flex items-center gap-8">
          <!-- Logo -->
          <router-link to="/" class="flex items-center">
            <h1 class="text-3xl font-bold text-slate-800 tracking-tight">PPC</h1>
          </router-link>

          <!-- 桌面版導航 -->
          <nav class="hidden md:flex items-center gap-6">
            <router-link
              to="/"
              class="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors"
            >
              首頁
            </router-link>
            <router-link
              to="/shop"
              class="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors"
            >
              商城
            </router-link>
          </nav>
        </div>

        <!-- 搜尋框 (中間,桌面版) -->
        <div class="hidden md:flex flex-1 max-w-md">
          <div class="relative w-full">
            <input
              type="search"
              placeholder="搜尋商品..."
              class="w-full py-2 pl-10 pr-4 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
            />
            <img
              class="w-5 h-5 absolute top-2.5 left-3 opacity-40"
              src="/src/assets/img/Search.svg"
              alt="搜尋"
            />
          </div>
        </div>

        <!-- 功能區 (右側) -->
        <div class="flex items-center gap-4">
          <!-- 會員中心 -->
          <router-link
            to="/memberCenter"
            class="hidden md:flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors"
          >
            <img class="w-5 h-5" src="/src/assets/img/User-center.svg" alt="會員" />
            <span class="text-sm font-medium">會員</span>
          </router-link>

          <!-- 購物車 -->
          <button class="flex items-center gap-2 px-3 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors">
            <i class="fa-solid fa-cart-shopping text-lg"></i>
            <span class="text-sm font-medium">0</span>
          </button>

          <!-- 手機版選單按鈕 -->
          <button
            class="md:hidden p-2 text-slate-700 hover:bg-slate-50 rounded transition-colors"
            @click="handleChange"
          >
            <i v-show="menuBar" class="fa-solid fa-bars text-xl"></i>
            <i v-show="cancelBtn" class="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>
      </div>

      <!-- 手機版搜尋框 -->
      <div class="md:hidden mt-4">
        <div class="relative w-full">
          <input
            type="search"
            placeholder="搜尋商品..."
            class="w-full py-2 pl-10 pr-4 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
          />
          <img
            class="w-5 h-5 absolute top-2.5 left-3 opacity-40"
            src="/src/assets/img/Search.svg"
            alt="搜尋"
          />
        </div>
      </div>
    </div>

    <!-- 手機版選單 (展開時顯示) -->
    <nav
      v-show="!menuBar"
      class="md:hidden border-t border-slate-200 bg-slate-50"
    >
      <div class="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
        <router-link
          to="/"
          class="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white hover:text-amber-600 rounded transition-colors"
          @click="handleChange"
        >
          首頁
        </router-link>
        <router-link
          to="/shop"
          class="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white hover:text-amber-600 rounded transition-colors"
          @click="handleChange"
        >
          商城
        </router-link>
        <router-link
          to="/memberCenter"
          class="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white hover:text-amber-600 rounded transition-colors flex items-center gap-2"
          @click="handleChange"
        >
          <img class="w-5 h-5" src="/src/assets/img/User-center.svg" alt="會員" />
          會員中心
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* 扁平化 Header 樣式 */
</style>
