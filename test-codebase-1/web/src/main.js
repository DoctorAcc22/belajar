import { createApp } from 'vue'
import App from './App.vue'
import LoginView from "./components/LoginView.vue"

import { createRouter, createWebHistory } from "vue-router"

const app = createApp(App)

const routes = [
    { path: "/", component: LoginView }, //Home
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.config.globalProperties.$baseURL = "http://127.0.0.1:8000"
app.config.globalProperties.$apiURL = "http://127.0.0.1:8000/api"

app.use(router)
app.mount('#app')