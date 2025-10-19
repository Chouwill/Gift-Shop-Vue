<script setup>
import { ref } from "vue";
import { z } from "zod";
import { FwbButton, FwbModal, FwbInput } from "flowbite-vue";

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
    <fwb-button @click="showModal"> Open modal </fwb-button>

    <fwb-modal v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg"></div>
      </template>
      <template #body>
        <div
          class="mx-auto py-10 w-[45%] flex flex-col justify-center items-center gap-7 shadow-2xl rounded-xl bg-[#eeeded]"
        >
          <h2 class="text-xl">註冊表單</h2>
          <fwb-input
            v-model="registerFrom.email"
            placeholder=""
            label="email"
            class="w-[200px] bg-[#F1F5F9]"
            @blur="checkField('email')"
          />
          <p class="text-sm text-red-600" v-if="registerError.email">
            {{ registerError.email }}
          </p>
          <fwb-input
            v-model="registerFrom.password"
            placeholder=""
            label="密碼"
            class="w-[200px] bg-[#F1F5F9]"
            @blur="checkField('password')"
          />
          <p class="text-sm text-red-600" v-if="registerError.password">
            {{ registerError.password }}
          </p>
          <fwb-input
            v-model="registerFrom.confirmPassword"
            placeholder=""
            label="確認密碼"
            class="w-[200px] bg-[#F1F5F9]"
            @blur="checkField('confirmPassword')"
          />
          <p class="text-sm text-red-600" v-if="registerError.confirmPassword">
            {{ registerError.confirmPassword }}
          </p>
          <fwb-button @click="sendRegister" class="bg-[#956bd0]">
            註冊
          </fwb-button>
        </div>
      </template>
      <template #footer> </template>
    </fwb-modal>
  </div>
</template>
<style scoped>
label {
  text-align: center !important;
}
</style>
