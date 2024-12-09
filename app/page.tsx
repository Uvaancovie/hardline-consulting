import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ParallaxScroll from "@/components/ParallaxScrolling";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
return (
  <div>
    <Navbar />
    <HeroSection/>
    <ParallaxScroll/>
    <ServicesSection/>
    <AboutSection/>
    <BenefitsSection/>
    <FAQSection/>
  </div>
);
}
