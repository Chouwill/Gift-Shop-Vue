import { defineStore } from "pinia";
import { ref } from "vue";

import { getProducts } from "../api/method";

export const useProductStore = defineStore("products", () => {
  const products = ref([]);
  async function fetchProducts() {
    try {
      const res = await getProducts();

      // console.log(res);

      products.value = res.data.items;

      return products.value;  // 為何這裡要return

      console.log("ref", products.value);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    fetchProducts,
    products,
  };
});
