import { defineStore } from "pinia";
import { ref } from "vue";

import { useLogin, useRegister } from "../api/method";

export const useUserStore = defineStore("alerts", () => {
  const userData = ref(null);
  async function onLogin(data: any) {
    try {
      const res = await useLogin(data);

      console.log(res);

        userData.value = res.data.user;

      console.log("登入資訊", userData.value);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    userData,
    onLogin,
  };
});
