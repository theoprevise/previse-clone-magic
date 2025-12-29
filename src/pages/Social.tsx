import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnifiedLeadForm from '@/components/UnifiedLeadForm';
import { Card } from '@/components/ui/card';
import { CheckCircle, Shield, Clock, TrendingUp } from 'lucide-react';

const Social = () => {
  const benefits = [
    {
      title: "Fast Pre-Approval",
      description: "Get pre-approved in as little as 24 hours",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: "Competitive Rates",
      description: "Access to the best rates in the market",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "Expert Guidance",
      description: "Personalized support every step of the way",
      icon: <Shield className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Mobile-First Hero Section */}
      <section className="pt-20 pb-12 md:py-24 px-4">
        <div className="container mx-auto max-w-lg">
          {/* Quick Value Props */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
              Limited Time Offer
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Get Pre-Approved for Your Dream Home Today
            </h1>
            <p className="text-muted-foreground">
              Join thousands of happy homeowners who started their journey with us.
            </p>
          </div>

          {/* Quick Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="text-accent">{benefit.icon}</div>
                <span className="text-foreground">{benefit.title}</span>
              </div>
            ))}
          </div>

          {/* Lead Form */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
            <h2 className="text-xl font-semibold text-foreground text-center mb-2">
              Start Your Journey
            </h2>
            <p className="text-muted-foreground text-center text-sm mb-6">
              Free consultation • No obligation • Takes 2 minutes
            </p>
            
            <UnifiedLeadForm
              campaignType="social_media"
              eventName="Social Media Lead"
              submitButtonText="Get My Free Quote"
              successRedirectPath="/thank-you"
            />
          </Card>

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Trusted by 1,000+ homebuyers</span>
            </div>
            <div className="flex justify-center gap-4 text-xs text-muted-foreground">
              <span>✓ NMLS Licensed</span>
              <span>✓ BBB Accredited</span>
              <span>✓ 5-Star Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Social Proof */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-lg">
          <Card className="p-6 bg-card border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">JD</span>
                </div>
              </div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-foreground text-sm mb-2">
                  "The team made the entire process so easy. I got pre-approved quickly and found my dream home within a month!"
                </p>
                <p className="text-muted-foreground text-xs">
                  — John D., First-Time Homebuyer
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Social;
