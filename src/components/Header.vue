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
  <header class="w-full flex flex-wrap pt-4">
    <div
      class="logo w-1/2 md:w-full flex justify-center items-center bg-green-500 py-1"
    >
      <h2 class="w-full text-4xl text-center py-2">PPC</h2>
    </div>

    <div
      class="row w-1/2 md:w-full md:flex justify-start items-center ps-2 bg-blue-400"
    >
      <div class="search-box relative hidden md:block w-1/2">
        <input
          type="search"
          value="Search"
          class="w-1/3 py-2 ps-10 ms-7 border-b-[2px] border-black-300 bg-red-400"
        />
        <img
          class="w-5 absolute top-3 left-9"
          src="/src/assets/img/Search.svg"
          alt=""
        />
      </div>

      <div
        class="member w-full md:w-1/2 flex md:justify-end items-center gap-5 py-2 bg-yellow-500"
      >
        <div class="flex justify-end items-center gap-3 pe-7">
          <img class="w-8" src="/src/assets/img/User-center.svg" alt="" />

          <h2>Cart(0)</h2>
          <button class="md:hidden" @click="handleChange">
            <img
              v-show="menuBar"
              class="w-10"
              src="/src/assets/img/menu-bar.svg"
              alt=""
            />
            <img
              v-show="cancelBtn"
              class="w-10"
              src="/src/assets/img/menu-xmark.svg"
              alt=""
            />
          </button>
        </div>
        <!-- <button class="md:hidden" @click="handleChange">
          <img
            v-show="menuBar"
            class="w-12"
            src="/src/assets/img/menu-bar.svg"
            alt=""
          />
          <img
            v-show="cancelBtn"
            class="w-12"
            src="/src/assets/img/menu-xmark.svg"
            alt=""
          />
        </button> -->
      </div>
    </div>

    <div
      class="menu-link w-full hidden md:flex justify-center items-center gap-10"
    >
      <router-link to="/">首頁</router-link>
      <router-link to="/shop">商城</router-link>
    </div>
  </header>
</template>

<style scoped>
* {
  background: none !important;  
  background-color: transparent !important;
}
</style>
