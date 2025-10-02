import { defineStore } from "pinia";
import { getProducts } from "../api/method";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
  }),

  getters: {
    allProducts: (state) => state.products, 
  },
  actions: {
    async fetchProducts() {
      try {
        const res = await getProducts();
        console.log(res);

        this.products = res.data.items;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
