import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingDown, 
  TrendingUp,
  Clock,
  Shield,
  Info,
  CheckCircle2,
  Calendar
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// RATES - Update these weekly. Last updated date shown to users.
const LAST_UPDATED = "December 20, 2024";

const currentRates = [
  {
    type: "30-Year Fixed",
    rate: "6.875%",
    apr: "6.95%",
    change: -0.125,
    description: "Most popular choice for homebuyers",
    bestFor: "Long-term homeowners"
  },
  {
    type: "15-Year Fixed",
    rate: "6.125%",
    apr: "6.20%",
    change: -0.0625,
    description: "Pay off faster, save on interest",
    bestFor: "Those who can afford higher payments"
  },
  {
    type: "FHA 30-Year",
    rate: "6.500%",
    apr: "7.15%",
    change: 0,
    description: "Lower down payment requirements",
    bestFor: "First-time buyers, lower credit scores"
  },
  {
    type: "VA 30-Year",
    rate: "6.250%",
    apr: "6.45%",
    change: -0.0625,
    description: "Exclusive rates for veterans",
    bestFor: "Veterans and active military"
  },
  {
    type: "5/1 ARM",
    rate: "6.375%",
    apr: "7.10%",
    change: 0.125,
    description: "Fixed for 5 years, then adjusts",
    bestFor: "Short-term homeowners"
  },
  {
    type: "Jumbo 30-Year",
    rate: "7.125%",
    apr: "7.20%",
    change: -0.0625,
    description: "For loans above conforming limits",
    bestFor: "High-value property buyers"
  }
];

const rateFactors = [
  {
    title: "Credit Score",
    description: "Higher scores qualify for better rates. 740+ gets the best terms."
  },
  {
    title: "Down Payment",
    description: "Larger down payments often mean lower rates and no PMI."
  },
  {
    title: "Loan Term",
    description: "Shorter terms typically have lower rates but higher monthly payments."
  },
  {
    title: "Loan Type",
    description: "Conventional, FHA, VA, and USDA loans have different rate structures."
  },
  {
    title: "Property Type",
    description: "Primary residences get better rates than investment properties."
  },
  {
    title: "Market Conditions",
    description: "Rates fluctuate daily based on economic factors and Fed policy."
  }
];

const CurrentMortgageRates = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="text-white hover:text-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
              Updated Weekly • For Illustrative Purposes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Current <span className="text-accent">Mortgage Rates</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Compare today's competitive mortgage rates. Your actual rate will vary based on your unique financial situation and creditworthiness.*
            </p>
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: {LAST_UPDATED}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Table Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-4">
              {currentRates.map((rate, idx) => (
                <Card 
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:border-accent/30"
                >
                  <div className="grid md:grid-cols-12 gap-4 items-center">
                    {/* Loan Type */}
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-bold text-white">{rate.type}</h3>
                      <p className="text-white/60 text-sm">{rate.description}</p>
                    </div>
                    
                    {/* Rate */}
                    <div className="md:col-span-2 text-center">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Rate</p>
                      <p className="text-3xl font-bold text-accent">{rate.rate}</p>
                    </div>
                    
                    {/* APR */}
                    <div className="md:col-span-2 text-center">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">APR</p>
                      <p className="text-2xl font-semibold text-white">{rate.apr}</p>
                    </div>
                    
                    {/* Change */}
                    <div className="md:col-span-2 text-center">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Weekly Change</p>
                      <div className={`flex items-center justify-center gap-1 ${rate.change < 0 ? 'text-success' : rate.change > 0 ? 'text-red-400' : 'text-white/60'}`}>
                        {rate.change < 0 ? (
                          <TrendingDown className="h-4 w-4" />
                        ) : rate.change > 0 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <span>—</span>
                        )}
                        <span className="font-medium">
                          {rate.change !== 0 ? `${rate.change > 0 ? '+' : ''}${rate.change}%` : 'No change'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Best For */}
                    <div className="md:col-span-3 text-center md:text-right">
                      <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm">
                        {rate.bestFor}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm">
                  <strong className="text-white">Rate Disclaimer:</strong> Rates shown are for informational purposes only, are subject to change without notice, and do not constitute a commitment to lend. 
                  Rates displayed assume a loan amount of $300,000, 20% down payment, 740+ credit score, and owner-occupied single-family residence. 
                  Your actual rate, APR, and loan terms will depend on your credit score, down payment, loan amount, property type, and other factors. 
                  All loans are subject to credit approval. Contact us for a personalized rate quote based on your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Your Rate Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Affects <span className="text-accent">Your Rate?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Understanding these factors can help you qualify for the best possible rate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rateFactors.map((factor, idx) => (
              <Card 
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{factor.title}</h3>
                    <p className="text-white/70 text-sm">{factor.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Approval Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                  <span className="text-accent font-semibold">Quick Pre-Qualification</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get Your Personalized Rate
                </h2>
                <p className="text-white/80 mb-6">
                  The rates shown are averages. Your actual rate will depend on various factors like: credit score, down payment, loan amount, property type. Contact us for a personalized rate quote based on your specific situation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-white/80">
                    <Shield className="h-4 w-4 text-success" />
                    <span>No credit check for initial quote</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Lock your rate for up to 60 days</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <Button 
                  size="lg" 
                  variant="hero"
                  onClick={() => navigate('/schedule')}
                  className="group w-full"
                >
                  Check Your Rate
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a 
                  href="https://previsemortgage.my1003app.com?time=1766329396091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 w-full"
                  >
                    Start Pre-Qualification
                    Start Pre-Approval
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CurrentMortgageRates;
