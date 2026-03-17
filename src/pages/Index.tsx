import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StructuredData from "@/components/StructuredData";
import SEOHead from "@/components/SEOHead";

// Lazy load below-fold components for better LCP
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
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
const QuickCalculatorWidget = lazy(() => import("@/components/QuickCalculatorWidget"));
const LoanFinderQuiz = lazy(() => import("@/components/LoanFinderQuiz"));
const InteractiveComparisons = lazy(() => import("@/components/InteractiveComparisons"));

// Minimal loading fallback that doesn't affect layout
const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="Previse Mortgage - Pennsylvania Mortgage Broker | Purchase, Refinance & Investment Loans"
        description="Pennsylvania mortgage broker offering fast closings, transparent pricing, and dedicated advisors for home purchases, refinancing, and investment properties. DSCR, bank statement, and non-QM loans available. 50+ wholesale lenders. Family-owned."
        keywords="Pennsylvania mortgage broker, home purchase loans, refinance mortgage, mortgage rates, first time homebuyer, DSCR loans, bank statement loans, self-employed mortgage, non-QM loans, investment property loans"
        canonicalUrl="https://previsemortgage.com"
      />
      <StructuredData type="organization" />
      <StructuredData type="webpage" data={{
        title: "Previse Mortgage - Pennsylvania Mortgage Broker | Purchase, Refinance & Invest",
        description: "Fast closings, transparent pricing, and dedicated advisors for home purchases, refinancing, and investment properties in Pennsylvania",
        url: "https://previsemortgage.com"
      }} />
      <StructuredData type="loanOrCredit" />
      <Header />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <WhyPreviseSection />
        <QuickCalculatorWidget />
        <LoanFinderQuiz />
        <CalendlySection />
        <ProcessSection />
        <HybridTechHumanSection />
        <InteractiveComparisons />
        <FeaturesSection />
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
