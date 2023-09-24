import { createApp } from 'vue'
import App from './App.vue'
import HomeComponent from "./components/HomeComponent.vue"
import ProjectsComponent from "./components/ProjectsComponent.vue"
import ProjectDetailComponent from "./components/ProjectDetailComponent.vue"

import { createRouter, createWebHistory } from "vue-router"

const app = createApp(App)

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/projects", component: ProjectsComponent },
    { path: "/project/:id", component: ProjectDetailComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.config.globalProperties.$apiBaseURL = "http://127.0.0.1:8000"
app.config.globalProperties.$apiURL = "http://127.0.0.1:8000/api"

app.use(router)
app.mount('#app')