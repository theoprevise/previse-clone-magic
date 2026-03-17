import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StructuredData from "@/components/StructuredData";
import SEOHead from "@/components/SEOHead";

// Lazy load below-fold components for better LCP
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const HybridTechHumanSection = lazy(() => import("@/components/HybridTechHumanSection"));
const HomeLoansContent = lazy(() => import("@/components/HomeLoansContent"));
const WhyPreviseSection = lazy(() => import("@/components/WhyPreviseSection"));
const TransparencySection = lazy(() => import("@/components/TransparencySection"));
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
        title="Previse Mortgage - Complex Borrower & Investor Mortgage Specialist | DSCR, Bank Statement & Non-QM Loans in Pennsylvania"
        description="Pennsylvania mortgage broker specializing in complex borrowers: DSCR investment loans, bank statement loans for self-employed, non-QM financing, and creative lending solutions. 50+ wholesale lenders. Family-owned."
        keywords="DSCR loans, bank statement loans, self-employed mortgage, non-QM loans, investment property loans, complex borrower mortgage, Pennsylvania mortgage broker, creative financing, investor loans, first time homebuyer"
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
        <HybridTechHumanSection />
        <WhyPreviseSection />
        <CalendlySection />
        <FAQSection />
        <TransparencySection />
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
