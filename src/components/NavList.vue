<template>
  <nav class="nav" >
    <ul class="list-reset nav__list" :class="listClass">
      <li 
        v-for="item in navItems" 
        :key="item.id" 
        class="nav__item"
      >
        <a :href="item.link" class="nav__link">{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isHeader: {
    type: Boolean,
    default: true
  }
})


const navItems = computed(() => {
  return props.isHeader ? headerItems : footerItems
})

const listClass = computed(() => {
  return props.isHeader ? 'list-header' : 'list-footer'
})

const headerItems = [
  { id: 1, title: 'О нас', link: '/ILMax-vue3/#/about' },
  { id: 2, title: 'Услуги', link: '/ILMax-vue3/#/error' },
  { id: 3, title: 'Прайс лист', link: '/ILMax-vue3/#/price' },
]


const footerItems = [
  { id: 1, title: 'О нас', link: '/ILMax-vue3/#/about' },
  { id: 2, title: 'Услуги', link: '/ILMax-vue3/#/error' },
  { id: 3, title: 'Прайс лист', link: '/ILMax-vue3/#/price' },
  { id: 4, title: 'Политика конфиденциальности', link: '/ILMax-vue3/#/privacy' },
  { id: 5, title: 'Пользовательское соглашение', link: '/ILMax-vue3/#/terms' },

]
</script>

<style>

</style>