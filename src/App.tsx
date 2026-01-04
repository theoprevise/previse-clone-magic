import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/hooks/useAuth";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LeadCapturePopup from "./components/LeadCapturePopup";
import CookieConsent from "./components/CookieConsent";

import Index from "./pages/Index";
import MortgageSolutions from "./pages/MortgageSolutions";
import MortgagePrograms from "./pages/MortgagePrograms";
import ServicesAndFAQ from "./pages/ServicesAndFAQ";
import FirstTimeHomebuyer from "./pages/FirstTimeHomebuyer";
import AIReadinessAnalysis from "./pages/AIReadinessAnalysis";
import Application from "./pages/Application";
import ThankYou from "./pages/ThankYou";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Schedule from "./pages/Schedule";
import MortgageCalculator from "./pages/MortgageCalculator";
import Refinance from "./pages/Refinance";
import CurrentMortgageRates from "./pages/CurrentMortgageRates";
import VALoans from "./pages/VALoans";
import FHALoans from "./pages/FHALoans";
import ConventionalLoans from "./pages/ConventionalLoans";
import USDALoans from "./pages/USDALoans";
import CampaignLanding from "./pages/CampaignLanding";
import CreditScoreTips from "./pages/CreditScoreTips";
import MortgageProcessExplained from "./pages/MortgageProcessExplained";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Webinar from "./pages/Webinar";
import WebinarThankYou from "./pages/WebinarThankYou";
import WebinarReplay from "./pages/WebinarReplay";
import OpenHouse from "./pages/OpenHouse";
import OpenHouseThankYou from "./pages/OpenHouseThankYou";
import Events from "./pages/Events";
import EventsThankYou from "./pages/EventsThankYou";
import YouTube from "./pages/YouTube";
import YouTubeThankYou from "./pages/YouTubeThankYou";
import Social from "./pages/Social";
import SocialThankYou from "./pages/SocialThankYou";
import PreQualify from "./pages/PreQualify";
import HomebuyerGuide from "./pages/HomebuyerGuide";
import HomebuyerGuideThankYou from "./pages/HomebuyerGuideThankYou";
import HomebuyerGuidePrint from "./pages/HomebuyerGuidePrint";
import ScheduleThankYou from "./pages/ScheduleThankYou";

const queryClient = new QueryClient();

const ConditionalLeadPopup = () => {
  const location = useLocation();
  
  // Landing pages and pages with lead capture forms - don't show popup
  const pagesWithForms = [
    '/',
    '/webinar',
    '/webinar-replay',
    '/open-house', 
    '/events',
    '/youtube',
    '/social',
    '/homebuyer-guide',
    '/offer',
    '/lp',
    '/pre-qualify',
    '/first-time-homebuyer',
    '/schedule',
    '/refinance',
    '/va-loans',
    '/fha-loans',
    '/conventional-loans',
    '/usda-loans',
    '/mortgage-calculator',
    '/ai-readiness'
  ];
  
  // Don't show popup on landing pages, thank-you pages, print pages, or application pages
  const shouldHidePopup = 
    pagesWithForms.includes(location.pathname) || 
    location.pathname.includes('thank-you') ||
    location.pathname.includes('-print') ||
    location.pathname.startsWith('/application');
    
  if (shouldHidePopup) return null;
  return <LeadCapturePopup />;
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ConditionalLeadPopup />
        <CookieConsent />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mortgage-solutions" element={<MortgageSolutions />} />
          <Route path="/mortgage-programs" element={<MortgagePrograms />} />
          <Route path="/services-faq" element={<ServicesAndFAQ />} />
          <Route path="/first-time-homebuyer" element={<FirstTimeHomebuyer />} />
          <Route path="/ai-readiness" element={<AIReadinessAnalysis />} />
          <Route path="/application/:loanType" element={<Application />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/schedule-thank-you" element={<ScheduleThankYou />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/refinance" element={<Refinance />} />
          <Route path="/current-mortgage-rates" element={<CurrentMortgageRates />} />
          <Route path="/va-loans" element={<VALoans />} />
          <Route path="/fha-loans" element={<FHALoans />} />
          <Route path="/conventional-loans" element={<ConventionalLoans />} />
          <Route path="/usda-loans" element={<USDALoans />} />
          <Route path="/pre-qualify" element={<PreQualify />} />
          <Route path="/offer" element={<CampaignLanding />} />
          <Route path="/lp" element={<CampaignLanding />} />
          <Route path="/credit-score-mortgage-tips" element={<CreditScoreTips />} />
          <Route path="/how-the-mortgage-process-works" element={<MortgageProcessExplained />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/webinar-thank-you" element={<WebinarThankYou />} />
          <Route path="/webinar/thank-you" element={<WebinarThankYou />} />
          <Route path="/webinar-replay" element={<WebinarReplay />} />
          <Route path="/open-house" element={<OpenHouse />} />
          <Route path="/open-house-thank-you" element={<OpenHouseThankYou />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events-thank-you" element={<EventsThankYou />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/youtube-thank-you" element={<YouTubeThankYou />} />
          <Route path="/social" element={<Social />} />
          <Route path="/social-thank-you" element={<SocialThankYou />} />
          <Route path="/homebuyer-guide" element={<HomebuyerGuide />} />
          <Route path="/homebuyer-guide-thank-you" element={<HomebuyerGuideThankYou />} />
          <Route path="/homebuyer-guide-print" element={<HomebuyerGuidePrint />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
