import { ref } from "vue";
import { defineStore } from "pinia";
import { onLogin, getCoupons } from "@/api/method";

export const useAuthStore = defineStore("auth", () => {
  const userId = ref(null);
  const coupons = ref(null);

  async function onLoginForm(data: object) {
    try {
      const loginRes = await onLogin(data);
      console.log(loginRes);
      // console.log("userId", loginRes.data.user.id);

      userId.value = loginRes.data.user.id;

      return userId.value;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCoupons(userId: string) {
    try {
      const res = await getCoupons(userId);
      console.log("優惠卷res", res);
      coupons.value = res.data.items;

      console.log("回傳的優惠卷res", coupons.value);

    } catch (error) {
      console.log(error);
    }
  }

  return {
    onLoginForm,
    fetchCoupons,
  };
});
