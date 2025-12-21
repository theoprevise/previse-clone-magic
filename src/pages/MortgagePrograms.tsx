import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Home, 
  Shield, 
  Building2, 
  Trees, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2,
  Users,
  DollarSign,
  MapPin
} from "lucide-react";

const loanPrograms = [
  {
    id: "conventional",
    icon: Building2,
    title: "Conventional Loans",
    description: "Traditional financing with competitive rates and flexible terms for qualified borrowers.",
    bestFor: [
      "Borrowers with good to excellent credit (620+)",
      "Those with stable income and employment",
      "Buyers who can afford 3-20% down payment",
      "Primary residences, second homes, or investment properties"
    ],
    qualifications: [
      "Credit score: 620+ (680+ for best rates)",
      "Down payment: 3-20%",
      "DTI ratio: Up to 45-50%",
      "Stable 2-year employment history"
    ],
    highlights: ["No upfront mortgage insurance with 20% down", "Flexible property types", "Competitive interest rates"]
  },
  {
    id: "fha",
    icon: Home,
    title: "FHA Loans",
    description: "Government-backed loans designed to make homeownership accessible with lower requirements.",
    bestFor: [
      "First-time homebuyers",
      "Borrowers with lower credit scores",
      "Those with limited savings for down payment",
      "Buyers recovering from past credit issues"
    ],
    qualifications: [
      "Credit score: 580+ (500-579 with 10% down)",
      "Down payment: 3.5% minimum",
      "DTI ratio: Up to 43-57%",
      "Primary residence only"
    ],
    highlights: ["Low down payment options", "Flexible credit requirements", "Gift funds allowed for down payment"]
  },
  {
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
  },
  {
    id: "usda",
    icon: Trees,
    title: "USDA Loans",
    description: "Zero-down financing for eligible rural and suburban homebuyers.",
    bestFor: [
      "Buyers in rural or eligible suburban areas",
      "Low to moderate-income households",
      "First-time and repeat buyers",
      "Those seeking zero down payment options"
    ],
    qualifications: [
      "Property in USDA-eligible area",
      "Income within 115% of area median",
      "Credit score: 640+ recommended",
      "Primary residence only"
    ],
    highlights: ["No down payment required", "Below-market interest rates", "Flexible credit guidelines"]
  },
  {
    id: "jumbo",
    icon: TrendingUp,
    title: "Jumbo Loans",
    description: "Financing for high-value properties that exceed conforming loan limits.",
    bestFor: [
      "Buyers of luxury or high-value homes",
      "Properties exceeding $766,550 (2024 limit)",
      "High-income borrowers with strong credit",
      "Competitive markets with expensive real estate"
    ],
    qualifications: [
      "Credit score: 700+ typically required",
      "Down payment: 10-20%",
      "DTI ratio: 43% or lower",
      "Significant cash reserves required"
    ],
    highlights: ["Finance homes above conforming limits", "Competitive rates for qualified borrowers", "Various term options"]
  }
];

const MortgagePrograms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
              Home Loan Options
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect <span className="text-accent">Mortgage Program</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Explore our comprehensive range of loan programs designed to fit every financial situation. 
              From first-time buyers to seasoned investors, we have the right solution for you.
            </p>
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => navigate('/ai-readiness')}
              className="group"
            >
              See Which Program Fits You
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Programs Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {loanPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card 
                  key={program.id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:border-accent/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Header */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-accent/20 rounded-xl">
                          <IconComponent className="h-8 w-8 text-accent" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-2">{program.title}</h2>
                          <p className="text-white/70">{program.description}</p>
                        </div>
                      </div>
                      
                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {program.highlights.map((highlight, idx) => (
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
                        <Users className="h-5 w-5 text-secondary" />
                        <h3 className="text-lg font-semibold text-white">Best For</h3>
                      </div>
                      <ul className="space-y-2">
                        {program.bestFor.map((item, idx) => (
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
                        <DollarSign className="h-5 w-5 text-secondary" />
                        <h3 className="text-lg font-semibold text-white">Quick Qualifications</h3>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {program.qualifications.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-white/80">
                            <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant="outline"
                        className="w-full border-accent/30 text-accent hover:bg-accent/10"
                        onClick={() => navigate('/application/Mortgage')}
                      >
                        Apply for {program.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Program Is Right for You?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Take our quick AI-powered assessment to discover which mortgage program best fits your unique financial situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="hero"
                onClick={() => navigate('/ai-readiness')}
                className="group"
              >
                Find My Best Program
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate('/mortgage-solutions')}
              >
                Talk to an Expert
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MortgagePrograms;
