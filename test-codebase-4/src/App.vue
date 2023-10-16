<template>
    <div id="page-container" class="sidebar-inverse side-scroll page-header-fixed page-header-glass page-header-inverse main-content-boxed">
        <SideBar />
        <AppHeader />
        <RouterView />
        <AppFooter />
    </div>
</template>

<script>
import SideBar from "./components/SideBar.vue"
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"

export default {
    name: 'App',
    components: {
        SideBar,
        AppHeader,
        AppFooter
    }
}
</script>