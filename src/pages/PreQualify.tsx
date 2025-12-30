import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PreQualificationCalculator from "@/components/PreQualificationCalculator";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const PreQualify = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead 
        title="Mortgage Pre-Qualification Calculator | Previse Mortgage"
        description="Find out how much home you can afford with our free pre-qualification calculator. Get instant results and personalized mortgage options."
        keywords="mortgage pre-qualification, home affordability calculator, how much house can I afford, mortgage calculator, pre-approval"
        canonicalUrl="https://previsemortgage.com/pre-qualify"
      />
      <Header />
      
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
                Free Pre-Qualification
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Find Out How Much <span className="text-accent">Home You Can Afford</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
                Our pre-qualification calculator gives you an instant estimate of your 
                buying power based on your income, debts, and credit profile.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "No credit check required",
                  "Instant results in 2 minutes",
                  "Personalized loan options",
                  "Expert follow-up within 24 hours"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <Card className="bg-white/5 border-white/10 p-6 mt-8">
                <h3 className="text-lg font-semibold text-white mb-3">Why Pre-Qualify First?</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Know your budget before house hunting</li>
                  <li>• Strengthen your offer when you find the right home</li>
                  <li>• Identify any credit issues early</li>
                  <li>• Get personalized rate estimates</li>
                </ul>
              </Card>
            </div>

            {/* Right Column - Calculator */}
            <div>
              <PreQualificationCalculator />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreQualify;
