import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$baseURL = "http://127.0.0.1:8000"
app.config.globalProperties.$apiURL = "http://127.0.0.1:8000/api"

app.use(router)

app.mount('#app')