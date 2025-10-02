<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 text-center">
          <div class="mb-4">
            <i class="bi bi-emoji-dizzy display-1 text-primary"></i>
          </div>
          <div class="mb-5">
            <h1 class="display-1 fw-bold text-primary">404</h1>
            <h2 class="h2 text-secondary mb-3">Страница не найдена</h2>
            <p class="lead text-muted">
              Извините, что-то пошло не так.
            </p>
          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button 
              class="btn btn-primary btn-lg px-5"
              @click="goHome"
            >
              <i class="bi bi-house me-2"></i>
              На главную страницу
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.btn-primary {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.4);
  }
  50% {
    box-shadow: 0 0 0 30px rgba(13, 110, 253, 0);
  }
}
</style>