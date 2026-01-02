import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "cookie_consent";
const CONSENT_VERSION = "1.0";

interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  version: string;
  timestamp: string;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    
    if (savedConsent) {
      try {
        const parsed: ConsentState = JSON.parse(savedConsent);
        // Check if consent version matches
        if (parsed.version === CONSENT_VERSION) {
          // Apply saved preferences
          applyConsent(parsed);
          return;
        }
      } catch (e) {
        // Invalid consent data, show banner
      }
    }
    
    // Show banner after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const applyConsent = (consent: ConsentState) => {
    // Enable/disable tracking based on consent
    if (consent.analytics || consent.marketing) {
      enableTracking();
    }
    
    // Push consent to dataLayer for GTM
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "consent_update",
        analytics_consent: consent.analytics ? "granted" : "denied",
        marketing_consent: consent.marketing ? "granted" : "denied",
      });
    }
  };

  const enableTracking = () => {
    // GTM and GA are already loaded, but we can signal consent
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const consent: ConsentState = {
      necessary: true,
      analytics,
      marketing,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    applyConsent(consent);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleRejectNonEssential = () => {
    saveConsent(false, false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences.analytics, preferences.marketing);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
        <div className="p-5 md:p-6">
          <div className="flex items-start gap-4">
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 flex-shrink-0">
              <Cookie className="w-6 h-6 text-accent" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Cookie className="w-5 h-5 md:hidden text-accent" />
                  We Value Your Privacy
                </h3>
                <button
                  onClick={handleRejectNonEssential}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze site traffic, and for marketing purposes. 
                By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{" "}
                <Link to="/privacy-policy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>.
              </p>

              {showDetails && (
                <div className="mb-4 p-4 bg-muted/50 rounded-lg space-y-3 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        Necessary Cookies
                      </p>
                      <p className="text-xs text-muted-foreground">Required for the website to function</p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Always On</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Analytics Cookies</p>
                      <p className="text-xs text-muted-foreground">Help us understand how visitors use our site</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences(p => ({ ...p, analytics: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Marketing Cookies</p>
                      <p className="text-xs text-muted-foreground">Used to deliver personalized advertising</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences(p => ({ ...p, marketing: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-accent rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                    </label>
                  </div>
                  
                  <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                    You can opt out of RB2B tracking at any time by visiting{" "}
                    <a 
                      href="https://app.retention.com/optout" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      https://app.retention.com/optout
                    </a>
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <Button
                  onClick={handleAcceptAll}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleRejectNonEssential}
                  variant="outline"
                  className="border-border hover:bg-muted"
                >
                  Reject Non-Essential
                </Button>
                {showDetails ? (
                  <Button
                    onClick={handleSavePreferences}
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Save Preferences
                  </Button>
                ) : (
                  <Button
                    onClick={() => setShowDetails(true)}
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Manage Preferences
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extend window type for gtag
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export default CookieConsent;
