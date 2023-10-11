import { createApp } from 'vue'
import App from './App.vue'
import HomeComponent from "./components/layouts/landing-page/HomeComponent.vue"
import LoginComponent from "./components/layouts/back-office/LoginComponent.vue"
import { createRouter, createWebHistory } from "vue-router"
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.config.globalProperties.$baseURL = "http://127.0.0.1:8000"
app.config.globalProperties.$apiURL = "http://127.0.0.1:8000/api"

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/login", name: 'login', component: LoginComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.AOS = new AOS.init()

app.use(AOS)
app.use(router)
app.mount('#app')