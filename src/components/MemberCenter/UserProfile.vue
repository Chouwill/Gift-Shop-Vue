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
  <div class="profile-from flex flex-col gap-3">
    <h2>我的檔案</h2>

    <div class="flex justify-start items-center gap-3">
      <label for="email">使用者帳號</label>
      <h2>{{ localProfile.email }}</h2>
    </div>
    <div class="flex justify-start items-center gap-3">
      <label for="email">姓名/暱稱</label>
      <input
        type="text"
        :value="localProfile.user_name"
        class="!border w-[150px] h-[30px]"
      />
    </div>
    <div class="flex justify-start items-center gap-3">
      <label for="email">郵件信箱</label>
      <h2>{{ localProfile.email }}</h2>
    </div>
    <div class="flex justify-start items-center gap-3">
      <label for="email">性別</label>
      <div class="flex gap-3">
        <div>
          <input
            type="radio"
            id="Man"
            name="Gender"
            value="男生"
            v-model="localProfile.gender"
          />
          <label for="Man">男生</label>
        </div>
        <div>
          <input
            type="radio"
            id="Girl"
            name="Gender"
            value="女生"
            v-model="localProfile.gender"
          />
          <label for="Girl">女生</label>
        </div>
        <div>
          <input
            type="radio"
            id="Other"
            name="Gender"
            value="其他"
            v-model="localProfile.gender"
          />
          <label for="Other">其他</label>
        </div>
      </div>
    </div>
    <div class="flex justify-start items-center gap-3">
      <label for="email">生日</label>
      <input type="date" name="" id="" class="!border w-[140px]" v-model="localProfile.birthday"/>
    </div>
    <button
      class="w-[100px] py-1 bg-amber-400 mx-auto mt-4 rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200"
    >
      儲存
    </button>
  </div>
</template>
