<template>
  <section class="price section-p">
    <div class="container">
      <h2 class="title">Наши цены</h2>
      <p class="text-center col-md-8 offset-md-2 mb-5">
        Мы предоставляем широкий спектр юридических услуг, включая консультации, составление
        документов, представительство в судах, сопровождение сделок и защиту прав клиентов в различных правовых
        вопросах.
      </p>
      <PriceList />
      <a class="btn btn-primary p-3 text-uppercase d-flex m-auto" href="/price">Прайс лист</a>
    </div>
  </section>
</template>

<script setup>
import PriceList from '../PriceList.vue';


</script>

<style scoped>
a {
  width: max-content
}
</style>