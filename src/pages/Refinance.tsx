import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FAQStructuredData from "@/components/FAQStructuredData";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Home, 
  TrendingDown, 
  Wallet,
  PiggyBank,
  RefreshCw,
  Percent
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const refinanceReasons = [
  {
    icon: TrendingDown,
    title: "Lower Your Interest Rate",
    description: "Even a small rate reduction may save you thousands over the life of your loan.*",
    savings: "Potential monthly savings*"
  },
  {
    icon: Clock,
    title: "Shorten Your Loan Term",
    description: "Pay off your home faster and build equity quicker with a shorter term.",
    savings: "Build equity faster"
  },
  {
    icon: Wallet,
    title: "Lower Monthly Payments",
    description: "Extend your term or get a better rate to potentially reduce your monthly payments.*",
    savings: "Potential cash flow relief"
  },
  {
    icon: PiggyBank,
    title: "Cash-Out Refinance",
    description: "Tap into your home equity for renovations, debt consolidation, or investments.",
    savings: "Access your equity"
  },
  {
    icon: RefreshCw,
    title: "Switch Loan Types",
    description: "Move from an adjustable-rate to fixed-rate mortgage for stability.",
    savings: "Predictable payments"
  },
  {
    icon: Home,
    title: "Remove PMI",
    description: "If you have 20% equity, refinancing may eliminate private mortgage insurance.",
    savings: "Potential PMI savings*"
  }
];

const savingsExamples = [
  {
    scenario: "Rate Reduction",
    currentRate: "7.5%",
    newRate: "6.5%",
    loanAmount: "$350,000",
    monthlySavings: "$245",
    lifetimeSavings: "$88,200"
  },
  {
    scenario: "Term Shortening",
    currentRate: "7.0%",
    newRate: "6.25%",
    loanAmount: "$300,000",
    monthlySavings: "-$150 (higher payment)",
    lifetimeSavings: "$125,000 in interest"
  },
  {
    scenario: "Cash-Out Refi",
    currentRate: "7.25%",
    newRate: "6.75%",
    loanAmount: "$400,000",
    monthlySavings: "$180 + $50K cash",
    lifetimeSavings: "$64,800"
  }
];

