import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StructuredData from "@/components/StructuredData";
import SEOHead from "@/components/SEOHead";

// Lazy load below-fold components for better LCP
const ValuePropsSection = lazy(() => import("@/components/ValuePropsSection"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const WhyPreviseSection = lazy(() => import("@/components/WhyPreviseSection"));
const CalendlySection = lazy(() => import("@/components/CalendlySection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const Footer = lazy(() => import("@/components/Footer"));
const GoHighLevelChat = lazy(() => import("@/components/GoHighLevelChat"));
const FloatingContactWidget = lazy(() => import("@/components/FloatingContactWidget"));

// Minimal loading fallback that doesn't affect layout
const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="Previse Mortgage - Professional Mortgage Services | Home Loans & Refinancing"
        description="Expert mortgage lending services. Specializing in home loans, refinancing, FHA loans, VA loans, and investment property financing with competitive rates and personalized service."
        keywords="mortgage lender, home loans, refinancing, FHA loans, VA loans, NMLS licensed, investment property loans, first time homebuyer, conventional loans, jumbo loans, DSCR loans"
        canonicalUrl="https://previsemortgage.com"
      />
      <StructuredData type="organization" />
      <StructuredData type="webpage" data={{
        title: "Previse Mortgage - Professional Mortgage Services",
        description: "Expert mortgage lending services with competitive rates and personalized service",
        url: "https://previsemortgage.com"
      }} />
      <Header />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <ValuePropsSection />
        <FeaturesSection />
        <TrustSection />
        <WhyPreviseSection />
        <CalendlySection />
        <FAQSection />
        <AboutSection />
        <Footer />
        <GoHighLevelChat />
        <FloatingContactWidget />
      </Suspense>
    </div>
  );
};

export default Index;
