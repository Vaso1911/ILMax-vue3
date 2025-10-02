<template>
  <ul class="list-reset services-list gap-2 mb-5">
    <li
      v-for="item in cardItems"
      :key="item.id"
      class=""
    >
      <a href="/services">
        <article class="card d-flex flex-column align-items-center text-center gap-3">
          <CardIcon />
          <h2 class="card__title fs-4">{{ item.title }}</h2>
          <p class="card__descr">{{ item.descr }}</p>
        </article>
      </a>
    </li>
  </ul>
</template>

<script setup>
import CardIcon from './icons/CardIcon.vue';

const cardItems = [
  { id: 1, title: 'Банкротство физических лиц', descr: 'Процедуру банкротства физических лиц в России регулирует закон «О несостоятельности (банкротстве)». ' },
  { id: 2, title: 'Сопровождение сделок', descr: 'Инициирование, оформление, осуществление сделки и достижение результата — это именно то, чем мы занимаемся каждый день.' },
  { id: 3, title: 'Корпоративные споры', descr: 'Корпоративные споры – споры, связанные с созданием юрлица, управлением или участием в нем' },
  { id: 4, title: 'Недвижимость и строительство', descr: 'Консультируем по различным вопросам в области недвижимости, включая градостроительное регулирование, земельные отношения' },
  { id: 5, title: 'Возврат страховых премий', descr: 'Для возврата страховой премии нужно подготовить следующий пакет документов: паспорт страхователя; оригинал страхового полиса' },
  { id: 6, title: 'Налоговое право и споры', descr: 'Сопровождение налоговых проверок на любой стадии, анализ и подготовка документов, защита при налоговых спорах.' }
]
</script>

<style scoped lang="scss">
.services-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width:768px) {
    grid-template-columns: 1fr;

  }
}

.card {
  position: relative;
  padding: 48px 24px;
  height: 100%;
}

a * {
  transition: color 0.25s ease-in-out;
}


a:hover * {
  color: var(--bs-white);

}

a:hover .card {
  background-color: rgba(13, 110, 253, 1);

  ::after {
    content: url(../assets/img/border.png);
    position: absolute;
    inset: 0;
    top: 48px;

    @media (max-width: 1400px) {
      content: '';
    }
  }
}

li {
  @media (max-width: 992px) {
    &:nth-last-child(-n+2) {
      display: none;
    }
  }

  @media (max-width:768px) {
    &:nth-last-child(-n+4) {
      display: none;
    }
  }
}
</style>