<script setup>
import { ref } from "vue";
import { z } from "zod";
import { FwbButton, FwbModal, FwbInput } from "flowbite-vue";
import { useUserStore } from "../../store/Auth.ts";

const userStore = useUserStore();
const isShowModal = ref(false);
const name = ref("");

const registerFrom = ref({
  email: "",
  password: "",
  confirmPassword: "",
});
const registerSchema = z.object({
  email: z.string().email({
    message: "不符合email格式或未填寫",
  }),
  password: z.string().min(5, {
    message: "密碼最少長度為5",
  }),
  confirmPassword: z.string().min(5, {
    message: "請再次輸入密碼確認",
  }),
});

const registerError = ref({
  email: "",
  password: "",
});

function checkField(field) {
  console.log("註冊表單", registerFrom.value);

  const fieldResult = registerSchema.shape[field].safeParse(
    registerFrom.value[field]
  );

  console.log(fieldResult);

  if (fieldResult.success) {
    console.log("欄位驗證成功");
  } else {
    console.log("失敗");

    const errMsg = fieldResult.error.format();
    console.log("欄位驗證錯誤訊息", errMsg);

    registerError.value[field] = errMsg._errors[0];

    console.log(registerError.value[field]);
  }
}

function sendRegister() {
  const result = registerSchema.safeParse(registerFrom.value);

  if (result.success) {
    console.log("表單正確");
    userStore.onRegister(registerFrom.value)
  } else {
    console.log("未填寫");

    console.log(result);

    const errMsg = result.error.format();
    console.log("送出驗證錯誤", errMsg);
    registerError.value.email = errMsg.email._errors[0];
    registerError.value.password = errMsg.password._errors[0];
    registerError.value.confirmPassword = errMsg.confirmPassword._errors[0];

    console.log("送出驗證錯誤", registerError.value.email);
    console.log("送出驗證錯誤", registerError.value.password);
    console.log("送出驗證錯誤", registerError.value.confirmPassword);
  }
}

function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}
</script>

<template>
  <div class="authModal">
    <button
      @click="showModal"
      class="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-slate-200 transition-colors"
    >
      註冊
    </button>

    <fwb-modal v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex justify-center items-center py-2">
          <h2 class="text-xl font-semibold text-slate-800">會員註冊</h2>
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
                v-model="registerFrom.email"
                @blur="checkField('email')"
              />
              <p class="text-sm text-red-600 mt-1" v-if="registerError.email">
                {{ registerError.email }}
              </p>
            </div>

            <!-- 密碼欄位 -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">
                密碼
              </label>
              <input
                type="password"
                placeholder="請輸入密碼 (至少 5 個字元)"
                class="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-gray-400 transition-colors"
                v-model="registerFrom.password"
                @blur="checkField('password')"
              />
              <p class="text-sm text-red-600 mt-1" v-if="registerError.password">
                {{ registerError.password }}
              </p>
            </div>

            <!-- 確認密碼欄位 -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">
                確認密碼
              </label>
              <input
                type="password"
                placeholder="請再次輸入密碼"
                class="w-full px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-gray-400 transition-colors"
                v-model="registerFrom.confirmPassword"
                @blur="checkField('confirmPassword')"
              />
              <p class="text-sm text-red-600 mt-1" v-if="registerError.confirmPassword">
                {{ registerError.confirmPassword }}
              </p>
            </div>

            <!-- 註冊按鈕 -->
            <button
              @click="sendRegister"
              class="w-full py-2.5 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-colors mt-4"
            >
              註冊
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
