<template>
  <Header />
  <section class="price-list section-p">
    <div class="container">
      <div class="row justify-content-between align-items-center mb-4">
        <div class="col-md-8">
          <h2 class="title mb-3">Прайс-лист услуг</h2>
          <p class="text-muted">
            Актуальные цены на юридические услуги. Стоимость может меняться в зависимости от сложности дела.
          </p>
        </div>
        <div class="col-md-4 text-md-end">
          <button 
            @click="downloadPriceList"
            class="btn btn-primary"
          >
            <i class="bi bi-download me-2"></i>
            Скачать прайс (TXT)
          </button>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Услуга</th>
              <th scope="col" class="text-end">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(service, index) in services" :key="service.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>
                <strong>{{ service.name }}</strong>
                <div class="text-muted small mt-1">{{ service.description }}</div>
              </td>
              <td class="text-end">
                <span class="fw-bold fs-5">{{ formatPrice(service.price) }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-4 p-3 bg-light rounded">
        <small class="text-muted">
          * Цены указаны в рублях. Окончательная стоимость определяется после консультации.<br>
          ** Первичная консультация проводится бесплатно.
        </small>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    name: 'Первичная юридическая консультация',
    description: 'Анализ документов, оценка перспектив дела, разработка стратегии',
    price: 0
  },
  {
    id: 2,
    name: 'Составление искового заявления',
    description: 'Подготовка и оформление иска с учетом всех процессуальных требований',
    price: 5000
  },
  {
    id: 3,
    name: 'Представительство в суде первой инстанции',
    description: 'Участие в одном судебном заседании',
    price: 15000
  },
  {
    id: 4,
    name: 'Полное сопровождение дела в суде',
    description: 'Комплексное ведение дела от иска до получения решения',
    price: 45000
  },
  {
    id: 5,
    name: 'Составление апелляционной жалобы',
    description: 'Подготовка обжалования решения суда первой инстанции',
    price: 10000
  },
  {
    id: 6,
    name: 'Составление договора',
    description: 'Разработка индивидуального договора под ваши требования',
    price: 8000
  },
  {
    id: 7,
    name: 'Правовой анализ документов',
    description: 'Детальная экспертиза договоров, соглашений, нормативных актов',
    price: 7000
  },
  {
    id: 8,
    name: 'Защита прав потребителей',
    description: 'Взыскание компенсации, расторжение договора, защита интересов',
    price: 20000
  },
  {
    id: 9,
    name: 'Трудовые споры',
    description: 'Восстановление на работе, взыскание зарплаты, незаконное увольнение',
    price: 25000
  },
  {
    id: 10,
    name: 'Жилищные споры',
    description: 'Споры с управляющими компаниями, соседями, выселение',
    price: 30000
  },
  {
    id: 11,
    name: 'Наследственные дела',
    description: 'Оформление наследства, оспаривание завещания, раздел имущества',
    price: 25000
  },
  {
    id: 12,
    name: 'Семейные споры',
    description: 'Развод, раздел имущества, алименты, определение места жительства детей',
    price: 28000
  }
])

const formatPrice = (price) => {
  if (price === 0) return 'Бесплатно'
  return `${price.toLocaleString('ru-RU')} ₽`
}

const downloadPriceList = () => {
  // Формируем содержимое TXT файла
  let content = 'ПРАЙС-ЛИСТ ЮРИДИЧЕСКИХ УСЛУГ\n'
  content += 'Юридическая компания "ИлМакс"\n'
  content += `Актуально на: ${new Date().toLocaleDateString('ru-RU')}\n\n`
  
  content += '№ | Услуга | Стоимость\n'
  content += '--|--------|----------\n'
  
  services.value.forEach((service, index) => {
    const price = service.price === 0 ? 'Бесплатно' : `${service.price.toLocaleString('ru-RU')} ₽`
    content += `${index + 1} | ${service.name} | ${price}\n`
    content += `  | ${service.description} |\n`
  })
  
  content += '\n* Цены указаны в рублях\n'
  content += '** Окончательная стоимость определяется после консультации\n'
  content += '*** Первичная консультация проводится бесплатно\n\n'
  content += 'Контакты: +7 (XXX) XXX-XX-XX | example@ilmaks.ru'
  
  // Создаем и скачиваем файл
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `price-list-ilmaks-${new Date().toISOString().split('T')[0]}.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.price-list {
  background-color: #f8f9fa;
}

.table-responsive {
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.table th {
  border: none;
  font-weight: 600;
}

.table td {
  vertical-align: middle;
}

.btn-primary {
  background-color: #0d6efd;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  transform: translateY(-1px);
  transition: all 0.3s ease;
}
</style>