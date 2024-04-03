import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'


import 'primevue/resources/themes/lara-light-amber/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

//COMPONENTES PRIMEVUE
import Button from "primevue/button"
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Card from 'primevue/card';

const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)
app.component('Button',Button)
app.component('InputText',InputText)
app.component('Toast',Toast)
app.component('Card',Card)
app.use(createPinia())
app.use(router)
app.mount('#app')
