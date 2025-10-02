<template>
<Header />
<main class="main">
  <Hero />
<Services />
<About />
<Price />
</main>
<Footer :showAddress="true" />
</template>
<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import About from '@/components/mainPage/About.vue';
import Hero from '@/components/mainPage/Hero.vue';
import Price from '@/components/mainPage/Price.vue';
import Services from '@/components/mainPage/Services.vue';




</script>

<style></style>
