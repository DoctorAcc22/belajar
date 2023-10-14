<template>
  <AppSidebar />

  <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <AppHeader />
      <RouterView />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
import AppSidebar from "./components/AppSidebar.vue"
import AppFooter from "./components/AppFooter.vue"


export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>