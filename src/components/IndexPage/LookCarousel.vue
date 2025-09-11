<script setup>
import { ref, onMounted, computed } from "vue";

const propsItems = defineProps(["card"]);

const cardItems = ref(propsItems.card);

onMounted(() => {
  console.log("props2", cardItems.value);
});

const computedItems = computed(() => {
  return cardItems.value.slice(0, 7);
});
</script>

<template>
  <div class="carousel-box w-full">
    <h2 class="text-center w-full text-5xl my-4">Look PPC</h2>

    <div
      class="carousel flex gap-4 w-full overflow-x-hidden md:overflow-x-visible"
    >
      <div
        class="md:w-[210px] md:h-[210px] w-full flex justify-center items-center flex-shrink-0"
        v-for="item in computedItems"
        :key="item.id"
      >
        <img
          class="md:w-[210px] md:h-[210px] w-[250px] h-[250px] object-cover first:ps-4 last:pe-4"
          :src="item.image_url"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
