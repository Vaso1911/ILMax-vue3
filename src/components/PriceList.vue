<template>
  <ul class="list-reset price-list gap-2 mb-5">
    <li
      v-for="item in cardItems"
      :key="item.id"
      class=""
    >
      <a href="/ILMax-vue3/#/price">
        <article class="card d-flex flex-column align-items-center text-center gap-3">
          <CardIcon />
          <h2 class="card__title fs-4">{{ item.title }}</h2>
          <p class="card__descr">{{ item.descr }}</p>
          <span class="card__price">{{ item.price ? `От ${item.price.toLocaleString('ru-RU')} Руб` :
            "Бесплатно"}}</span>
        </article>
      </a>
    </li>
  </ul>
</template>

<script setup>
import CardIcon from './icons/CardIcon.vue';

const cardItems = [
  { id: 1, title: 'Первичная консультация', descr: 'Подробный анализ вашей ситуации, разбор документов, разработка стратегии решения проблемы с учетом всех правовых нюансов', price: null },
  { id: 2, title: 'Составление документов', descr: 'Профессиональная подготовка исковых заявлений, жалоб, договоров, претензий и других юридических документов с гарантией качества', price: 3000 },
  { id: 3, title: 'Полное сопровождение дела', descr: 'Комплексное ведение вашего дела от первой консультации до получения решения суда, включая все судебные заседания и переговоры', price: 25000 },
  { id: 4, title: 'Защита прав работников', descr: 'Восстановление на работе, взыскание заработной платы, компенсация морального вреда при незаконном увольнении или нарушении трудовых прав', price: 15000 },
  { id: 5, title: 'Воинский учет', descr: 'Помощь в получении отсрочки, снятии с учета, обжаловании решений военкомата, сопровождение призывников и военнообязанных', price: 10000 },
  { id: 6, title: 'Пенсионные споры', descr: 'Оформление досрочной пенсии, перерасчет пенсионных выплат, обжалование отказа ПФР, защита прав пенсионеров в суде', price: 20000 }
]
</script>

<style scoped>
.price-list {
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
  background-color: rgba(13, 110, 253, 1);

}

span {
  margin-top: auto;
}

a * {
  color: var(--bs-white);
  transition: color 0.25s ease-in-out, background 0.25s ease-in-out;
}


a:hover * {
  color: var(--bs-primery);

}

a:hover .card {
  background-color: #F8F9FA;

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