import { createApp } from 'vue'
import App from './App.vue'

import HomeComponent from "./components/HomeComponent.vue"

import { createRouter, createWebHistory } from "vue-router"

const app = createApp(App)

const routes = [
	{ path: "/", component: HomeComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
app.use(router)

app.mount('#app')