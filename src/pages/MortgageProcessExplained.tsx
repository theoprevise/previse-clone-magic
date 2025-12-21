import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { 
  FileText, 
  Search, 
  CheckCircle, 
  Home, 
  Key,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Shield,
  ClipboardCheck,
  Building,
  Banknote,
  Calendar
} from "lucide-react";

const processSteps = [
  {
    step: 1,
    icon: ClipboardCheck,
    title: "Pre-Approval",
    duration: "1-3 days",
    description: "Get pre-approved to understand your budget and show sellers you're a serious buyer.",
    details: [
      "Submit basic financial information",
      "Previse Mortgage reviews credit score and income",
      "Receive pre-approval letter with loan amount",
      "Valid for 60-90 days typically"
    ],
    tip: "Get pre-approved before house hunting to strengthen your offers."
  },
  {
    step: 2,
    icon: Search,
    title: "House Hunting",
    duration: "2-12 weeks",
    description: "Search for homes within your budget with your pre-approval letter in hand.",
    details: [
      "Browse listings online and in person",
      "Tour homes in your price range",
      "Consider location, size, and condition",
      "Research neighborhoods and schools"
    ],
    tip: "Stay within your pre-approved amount to avoid financing issues later."
  },
  {
    step: 3,
    icon: FileText,
    title: "Make an Offer",
    duration: "1-5 days",
    description: "Submit an offer on your chosen home and negotiate terms with the seller.",
    details: [
      "Determine a competitive offer price",
      "Include earnest money deposit",
      "Negotiate contingencies and closing date",
      "Sign purchase agreement when accepted"
    ],
    tip: "Include a financing contingency to protect yourself if the loan falls through."
  },
  {
    step: 4,
    icon: DollarSign,
    title: "Loan Application",
    duration: "1-2 days",
    description: "Submit your full mortgage application with all required documentation.",
    details: [
      "Complete official loan application",
      "Provide pay stubs, tax returns, bank statements",
      "Lock in your interest rate",
      "Pay application fees if required"
    ],
    tip: "Have documents ready to speed up the process. Organization is key!"
  },
  {
    step: 5,
    icon: Building,
    title: "Processing & Underwriting",
    duration: "2-4 weeks",
    description: "Previse Mortgage verifies all information and assesses the risk of your loan.",
    details: [
      "Loan processor reviews your file",
      "Employment and income verification",
      "Credit report analysis",
      "Underwriter makes final decision"
    ],
    tip: "Respond quickly to any requests for additional documentation."
  },
  {
    step: 6,
    icon: Home,
    title: "Home Appraisal",
    duration: "1-2 weeks",
    description: "An independent appraiser confirms the home's value matches the purchase price.",
    details: [
      "Previse Mortgage orders professional appraisal",
      "Appraiser inspects the property",
      "Report compares to similar homes",
      "Must meet or exceed purchase price"
    ],
    tip: "If appraisal comes in low, you may need to renegotiate or pay the difference."
  },
  {
    step: 7,
    icon: Shield,
    title: "Clear to Close",
    duration: "1-3 days",
    description: "Final approval is given once all conditions are satisfied.",
    details: [
      "All conditions met by underwriter",
      "Final loan documents prepared",
      "Closing disclosure issued",
      "Review all terms before closing"
    ],
    tip: "Review your Closing Disclosure carefully—you have 3 days before signing."
  },
  {
    step: 8,
    icon: Key,
    title: "Closing Day",
    duration: "1-2 hours",
    description: "Sign final documents, pay closing costs, and receive the keys to your new home!",
    details: [
      "Bring government-issued ID",
      "Sign all loan and title documents",
      "Pay closing costs and down payment",
      "Receive keys to your new home"
    ],
    tip: "Wire funds a day early to avoid any last-minute delays."
  }
];

const documentsNeeded = [
  { category: "Income", items: ["Pay stubs (last 30 days)", "W-2s (last 2 years)", "Tax returns (last 2 years)", "Employment verification letter"] },
  { category: "Assets", items: ["Bank statements (last 2 months)", "Investment account statements", "Gift letters (if applicable)", "Retirement account statements"] },
  { category: "Identity", items: ["Government-issued ID", "Social Security card", "Current address verification"] },
  { category: "Property", items: ["Purchase agreement", "Homeowner's insurance quote", "Title information"] }
];

