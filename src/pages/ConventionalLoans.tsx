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
  TrendingUp
} from "lucide-react";

const conventionalLoanProgram = {
  id: "conventional",
  icon: Building2,
  title: "Conventional Loans",
  description: "Traditional financing with competitive rates and flexible terms.",
  bestFor: [
    "Buyers with good to excellent credit",
    "Those with 5-20% down payment",
    "Investment property buyers",
    "Homeowners seeking to refinance"
  ],
  qualifications: [
    "Minimum 620 credit score (higher = better rates)",
    "3-20% down payment options",
    "Stable income and employment",
    "Debt-to-income ratio under 45%"
  ],
  highlights: ["No PMI with 20% down", "Competitive rates", "Flexible terms", "Primary or investment"]
};

const ConventionalLoans = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead 
        title="Conventional Loans Pennsylvania | Best Mortgage Rates | Previse Mortgage"
        description="Conventional mortgage loans in Pennsylvania with competitive rates. No PMI with 20% down. Perfect for buyers with good credit. Get your rate quote today!"
        keywords="conventional loans, conventional mortgage, best mortgage rates, Pennsylvania mortgage, no PMI, 20% down payment"
        canonicalUrl="https://previsemortgage.com/conventional-loans"
      />
      <Header />
      
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
      
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
                Traditional Financing
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="text-accent">Conventional Loans</span> for Smart Buyers
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
                The most popular mortgage option for qualified buyers. Enjoy competitive rates, 
                flexible terms, and no PMI with 20% down.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {conventionalLoanProgram.highlights.map((highlight, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-4 text-center">Get Your Conventional Loan Rate</h2>
              <UnifiedLeadForm 
                source="loan_page_conventional"
                campaignType="conventional_loan_inquiry"
                eventName="Conventional Loan Interest"
                showAddress={false}
                buttonText="Get My Rate Quote"
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:border-accent/30">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <Building2 className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{conventionalLoanProgram.title}</h2>
                    <p className="text-white/70">{conventionalLoanProgram.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Best For</h3>
                </div>
                <ul className="space-y-2">
                  {conventionalLoanProgram.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Quick Qualifications</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {conventionalLoanProgram.qualifications.map((item, idx) => (
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
                    Apply for Conventional Loan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose a <span className="text-accent">Conventional Loan?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, title: "Best Rates Available", description: "Often the lowest rates for qualified buyers" },
              { icon: DollarSign, title: "No PMI with 20%", description: "Avoid extra monthly insurance costs" },
              { icon: Building2, title: "Investment Properties", description: "Finance rental and investment homes" },
              { icon: Percent, title: "Flexible Terms", description: "15, 20, or 30-year options available" }
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

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready for a Conventional Loan?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get personalized rates and expert guidance for your conventional mortgage.
            </p>
            <Button 
              size="lg" 
              variant="hero"
              className="group"
              onClick={() => navigate('/schedule')}
            >
              Speak with a Loan Officer
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConventionalLoans;
