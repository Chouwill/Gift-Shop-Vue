import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getProducts } from "@/api/method";

const products = ref(null);

export const useProductStore = defineStore("product", () => {
  async function fetchProduct() {
    try {
      const res = await getProducts({});
      console.log(res.data);
      console.log(res.data.items);
      products.value = res.data.items;
    } catch (error) {
      console.log(error);
    }
  }

  fetchProduct();

  return { products, fetchProduct };
});
