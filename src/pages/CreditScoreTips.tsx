import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { 
  TrendingUp, 
  CheckCircle2, 
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
    color: "bg-green-500",
    description: "Best rates available. You'll qualify for the lowest interest rates and best loan terms.",
    approval: "Very High"
  },
  {
    range: "700-759",
    label: "Good",
    color: "bg-emerald-500",
    description: "Strong approval odds. You'll qualify for competitive rates with most lenders.",
    approval: "High"
  },
  {
    range: "660-699",
    label: "Fair",
    color: "bg-yellow-500",
    description: "Moderate rates. You may need to shop around for the best terms.",
    approval: "Moderate"
  },
  {
    range: "620-659",
    label: "Below Average",
    color: "bg-orange-500",
    description: "Higher rates likely. FHA loans may be a good option at this range.",
    approval: "Possible"
  },
  {
    range: "Below 620",
    label: "Poor",
    color: "bg-red-500",
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
    icon: CheckCircle2,
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
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Credit Score & Mortgage Approval Tips | Improve Your Score"
        description="Learn what credit score you need for a mortgage and get actionable tips to improve your score fast. Expert guidance on mortgage approval factors."
        keywords="credit score for mortgage, improve credit score, mortgage approval tips, credit score requirements, home loan credit score"
        canonicalUrl="https://yourdomain.com/credit-score-mortgage-tips"
      />
      <StructuredData type="faq" data={faqData} />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Credit Score Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Credit Score & Mortgage <span className="text-primary">Approval Tips</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover what credit score you need for a mortgage and learn proven strategies to boost your score before applying.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/mortgage-programs')}
                  className="font-semibold"
                >
                  View Loan Programs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/schedule')}
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Score Ranges */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Credit Score Ranges for Mortgages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding where you stand helps you know what to expect and what steps to take.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {creditScoreRanges.map((range, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className={`${range.color} w-full md:w-32 p-4 flex items-center justify-center`}>
                        <div className="text-center text-white">
                          <div className="text-2xl font-bold">{range.range}</div>
                          <div className="text-sm opacity-90">{range.label}</div>
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <p className="text-foreground">{range.description}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">
                              Approval: {range.approval}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Wins Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4" />
                Actionable Tips
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quick Wins to Boost Your Score
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These proven strategies can help improve your credit score in a matter of weeks.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {quickWins.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <tip.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{tip.title}</CardTitle>
                        <div className="flex gap-2 mb-3">
                          <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 font-medium">
                            {tip.impact}
                          </span>
                          <span className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground font-medium">
                            {tip.timeframe}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4" />
                Avoid These Pitfalls
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common Mistakes to Avoid
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't sabotage your mortgage approval. Avoid these common errors before and during the application process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {commonMistakes.map((mistake, index) => (
                <Card key={index} className="border-destructive/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="p-2 rounded-lg bg-destructive/10 h-fit">
                        <mistake.icon className="w-5 h-5 text-destructive" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{mistake.title}</h3>
                        <p className="text-muted-foreground">{mistake.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Approval Factors */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Beyond Credit Score: Other Approval Factors
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your credit score is important, but lenders also consider these key factors.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {approvalFactors.map((factor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 h-fit">
                        <factor.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{factor.title}</h3>
                        <p className="text-muted-foreground mb-3">{factor.description}</p>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/50">
                          <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-foreground">{factor.tip}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Take the Next Step?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get personalized guidance on improving your credit and finding the right mortgage program for your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/schedule')}
                  className="font-semibold"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/mortgage-programs')}
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