const Refinance = () => {
  const navigate = useNavigate();
  
  // Calculator state
  const [currentBalance, setCurrentBalance] = useState("");
  const [currentRate, setCurrentRate] = useState("");
  const [currentPayment, setCurrentPayment] = useState("");
  const [newRate, setNewRate] = useState("");
  const [remainingYears, setRemainingYears] = useState("");
  const [savings, setSavings] = useState<{ monthly: number; yearly: number; total: number } | null>(null);

  const calculateSavings = () => {
    const balance = parseFloat(currentBalance);
    const oldRate = parseFloat(currentRate) / 100 / 12;
    const newRateMonthly = parseFloat(newRate) / 100 / 12;
    const months = parseInt(remainingYears) * 12;
    const current = parseFloat(currentPayment);

    if (balance > 0 && newRateMonthly > 0 && months > 0) {
      const newPayment = (balance * newRateMonthly * Math.pow(1 + newRateMonthly, months)) / 
                        (Math.pow(1 + newRateMonthly, months) - 1);
      
      const monthlySavings = current - newPayment;
      const yearlySavings = monthlySavings * 12;
      const totalSavings = monthlySavings * months;
      
      setSavings({ 
        monthly: monthlySavings, 
        yearly: yearlySavings, 
        total: totalSavings 
      });
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead
        title="Refinance Your Mortgage in Pennsylvania | Lower Rates | Previse Mortgage"
        description="Refinance your Pennsylvania mortgage to lower your rate, reduce monthly payments, or access home equity. Cash-out and rate-and-term refinancing with competitive rates."
        keywords="refinance mortgage Pennsylvania, mortgage refinancing PA, cash out refinance, lower mortgage rate, rate and term refinance, home equity, refinance calculator, Pennsylvania refinance rates"
        canonicalUrl="https://previsemortgage.com/refinance"
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
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
              Refinance Options
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Lower Your Payments & <span className="text-accent">Potentially Save</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Discover how refinancing may help you reduce your monthly payments, shorten your loan term, or access your home equity. Results depend on individual circumstances.*
            </p>
          </div>
        </div>
      </section>

      {/* When to Refinance Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              When Should You <span className="text-accent">Refinance?</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              Refinancing makes sense in many situations. Here are the most common reasons homeowners refinance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {refinanceReasons.map((reason, idx) => {
              const IconComponent = reason.icon;
              return (
                <Card 
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:border-accent/30 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                      <p className="text-white/70 text-sm mb-3">{reason.description}</p>
                      <span className="inline-block px-3 py-1 bg-success/20 text-success text-sm font-semibold rounded-full">
                        {reason.savings}
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Refinance <span className="text-accent">Savings Estimator</span>
              </h2>
              <p className="text-base md:text-lg text-white/70">
                See how much you could save by refinancing your current mortgage.
              </p>
            </div>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Calculator className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white">Quick Savings Calculator</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label className="text-white/80 mb-2 block">Current Loan Balance</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <Input 
                      type="number" 
                      placeholder="300,000" 
                      value={currentBalance}
                      onChange={(e) => setCurrentBalance(e.target.value)}
                      className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-white/80 mb-2 block">Current Monthly Payment</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <Input 
                      type="number" 
                      placeholder="2,100" 
                      value={currentPayment}
                      onChange={(e) => setCurrentPayment(e.target.value)}
                      className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-white/80 mb-2 block">Current Interest Rate (%)</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <Input 
                      type="number" 
                      step="0.1"
                      placeholder="7.5" 
                      value={currentRate}
                      onChange={(e) => setCurrentRate(e.target.value)}
                      className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-white/80 mb-2 block">New Interest Rate (%)</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <Input 
                      type="number" 
                      step="0.1"
                      placeholder="6.5" 
                      value={newRate}
                      onChange={(e) => setNewRate(e.target.value)}
                      className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Label className="text-white/80 mb-2 block">Remaining Years on Loan</Label>
                  <Input 
                    type="number" 
                    placeholder="25" 
                    value={remainingYears}
                    onChange={(e) => setRemainingYears(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              <Button 
                onClick={calculateSavings} 
                className="w-full bg-accent hover:bg-accent-light text-primary-dark font-semibold py-6 rounded-xl mb-6"
              >
                Calculate My Savings
              </Button>

              {savings && (
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
                    <p className="text-white/60 mb-2">Monthly Savings</p>
                    <p className="text-3xl font-bold text-accent">{formatCurrency(savings.monthly)}</p>
                  </div>
                  <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
                    <p className="text-white/60 mb-2">Yearly Savings</p>
                    <p className="text-3xl font-bold text-accent">{formatCurrency(savings.yearly)}</p>
                  </div>
                  <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
                    <p className="text-white/60 mb-2">Total Savings</p>
                    <p className="text-3xl font-bold text-accent">{formatCurrency(savings.total)}</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Savings Examples Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Illustrative <span className="text-accent">Savings Examples</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              These examples are for illustration only. Your actual savings may vary based on individual circumstances.*
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {savingsExamples.map((example, idx) => (
              <Card 
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-accent mb-4">{example.scenario}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Loan Amount:</span>
                    <span className="text-white font-medium">{example.loanAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Current Rate:</span>
                    <span className="text-white font-medium">{example.currentRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">New Rate:</span>
                    <span className="text-accent font-medium">{example.newRate}</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 mt-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/60">Monthly Impact:</span>
                      <span className="text-success font-medium">{example.monthlySavings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Potential Savings:</span>
                      <span className="text-success font-bold">{example.lifetimeSavings}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl max-w-4xl mx-auto">
            <p className="text-white/60 text-xs text-center">
              *Representative examples are hypothetical and for illustration purposes only. They do not represent actual offers or guaranteed results. 
              Your actual rate, APR, monthly payment, and total savings will depend on your creditworthiness, loan terms, property value, and other factors. 
              All loans are subject to credit approval.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Mortgage Refinancing in Pennsylvania: What You Need to Know</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Refinancing your mortgage means replacing your current home loan with a new one—ideally with better terms, a lower interest rate, or access to your home's equity. For Pennsylvania homeowners, refinancing can be a powerful financial tool that saves thousands of dollars over the life of the loan or provides cash for major expenses like home improvements, debt consolidation, or college tuition.
                </p>
                <p>
                  The two most common types of refinancing are <strong>rate-and-term refinancing</strong> (where you change your interest rate, loan term, or both) and <strong>cash-out refinancing</strong> (where you borrow more than you owe and receive the difference in cash). Rate-and-term refinances typically have lower closing costs and better rates, while cash-out refinances offer flexibility to access your home equity for any purpose.
                </p>
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">When Does Refinancing Make Financial Sense?</h3>
                <p>
                  The general rule of thumb is that refinancing makes sense when you can reduce your interest rate by at least 0.5% to 1%, though this varies based on your loan balance, remaining term, and closing costs. The key metric is your <strong>break-even point</strong>—the number of months it takes for your monthly savings to exceed the cost of refinancing. If you plan to stay in your home past that point, refinancing is typically worthwhile.
                </p>
                <p>
                  For example, if refinancing costs $4,000 in closing costs and saves you $200 per month, your break-even point is 20 months. After that, every month represents pure savings. As a mortgage broker, we calculate this for every client and only recommend refinancing when the math clearly works in your favor.
                </p>
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">Refinancing Options for Pennsylvania Homeowners</h3>
                <p>
                  Pennsylvania homeowners have access to multiple refinance programs depending on their current loan type. <a href="/fha-loans" className="text-accent hover:underline">FHA borrowers</a> can use the FHA Streamline Refinance for a simplified process with minimal documentation. VA borrowers can take advantage of the VA Interest Rate Reduction Refinance Loan (IRRRL). Conventional borrowers have the widest range of options, including switching to a shorter term, removing PMI, or doing a cash-out refinance up to 80% of their home's value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQStructuredData faqs={[
        { q: "How much does it cost to refinance a mortgage?", a: "Refinancing closing costs typically range from 2% to 5% of the loan amount, or roughly $3,000 to $10,000 for most loans. Costs include appraisal fees, title insurance, origination fees, and recording fees. Some lenders offer 'no-closing-cost' refinances where fees are rolled into the loan or offset by a slightly higher rate." },
        { q: "Can I refinance with bad credit?", a: "Yes, though your options may be more limited. FHA Streamline Refinances don't require a credit check for existing FHA borrowers. For conventional refinances, most lenders require a minimum score of 620. We work with multiple lenders and can often find solutions for borrowers with imperfect credit." },
        { q: "How long does a refinance take?", a: "A typical refinance takes 30 to 45 days from application to closing. Streamline refinances (FHA or VA) can sometimes close in as little as 2-3 weeks. The timeline depends on factors like appraisal scheduling, title work, and how quickly you provide documentation." },
        { q: "Should I refinance from a 30-year to a 15-year mortgage?", a: "Shortening your term to 15 years will increase your monthly payment but dramatically reduce the total interest you pay. For example, on a $300,000 loan, switching from a 30-year at 7% to a 15-year at 6.25% could save over $125,000 in interest. This strategy works best for homeowners who can comfortably afford the higher payment." },
        { q: "What is a cash-out refinance and how much equity do I need?", a: "A cash-out refinance lets you borrow against your home equity and receive the difference as cash at closing. Most lenders require you to maintain at least 20% equity after the cash-out (80% loan-to-value). For example, if your home is worth $400,000, you could potentially borrow up to $320,000 minus your current loan balance." },
      ]} />
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Refinance FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much does it cost to refinance a mortgage?",
                  a: "Refinancing closing costs typically range from 2% to 5% of the loan amount, or roughly $3,000 to $10,000 for most loans. Costs include appraisal fees, title insurance, origination fees, and recording fees. Some lenders offer 'no-closing-cost' refinances where fees are rolled into the loan or offset by a slightly higher rate."
                },
                {
                  q: "Can I refinance with bad credit?",
                  a: "Yes, though your options may be more limited. FHA Streamline Refinances don't require a credit check for existing FHA borrowers. For conventional refinances, most lenders require a minimum score of 620. We work with multiple lenders and can often find solutions for borrowers with imperfect credit."
                },
                {
                  q: "How long does a refinance take?",
                  a: "A typical refinance takes 30 to 45 days from application to closing. Streamline refinances (FHA or VA) can sometimes close in as little as 2-3 weeks. The timeline depends on factors like appraisal scheduling, title work, and how quickly you provide documentation."
                },
                {
                  q: "Should I refinance from a 30-year to a 15-year mortgage?",
                  a: "Shortening your term to 15 years will increase your monthly payment but dramatically reduce the total interest you pay. For example, on a $300,000 loan, switching from a 30-year at 7% to a 15-year at 6.25% could save over $125,000 in interest. This strategy works best for homeowners who can comfortably afford the higher payment."
                },
                {
                  q: "What is a cash-out refinance and how much equity do I need?",
                  a: "A cash-out refinance lets you borrow against your home equity and receive the difference as cash at closing. Most lenders require you to maintain at least 20% equity after the cash-out (80% loan-to-value). For example, if your home is worth $400,000, you could potentially borrow up to $320,000 minus your current loan balance."
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-white/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 text-center max-w-4xl mx-auto">
            <div className="p-4 bg-accent/20 rounded-full w-fit mx-auto mb-6">
              <TrendingDown className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Check Current Rates?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get a personalized rate quote and see exactly how much you could save by refinancing your mortgage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="hero"
                onClick={() => navigate('/schedule')}
                className="group"
              >
                Check Current Rates
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a 
                href="https://previsemortgage.my1003app.com?time=1766329396091"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Start Refinance Application
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Refinance;
