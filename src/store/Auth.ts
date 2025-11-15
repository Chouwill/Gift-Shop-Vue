import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { ref } from "vue";

import { useLogin, useRegister, getUserPoints } from "../api/method";

export const useUserStore = defineStore("alerts", () => {
  const userData = ref(null);
  const userId = ref(null);
  const userPoint = ref(null);
  async function onLogin(data: any) {
    try {
      const res = await useLogin(data);

      console.log(res);

      userData.value = res.data.user;
      userId.value = res.data.user.id;

      console.log("登入資訊", userData.value);
      localStorage.setItem("userInfo", JSON.stringify(userData.value));
      console.log("登入資訊ID", userId.value);
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

  // 查詢會員點數
  async function getPoint(userId: any) {
    try {
      const resPoint = await getUserPoints(userId);

      console.log(resPoint);

      userPoint.value = resPoint.data.points;

      localStorage.setItem("userPoint", JSON.stringify(userPoint.value));

      console.log(`會員：${userId},點數：${userPoint.value}`);

      // userData.value = res.data.user;
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
    userId,
    userPoint,
    onLogin,
    onRegister,
    getPoint,
  };
});
