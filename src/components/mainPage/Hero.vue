<template>
  <section class="hero position-relative">
    <div class="wrapper  ">
      <h1 class="hero__title text-light text-center mb-5">
        Оказываем весь комплекс
        <span class="text-primary my-fs fw-bold">Юридических услуг</span>
        <span class="">для физических и юридических лиц с гарантией результата и прозрачной ценовой политикой,
          включая налоговое
          консультирование и защиту от недобросовестных действий контрагентов</span>
      </h1>
      <a
        class="btn btn-primary p-3 text-uppercase d-flex m-auto"
        href="/price"
      >Прайс лист</a>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(@/assets/img/hero.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;

  &__title {
    position: relative;
    font-size: 24px;
    z-index: 3;

    @media (max-width:768px) {
      font-size: 16px;
    }
  }

  @media (max-width:992px) {
    display: block;
    padding: 100px 0;
    height: auto;
    background-image: none;
    background-color: #161719;
  }

  a {
    width: max-content;
  }

  .wrapper {
    padding: 0 10px;
    max-width: clamp(320px, 100%, 1090px);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.65);
      z-index: 1;
    }

    .btn {
      position: relative;
      z-index: 3;
    }
  }

  .my-fs {
    font-size: 60px;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
}
</style>