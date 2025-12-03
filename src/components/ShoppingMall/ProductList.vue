<script setup lang="ts">
import { useProductStore } from "@/stores/useCart";

const props = defineProps({
  data: { type: Array, required: true },
});

console.log(props.data);

const productStore = useProductStore();
</script>

<template>
  <div
    class="w-full flex md:flex-row flex-col justify-center items-center flex-wrap my-5 gap-3"
  >
    <div
      class="row flex md:flex-row flex-col justify-center items-center"
      v-for="item in props.data"
      :key="item.id"
    >
      <div
        class="product-item md:w-[225px] w-[300px] flex flex-col justify-center items-center my-2 md:my-0"
      >
        <div class="product-img w-[225px] h-[225px]">
          <img
            :src="item.image_url"
            alt=""
            class="w-[225px] h-[225px] object-cover"
          />
        </div>
        <div class="product-title">
          <h2 class="text-center">{{ item.name }}</h2>
        </div>
        <div class="product-price">
          <h2 class="text-center">{{ item.price }}</h2>
        </div>

        <button
          class="btn flex  bg-amber-600 hover:bg-amber-500 w-[188px] h-[40px] justify-center items-center gap-3"
        @click="productStore.addCart(item)">
          <i class="fa-solid fa-cart-shopping text-white"></i>
          <h2 class="text-white">加入購物車</h2>
        </button>
      </div>
    </div>
  </div>
</template>
