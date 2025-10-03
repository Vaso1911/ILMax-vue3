
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const redirect = sessionStorage.getItem('redirect');
if (redirect) {
    sessionStorage.removeItem('redirect');
    router.replace(redirect);
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
