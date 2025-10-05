<script setup>
import { ref, onMounted, computed } from "vue";

const props = defineProps(["card"]);

const page = ref(1);

const itemsGroup = 7;

function autoPlayCarousel() {
  //   setInterval(() => {
  //     page.value++;
  //   }, 2000);
}

function nextPage() {
  //   autoPlayCarousel();
  setInterval(() => {
    page.value++;
  }, 2000);
}
function returnPage() {
  page.value--;
}



const computedItems = computed(() => {
  return Array.isArray(props.card)
    ? props.card.slice(page.value - 1, page.value * itemsGroup)
    : [];
  //   return cardItems.value.slice(page - 1, page * itemsGroup);
});

nextPage();
</script>

<template>
  <div class="carousel-box w-full">
    <div class="text-center flex justify-center items-center gap-5 w-full my-4">
      <h2 class="text-4xl">Look</h2>
      <h2 class="text-4xl">PPC</h2>
      <button @click="nextPage">下一頁</button>
      <button @click="returnPage">上一頁</button>
    </div>

    <div class="carousel flex gap-4 w-full overflow-x-hidden">
      <div
        class="md:w-[210px] md:h-[210px] w-full flex justify-center items-center flex-shrink-0"
        v-for="item in computedItems"
        :key="item.id"
      >
        <img
          class="md:w-[250px] md:h-[250px] w-[250px] h-[250px] object-cover first:ps-4 last:pe-4"
          :src="item.image_url"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
