import { defineStore } from "pinia";
import { ref } from "vue";

import { getProducts } from "../api/method";

export const useProductStore = defineStore("alerts", () => {
  const products = ref(null);
  async function fetchProducts() {
    try {
      const res = await getProducts();

      // console.log(res);

      products.value = res.data.items;

      // console.log("ref", products.value);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    fetchProducts,
    products,
  };
});
