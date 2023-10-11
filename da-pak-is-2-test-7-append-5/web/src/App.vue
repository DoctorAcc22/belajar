<template>
	<AppHeader v-if="!isSignIn" />
	<RouterView />
	<AppFooter v-if="!isSignIn" />
</template>

<script>
// pastikan sudah ada file yg mau di import
import AppHeader from "./components/layouts/landing-page/AppHeader.vue"
import AppFooter from "./components/layouts/landing-page/AppFooter.vue"

export default {
	name: 'App',
	computed: {
		isSignIn() {
			return this.$route.name == 'signin'
		}
	},
	mounted() {
		const faviconLink = document.createElement('link');
		faviconLink.href = require('../src/assets/landing-page/img/favicon.png'); // Pastikan path-nya benar
		faviconLink.rel = 'icon';
		document.head.appendChild(faviconLink);

		const appleTouchIconLink = document.createElement('link');
		appleTouchIconLink.href = require('../src/assets/landing-page/img/apple-touch-icon.png'); // Pastikan path-nya benar    
		appleTouchIconLink.rel = 'apple-touch-icon';
		document.head.appendChild(appleTouchIconLink);
	},

	components: {
		AppHeader,
		AppFooter
	}
}
</script>