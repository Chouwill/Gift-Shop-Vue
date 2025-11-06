<script setup>
import { ref, onMounted } from "vue";

// let orderList = ref(localStorage.getItem(JSON.parse("userInfo")));

</script>

<template>
  <div class="profile-from flex flex-col gap-3">
    <h2>訂單總覽</h2>

    <div class="flex justify-start items-center gap-3">
      <label for="email">使用者帳號</label>
      <h2>XXXP</h2>
    </div>
    <div class="flex justify-start items-center gap-3">
      <label for="email">姓名/暱稱</label>
      <input type="text" class="!border w-[150px] h-[30px]" />
    </div>
    <div class="flex justify-start items-center gap-3">
      <label for="email">郵件信箱</label>
      <h2>XXXP@gmail.com</h2>
    </div>
    <div class="flex justify-start items-center gap-3">
      <label for="email">性別</label>
      <div class="flex gap-3">
        <div>
          <input type="radio" id="Man" name="Gender" value="Man" />
          <label for="Man">男生</label>
        </div>
        <div>
          <input type="radio" id="Girl" name="Gender" value="Girl" />
          <label for="Girl">女生</label>
        </div>
        <div>
          <input type="radio" id="Other" name="Gender" value="Other" checked />
          <label for="Other">其他</label>
        </div>
      </div>
    </div>
    <div class="flex justify-start items-center gap-3">
      <label for="email">生日</label>
      <input type="date" name="" id="" class="!border w-[140px]" />
    </div>
    <button
      class="w-[100px] py-1 bg-amber-400 mx-auto mt-4 rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200"
    >
      儲存
    </button>
  </div>
</template>
