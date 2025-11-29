<script setup lang="ts"></script>

<template>
  <div class="w-full bg-gray-100 px-4 py-3 rounded-xl shadow-lg translate-y-[2px] transition duration-200">
    <div class="search-filter-box flex justify-center items-center ">
      <fieldset class="fieldset w-[400px] ">
        <legend class="fieldset-legend text-sm">商品分類</legend>
        <select class="select !border">
          <option disabled selected>全部分類</option>
          <option>Chrome</option>
          <option>FireFox</option>
          <option>Safari</option>
        </select>
        <!-- <span class="label">Optional</span> -->
      </fieldset>
      <fieldset class="fieldset w-[400px]">
        <legend class="fieldset-legend text-sm">價格篩選</legend>
        <select class="select !border">
          <option disabled selected>全部分類</option>
          <option>Chrome</option>
          <option>FireFox</option>
          <option>Safari</option>
        </select>
        <!-- <span class="label">Optional</span> -->
      </fieldset>
    </div>
  </div>
</template>
