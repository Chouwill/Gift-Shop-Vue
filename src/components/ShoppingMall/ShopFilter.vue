<script setup>
import { FwbAlert } from "flowbite-vue";
import { ref } from "vue";
import { FwbSelect } from "flowbite-vue";

const selected = ref("");
const countries = [
  { value: "us", name: "United States" },
  { value: "ca", name: "Canada" },
  { value: "fr", name: "France" },
];
</script>

<template>
  <div class="filter-container">
    <fwb-alert type="success">
      Success! You can now use Flowbite Vue in your Vue application 🎉
    </fwb-alert>

    <fwb-select
      v-model="selected"
      :options="countries"
      label="Select a country"
      size="md"
      class="w-[200px] bg-red-900"
    />
  </div>
</template>
