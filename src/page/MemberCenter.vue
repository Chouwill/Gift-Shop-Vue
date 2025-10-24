<script setup>
import { FwbButtonGroup, FwbButton, FwbInput, FwbRadio } from "flowbite-vue";
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <div class="md:w-[1200px] !border mx-auto my-5">
    <h2 class="text-center text-4xl">會員中心</h2>
    <main class="!border w-full flex">
      <div class="menuBar w-[300px] h-[500px] !border flex flex-col gap-3">
      <fwb-button>我的帳戶 56<i class="fa-solid fa-diamond"></i></fwb-button>
      <fwb-button>訂單總覽</fwb-button>
      <fwb-button>我的優惠卷</fwb-button>
      <!-- <fwb-button color="alternative">Button Alternative</fwb-button>
      <fwb-button color="red">Button Red</fwb-button> -->
    </div>
      <div class="w-[900px] !border">
        <div class="profile">
          <h2>我的檔案</h2>
          <div class="profile-from flex flex-col gap-5">
            <div class="flex !border">
              <label for="email">使用者帳號</label>
              <h2>XXXP</h2>
            </div>
            <div class="flex !border">
              <label for="email">姓名/暱稱</label>
              <input type="text" />
            </div>
            <div class="flex !border">
              <label for="email">郵件信箱</label>
              <h2>XXXP</h2>
            </div>
            <div class="flex !border">
              <label for="email">性別</label>
              <fwb-radio class="!border !w-[150px]" v-model="picked" name="Man" label="男生" value="Man" />
              <fwb-radio class="!border !w-[150px]" v-model="picked" name="Girl" label="女生" value="Woman" />
              <fwb-radio class="!border !w-[150px]" v-model="picked" name="Other" label="其他" value="Other" />
            </div>
            <div class="flex !border">
              <label for="email">生日</label>
              <input type="date" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>
