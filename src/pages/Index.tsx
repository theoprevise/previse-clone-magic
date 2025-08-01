import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CalendlySection from "@/components/CalendlySection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CalendlySection />
      <FAQSection />
      <Footer />
      {/* <ChatBot /> */}
    </div>
  );
};

export default Index;
