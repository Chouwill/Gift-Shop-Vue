<script setup>
import { computed, onMounted, ref } from "vue";
import cutAfterDot from "../../util/price";

const propsItems = defineProps(["card"]);

const cardItems = ref(propsItems.card);

// console.log("props", Array.isArray(propsItems));
// console.log("props", propsItems);
onMounted(() => {
  console.log("props", cardItems.value);
});

const selectGrid = computed(() => {
  return cardItems.value
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
});
</script>

<template>
  <div
    class="category-grid-box w-full mt-15 flex-col flex md:flex-wrap justify-center items-center"
  >
    <div
      class="grid-box mt-5 md:m-0 w-full md:w-[956px] flex flex-col md:flex-row md:flex-wrap md:odd:flex-row-reverse"
      v-for="item in selectGrid"
      :key="item.id"
    >
      <div
        class="md:w-1/2 flex justify-center items-center md:flex-col bg-[#F5F5F5] h-[478px]"
      >
        <h2 class="text-center">{{ item.name }}</h2>
        <br />
        <h2 class="text-center">${{ cutAfterDot(item.price) }}</h2>
      </div>
      <div class="md:w-1/2 bg-[#EFEFEF] h-[478px]">
        <img class="object-cover w-full h-full" :src="item.image_url" alt="" />
      </div>

      <!-- {{ propsItems }} -->
    </div>
  </div>
</template>
