import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection"; // only preview
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import PebPromoSection from "@/components/sections/PebPromoSection";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection /> {/* only preview, not full details */}
      <PebPromoSection />
      <VideoSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
