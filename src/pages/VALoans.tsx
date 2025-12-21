import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Shield, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  DollarSign,
  MapPin
} from "lucide-react";

const vaLoanProgram = {
  id: "va",
  icon: Shield,
  title: "VA Loans",
  description: "Exclusive benefits for veterans, active military, and eligible surviving spouses.",
  bestFor: [
    "Active-duty military members",
    "Veterans with honorable discharge",
    "National Guard and Reserve members",
    "Eligible surviving spouses"
  ],
  qualifications: [
    "Certificate of Eligibility (COE) required",
    "No minimum credit score (lenders may require 620+)",
    "No down payment required",
    "Must meet military service requirements"
  ],
  highlights: ["Zero down payment", "No PMI required", "Competitive interest rates", "Limited closing costs"]
};

const VALoans = () => {
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
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
              Honoring Your Service
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="text-accent">VA Loans</span> for Veterans
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
              Exclusive home financing benefits designed to honor those who have served our country. 
              Enjoy zero down payment, no PMI, and competitive rates.
            </p>
          </div>
        </div>
      </section>

      {/* VA Loan Details */}
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
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{vaLoanProgram.title}</h2>
                    <p className="text-white/70">{vaLoanProgram.description}</p>
                  </div>
                </div>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {vaLoanProgram.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Best For */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Best For</h3>
                </div>
                <ul className="space-y-2">
                  {vaLoanProgram.bestFor.map((item, idx) => (
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
                  {vaLoanProgram.qualifications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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
                    Apply for VA Loan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Additional VA Benefits */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose a <span className="text-accent">VA Loan?</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              VA loans offer unmatched benefits as a thank you for your service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Zero Down Payment", description: "Buy a home with no money down" },
              { title: "No PMI", description: "Save hundreds monthly with no private mortgage insurance" },
              { title: "Competitive Rates", description: "Often lower than conventional loan rates" },
              { title: "Flexible Credit", description: "More lenient credit requirements" }
            ].map((benefit, idx) => (
              <Card 
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle2 className="h-8 w-8 text-accent mx-auto mb-4" />
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
              Ready to Use Your VA Benefits?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let us help you navigate the VA loan process and get you into your dream home.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                variant="hero"
                className="group"
                onClick={() => navigate('/schedule')}
              >
                Talk to a VA Loan Specialist
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

export default VALoans;
