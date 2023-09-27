<template>
    <!-- copas footer dari template kesini -->
    <p>This is footer</p>
</template>

<script>
	// contoh import file js
	// import "../../assets/plugins/bootstrap/bootstrap.min.js"
	// import "../../assets/plugins/slick/slick.min.js"
	// import "../../assets/plugins/slick/slick-animation.min.js"
	// import "../../assets/plugins/colorbox/jquery.colorbox.js"
	// import "../../assets/js/script.js"
	
	export default {
		name: "AppFooter",

		data () {
			return {
				year: new Date().getFullYear()
			}
		}
	}
</script>