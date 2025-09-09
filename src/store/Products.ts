import { defineStore } from "pinia";
import { ref } from "vue";

import { getProducts } from "../api/method";

export const useProductStore = defineStore("alerts", () => {
  async function fetchProducts() {
    try {
      const res = await getProducts();

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    fetchProducts,
  };
});
