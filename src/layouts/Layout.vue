<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';


</script>

<template>


<div class="container-layout w-full  flex justify-center  flex-col 	">
    <Header />

    <router-view class="flex-1"/>
    <!-- <Footer /> -->
</div>
</template>
