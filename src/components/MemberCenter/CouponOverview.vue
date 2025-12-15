<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuth";

const authStore = useAuthStore();
</script>

<template>
  <div class="flex justify-center items-baseline">
    <div class="card bg-base-100 w-[95%] shadow-sm">
      <div class="card-body">
        <div>
          <h2 class="card-title">全館九折卷</h2>
          <p class="text-center">全館九折卷</p>
          <p class="text-center">有效期限:2025-12-10</p>
          <div>可使用</div>
        </div>
      </div>
    </div>
  </div>
</template>
