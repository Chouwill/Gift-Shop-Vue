<script setup></script>

<template>
  <div
    class="w-full flex flex-col md:flex-row border-y border-slate-200 md:min-h-[600px] bg-white"
  >
    <!-- 左側文字 -->
    <div
      class="flex-1 flex flex-col justify-center items-center p-12 bg-slate-50"
    >
      <h1
        class="text-5xl font-bold text-slate-900 leading-tight text-center mb-6"
      >
        時尚禮品<br />永恆魅力
      </h1>
      <div
        class="text-slate-700 text-lg leading-relaxed text-center space-y-3 max-w-md"
      >
        <p>探索我們的系列產品</p>
        <p>點擊即可個性化設計並添加您的風格</p>
        <p>只需點擊編輯文字或雙擊即可開始</p>
      </div>
      
      <button class="btn mt-8 px-8 py-3 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-500 transition-colors">立即選購</button>
    </div>

    <!-- 右側圖片 -->
    <div class="flex-1 relative min-h-[400px] md:min-h-0">
      <img
        class="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1974&auto=format&fit=crop"
        alt="時尚禮品展示"
      />
    </div>
  </div>
</template>
