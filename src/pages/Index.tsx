import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StructuredData from "@/components/StructuredData";
import SEOHead from "@/components/SEOHead";

// Lazy load below-fold components for better LCP
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const HomeLoansContent = lazy(() => import("@/components/HomeLoansContent"));
const WhyPreviseSection = lazy(() => import("@/components/WhyPreviseSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CalendlySection = lazy(() => import("@/components/CalendlySection"));
const Footer = lazy(() => import("@/components/Footer"));
const GoHighLevelChat = lazy(() => import("@/components/GoHighLevelChat"));
const FloatingContactWidget = lazy(() => import("@/components/FloatingContactWidget"));

// Minimal loading fallback that doesn't affect layout
const SectionFallback = () => <div className="min-h-[200px]" />;

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
      <StructuredData type="loanOrCredit" />
      <Header />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <FeaturesSection />
        <WhyPreviseSection />
        <CalendlySection />
        <FAQSection />
        <HomeLoansContent />
        <AboutSection />
        <Footer />
        <GoHighLevelChat />
        <FloatingContactWidget />
      </Suspense>
    </div>
  );
};

export default Index;
