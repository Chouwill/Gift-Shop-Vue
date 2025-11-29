<script setup></script>

<template>
  <header class="w-full h-[72px] border flex justify-around items-center">
    <div
      class="left md:w-[270px] w-[70%] flex md:justify-around items-center border"
    >
      <div class="logo text-4xl font-bold">PPC</div>

      <div class="border hidden md:flex"><a href="#">首頁</a></div>
      <!-- <div class="border hidden md:flex"><a href="#">商城</a></div> -->
      <div class="border hidden md:flex">
        <router-link to="/ShoppingMall"> 商城</router-link>
      </div>
    </div>
    <div
      class="center w-[90%] md:flex md:justify-center md:items-center absolute md:static top-[80px]"
    >
      <div class="flex justify-center items-center gap-2 md:w-[60%] border">
        <div class="w-[85%] !border">
          <label class="input validator join-item">
            <svg
              class="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" placeholder="搜尋商品..." />
          </label>
        </div>
        <button class="btn btn-neutral join-item">查詢</button>
      </div>

      .
    </div>
    <div class="right flex justify-center items-center gap-7 md:w-[200px]">
      <div class="md:flex justify-center items-center hidden">
        <img
          class="w-7 h-7"
          src="../assset/icon/user-icon.svg"
          alt="使用者會員中心"
        />
        會員
      </div>
      <div class="flex justify-center items-center gap-2">
        <img
          class="w-7 h-7"
          src="../assset/icon/shopping_cart_ico.svg"
          alt="購物車"
        />
        0
      </div>

      <div class="md:hidden flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
    </div>
  </header>
</template>

<style>
* {
  border: none;
}
</style>
