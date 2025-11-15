<script setup></script>

<template>
  <footer class="w-full bg-slate-800 text-white py-12 mt-auto">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 品牌資訊 -->
        <div>
          <h3 class="text-2xl font-bold mb-4 text-amber-400">PPC</h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            時尚禮品,永恆魅力<br />
            為您精選最具品味的禮物
          </p>
        </div>

        <!-- 快速連結 -->
        <div>
          <h4 class="text-lg font-semibold mb-4">快速連結</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/" class="text-slate-300 hover:text-amber-400 transition-colors">
                首頁
              </router-link>
            </li>
            <li>
              <router-link to="/shop" class="text-slate-300 hover:text-amber-400 transition-colors">
                商城
              </router-link>
            </li>
            <li>
              <router-link to="/memberCenter" class="text-slate-300 hover:text-amber-400 transition-colors">
                會員中心
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 聯絡資訊 -->
        <div>
          <h4 class="text-lg font-semibold mb-4">聯絡我們</h4>
          <ul class="space-y-2 text-sm text-slate-300">
            <li>Email: contact@ppc.com</li>
            <li>Tel: (02) 1234-5678</li>
            <li>地址: 台北市信義區信義路五段7號</li>
          </ul>
        </div>
      </div>

      <!-- 版權資訊 -->
      <div class="mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
        <p>&copy; 2024 PPC Gift Shop. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
