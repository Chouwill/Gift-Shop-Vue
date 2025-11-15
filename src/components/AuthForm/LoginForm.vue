<script setup>
import { ref } from "vue";
import { FwbButton, FwbModal, FwbInput } from "flowbite-vue";
import { z } from "zod";
import { useUserStore } from "../../store/Auth.ts";

const userStore = useUserStore();

const isShowModal = ref(false);
const name = ref("");

function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}

const loginFrom = ref({
  email: "postmanTest@yahoo.com.tw",
  password: "12345",
});

const LoginSchema = z.object({
  email: z.string().email({
    message: "不符合email格式或未填寫",
  }),
  password: z.string().min(5, {
    message: "密碼最少長度為5",
  }),
});

const loginError = ref({
  email: "",
  password: "",
});

function checkField(field) {
  console.log("登入表單", loginFrom.value);

  const fieldResult = LoginSchema.shape[field].safeParse(
    loginFrom.value[field]
  );

  console.log(fieldResult);

  if (fieldResult.success) {
    console.log("欄位驗證成功");
  } else {
    console.log("失敗");

    const errMsg = fieldResult.error.format();
    console.log("欄位驗證錯誤訊息", errMsg);

    loginError.value[field] = errMsg._errors[0];

    console.log(loginError.value[field]);
  }
}

function sendLogin() {
  console.log(userStore);

  const result = LoginSchema.safeParse(loginFrom.value);

  if (result.success) {
    console.log("表單正確");
    userStore.onLogin(loginFrom.value);
    setTimeout(() => {
      console.log("會員ＩＤ", userStore.userId);

      userStore.getPoint(userStore.userId);
    },7000);
  } else {
    console.log("未填寫");

    console.log(result);

    const errMsg = result.error.format();
    console.log("送出驗證錯誤", errMsg);
    loginError.value.email = errMsg.email._errors[0];
    loginError.value.password = errMsg.password._errors[0];

    console.log("送出驗證錯誤", loginError.value.email);
    console.log("送出驗證錯誤", loginError.value.password);
  }
}
</script>

<template>
  <div class="authModal">
    <button
      @click="showModal"
      class="px-5 py-2 bg-slate-800 text-white text-sm font-medium rounded hover:bg-slate-700 transition-colors"
    >
      登入
    </button>

    <fwb-modal v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex justify-center items-center py-2">
          <h2 class="text-xl font-semibold text-slate-800">會員登入</h2>
        </div>
      </template>

      <template #body>
        <div class="max-w-md mx-auto py-8 px-6">
          <div class="flex flex-col gap-5">
            <!-- Email 欄位 -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="請輸入 Email"
                class="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-gray-400 transition-colors"
                v-model="loginFrom.email"
                @blur="checkField('email')"
              />
              <p class="text-sm text-red-600 mt-1" v-if="loginError.email">
                {{ loginError.email }}
              </p>
            </div>

            <!-- 密碼欄位 -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">
                密碼
              </label>
              <input
                type="password"
                placeholder="請輸入密碼"
                class="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-gray-400 transition-colors"
                v-model="loginFrom.password"
                @blur="checkField('password')"
              />
              <p class="text-sm text-red-600 mt-1" v-if="loginError.password">
                {{ loginError.password }}
              </p>
            </div>

            <!-- 登入按鈕 -->
            <button
              @click="sendLogin"
              class="w-full py-2.5 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-colors mt-4"
            >
              登入
            </button>
          </div>
        </div>
      </template>

      <template #footer></template>
    </fwb-modal>
  </div>
</template>

<style scoped>
/* 移除舊的 !important 樣式 */
</style>
