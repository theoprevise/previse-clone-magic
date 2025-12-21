import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  CreditCard, 
  FileText, 
  Shield, 
  Target,
  ArrowRight,
  Lightbulb,
  XCircle
} from "lucide-react";

const creditScoreRanges = [
  {
    range: "760+",
    label: "Excellent",
    color: "from-emerald-500 to-emerald-400",
    description: "Best rates available. You'll qualify for the lowest interest rates and best loan terms.",
    approval: "Very High"
  },
  {
    range: "700-759",
    label: "Good",
    color: "from-green-500 to-green-400",
    description: "Strong approval odds. You'll qualify for competitive rates with most lenders.",
    approval: "High"
  },
  {
    range: "660-699",
    label: "Fair",
    color: "from-yellow-500 to-yellow-400",
    description: "Moderate rates. You may need to shop around for the best terms.",
    approval: "Moderate"
  },
  {
    range: "620-659",
    label: "Below Average",
    color: "from-orange-500 to-orange-400",
    description: "Higher rates likely. FHA loans may be a good option at this range.",
    approval: "Possible"
  },
  {
    range: "Below 620",
    label: "Poor",
    color: "from-red-500 to-red-400",
    description: "Limited options. Consider improving your score before applying or explore FHA/VA loans.",
    approval: "Challenging"
  }
];

const quickWins = [
  {
    icon: CreditCard,
    title: "Pay Down Credit Cards",
    description: "Lower your credit utilization to under 30%. Paying down balances can boost your score quickly.",
    impact: "High Impact",
    timeframe: "1-2 months"
  },
  {
    icon: CheckCircle,
    title: "Dispute Errors",
    description: "Review your credit reports for mistakes. Disputing errors can raise your score immediately.",
    impact: "High Impact",
    timeframe: "30-45 days"
  },
  {
    icon: Clock,
    title: "Become an Authorized User",
    description: "Ask a family member with good credit to add you as an authorized user on their card.",
    impact: "Medium Impact",
    timeframe: "1-2 months"
  },
  {
    icon: Shield,
    title: "Keep Old Accounts Open",
    description: "Don't close old credit cards. Length of credit history accounts for 15% of your score.",
    impact: "Medium Impact",
    timeframe: "Ongoing"
  }
];

const commonMistakes = [
  {
    icon: XCircle,
    title: "Opening New Credit",
    description: "Avoid opening new credit cards or loans before applying for a mortgage. Each inquiry can drop your score 5-10 points."
  },
  {
    icon: XCircle,
    title: "Making Large Purchases",
    description: "Don't make major purchases on credit before closing. This increases your debt-to-income ratio."
  },
  {
    icon: XCircle,
    title: "Changing Jobs",
    description: "Lenders prefer stable employment. Avoid job changes during the mortgage process if possible."
  },
  {
    icon: XCircle,
    title: "Moving Money Around",
    description: "Large, unexplained deposits can raise red flags. Keep your finances stable and documented."
  }
];

const approvalFactors = [
  {
    icon: Target,
    title: "Debt-to-Income Ratio",
    description: "Your monthly debts divided by gross income. Most lenders want this below 43%.",
    tip: "Pay off small debts to improve this ratio quickly."
  },
  {
    icon: FileText,
    title: "Employment History",
    description: "Lenders typically want 2 years of steady employment in the same field.",
    tip: "Gather pay stubs, W-2s, and tax returns in advance."
  },
  {
    icon: TrendingUp,
    title: "Down Payment",
    description: "Larger down payments mean lower risk for lenders and better terms for you.",
    tip: "Even 3-5% down can qualify you for many programs."
  },
  {
    icon: Shield,
    title: "Assets & Reserves",
    description: "Lenders want to see you have savings to cover closing costs and emergencies.",
    tip: "Aim for 2-3 months of mortgage payments in reserve."
  }
];

