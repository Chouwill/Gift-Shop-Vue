import { ref, } from "vue";
import { defineStore } from "pinia";
import { onLogin } from "@/api/method";

export const useAuthStore = defineStore("auth", () => {
  const userId = ref(null);

  async function onLoginForm(data: object) {
    try {
      const loginRes = await onLogin(data);
      console.log(loginRes);
      // console.log("userId", loginRes.data.user.id);

      userId.value = loginRes.data.user.id;


      console.log("userId",userId.value);

    } catch (error) {
      console.log(error);
    }
  }

  return {
    onLoginForm,
  };
});
