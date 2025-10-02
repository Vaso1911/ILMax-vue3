<template>
  <Header />
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <!-- Заголовок -->
        <div class="text-center mb-5">
          <h1 class="display-4 fw-bold text-primary mb-3">Пользовательское соглашение</h1>
          <p class="lead text-muted">Дата последнего обновления: {{ lastUpdated }}</p>
        </div>

        <!-- Содержание -->
        <div class="card shadow-sm border-0">
          <div class="card-body p-4 p-md-5">
            <!-- Общие положения -->
            <section class="mb-5">
              <h2 class="h3 text-primary mb-3">1. Общие положения</h2>
              <div class="ps-3">
                <p class="mb-3">
                  1.1. Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между 
                  администрацией сайта и пользователем (далее — «Пользователь»).
                </p>
                <p class="mb-3">
                  1.2. Используя сайт, Пользователь выражает свое полное согласие с условиями настоящего Соглашения.
                </p>
                <p class="mb-3">
                  1.3. Если Пользователь не согласен с условиями Соглашения, он должен немедленно прекратить использование сайта.
                </p>
              </div>
            </section>

            <!-- Права и обязанности -->
            <section class="mb-5">
              <h2 class="h3 text-primary mb-3">2. Права и обязанности сторон</h2>
              <div class="ps-3">
                <h4 class="h5 text-dark mb-2">2.1. Пользователь обязуется:</h4>
                <ul class="list-group list-group-flush mb-3">
                  <li class="list-group-item border-0 ps-0">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Не нарушать права интеллектуальной собственности
                  </li>
                  <li class="list-group-item border-0 ps-0">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Не распространять вредоносное программное обеспечение
                  </li>
                  <li class="list-group-item border-0 ps-0">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    Соблюдать законодательство Российской Федерации
                  </li>
                </ul>

                <h4 class="h5 text-dark mb-2">2.2. Администрация обязуется:</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item border-0 ps-0">
                    <i class="bi bi-shield-check text-primary me-2"></i>
                    Обеспечивать работоспособность сайта
                  </li>
                  <li class="list-group-item border-0 ps-0">
                    <i class="bi bi-shield-check text-primary me-2"></i>
                    Защищать персональные данные пользователей
                  </li>
                  <li class="list-group-item border-0 ps-0">
                    <i class="bi bi-shield-check text-primary me-2"></i>
                    Предоставлять техническую поддержку
                  </li>
                </ul>
              </div>
            </section>

            <!-- Ответственность -->
            <section class="mb-5">
              <h2 class="h3 text-primary mb-3">3. Ответственность сторон</h2>
              <div class="ps-3">
                <p class="mb-3">
                  3.1. Пользователь несет ответственность за достоверность предоставляемой информации.
                </p>
                <p class="mb-3">
                  3.2. Администрация не несет ответственности за временные технические сбои в работе сайта.
                </p>
                <p class="mb-3">
                  3.3. Все споры решаются путем переговоров, а при недостижении согласия — в судебном порядке.
                </p>
              </div>
            </section>

            <!-- Заключительные положения -->
            <section class="mb-4">
              <h2 class="h3 text-primary mb-3">4. Заключительные положения</h2>
              <div class="ps-3">
                <p class="mb-3">
                  4.1. Соглашение вступает в силу с момента его принятия Пользователем.
                </p>
                <p class="mb-3">
                  4.2. Администрация оставляет за собой право вносить изменения в Соглашение без предварительного уведомления.
                </p>
                <p>
                  4.3. Новая редакция Соглашения вступает в силу с момента ее размещения на сайте.
                </p>
              </div>
            </section>

            <!-- Контактная информация -->
            <div class="alert alert-info mt-4">
              <h5 class="alert-heading">
                <i class="bi bi-info-circle me-2"></i>
                Контактная информация
              </h5>
              <p class="mb-2">По всем вопросам обращайтесь:</p>
              <ul class="list-unstyled mb-0">
                <li><i class="bi bi-telephone me-2"></i>Телефон: +7-900-100-20-01</li>
                <li><i class="bi bi-envelope me-2"></i>Email: ilmax@gogogo.rus</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Кнопка принятия -->
        <div class="text-center mt-4">
          <button class="btn btn-primary btn-lg" @click="acceptAgreement">
            <i class="bi bi-check-circle me-2"></i>
            Принять условия соглашения
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { ref } from 'vue'

const lastUpdated = ref('01 января 2024 года')

const acceptAgreement = () => {
  alert('Спасибо! Вы приняли условия пользовательского соглашения.')
  // Здесь можно добавить логику сохранения принятия соглашения
}
</script>

<style scoped>
h1 {
    @media (max-width: 576px) {
    font-size: 24px;
  }
}

.card {
  border-radius: 15px;
}

.list-group-item {
  background: transparent;
}

.alert {
  border-radius: 10px;
}
</style>