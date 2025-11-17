<script setup>
import { ref } from "vue";
import { z } from "zod";
import { useUserStore } from "../../store/Auth.ts";

const userStore = useUserStore();
const isShowModal = ref(false);

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
  confirmPassword: "",
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
    userStore.onRegister(registerFrom.value);
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
  <div>
    <!-- 觸發按鈕 -->
    <button
      @click="showModal"
      class="px-5 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-amber-50 hover:text-amber-700 transition-colors"
    >
      註冊
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
            <h2 class="text-xl font-semibold text-slate-900">會員註冊</h2>
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
                  v-model="registerFrom.email"
                  @blur="checkField('email')"
                />
                <p
                  class="text-sm text-red-600 mt-1.5"
                  v-if="registerError.email"
                >
                  <i class="fa-solid fa-circle-exclamation mr-1"></i>
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
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  v-model="registerFrom.password"
                  @blur="checkField('password')"
                />
                <p
                  class="text-sm text-red-600 mt-1.5"
                  v-if="registerError.password"
                >
                  <i class="fa-solid fa-circle-exclamation mr-1"></i>
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
                  class="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  v-model="registerFrom.confirmPassword"
                  @blur="checkField('confirmPassword')"
                />
                <p
                  class="text-sm text-red-600 mt-1.5"
                  v-if="registerError.confirmPassword"
                >
                  <i class="fa-solid fa-circle-exclamation mr-1"></i>
                  {{ registerError.confirmPassword }}
                </p>
              </div>

              <!-- 服務條款 -->
              <div class="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  class="w-4 h-4 mt-0.5 text-amber-600 rounded focus:ring-amber-400"
                />
                <label for="terms" class="text-sm text-slate-600">
                  我已閱讀並同意
                  <a
                    href="#"
                    class="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    服務條款
                  </a>
                  及
                  <a
                    href="#"
                    class="text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    隱私權政策
                  </a>
                </label>
              </div>

              <!-- 註冊按鈕 -->
              <button
                @click="sendRegister"
                class="w-full py-3 bg-amber-600 text-white text-sm font-semibold rounded hover:bg-amber-500 transition-colors"
              >
                註冊
              </button>

              <!-- 分隔線 -->
              <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-slate-200"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-slate-500"
                    >已經有帳號了?</span
                  >
                </div>
              </div>

              <!-- 登入連結 -->
              <div class="text-center">
                <a
                  href="#"
                  class="text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  立即登入
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
