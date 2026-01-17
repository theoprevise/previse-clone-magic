import { useSearchParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import UnifiedLeadForm from "@/components/UnifiedLeadForm";
import { CheckCircle2, ArrowRight, Phone, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const CampaignLanding = () => {
  const [searchParams] = useSearchParams();
  
  // Get UTM parameters
  const utmSource = searchParams.get('utm_source') || 'direct';
  const utmMedium = searchParams.get('utm_medium') || '';
  const utmCampaign = searchParams.get('utm_campaign') || '';
  const headline = searchParams.get('headline') || 'Get Pre-Approved in Minutes';
  const offer = searchParams.get('offer') || 'Free Consultation';

  // Determine campaign type for customization
  const isFacebookAd = utmSource === 'facebook' || utmMedium === 'social';
  const isGoogleAd = utmSource === 'google' || utmMedium === 'cpc';

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead 
        title="Special Mortgage Offer | Previse Mortgage"
        description="Exclusive mortgage rates and personalized service. Get pre-approved today with Previse Mortgage."
        canonicalUrl="https://previsemortgage.com/offer"
      />
      <Header />
      
      {/* Hero Section - Optimized for Conversions */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Value Proposition */}
            <div className="text-center lg:text-left">
              {offer && (
                <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
                  🎉 {offer}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {headline}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
                {isFacebookAd 
                  ? "Join thousands of happy homeowners who trusted Previse Mortgage for their home financing needs."
                  : isGoogleAd
                  ? "Competitive rates, fast approvals, and personalized service. Get your dream home today."
                  : "Expert mortgage guidance tailored to your unique situation. Let's make homeownership happen."
                }
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Clock className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-white/80 text-sm">Fast Pre-Approval</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Shield className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-white/80 text-sm">Licensed Experts</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-white/80 text-sm">Personal Support</p>
                </div>
              </div>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                {[
                  "No obligation consultation",
                  "Competitive rates from multiple lenders",
                  "Personalized loan options",
                  "Fast closing times"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Lead Form */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Claim Your Free Consultation
                </h2>
                <p className="text-white/70">
                  Fill out the form below and a mortgage specialist will contact you within 24 hours.
                </p>
              </div>
              <UnifiedLeadForm 
                source={`paid_campaign_${utmSource}_${utmMedium || 'unknown'}`}
                campaignType={utmCampaign || 'paid_advertising'}
                eventName={`Paid Ad Lead: ${utmSource} via ${utmMedium || 'direct'}`}
                showAddress={false}
                buttonText="Get My Free Consultation"
              />
              <p className="text-xs text-white/50 text-center mt-4">
                By submitting, you consent to receive calls and texts from Previse Mortgage. View our <Link to="/privacy-policy" className="text-accent underline hover:text-accent/80">Privacy Policy</Link>.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Trusted by Homebuyers Across Pennsylvania
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { stat: "500+", label: "Families Helped" },
              { stat: "4.9★", label: "Customer Rating" },
              { stat: "24hr", label: "Average Response" }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{item.stat}</p>
                <p className="text-white/70">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prefer to Talk Now?
          </h2>
          <p className="text-white/80 mb-6">
            Call or text us directly for immediate assistance.
          </p>
          <a href="tel:+17178195196">
            <Button size="lg" variant="hero" className="group">
              <Phone className="mr-2 h-5 w-5" />
              (717) 819-5196
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampaignLanding;
