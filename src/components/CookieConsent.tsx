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
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-[9999] animate-slide-up">
      <div className="max-w-md bg-primary/95 backdrop-blur-md border border-accent/20 rounded-lg shadow-glow overflow-hidden">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <Cookie className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Cookie Notice</span>
            </div>
            <button
              onClick={handleAcceptAll}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Description */}
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
            We use cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.{" "}
            <Link to="/privacy-policy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
          </p>

          {/* Expanded preferences */}
          {showDetails && (
            <div className="mb-3 p-3 bg-muted/30 rounded-md space-y-2 animate-fade-in border border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-foreground">Essential</span>
                </div>
                <span className="text-[10px] text-muted-foreground">Always on</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-foreground">Analytics</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(p => ({ ...p, analytics: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-7 h-4 bg-muted rounded-full peer peer-checked:after:translate-x-3 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-foreground after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-accent"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-foreground">Marketing</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences(p => ({ ...p, marketing: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-7 h-4 bg-muted rounded-full peer peer-checked:after:translate-x-3 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-foreground after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-accent"></div>
                </label>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleAcceptAll}
              size="sm"
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground text-xs h-8"
            >
              Got it
            </Button>
            {showDetails ? (
              <Button
                onClick={handleSavePreferences}
                size="sm"
                variant="ghost"
                className="text-accent hover:text-accent/80 text-xs h-8 px-2"
              >
                Save
              </Button>
            ) : (
              <Button
                onClick={() => setShowDetails(true)}
                size="sm"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground text-xs h-8 px-2"
              >
                Manage
              </Button>
            )}
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
