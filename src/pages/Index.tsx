import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyPreviseSection from "@/components/WhyPreviseSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CalendlySection from "@/components/CalendlySection";
import Footer from "@/components/Footer";
import GoHighLevelChat from "@/components/GoHighLevelChat";
import StructuredData from "@/components/StructuredData";
import SEOHead from "@/components/SEOHead";
import FloatingContactWidget from "@/components/FloatingContactWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="Previse Mortgage - Professional Mortgage Services in Pennsylvania | Home Loans & Refinancing"
        description="Expert mortgage lending services in Pennsylvania. Specializing in home loans, refinancing, FHA loans, and investment property financing with competitive rates and personalized service."
        keywords="mortgage lender, home loans, refinancing, FHA loans, Pennsylvania mortgage, Spring Grove PA, NMLS licensed, investment property loans, first time homebuyer, conventional loans, jumbo loans, USDA loans"
        canonicalUrl="https://previsemortgage.com"
      />
      <StructuredData type="organization" />
      <StructuredData type="webpage" data={{
        title: "Previse Mortgage - Professional Mortgage Services in Pennsylvania",
        description: "Expert mortgage lending services in Pennsylvania with competitive rates and personalized service",
        url: "https://previsemortgage.com"
      }} />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhyPreviseSection />
      <AboutSection />
      <CalendlySection />
      <FAQSection />
      <Footer />
      <GoHighLevelChat />
      <FloatingContactWidget />
    </div>
  );
};

export default Index;
