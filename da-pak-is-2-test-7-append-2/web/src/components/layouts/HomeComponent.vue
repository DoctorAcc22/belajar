<template>
    <HeroSection />

    <ClientSection />

    <AboutSection />

    <StatsSection />

    <ServicesSection />

    <FeaturesSection />

    <PortfolioSection />

    <PricingSection />

    <FaqSection />

    <TeamSection />

    <CallToActionSection />

    <TestimonialsSection />    

    <RecentPostsSection />

    <ContactSection />    
</template>

<script>
    import HeroSection from "./HeroSection.vue";
    import ClientSection from "./ClientSection.vue";
    import AboutSection from "./AboutSection.vue";
    import StatsSection from "./StatsSection.vue";
    import ServicesSection from "./ServicesSection.vue";
    import FeaturesSection from "./FeaturesSection.vue";
    import PortfolioSection from "./PortfolioSection.vue";
    import PricingSection from "./PricingSection.vue";
    import FaqSection from "./FaqSection.vue";
    import TeamSection from "./TeamSection.vue";
    import CallToActionSection from "./CallToActionSection.vue";
    import TestimonialsSection from "./TestimonialsSection.vue";
    import RecentPostsSection from "./RecentPostsSection.vue";
    import ContactSection from "./ContactSection.vue";

	export default {
		name: "HomeComponent",
        
        components: {
            HeroSection,
            ClientSection,
            AboutSection,
            StatsSection,
            ServicesSection,
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