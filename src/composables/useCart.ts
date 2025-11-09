import { ref, computed } from "vue";
import { getProducts } from "../api/method";
import axios from "axios";

const products = ref(null);
const cartList = ref([]);
export const useCart = () => {
  async function fetchProducts() {
    try {
      const res = await getProducts({});
      console.log(res.data);
      console.log(res.data.items);
      products.value = res.data.items;
    } catch (e) {
      console.log(e);
    }
  }
  fetchProducts();

  function addCart(item) {
    console.log(products.value);

    console.log(item, "已放入購物車");
    // const newObject = { ...nums.value, newProperty: item };
    // console.log(newObject);

    const findItem = cartList.value?.find((value: any) => value.id === item.id);

    console.log(findItem);

    if (findItem) {
      console.log("有重複，數量要＋＋");
      if (findItem.quantity >= findItem.stock) {
        console.log("庫存不足");
      } else {
        findItem.quantity++;
      }

      console.log("有重複，數量要＋＋購物車列表", cartList.value);
    } else {
      console.log("要加入購物車");

      cartList.value = [...cartList.value, { ...item, quantity: 1 }];
      console.log("購物車列表", cartList.value);
    }
  }
  function addQuantity(item: Object) {
    console.log(cartList.value);

    if (item.quantity > item.stock) {
      console.log("庫存不足");
    } else {
      item.quantity++;
    }
  }
  function deleteQuantity(item) {
    console.log("被點到的數量", item);
    if (item.quantity <= 1) {
      const filterResult = cartList.value.filter(
        (value) => value.id !== item.id
      );

      console.log("filterResult", filterResult);

      cartList.value = filterResult;
    } else {
      item.quantity--;
    }
  }

  return {
    products,
    cartList,
    addQuantity,
    addCart,
    deleteQuantity,
  };
};
