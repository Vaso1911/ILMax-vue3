<template>
  <Header />
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <!-- Заголовок -->
        <div class="text-center mb-5">
          <h1 class="display-4 fw-bold text-primary mb-3">Политика конфиденциальности</h1>
          <p class="lead text-muted">Дата последнего обновления: {{ lastUpdated }}</p>
        </div>

        <!-- Содержание -->
        <div class="card shadow-sm border-0">
          <div class="card-body p-4 p-md-5">
            <!-- Введение -->
            <section class="mb-5">
              <h2 class="h3 text-primary mb-3">1. Общие положения</h2>
              <p class="mb-3">
                1.1. Настоящая Политика конфиденциальности регулирует порядок обработки и защиты 
                персональных данных пользователей сайта.
              </p>
              <p>
                1.2. Целью политики является обеспечение защиты прав и свобод человека и гражданина 
                при обработке его персональных данных.
              </p>
            </section>

            <!-- Собираемые данные -->
            <section class="mb-5">
              <h2 class="h3 text-primary mb-3">2. Собираемая информация</h2>
              <div class="ps-3">
                <h4 class="h5 text-dark mb-2">2.1. Мы собираем:</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card bg-light border-0 mb-3">
                      <div class="card-body">
                        <h6 class="card-title">
                          <i class="bi bi-person-circle text-primary me-2"></i>
                          Персональные данные
                        </h6>
                        <ul class="list-unstyled small">
                          <li><i class="bi bi-dot me-1"></i>ФИО</li>
                          <li><i class="bi bi-dot me-1"></i>Контактные данные</li>
                          <li><i class="bi bi-dot me-1"></i>Электронная почта</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card bg-light border-0 mb-3">
                      <div class="card-body">
                        <h6 class="card-title">
                          <i class="bi bi-laptop text-primary me-2"></i>
                          Технические данные
                        </h6>
                        <ul class="list-unstyled small">
                          <li><i class="bi bi-dot me-1"></i>IP-адрес</li>
                          <li><i class="bi bi-dot me-1"></i>Тип браузера</li>
                          <li><i class="bi bi-dot me-1"></i>Время посещения</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Цели обработки -->
            <section class="mb-5">
              <h2 class="h3 text-primary mb-3">3. Цели обработки данных</h2>
              <div class="row text-center">
                <div class="col-md-4 mb-3">
                  <div class="p-3 border rounded h-100">
                    <i class="bi bi-chat-dots display-6 text-primary mb-3"></i>
                    <h5>Обратная связь</h5>
                    <p class="small">Для связи с пользователями</p>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="p-3 border rounded h-100">
                    <i class="bi bi-gear display-6 text-primary mb-3"></i>
                    <h5>Улучшение сервиса</h5>
                    <p class="small">Для анализа и улучшения работы сайта</p>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="p-3 border rounded h-100">
                    <i class="bi bi-shield-check display-6 text-primary mb-3"></i>
                    <h5>Безопасность</h5>
                    <p class="small">Для обеспечения безопасности данных</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Защита данных -->
            <section class="mb-5">
              <h2 class="h3 text-primary mb-3">4. Защита персональных данных</h2>
              <div class="alert alert-success">
                <h5 class="alert-heading">
                  <i class="bi bi-shield-lock me-2"></i>
                  Меры защиты
                </h5>
                <p class="mb-2">Мы принимаем следующие меры для защиты ваших данных:</p>
                <ul class="mb-0">
                  <li>Шифрование передаваемых данных</li>
                  <li>Регулярное обновление систем безопасности</li>
                  <li>Ограничение доступа к персональным данным</li>
                </ul>
              </div>
            </section>

            <!-- Права пользователя -->
            <section class="mb-4">
              <h2 class="h3 text-primary mb-3">5. Права пользователя</h2>
              <div class="ps-3">
                <p class="mb-3">Пользователь имеет право:</p>
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Право</th>
                        <th>Описание</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Доступ к данным</td>
                        <td>Получить информацию об обработке своих данных</td>
                      </tr>
                      <tr>
                        <td>Исправление</td>
                        <td>Требовать исправления неточных данных</td>
                      </tr>
                      <tr>
                        <td>Удаление</td>
                        <td>Требовать удаления персональных данных</td>
                      </tr>
                      <tr>
                        <td>Отзыв согласия</td>
                        <td>Отозвать согласие на обработку данных</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <!-- Контакты -->
            <div class="alert alert-warning mt-4">
              <h5 class="alert-heading">
                <i class="bi bi-exclamation-triangle me-2"></i>
                Важная информация
              </h5>
              <p class="mb-2">
                Для реализации своих прав или по вопросам обработки персональных данных 
                обращайтесь по контактам:
              </p>
              <ul class="list-unstyled mb-0">
                <li><i class="bi bi-telephone me-2"></i>+7-900-100-20-01</li>
                <li><i class="bi bi-envelope me-2"></i>ilmax@gogogo.rus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { ref } from 'vue'

const lastUpdated = ref('01 января 2024 года')
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

.table th {
  background-color: #f8f9fa;
  border-top: none;
}

.alert {
  border-radius: 10px;
}
</style>