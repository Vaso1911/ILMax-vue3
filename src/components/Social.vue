<template>
  <ul class="list-reset social">
    <li class="social__item">
      <a
        href="#"
        class="social__link d-flex align-items-center"
      >
        <img
          src="@/assets/img/telegram.png"
          alt="Юридическая компания Илмакс телеграм"
        >
        <span class="social__text">Наш telegram</span>
      </a>
    </li>
    <li class="social__item ">
      <a
        href="#"
        class="social__link d-flex align-items-center"
      >
        <img
          src="@/assets/img/max.png"
          alt="Юридическая компания Илмакс макс"
        >
        <span class="social__text">Мы в Max</span>
      </a>
    </li>
    <li class="social__item">
      <a
        href="#"
        class="social__link d-flex align-items-center"
      >
        <img
          src="@/assets/img/whatsapp.png"
          alt="Юридическая компания Илмакс ватсап"
        >
        <span class="social__text">Наш whatsapp</span>
      </a>
    </li>
  </ul>
</template>

<script setup>

</script>

<style scoped>
a span {
  transition: color 0.3s ease-in-out;
}

img {
  transition: scale 0.3s ease-in-out;
}

a:hover img {
  scale: 1.1;
}

a:hover span {
  color: #0D6EFD;
}
</style>