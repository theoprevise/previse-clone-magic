import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQStructuredData from "@/components/FAQStructuredData";
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
      "Complete mortgage application",
      "Receive your pre-approval letter"
    ]
  },
  {
    number: "03",
    icon: Search,
    title: "Find Your Dream Home",
    description: "Search for the perfect property that fits your needs and budget.",
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
    description: "Work with Previse to finalize your mortgage.",
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
      <SEOHead 
        title="First-Time Homebuyer Guide | Steps to Buying Your First Home | Previse Mortgage"
        description="Complete first-time homebuyer guide: learn about down payment assistance, FHA loans, pre-approval steps, and how to buy your first home with confidence. Expert guidance from Previse Mortgage."
        keywords="first time homebuyer, buying first home, down payment assistance, FHA loan first time buyer, how to buy a house, homebuyer guide, pre-approval, mortgage for first time buyers"
        canonicalUrl="https://previsemortgage.com/first-time-homebuyer"
      />
      <Header />
      
      {/* Back to Home */}
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
              First-Time Homebuyer Resource
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your Complete Guide to <span className="text-accent">Buying Your First Home</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Your Step-by-Step <span className="text-accent">Homebuying Journey</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Essential <span className="text-accent">Checklists</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
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
                <h3 className="text-2xl font-bold text-white">Possible Documents Needed</h3>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Down Payment <span className="text-accent">Assistance Programs</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              Don't let the down payment hold you back. Explore these programs designed to help first-time buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downPaymentPrograms.map((program, idx) => {
              const IconComponent = program.icon;
              return (
                <Card 
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:border-accent/30 group"
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

      {/* Educational Content Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose-invert">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Everything You Need to Know as a <span className="text-accent">First-Time Homebuyer</span>
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Buying your first home is one of the most significant financial decisions you'll ever make. As a first-time homebuyer, you have access to special mortgage programs, down payment assistance, and tax benefits that can make homeownership more affordable than you think. Understanding your options before you start house hunting puts you in the strongest possible position.
              </p>
              <p>
                The first step in the homebuying process is getting pre-approved for a mortgage. Pre-approval tells you exactly how much you can borrow, gives you a clear budget for your home search, and signals to sellers that you're a serious, qualified buyer. At Previse Mortgage, we make pre-approval fast and straightforward—most borrowers receive their pre-approval letter within 24 hours.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">How Much House Can I Afford?</h3>
              <p>
                A common rule of thumb is that your monthly mortgage payment should not exceed 28% of your gross monthly income. However, lenders look at your total debt-to-income (DTI) ratio, which includes car payments, student loans, credit card minimums, and other debts. Most loan programs allow a maximum DTI of 43-50%. Use our <a href="/mortgage-calculator" className="text-accent hover:underline">mortgage calculator</a> to estimate your monthly payment based on different home prices and down payment amounts.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">First-Time Homebuyer Loan Programs</h3>
              <p>
                Several mortgage programs are designed specifically for first-time homebuyers. <a href="/fha-loans" className="text-accent hover:underline">FHA loans</a> require as little as 3.5% down and accept credit scores as low as 580. USDA loans offer zero down payment for homes in eligible rural areas. Conventional 97 loans require just 3% down for qualified first-time buyers. Your Previse Mortgage loan officer will help you compare all available programs to find the one that saves you the most money.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Down Payment Assistance Programs</h3>
              <p>
                Many first-time buyers don't realize that down payment assistance (DPA) programs exist at the federal, state, and local levels. These programs offer grants, forgivable loans, and matched savings plans that can cover part or all of your down payment and closing costs. Pennsylvania offers several DPA programs for qualified buyers, and your loan officer can help you determine your eligibility.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Closing Costs Explained</h3>
              <p>
                In addition to your down payment, you'll need to budget for closing costs, which typically range from 2% to 5% of the loan amount. Closing costs include lender fees, appraisal fees, title insurance, attorney fees, and prepaid items like property taxes and homeowner's insurance. Some of these costs can be negotiated, and in some cases, sellers may agree to contribute toward your closing costs as part of the purchase agreement.
              </p>
            </div>

            {/* First-Time Buyer FAQ */}
            <FAQStructuredData faqs={[
              { q: "How much do I need for a down payment on my first home?", a: "It depends on the loan program. FHA loans require 3.5% down, Conventional 97 requires 3%, USDA and VA loans offer 0% down for eligible borrowers. Down payment assistance programs may further reduce or eliminate your out-of-pocket costs." },
              { q: "What credit score do I need to buy a house?", a: "The minimum credit score varies by loan type. FHA loans accept scores as low as 580 (or 500 with 10% down). Conventional loans typically require 620+. Higher credit scores unlock better interest rates and terms, so improving your score before applying can save thousands over the life of your loan." },
              { q: "Should I get pre-approved before looking at homes?", a: "Absolutely. Pre-approval tells you your exact budget, strengthens your offers in competitive markets, and speeds up the closing process once you find a home. Most real estate agents won't show homes to buyers who aren't pre-approved." },
              { q: "What's the difference between pre-qualification and pre-approval?", a: "Pre-qualification is an informal estimate of what you might borrow based on self-reported information. Pre-approval is a formal commitment from a lender after verifying your income, assets, credit, and employment. Pre-approval carries much more weight with sellers." },
              { q: "How long does it take to buy a house from start to finish?", a: "The typical homebuying timeline is 2 to 4 months from pre-approval to closing. This includes time for house hunting (varies widely), making an offer, home inspection, appraisal, and loan processing. The loan closing process itself typically takes 21 to 45 days." },
            ]} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-16 mb-8">
              First-Time Homebuyer <span className="text-accent">FAQ</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How much do I need for a down payment on my first home?",
                  a: "It depends on the loan program. FHA loans require 3.5% down, Conventional 97 requires 3%, USDA and VA loans offer 0% down for eligible borrowers. Down payment assistance programs may further reduce or eliminate your out-of-pocket costs."
                },
                {
                  q: "What credit score do I need to buy a house?",
                  a: "The minimum credit score varies by loan type. FHA loans accept scores as low as 580 (or 500 with 10% down). Conventional loans typically require 620+. Higher credit scores unlock better interest rates and terms, so improving your score before applying can save thousands over the life of your loan."
                },
                {
                  q: "Should I get pre-approved before looking at homes?",
                  a: "Absolutely. Pre-approval tells you your exact budget, strengthens your offers in competitive markets, and speeds up the closing process once you find a home. Most real estate agents won't show homes to buyers who aren't pre-approved."
                },
                {
                  q: "What's the difference between pre-qualification and pre-approval?",
                  a: "Pre-qualification is an informal estimate of what you might borrow based on self-reported information. Pre-approval is a formal commitment from a lender after verifying your income, assets, credit, and employment. Pre-approval carries much more weight with sellers."
                },
                {
                  q: "How long does it take to buy a house from start to finish?",
                  a: "The typical homebuying timeline is 2 to 4 months from pre-approval to closing. This includes time for house hunting (varies widely), making an offer, home inspection, appraisal, and loan processing. The loan closing process itself typically takes 21 to 45 days."
                }
              ].map((faq, idx) => (
                <article key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Internal Links */}
            <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4">Helpful Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/fha-loans')}>FHA Loans</Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/conventional-loans')}>Conventional Loans</Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/usda-loans')}>USDA Loans</Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/mortgage-calculator')}>Payment Calculator</Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/credit-score-mortgage-tips')}>Credit Score Tips</Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/current-mortgage-rates')}>Current Rates</Button>
              </div>
            </div>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Homebuying Journey?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
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
