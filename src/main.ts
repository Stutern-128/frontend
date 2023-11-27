import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBL41gOZg3YwFjwJByqitRpI120tQaJr-8',
  }
})
app.mount('#app')