<template>
  <div class="d-flex justify-content-center py-2 bg-primary text-light copyright" id="copyright">{{ copyright }}</div>
</template>

<script setup>
const dateYear = new Date().getFullYear();

const copyright = `Все права защищены ${dateYear}`
</script>

<style scoped>

</style>