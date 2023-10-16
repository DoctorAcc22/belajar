<template>
    <main id="main">
        <HeroSection />

        <ClientSection />

        <AboutSection />

        <StatsSection />

        <!-- <ServicesSection /> -->

        <WhyUsSection />

        <FeaturesSection />

        <PortfolioSection />

        <PricingSection />

        <FaqSection />

        <TeamSection />

        <CallToActionSection />

        <TestimonialsSection />

        <RecentPostsSection />

        <ContactSection />
    </main>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import ClientSection from "../components/ClientSection.vue";
import AboutSection from "../components/AboutSection.vue";
import StatsSection from "../components/StatsSection.vue";
// import ServicesSection from "../components/ServicesSection.vue";
import WhyUsSection from "../components/WhyUsSection.vue";
import FeaturesSection from "../components/FeaturesSection.vue";
import PortfolioSection from "../components/PortfolioSection.vue";
import PricingSection from "../components/PricingSection.vue";
import FaqSection from "../components/FaqSection.vue";
import TeamSection from "../components/TeamSection.vue";
import CallToActionSection from "../components/CallToActionSection.vue";
import TestimonialsSection from "../components/TestimonialsSection.vue";
import RecentPostsSection from "../components/RecentPostsSection.vue";
import ContactSection from "../components/ContactSection.vue";

export default {
    name: "HomeView",

    components: {
        HeroSection,
        ClientSection,
        AboutSection,
        StatsSection,
        // ServicesSection,
        WhyUsSection,
        FeaturesSection,
        PortfolioSection,
        PricingSection,
        FaqSection,
        TeamSection,
        CallToActionSection,
        TestimonialsSection,
        RecentPostsSection,
        ContactSection,
    }
}
</script>