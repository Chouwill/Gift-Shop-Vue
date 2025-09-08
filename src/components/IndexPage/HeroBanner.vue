<script setup></script>

<template>
  <div
    class="banner-box w-full flex flex-col md:flex-row my-5 bg-[#D3BBDD]  md:min-h-[700px] items-stretch"
  >
    <!-- 左側文字 -->
    <div class="banner-title flex-1 flex flex-col justify-center items-center p-6">
      <h2 class="text-5xl leading-normal text-center mb-4">
        時尚禮品 <br />永恆魅力
      </h2>
      <div class="text-black text-2xl leading-[3] text-center space-y-2">
        <p>探索我們的系列產品。</p>
        <p>點擊即可個性化設計並添加您的風格。</p>
        <p>只需點擊 '編輯文字' 或雙擊即可開始。</p>
      </div>
    </div>

    <!-- 右側圖片 -->
    <div class="banner-image flex-1 relative aspect-[4/3] md:aspect-auto">
      <img
        class="w-full h-full object-cover absolute inset-0"
        src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1974&auto=format&fit=crop"
        alt="禮物圖片"
      />
    </div>
  </div>
</template>