const faqData = [
  {
    question: "What credit score do I need for a mortgage?",
    answer: "Minimum scores vary by loan type: Conventional loans typically require 620+, FHA loans accept 580+ (or 500 with 10% down), and VA loans have no minimum but lenders often want 620+. Higher scores get better rates."
  },
  {
    question: "How much can I improve my credit score in 30 days?",
    answer: "With focused effort, you can potentially improve your score 20-100 points in 30 days by paying down credit card balances, disputing errors, and becoming an authorized user on a well-managed account."
  },
  {
    question: "Will checking my credit score hurt it?",
    answer: "No, checking your own credit is a 'soft inquiry' and doesn't affect your score. Only 'hard inquiries' from lenders impact your score, and multiple mortgage inquiries within 14-45 days typically count as one."
  },
  {
    question: "How long do negative items stay on my credit report?",
    answer: "Most negative items stay for 7 years, including late payments, collections, and charge-offs. Bankruptcies can stay 7-10 years. However, their impact lessens over time."
  }
];

const CreditScoreTips = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="Credit Score & Mortgage Approval Tips | Improve Your Score"
        description="Learn what credit score you need for a mortgage and get actionable tips to improve your score fast. Expert guidance on mortgage approval factors."
        keywords="credit score for mortgage, improve credit score, mortgage approval tips, credit score requirements, home loan credit score"
        canonicalUrl="https://previsemortgage.com/credit-score-mortgage-tips"
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
                  <TrendingUp className="w-4 h-4" />
                  Credit Score Guide
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                Credit Score &<br />
                <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                  Mortgage Approval Tips
                </span>
              </h1>
              
              {/* Modern divider */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
                <div className="mx-4 w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
              </div>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Discover what credit score you need for a mortgage and learn proven strategies to boost your score before applying.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/mortgage-programs')}
                  className="group bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary border-0 px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Loan Programs
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/schedule')}
                  className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300"
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Score Ranges */}
        <section className="py-24 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                Credit Score Ranges for <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Mortgages</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Understanding where you stand helps you know what to expect and what steps to take.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {creditScoreRanges.map((range, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className={`bg-gradient-to-r ${range.color} w-full md:w-36 p-6 flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold">{range.range}</div>
                        <div className="text-sm opacity-90">{range.label}</div>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <p className="text-white/80">{range.description}</p>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30">
                            Approval: {range.approval}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Wins Section */}
        <section className="py-24 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full inline-flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Actionable Tips
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                Quick Wins to <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Boost Your Score</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                These proven strategies can help improve your credit score in a matter of weeks.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {quickWins.map((tip, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <tip.icon className="text-accent" size={32} strokeWidth={1.5} />
                      </div>
                      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{tip.title}</h3>
                      <div className="flex gap-2">
                        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium border border-emerald-500/30">
                          {tip.impact}
                        </span>
                        <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-medium border border-accent/30">
                          {tip.timeframe}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-24 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="text-red-400 text-sm font-bold uppercase tracking-wider bg-red-500/10 px-4 py-2 rounded-full inline-flex items-center gap-2 border border-red-500/20">
                  <AlertTriangle className="w-4 h-4" />
                  Avoid These Pitfalls
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                Common Mistakes to <span className="text-red-400">Avoid</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Don't sabotage your mortgage approval. Avoid these common errors before and during the application process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {commonMistakes.map((mistake, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <mistake.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{mistake.title}</h3>
                      <p className="text-white/70">{mistake.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Approval Factors */}
        <section className="py-24 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                Beyond Credit Score: <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Other Factors</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Your credit score is important, but lenders also consider these key factors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {approvalFactors.map((factor, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className="flex gap-4 mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <factor.icon className="text-accent" size={32} strokeWidth={1.5} />
                      </div>
                      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{factor.title}</h3>
                      <p className="text-white/70">{factor.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <Lightbulb className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-white/90">{factor.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Questions</span>
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
                Ready to Take the <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Next Step?</span>
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Get personalized guidance on improving your credit and finding the right mortgage program for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/schedule')}
                  className="group bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary border-0 px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/mortgage-programs')}
                  className="border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300"
                >
                  Explore Loan Programs
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

export default CreditScoreTips;
