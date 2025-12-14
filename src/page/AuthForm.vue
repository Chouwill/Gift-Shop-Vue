<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div class="card-body">
          <h2 class="text-lg text-center">會員登入</h2>
          <fieldset class="fieldset">
            <label class="label">Email</label>
            <input
              type="email"
              class="input"
              placeholder="Email"
              v-model="loginForm.email"
            />
            <label class="label">Password</label>
            <input
              type="password"
              class="input"
              placeholder="Password"
              v-model="loginForm.password"
            />
            <!-- <div><a class="link link-hover">Forgot password?</a></div> -->
            <button @click="onLogin" class="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

import { useAuthStore } from "@/stores/useAuth";

const authStore = useAuthStore();

const loginForm = reactive({
  email: "postmanTest@yahoo.com.tw",
  password: "12345",
});

async function onLogin() {

  const userId = await authStore.onLoginForm(loginForm);

  authStore.fetchCoupons(userId);

  // authStore.fetchCoupons(await authStore.onLoginForm(loginForm));
}
</script>
