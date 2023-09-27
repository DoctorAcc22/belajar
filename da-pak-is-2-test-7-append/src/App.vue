<template>
	<app-header />
		<router-view />
	<app-footer />
    <div style="apple-touch-icon"></div>
</template>

<script>
// pastikan sudah ada file yg mau di import
import AppHeader from "./components/layouts/AppHeader.vue"
import AppFooter from "./components/layouts/AppFooter.vue"

export default {
  name: 'App',
  
  mounted() {
    // // Tambahkan tautan favicon
    // const faviconLink = document.createElement('link');
    // faviconLink.href = require('../src/assets/img/favicon.png'); // Pastikan path-nya benar
    // faviconLink.rel = 'icon';
    // document.head.appendChild(faviconLink);

    // // Tambahkan tautan ikon sentuh
    // const appleTouchIconLink = document.createElement('link');
    // // appleTouchIconLink.href = require('../src/assets/img/apple-touch-icon.png'); // Pastikan path-nya benar
    // appleTouchIconLink.href = require('../src/assets/img/'); // Pastikan path-nya benar
    // appleTouchIconLink.rel = 'apple-touch-icon';
    // document.head.appendChild(appleTouchIconLink);


  },

  components: {
    AppHeader,
    AppFooter
  }
}
</script>