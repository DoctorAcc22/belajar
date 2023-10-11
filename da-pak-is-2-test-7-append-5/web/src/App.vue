<template>
	<AppHeader v-if="!isLogin" />
	<RouterView />
	<AppFooter v-if="!isLogin" />
</template>

<script>
// pastikan sudah ada file yg mau di import
import AppHeader from "./components/layouts/landing-page/AppHeader.vue"
import AppFooter from "./components/layouts/landing-page/AppFooter.vue"

export default {
	name: 'App',
	computed: {
		isLogin() {
			return this.$route.name == 'login'
		}
	},
	mounted() {
		const faviconLink = document.createElement('link');
		faviconLink.href = require('../src/assets/img/favicon.png'); // Pastikan path-nya benar
		faviconLink.rel = 'icon';
		document.head.appendChild(faviconLink);

		const appleTouchIconLink = document.createElement('link');
		appleTouchIconLink.href = require('../src/assets/img/apple-touch-icon.png'); // Pastikan path-nya benar    
		appleTouchIconLink.rel = 'apple-touch-icon';
		document.head.appendChild(appleTouchIconLink);
	},

	components: {
		AppHeader,
		AppFooter
	}
}
</script>