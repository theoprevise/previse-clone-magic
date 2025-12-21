import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Home,
  KeyRound,
  Search,
  Shield,
  Target,
  Users,
  Wallet,
  ClipboardCheck,
  Building,
  Banknote,
  Gift,
  MapPin
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Assess Your Financial Health",
    description: "Understand where you stand before starting your homebuying journey.",
    details: [
      "Check your credit score (aim for 620+)",
      "Calculate your debt-to-income ratio",
      "Review your savings and emergency fund",
      "Create a realistic home budget"
    ]
  },
  {
    number: "02",
    icon: CircleDollarSign,
    title: "Get Pre-Approved",
    description: "Know exactly how much you can afford and show sellers you're serious.",
    details: [
      "Gather income documents (W-2s, pay stubs)",
      "Provide bank statements and assets",
      "Complete mortgage application",
      "Receive your pre-approval letter"
    ]
  },
  {
    number: "03",
    icon: Search,
    title: "Find Your Dream Home",
    description: "Work with a real estate agent to find the perfect property.",
    details: [
      "Determine your must-haves and nice-to-haves",
      "Research neighborhoods and schools",
      "Attend open houses and tours",
      "Make competitive offers"
    ]
  },
  {
    number: "04",
    icon: FileText,
    title: "Complete the Loan Process",
    description: "Work with your lender to finalize your mortgage.",
    details: [
      "Lock in your interest rate",
      "Complete home inspection and appraisal",
      "Review and sign loan documents",
      "Secure homeowner's insurance"
    ]
  },
  {
    number: "05",
    icon: KeyRound,
    title: "Close & Get Your Keys",
    description: "Complete the final steps and become a homeowner!",
    details: [
      "Do final walk-through of property",
      "Sign closing documents",
      "Pay closing costs and down payment",
      "Receive your keys!"
    ]
  }
];

const preApprovalChecklist = [
  { item: "Government-issued ID", icon: Shield },
  { item: "Social Security number", icon: FileText },
  { item: "W-2 forms (past 2 years)", icon: FileText },
  { item: "Recent pay stubs (30 days)", icon: Wallet },
  { item: "Tax returns (past 2 years)", icon: FileText },
  { item: "Bank statements (2-3 months)", icon: Banknote },
  { item: "Investment account statements", icon: CircleDollarSign },
  { item: "Rental history or landlord contact", icon: Home }
];

const closingChecklist = [
  { item: "Homeowner's insurance policy", icon: Shield },
  { item: "Final loan approval", icon: CheckCircle2 },
  { item: "Funds for closing costs", icon: Wallet },
  { item: "Government-issued ID", icon: FileText },
  { item: "Cashier's check or wire transfer info", icon: Banknote },
  { item: "Completed final walk-through", icon: Home }
];

const downPaymentPrograms = [
  {
    title: "FHA Loans",
    description: "As low as 3.5% down payment for credit scores 580+",
    icon: Building,
    highlight: "3.5% Down"
  },
  {
    title: "VA Loans",
    description: "Zero down payment for eligible veterans and military",
    icon: Shield,
    highlight: "0% Down"
  },
  {
    title: "USDA Loans",
    description: "Zero down payment for eligible rural areas",
    icon: MapPin,
    highlight: "0% Down"
  },
  {
    title: "State & Local Programs",
    description: "Grants and forgivable loans for first-time buyers",
    icon: Gift,
    highlight: "Grants Available"
  },
  {
    title: "Conventional 97",
    description: "Only 3% down for qualified first-time buyers",
    icon: Home,
    highlight: "3% Down"
  },
  {
    title: "Employer Assistance",
    description: "Some employers offer homebuying assistance benefits",
    icon: Users,
    highlight: "Check Benefits"
  }
];

const FirstTimeHomebuyer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <Header />
      
      {/* Back to Home */}
      <div className="container mx-auto px-4 pt-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="text-white hover:text-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
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
              First-Time Homebuyer Resource
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Complete Guide to <span className="text-accent">Buying Your First Home</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Buying your first home doesn't have to be overwhelming. We'll guide you through every step, 
              from pre-approval to getting your keys.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Step-by-Step <span className="text-accent">Homebuying Journey</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Follow these five steps to navigate your path to homeownership with confidence.
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                
                return (
                  <div 
                    key={step.number}
                    className="flex flex-col items-center"
                  >
                    {/* Step Number Circle - Now on top */}
                    <div className="relative z-10 flex-shrink-0 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg shadow-accent/30">
                        <span className="text-xl font-bold text-primary">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:border-accent/30 w-full max-w-md">
                      <div className="flex flex-col items-center text-center">
                        <div className="p-3 bg-accent/20 rounded-xl mb-4">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-white/70 mb-4">{step.description}</p>
                        <ul className="space-y-2 text-left w-full">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Checklists Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Essential <span className="text-accent">Checklists</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Stay organized with these must-have checklists for your homebuying journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pre-Approval Checklist */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <ClipboardCheck className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white">Pre-Approval Documents</h3>
              </div>
              <ul className="space-y-3">
                {preApprovalChecklist.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <IconComponent className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-white/80">{item.item}</span>
                      <CheckCircle2 className="h-5 w-5 text-accent/50 ml-auto" />
                    </li>
                  );
                })}
              </ul>
            </Card>

            {/* Closing Day Checklist */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/20 rounded-xl">
                  <KeyRound className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Closing Day Essentials</h3>
              </div>
              <ul className="space-y-3">
                {closingChecklist.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <IconComponent className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-white/80">{item.item}</span>
                      <CheckCircle2 className="h-5 w-5 text-secondary/50 ml-auto" />
                    </li>
                  );
                })}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Down Payment Assistance Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Down Payment <span className="text-accent">Assistance Programs</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Don't let the down payment hold you back. Explore these programs designed to help first-time buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downPaymentPrograms.map((program, idx) => {
              const IconComponent = program.icon;
              return (
                <Card 
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:border-accent/30 group cursor-pointer"
                  onClick={() => navigate('/mortgage-programs')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <span className="px-3 py-1 bg-success/20 text-success text-sm font-semibold rounded-full">
                      {program.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-white/70 text-sm">{program.description}</p>
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
            <div className="p-4 bg-accent/20 rounded-full w-fit mx-auto mb-6">
              <Home className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Homebuying Journey?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get a personalized plan based on your unique financial situation. Our experts will guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="hero"
                onClick={() => navigate('/schedule')}
                className="group"
              >
                Get Your Personalized Plan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate('/mortgage-programs')}
              >
                Explore Loan Programs
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirstTimeHomebuyer;
