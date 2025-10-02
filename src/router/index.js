import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PriceView from '@/views/PriceView.vue'
import AboutView from '@/views/AboutView.vue'
import TermsView from '@/views/TermsView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import ErrorView from '@/views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/price',
      component: PriceView
    },
    {
      path: '/about',
      component: AboutView
    },
    {
      path: '/terms',
      component: TermsView
    },
    {
      path: '/privacy',
      component: PrivacyView
    },
    {
      path: '/error',
      component: ErrorView
    },

  ],
})

export default router
