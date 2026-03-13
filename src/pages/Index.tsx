import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-bg">
      <Navbar />

      <HeroSection />

      <div id="about" />

      <SkillsSection />

      <ProjectsSection />

      <CertificationsSection />

      <EducationSection />

      
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;