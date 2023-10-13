<template>
  <AppHeader />
  <AppSidebar />  
  <RouterView />
	<AppFooter />
</template>

<script>
import AppHeader from "./components/layouts/AppHeader.vue"
import AppSidebar from "./components/layouts/AppSidebar.vue"
import AppFooter from "./components/layouts/AppFooter.vue"

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>