<script setup></script>

<template>
  <div>
    <div>我的檔案</div>

    <div class="py-4 flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <label for="email">使用者帳號</label>
        <input
          type="text"
          placeholder="You can't touch this"
          class="input !border"
          value="00000"
          disabled
        />
      </div>
      <div class="flex flex-col gap-1">
        <label for="email">姓名</label>
        <label class="input !border">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="text"
            required
            placeholder="Username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minlength="3"
            maxlength="30"
            title="Only letters, numbers or dash"
            class=""
          />
        </label>
      </div>
      <div class="flex flex-col gap-1">
        <label for="email">郵件信箱</label>
        <label class="input !border">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input type="email" placeholder="mail@site.com" required />
        </label>
        <div class="validator-hint hidden">Enter valid email address</div>
      </div>
      <div class="flex flex-col gap-2">
        <label for="birthday">出生日期</label>
        <input type="date" class="input !border" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email">性別</label>
        <div class="flex gap-3">
          <div class="flex gap-1">
            <input
              type="radio"
              name="radio-1"
              class="radio"
              checked="checked"
            />
            <div>男生</div>
          </div>
          <div class="flex gap-1">
            <input
              type="radio"
              name="radio-1"
              class="radio"
              checked="checked"
            />
            <div>女生</div>
          </div>
          <div class="flex gap-1">
            <input
              type="radio"
              name="radio-1"
              class="radio"
              checked="checked"
            />
            <div>其他</div>
          </div>
        </div>
      </div>
      <div class="flex justify-end"><button class="btn bg-amber-500 text-white">儲存變更</button></div>
    </div>
  </div>
</template>
