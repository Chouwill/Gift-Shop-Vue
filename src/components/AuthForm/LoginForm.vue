<script setup>
import { ref } from "vue";
import { FwbButton, FwbModal, FwbInput } from "flowbite-vue";
import { z } from "zod";

const isShowModal = ref(false);
const name = ref("");

function closeModal() {
  isShowModal.value = false;
}
function showModal() {
  isShowModal.value = true;
}

const loginFrom = ref({
  email: "",
  password: "",
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
  const result = LoginSchema.safeParse(loginFrom.value);

  if (result.success) {
    console.log("表單正確");
  } else {
    console.log("未填寫");

    console.log(result);

    const errMsg = result.error.format();
    console.log("送出驗證錯誤", errMsg);
    loginError.value.email = errMsg.email._errors[0];
    loginError.value.password = errMsg.password._errors[0];

    console.log("送出驗證錯誤",loginError.value.email);
    console.log("送出驗證錯誤",loginError.value.password);
    
  }
}
</script>

<template>
  <h2>登入表單</h2>
  <div class="authModal">
    <fwb-button @click="showModal"> Open modal </fwb-button>

    <fwb-modal v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">登入表單</div>
      </template>
      <template #body>
        <div
          class="mx-auto py-10 w-[45%] flex flex-col justify-center items-center gap-7 shadow-2xl rounded-xl bg-[#eeeded]"
        >
          <fwb-input
            placeholder=""
            label="email"
            class="w-[200px] bg-[#F1F5F9]"
            v-model="loginFrom.email"
            @blur="checkField('email')"
          />
          <p class="text-sm text-red-600" v-if="loginError.email">
            {{ loginError.email }}
          </p>
          <fwb-input
            placeholder=""
            label="密碼"
            class="w-[200px] bg-[#F1F5F9]"
            v-model="loginFrom.password"
            @blur="checkField('password')"
          />
          <p class="text-sm text-red-600" v-if="loginError.password">
            {{ loginError.password }}
          </p>
          <fwb-button class="bg-[#956bd0]" @click="sendLogin">
            登入
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
