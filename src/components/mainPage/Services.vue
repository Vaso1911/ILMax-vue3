<template>
  <section class="services section-p">
    <div class="container">
      <h2 class="title">Наши услуги</h2>
      <p class="text-center col-md-8 offset-md-2 mb-5">
        Мы предоставляем широкий спектр юридических услуг, включая консультации, составление
        документов, представительство в судах, сопровождение сделок и защиту прав клиентов в различных правовых
        вопросах.
      </p>
      <CardList />
      <button class="btn btn-primary p-3 text-uppercase d-flex m-auto">Все услуги</button>
    </div>
  </section>
</template>

<script setup>
import CardList from '../ServicesList.vue';


</script>

<style scoped></style>