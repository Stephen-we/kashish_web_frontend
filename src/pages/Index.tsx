import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection"; // only preview
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection /> {/* only preview, not full details */}
      <VideoSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
