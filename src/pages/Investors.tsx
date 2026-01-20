import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import UnifiedLeadForm from "@/components/UnifiedLeadForm";
import { 
  Building2, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Calculator,
  RefreshCcw,
  FileCheck,
  Users,
  Briefcase,
  PiggyBank,
  BarChart3
} from "lucide-react";

const investorPrograms = [
  {
    icon: Building2,
    title: "DSCR Loans",
    description: "Qualify using rental income, not personal income. No W-2s or tax returns required.",
    highlights: ["Up to 80% LTV", "No income verification", "Fast closings"],
    path: "/dscr-loans",
    featured: true
  },
  {
    icon: RefreshCcw,
    title: "Cash-Out Refinance",
    description: "Access equity from existing properties to fund new investments or renovations.",
    highlights: ["Pull equity for new deals", "Competitive rates", "15-30 day closings"],
    path: "/refinance",
    featured: false
  },
  {
    icon: Briefcase,
    title: "Portfolio Loans",
    description: "Consolidate multiple properties under one loan for simplified management.",
    highlights: ["Multiple properties", "Streamlined payments", "Flexible terms"],
    path: "/mortgage-programs",
    featured: false
  },
  {
    icon: FileCheck,
    title: "Bank Statement Loans",
    description: "For self-employed investors who show income through bank deposits, not tax returns.",
    highlights: ["12-24 month statements", "Self-employed friendly", "Competitive rates"],
    path: "/mortgage-programs",
    featured: false
  }
];

const investorBenefits = [
  {
    icon: DollarSign,
    title: "No Income Verification",
    description: "DSCR loans qualify based on property cash flow, not your personal earnings"
  },
  {
    icon: TrendingUp,
    title: "Unlimited Properties",
    description: "No cap on the number of investment properties you can finance"
  },
  {
    icon: Calculator,
    title: "Quick Closings",
    description: "Streamlined process means faster approvals and closings in as little as 21 days"
  },
  {
    icon: PiggyBank,
    title: "Competitive Rates",
    description: "Access institutional-level rates designed for serious real estate investors"
  },
  {
    icon: BarChart3,
    title: "Portfolio Growth",
    description: "Build wealth through strategic property acquisition with the right financing"
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Work with specialists who understand real estate investing inside and out"
  }
];

const Investors = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead 
        title="Real Estate Investor Loans | DSCR & Investment Property Financing | Previse Mortgage"
        description="Financing solutions for real estate investors. DSCR loans, cash-out refinancing, portfolio loans, and bank statement programs. Qualify on rental income, not personal income."
        keywords="investor loans, DSCR loans, investment property financing, rental property loans, real estate investor mortgage, cash-out refinance, portfolio loans, bank statement loans"
        canonicalUrl="https://previsemortgage.com/investors"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
                Real Estate Investor Financing
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Financing Built for <span className="text-accent">Real Estate Investors</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                DSCR loans, portfolio financing, and cash-out options designed specifically for investors. 
                Qualify on rental income—not personal income. Loans starting at $250K.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
                  680+ Credit Score
                </span>
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
                  $250K+ Loan Amounts
                </span>
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
                  Fast 21-Day Closings
                </span>
              </div>
            </div>

            {/* Lead Capture Form */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-4 text-center">Get Your Investor Loan Quote</h2>
              <UnifiedLeadForm 
                source="investors_landing_page"
                campaignType="investor_financing"
                eventName="Investor Loan Interest"
                showAddress={false}
                buttonText="Get My Quote"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Loan Programs */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-4">
              Our Programs
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Investment Property <span className="text-accent">Loan Options</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Choose the financing that fits your investment strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {investorPrograms.map((program, idx) => (
              <Card 
                key={idx}
                className={`bg-white/5 backdrop-blur-xl border p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                  program.featured ? 'border-accent/40 ring-1 ring-accent/20' : 'border-white/10'
                }`}
                onClick={() => navigate(program.path)}
              >
                {program.featured && (
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full mb-4">
                    MOST POPULAR
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-xl flex-shrink-0">
                    <program.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-white/70 mb-4">{program.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, hidx) => (
                        <span 
                          key={hidx}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/80 text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-accent flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Investors <span className="text-accent">Choose Us</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Specialized financing solutions from a team that understands real estate investing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {investorBenefits.map((benefit, idx) => (
              <Card 
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <benefit.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Requirements */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Investor Loan <span className="text-accent">Requirements</span>
              </h2>
              <p className="text-white/70">
                Our target qualifications for investment property financing
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">680+</div>
                <p className="text-white font-semibold mb-1">Credit Score</p>
                <p className="text-white/60 text-sm">Minimum recommended score</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">$250K+</div>
                <p className="text-white font-semibold mb-1">Loan Amount</p>
                <p className="text-white/60 text-sm">Minimum loan size</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">1.0+</div>
                <p className="text-white font-semibold mb-1">DSCR Ratio</p>
                <p className="text-white/60 text-sm">For DSCR loans</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-white/80">
                  <strong className="text-white">Don't meet these requirements?</strong> We still have options. 
                  Contact us to discuss your situation—we work with a variety of investor profiles.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Portfolio?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Speak with an investor loan specialist today. Get pre-approved quickly and close faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="hero"
                className="group"
                onClick={() => navigate('/dscr-loans')}
              >
                Explore DSCR Loans
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate('/schedule')}
              >
                Schedule a Call
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;