<script setup>
import { ref } from "vue";
import { z } from "zod";
import { useUserStore } from "../../store/Auth.ts";

const userStore = useUserStore();
const isShowModal = ref(false);

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
    }, 7000);
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
  <div>
    <!-- 觸發按鈕 -->
    <button
      @click="showModal"
      class="px-5 py-2 bg-slate-800 text-white text-sm font-medium rounded hover:bg-slate-700 transition-colors"
    >
      登入
    </button>

    <!-- Modal 彈窗 -->
    <Transition name="modal">
      <div
        v-if="isShowModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-lg max-w-md w-full overflow-hidden">
          <!-- Header -->
          <div
            class="flex items-center justify-between p-6 border-b border-slate-200"
          >
            <h2 class="text-xl font-semibold text-slate-900">會員登入</h2>
            <button
              @click="closeModal"
              class="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <i class="fa-solid fa-xmark text-2xl"></i>
            </button>
          </div>

          <!-- Body -->
          <div class="p-6">
            <div class="space-y-5">
              <!-- Email 欄位 -->
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="請輸入 Email"
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  v-model="loginFrom.email"
                  @blur="checkField('email')"
                />
                <p class="text-sm text-red-600 mt-1.5" v-if="loginError.email">
                  <i class="fa-solid fa-circle-exclamation mr-1"></i>
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
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  v-model="loginFrom.password"
                  @blur="checkField('password')"
                />
                <p
                  class="text-sm text-red-600 mt-1.5"
                  v-if="loginError.password"
                >
                  <i class="fa-solid fa-circle-exclamation mr-1"></i>
                  {{ loginError.password }}
                </p>
              </div>

              <!-- 額外功能連結 -->
              <div class="flex justify-between items-center text-sm">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    class="w-4 h-4 text-amber-600 rounded focus:ring-amber-400"
                  />
                  <span class="text-slate-600">記住我</span>
                </label>
                <a
                  href="#"
                  class="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  忘記密碼?
                </a>
              </div>

              <!-- 登入按鈕 -->
              <button
                @click="sendLogin"
                class="w-full py-3 bg-amber-600 text-white text-sm font-semibold rounded hover:bg-amber-500 transition-colors"
              >
                登入
              </button>

              <!-- 分隔線 -->
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-slate-200"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-slate-500">還沒有帳號?</span>
                </div>
              </div>

              <!-- 註冊連結 -->
              <div class="text-center">
                <a
                  href="#"
                  class="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  立即註冊
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Modal 淡入淡出動畫 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white {
  transform: scale(0.95) translateY(-20px);
}

.modal-leave-to .bg-white {
  transform: scale(0.95) translateY(-20px);
}
</style>
