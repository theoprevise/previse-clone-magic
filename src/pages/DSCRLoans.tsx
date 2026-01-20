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
  ArrowLeft,
  CheckCircle2,
  Users,
  DollarSign,
  Percent,
  FileCheck,
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";

const dscrLoanProgram = {
  id: "dscr",
  icon: Building2,
  title: "DSCR Loans",
  description: "Qualify based on your property's rental income—not your personal income. Perfect for real estate investors.",
  bestFor: [
    "Real estate investors",
    "Self-employed borrowers",
    "Those with multiple investment properties",
    "Investors seeking faster closings"
  ],
  qualifications: [
    "Use rental income to qualify",
    "Borrow up to 80% LTV",
    "No W-2s or tax returns required",
    "No bank statements needed",
    "Credit scores as low as 620"
  ],
  highlights: ["Rental Income Qualification", "Up to 80% LTV", "No W-2s Required", "Fast Closings"]
};

const DSCRLoans = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead 
        title="DSCR Loans | Investor-Friendly Financing | Previse Mortgage"
        description="Qualify for a mortgage using rental income. No W-2s, tax returns, or bank statements required. Up to 80% LTV for real estate investors. Apply today!"
        keywords="DSCR loans, investor loans, rental income mortgage, no income verification loan, investment property financing, real estate investor loans"
        canonicalUrl="https://previsemortgage.com/dscr-loans"
      />
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
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
                Investor-Focused Financing
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="text-accent">DSCR Loans</span> for Real Estate Investors
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
                Qualify based on your property's rental income—not your personal income. 
                Perfect for growing your portfolio without traditional income documentation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {dscrLoanProgram.highlights.map((highlight, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Lead Capture Form */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-4 text-center">Get Pre-Approved for a DSCR Loan</h2>
              <UnifiedLeadForm 
                source="loan_page_dscr_investor"
                campaignType="dscr_investment_loan"
                eventName="DSCR Loan Interest - Investment Property"
                showAddress={false}
                buttonText="Get My DSCR Quote"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* DSCR Loan Details */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card 
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:border-accent/30"
          >
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Header */}
              <div className="lg:col-span-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <Building2 className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{dscrLoanProgram.title}</h2>
                    <p className="text-white/70">{dscrLoanProgram.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Best For */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Best For</h3>
                </div>
                <ul className="space-y-2">
                  {dscrLoanProgram.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Qualifications */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Quick Qualifications</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {dscrLoanProgram.qualifications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <Percent className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://previsemortgage.my1003app.com?time=1766329396091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    variant="outline"
                    className="w-full border-accent/30 text-accent hover:bg-accent/10"
                  >
                    Apply for DSCR Loan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How DSCR Works */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              How <span className="text-accent">DSCR Loans</span> Work
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              Simple math determines your qualification—focus on property cash flow, not personal finances.
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">DSCR</div>
                <p className="text-white/70">Debt Service Coverage Ratio</p>
              </div>
              <div className="text-4xl font-bold text-white/50">=</div>
              <div>
                <div className="text-xl md:text-2xl font-semibold text-white mb-2">
                  Monthly Rent ÷ Monthly Payment
                </div>
                <p className="text-white/70">
                  Ratio of 1.25 or higher typically qualifies
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-xl">
              <h4 className="font-semibold text-lg text-white mb-2">Example:</h4>
              <p className="text-white/80">
                If your property rents for <strong className="text-accent">$2,250/month</strong> and 
                the mortgage payment is <strong className="text-accent">$1,800/month</strong>, 
                your DSCR is <strong className="text-success">1.25</strong>—you qualify!
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose a <span className="text-accent">DSCR Loan?</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              Designed specifically for real estate investors who want to qualify based on property performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: DollarSign, title: "Rental Income Qualification", description: "Qualify based on property rental income, not personal earnings" },
              { icon: FileCheck, title: "No W-2s or Tax Returns", description: "Skip traditional income documentation requirements" },
              { icon: Building2, title: "Up to 80% LTV", description: "Finance up to 80% of the property value" },
              { icon: Clock, title: "Faster Closings", description: "Streamlined documentation means quicker approvals" },
              { icon: TrendingUp, title: "Portfolio Growth", description: "No limit on the number of financed properties" },
              { icon: Shield, title: "Flexible Credit", description: "Credit scores as low as 620 accepted" }
            ].map((benefit, idx) => (
              <Card 
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <benefit.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Portfolio?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Speak with a DSCR loan specialist today. No obligation, just expert guidance for real estate investors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="hero"
                className="group"
                onClick={() => navigate('/schedule')}
              >
                Talk to a DSCR Specialist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DSCRLoans;
