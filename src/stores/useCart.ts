import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getProducts } from "@/api/method";

export const useProductStore = defineStore("product", () => {
  const products = ref(null);

  const cartLists = ref([]);

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

  function addCart(item: any) {
    console.log(item);

    const findRepat = cartLists.value.find(function (findItem) {
      return findItem.id === item.id;
    });

    console.log("findRepat", findRepat);

    if (findRepat) {
      console.log("已存在", findRepat.quantity++);
      console.log("已存在", cartLists.value);
    } else {
      cartLists.value = [...cartLists.value, { ...item, quantity: 1 }];

      console.log(cartLists.value);
    }
  }

  function reduceQuantity(item) {
    console.log("減少", item);
    if (item.quantity <= 1) {
      // item.quantity = 1;
      const filterArray = cartLists.value.filter(function (filterItem) {
        return filterItem.id !== item.id;
      });

      console.log(filterArray);

      cartLists.value = filterArray;
    } else {
      item.quantity--;
    }

    console.log("減少", cartLists.value);
  }
  function addQuantity(item) {
    console.log("增加", item);
    item.quantity++;

    console.log("增加", cartLists.value);
  }

  return {
    products,
    fetchProduct,
    addCart,
    cartLists,
    reduceQuantity,
    addQuantity,
  };
});
