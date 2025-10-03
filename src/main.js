
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.pathname) {
  history.replaceState(null, null, redirect);
}


app.use(createPinia())
app.use(router)

app.mount('#app')
