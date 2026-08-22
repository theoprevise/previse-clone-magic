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
        title="Investment Property Loans in PA | DSCR & Rental Financing"
        description="Pennsylvania investment property lender: DSCR rental loans, multifamily, fix-and-flip, and portfolio financing with LLC closings and no tax returns. Purchase and refinance options too."
        keywords="investment property loans Pennsylvania, DSCR loans, rental property financing, multifamily loans, fix and flip loans, portfolio loans, LLC mortgage, no tax return investor loan, cash-out refinance rental property"
        canonicalUrl="https://previsemortgage.com"
      />
      <StructuredData type="organization" />
      <StructuredData type="webpage" data={{
        title: "Previse Mortgage - Pennsylvania Investment Property & DSCR Lender",
        description: "DSCR, multifamily, fix-and-flip and portfolio loans for Pennsylvania real estate investors, plus purchase and refinance financing.",
        url: "https://previsemortgage.com"
      }} />
      <StructuredData type="loanOrCredit" />
      <Header />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <FeaturesSection />
        <WhyPreviseSection />
        <QuickCalculatorWidget />
        <LoanFinderQuiz />
        <CalendlySection />
        <ProcessSection />
        <HybridTechHumanSection />
        <InteractiveComparisons />
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
