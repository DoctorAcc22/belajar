<template>
    <!-- copas footer dari template kesini -->
    <p>This is footer</p>
</template>

<script>
	import "../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
	import "../../assets/vendor/glightbox/js/glightbox.min.js"
	import "../../assets/vendor/purecounter/purecounter_vanilla.js"
	import "../../assets/vendor/isotope-layout/isotope.pkgd.min.js"
	import "../../assets/vendor/swiper/swiper-bundle.min.js"
	import "../../assets/vendor/aos/aos.js"
	import "../../assets/vendor/php-email-form/validate.js"
	import "../../assets/js/main.js"
	
	export default {
		name: "AppFooter",

		data () {
			return {
				year: new Date().getFullYear()
			}
		}
	}
</script>