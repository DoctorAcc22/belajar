<template>
  <body class="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">
    <HeaderBar></HeaderBar>

    <main id="main">
      <HeroSection></HeroSection>  
      
      <ProductFeatures></ProductFeatures>
      
      <PricingTable></PricingTable>
      
      <TestimonialsCarousel></TestimonialsCarousel>  
      
      <ContactForm></ContactForm>

      <FAQSection></FAQSection>

      <FooterNav></FooterNav>

      <CTAButton></CTAButton>

      <DownloadSection></DownloadSection>
      
      <TeamMembers></TeamMembers>

      <PrivacyPolicy></PrivacyPolicy>

      <TermsOfService></TermsOfService>

      <router-view></router-view>
    </main>
  </body>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductFeatures from './components/ProductFeatures.vue'
import PricingTable from './components/PricingTable.vue'
import TestimonialsCarousel from './components/TestimonialsCarousel.vue'
import ContactForm from './components/ContactForm.vue'
import FAQSection from './components/FAQSection.vue'
import FooterNav from './components/FooterNav.vue'
import CTAButton from './components/CTAButton.vue'
import DownloadSection from './components/DownloadSection.vue'
import TeamMembers from './components/TeamMembers.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import TermsOfService from './components/TermsOfService.vue'

export default {
  name: 'App',
  components: {
    HeaderBar,
    HeroSection,
    ProductFeatures,
    PricingTable,
    TestimonialsCarousel,
    ContactForm,
    FAQSection,
    FooterNav,
    CTAButton,
    DownloadSection,
    TeamMembers,
    PrivacyPolicy,
    TermsOfService
  }
}
</script>

<style src="./assets/bootstrap/css/bootstrap.min.css"></style>
<style src="./assets/bootstrap-icons/bootstrap-icons.css"></style>
<style src="./assets/glightbox/css/glightbox.min.css"></style>
<style src="./assets/swiper/swiper-bundle.min.css"></style>
<style src="./assets/aos/aos.css"></style>
<style src="./assets/css/main.css"></style>

<!-- <script src="./assets/bootstrap/js/bootstrap.bundle.min.js"></script> -->
<!-- <script src="./assets/glightbox/js/glightbox.min.js"></script> -->
<!-- <script src="./assets/purecounter/purecounter_vanilla.js"></script> -->
<!-- <script src="./assets/isotope-layout/isotope.pkgd.min.js"></script> -->
<!-- <script src="./assets/swiper/swiper-bundle.min.js"></script> -->
<!-- <script src="./assets/aos/aos.js"></script> -->
<!-- <script src="./assets/php-email-form/validate.js"></script> -->

<!-- <script src="./assets/js/main.js"></script> -->