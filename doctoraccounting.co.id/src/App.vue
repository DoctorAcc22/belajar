<template>
  <body class="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">
    <MenuComponent></MenuComponent>

    <main id="main">
      <BannerComponent></BannerComponent>  
      <ClientComponent></ClientComponent>  

      <router-view></router-view>
    </main>
  </body>
</template>

<script>
import MenuComponent from './components/Menu.vue'
import BannerComponent from './components/Banner.vue'
import ClientComponent from './components/Client.vue'

export default {
  name: 'App',
  components: {
    MenuComponent,
    BannerComponent,
    ClientComponent
  }
}
</script>

<style src="./assets/bootstrap/css/bootstrap.min.css"></style>
<style src="./assets/bootstrap-icons/bootstrap-icons.css"></style>
<style src="./assets/glightbox/css/glightbox.min.css"></style>
<style src="./assets/swiper/swiper-bundle.min.css"></style>
<style src="./assets/aos/aos.css"></style>
<style src="./assets/css/main.css"></style>