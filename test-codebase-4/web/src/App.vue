<template>
    <div id="page-container" class="sidebar-inverse side-scroll page-header-fixed page-header-glass page-header-inverse main-content-boxed">
        <SideBar v-if="!isLogIn" />
        <LandingHeader v-if="!isLogIn" />
        <RouterView />
        <LandingFooter v-if="!isLogIn" />
    </div>
</template>

<script>
import SideBar from "./components/SideBar.vue"
import LandingHeader from "./components/LandingHeader.vue"
import LandingFooter from "./components/LandingFooter.vue"

export default {
    name: 'App',
	computed: {
		isLogIn() {
			return this.$route.name == 'login'
		}
	},
    components: {
        SideBar,
        LandingHeader,
        LandingFooter
    }
}
</script>