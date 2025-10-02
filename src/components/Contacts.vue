<template>
  <ul class="list-reset contacts">
    <li 
      v-if="showAddress" 
      class="contacts__item"
    >
      <a
        class="contacts__link"
        href="#map"
      >
        <GeoIcon />
        <span class="contacts__text">г. Калининград, ​пр.Калинина 1-5, 1 этаж</span>
      </a>
    </li>
    <li class="contacts__item">
      <a
        class="contacts__link"
        href="tel:79001002001"
      >
        <PhoneIcon />
        <span class="contacts__text">+7-900-100-20-01</span>
      </a>
    </li>
    <li class="contacts__item">
      <a
        class="contacts__link"
        href="mailto:ilmax@gogogo.rus"
      >
        <MailIcon />
        <span class="contacts__text">ilmax@gogogo.rus</span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import GeoIcon from './icons/GeoIcon.vue';
import MailIcon from './icons/MailIcon.vue';
import PhoneIcon from './icons/PhoneIcon.vue';

defineProps({
  showAddress: {
    type: Boolean,
    default: false
  }
})
</script>