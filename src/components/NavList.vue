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
  { id: 1, title: 'О нас', link: '/about' },
  { id: 2, title: 'Услуги', link: '/error' },
  { id: 3, title: 'Прайс лист', link: '/price' },
]


const footerItems = [
  { id: 1, title: 'О нас', link: '/about' },
  { id: 2, title: 'Услуги', link: '/error' },
  { id: 3, title: 'Прайс лист', link: '/price' },
  { id: 4, title: 'Политика конфиденциальности', link: '/privacy' },
  { id: 5, title: 'Пользовательское соглашение', link: '/terms' },

]
</script>

<style>

</style>