<template>
  <section class="about section-p">
    <div class="container about__container">
      <div class="about__wrapper">
        <h2 class="title">Компания&nbsp;<span class="text-primary">ИлМакс</span></h2>
        <p>Основанная в Калининграде более 10 лет назад, наша компания начинала с оказания базовых юридических
          консультаций для местных жителей.</p>
        <p>Сегодня мы c лёгкостью решаем самые актуальные проблемы: защищаем права работников при незаконном
          увольнении, помогаем восстановиться на работе и взыскать компенсации. Также сопровождаем вопросы воинского
          учета, оформляем отсрочки и решаем спорные ситуации с военкоматами. Активно работаем с пенсионными вопросами -
          помогаем досрочно оформить пенсию, пересчитать размер выплат и защищаем права пенсионеров в суде.</p>
        <p>В будущем планируем расширяться и внедрять цифровые технологии для еще более эффективной
          правовой помощи клиентам.</p>
      </div>
      <div class="wrapper-map">
        <div
          id="map"
          style="height: 100%;"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
initMap();

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
  const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

  const map = new YMap(
    document.getElementById('map'),
    {
      location: {
        center: [20.503837, 54.695078],
        zoom: 18
      }
    },
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

  const marker = new YMapDefaultMarker({
    coordinates: [20.503837, 54.695078],
    title: 'ИлМакс',
    subtitle: 'Юридическая компания',
    color: '#1F6BFF',
  });

  map.addChild(marker);
}
</script>

<style scoped lang="scss">
.about {

  &__container {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 1200px) {
      display: block;
    }
  }

  &__wrapper {
    width: 100%;
  }

}


.wrapper-map {
  width: 100%;
  height: 350px;
  box-shadow: 0 0 6px 2px #0D6EFD;
  overflow: hidden;

  @media (max-width: 1200px) {
    height: 300px;
  }

  @media (max-width: 576px) {
    margin: 0 auto;
    width: 80%;
  }
}

.title {
  margin: 0;
  margin-bottom: 34px;

  &::after {
    left: 0;
    transform: translateX(0);
  }

  @media (max-width: 576px) {
    display: block;
  }

}
</style>