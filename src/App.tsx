import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/hooks/useAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
