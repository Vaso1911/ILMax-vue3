import { createRouter, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PriceView from '@/views/PriceView.vue'
import AboutView from '@/views/AboutView.vue'
import TermsView from '@/views/TermsView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import ErrorView from '@/views/ErrorView.vue'

const router = createRouter({
  history: createWebHashHistory (),
  routes: [
    {
      path: 'ILMax-vue3/#/',
      component: HomeView,
    },
    {
      path: 'ILMax-vue3/#/price',
      component: PriceView
    },
    {
      path: 'ILMax-vue3/#/about',
      component: AboutView
    },
    {
      path: 'ILMax-vue3/#/terms',
      component: TermsView
    },
    {
      path: 'ILMax-vue3/#/privacy',
      component: PrivacyView
    },
    {
      path: 'ILMax-vue3/#/error',
      component: ErrorView
    },

  ],
})

export default router
