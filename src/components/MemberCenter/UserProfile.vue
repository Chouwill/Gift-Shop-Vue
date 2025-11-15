<script setup>
import { onMounted, ref, computed } from "vue";
import { email } from "zod";

const userInfoProps = defineProps({
  userInfo: Object,
});

console.log("個人檔案", userInfoProps);

// const gender = computed({
//   get() {
//     userInfoProps.userInfo?.gender;
//   },
//   set(val) {

//   },
// });

const localProfile = ref({
  email: userInfoProps.userInfo?.email,
  user_name: userInfoProps.userInfo?.user_name,
  gender: userInfoProps.userInfo?.gender,
  birthday: userInfoProps.userInfo?.birthday,
});

// onMounted(() => {
//   if (userInfoProps.userInfo === null) {
//     localProfile.value = { ...userInfoProps.userInfo };
//     console.log("本地", localProfile.value);
//   }
// });

// const gender = computed({
//   get: () => userInfoProps.userInfo?.gender ?? '',
//   set: (val) => {
//     emit('update:userInfo', {
//       ...userInfoProps.userInfo,
//       gender: val
//     });
//   }
// });

// console.log("目前傳進來的是性別", gender.value);
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- 標題 -->
    <div class="pb-4 border-b border-slate-200">
      <h2 class="text-2xl font-semibold text-slate-800">我的檔案</h2>
    </div>

    <!-- 表單內容 -->
    <div class="flex flex-col gap-5">
      <!-- 使用者帳號 (唯讀) -->
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-700">使用者帳號</label>
        <div class="px-4 py-2 bg-slate-50 border border-slate-200 rounded text-slate-600">
          {{ localProfile.email }}
        </div>
      </div>

      <!-- 姓名/暱稱 -->
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-700">姓名/暱稱</label>
        <input
          type="text"
          :value="localProfile.user_name"
          placeholder="請輸入姓名或暱稱"
          class="px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-gray-400 transition-colors"
        />
      </div>

      <!-- 郵件信箱 (唯讀) -->
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-700">郵件信箱</label>
        <div class="px-4 py-2 bg-slate-50 border border-slate-200 rounded text-slate-600">
          {{ localProfile.email }}
        </div>
      </div>

      <!-- 性別 -->
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-700">性別</label>
        <div class="flex gap-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="Gender"
              value="男生"
              v-model="localProfile.gender"
              class="w-4 h-4 text-slate-800 focus:ring-gray-400"
            />
            <span class="text-sm text-slate-700">男生</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="Gender"
              value="女生"
              v-model="localProfile.gender"
              class="w-4 h-4 text-slate-800 focus:ring-gray-400"
            />
            <span class="text-sm text-slate-700">女生</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="Gender"
              value="其他"
              v-model="localProfile.gender"
              class="w-4 h-4 text-slate-800 focus:ring-gray-400"
            />
            <span class="text-sm text-slate-700">其他</span>
          </label>
        </div>
      </div>

      <!-- 生日 -->
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-slate-700">生日</label>
        <input
          type="date"
          v-model="localProfile.birthday"
          class="px-4 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-gray-400 transition-colors w-full md:w-auto"
        />
      </div>

      <!-- 儲存按鈕 -->
      <div class="flex justify-end pt-4">
        <button
          class="px-6 py-2 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-colors"
        >
          儲存變更
        </button>
      </div>
    </div>
  </div>
</template>