const timeline = [
  { phase: "Pre-Approval", days: "1-3 days", color: "from-accent to-accent-light" },
  { phase: "House Hunting", days: "2-12 weeks", color: "from-accent-light to-emerald-400" },
  { phase: "Offer to Close", days: "30-45 days", color: "from-emerald-400 to-green-400" }
];

const faqData = [
  {
    question: "How long does the mortgage process take?",
    answer: "The entire process typically takes 30-45 days from offer acceptance to closing. Pre-approval can be done in 1-3 days. The timeline varies based on loan type, documentation readiness, and market conditions."
  },
  {
    question: "What credit score do I need to get a mortgage?",
    answer: "Minimum scores vary by loan type: Conventional loans typically require 620+, FHA loans accept 580+ (or 500 with 10% down), and VA loans have no official minimum but lenders usually want 620+."
  },
  {
    question: "How much down payment do I need?",
    answer: "Down payments range from 0% (VA and USDA loans) to 3% (conventional) to 3.5% (FHA). A 20% down payment eliminates private mortgage insurance (PMI) but isn't required."
  },
  {
    question: "What are closing costs?",
    answer: "Closing costs typically range from 2-5% of the loan amount and include origination fees, appraisal, title insurance, taxes, and prepaid items like homeowner's insurance."
  }
];

const MortgageProcessExplained = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="How the Mortgage Process Works | Step-by-Step Guide"
        description="Understand how mortgages work with our complete step-by-step guide. From pre-approval to closing day, learn what to expect at every stage of getting a home loan."
        keywords="how mortgages work, mortgage process explained, home loan process, buying a house steps, mortgage timeline, closing process"
        canonicalUrl="https://previsemortgage.com/how-the-mortgage-process-works"
      />
      <StructuredData type="faq" data={faqData} />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center justify-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/60"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center py-20">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Complete Guide
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                How the Mortgage<br />
                <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                  Process Works
                </span>
              </h1>
              
              {/* Modern divider */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
                <div className="mx-4 w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Your step-by-step guide to understanding every stage of the home loan process, from application to keys in hand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/schedule')}
                  className="group bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary border-0 px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/mortgage-programs')}
                  className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300"
                >
                  View Loan Programs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Overview */}
        <section className="py-16 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
                Typical <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Timeline</span>
              </h2>
              <p className="text-lg text-white/80">Most home purchases close in 30-45 days after offer acceptance</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
              {timeline.map((phase, index) => (
                <div key={index} className="flex items-center">
                  <div className={`bg-gradient-to-r ${phase.color} rounded-2xl p-6 text-center min-w-[180px]`}>
                    <div className="text-white font-bold text-lg">{phase.phase}</div>
                    <div className="text-white/90 text-sm flex items-center justify-center gap-1 mt-1">
                      <Clock className="w-4 h-4" />
                      {phase.days}
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-accent mx-2 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-24 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                The 8 Steps to <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Homeownership</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Understanding each stage helps you prepare and avoid surprises along the way.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="group relative mb-8 last:mb-0"
                >
                  {/* Connecting line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-accent/50 to-accent/10 hidden md:block"></div>
                  )}
                  
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Step number and icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="text-primary" size={28} strokeWidth={2} />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary border-2 border-accent rounded-full flex items-center justify-center">
                            <span className="text-accent font-bold text-sm">{step.step}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                            {step.title}
                          </h3>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30 w-fit">
                            <Clock className="w-3 h-3" />
                            {step.duration}
                          </span>
                        </div>
                        
                        <p className="text-white/80 text-lg mb-4">{step.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What Happens</h4>
                            <ul className="space-y-2">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                                  <span className="text-white/70">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20 h-fit">
                            <Banknote className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="text-sm font-semibold text-accent mb-1">Pro Tip</h4>
                              <p className="text-sm text-white/90">{step.tip}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Needed */}
        <section className="py-24 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Be Prepared
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                Documents You'll <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Need</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Having these ready speeds up your application and shows lenders you're prepared.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {documentsNeeded.map((category, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <h3 className="text-xl font-bold text-accent mb-4 pb-3 border-b border-white/10">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                Common <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Questions</span>
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-white/70 pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Your <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Journey?</span>
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Our team is here to guide you through every step of the mortgage process with personalized support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/schedule')}
                  className="group bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary border-0 px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/credit-score-mortgage-tips')}
                  className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300"
                >
                  Check Credit Tips
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MortgageProcessExplained;
