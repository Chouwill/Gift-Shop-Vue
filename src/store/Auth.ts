import { defineStore } from "pinia";
import Cookies from "js-cookie";
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
      console.log("登入token", res.data.token);
      Cookies.set("token", res.data.token, {
        expires: 3,
        secure: true, 
        sameSite: "Strict", 
      });
    } catch (e) {
      console.log(e);
    }
  }
  async function onRegister(data: any) {
    try {
      const res = await useRegister(data);

      console.log(res);

      // userData.value = res.data.user;

      //   console.log("註冊資訊", userData.value);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    userData,
    onLogin,
    onRegister,
  };
});
