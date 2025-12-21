import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calculator, DollarSign, Home, RefreshCw, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const MortgageCalculator = () => {
  const navigate = useNavigate();
  // Monthly Payment Calculator State
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("30");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  // Refinance Calculator State
  const [currentLoanBalance, setCurrentLoanBalance] = useState("");
  const [currentRate, setCurrentRate] = useState("");
  const [newRate, setNewRate] = useState("");
  const [remainingYears, setRemainingYears] = useState("");
  const [refinanceSavings, setRefinanceSavings] = useState<{ monthly: number; total: number } | null>(null);

  // Affordability Calculator State
  const [annualIncome, setAnnualIncome] = useState("");
  const [monthlyDebts, setMonthlyDebts] = useState("");
  const [downPaymentPercent, setDownPaymentPercent] = useState("20");
  const [affordability, setAffordability] = useState<{ maxHome: number; maxPayment: number } | null>(null);

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(homePrice) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseInt(loanTerm) * 12;

    if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
      const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                     (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  };

  const calculateRefinanceSavings = () => {
    const balance = parseFloat(currentLoanBalance);
    const oldRate = parseFloat(currentRate) / 100 / 12;
    const newRateMonthly = parseFloat(newRate) / 100 / 12;
    const months = parseInt(remainingYears) * 12;

    if (balance > 0 && oldRate > 0 && newRateMonthly > 0 && months > 0) {
      const oldPayment = (balance * oldRate * Math.pow(1 + oldRate, months)) / 
                        (Math.pow(1 + oldRate, months) - 1);
      const newPayment = (balance * newRateMonthly * Math.pow(1 + newRateMonthly, months)) / 
                        (Math.pow(1 + newRateMonthly, months) - 1);
      
      const monthlySavings = oldPayment - newPayment;
      const totalSavings = monthlySavings * months;
      
      setRefinanceSavings({ monthly: monthlySavings, total: totalSavings });
    }
  };

  const calculateAffordability = () => {
    const income = parseFloat(annualIncome);
    const debts = parseFloat(monthlyDebts) || 0;
    const dpPercent = parseFloat(downPaymentPercent) / 100;

    if (income > 0) {
      // Using 28% DTI for housing
      const maxMonthlyPayment = (income / 12) * 0.28 - debts;
      // Estimate based on 7% rate, 30-year term
      const estimatedRate = 0.07 / 12;
      const months = 360;
      
      const loanAmount = maxMonthlyPayment > 0 
        ? (maxMonthlyPayment * (Math.pow(1 + estimatedRate, months) - 1)) / 
          (estimatedRate * Math.pow(1 + estimatedRate, months))
        : 0;
      
      const maxHomePrice = loanAmount / (1 - dpPercent);
      
      setAffordability({ 
        maxHome: Math.max(0, maxHomePrice), 
        maxPayment: Math.max(0, maxMonthlyPayment) 
      });
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-primary-dark">
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
      
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block mb-6">
                <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                  Free Tools
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Mortgage<br />
                <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                  Calculator Tools
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Plan your home purchase with our easy-to-use calculators. Get estimates for monthly payments, refinance savings, and affordability.
              </p>
            </div>

            {/* Calculator Tabs */}
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="monthly" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 rounded-2xl p-2 mb-8">
                  <TabsTrigger 
                    value="monthly" 
                    className="data-[state=active]:bg-accent data-[state=active]:text-primary-dark rounded-xl py-3 text-white/70"
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Monthly Payment
                  </TabsTrigger>
                  <TabsTrigger 
                    value="refinance"
                    className="data-[state=active]:bg-accent data-[state=active]:text-primary-dark rounded-xl py-3 text-white/70"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refinance
                  </TabsTrigger>
                  <TabsTrigger 
                    value="affordability"
                    className="data-[state=active]:bg-accent data-[state=active]:text-primary-dark rounded-xl py-3 text-white/70"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Affordability
                  </TabsTrigger>
                </TabsList>

                {/* Monthly Payment Calculator */}
                <TabsContent value="monthly">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-accent" />
                      </div>
                      Monthly Payment Calculator
                    </h2>
                    <p className="text-white/60 mb-8">Calculate your estimated monthly mortgage payment based on home price, down payment, and interest rate.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <Label className="text-white/80 mb-2 block">Home Price</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <Input 
                            type="number" 
                            placeholder="400,000" 
                            value={homePrice}
                            onChange={(e) => setHomePrice(e.target.value)}
                            className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-white/80 mb-2 block">Down Payment</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <Input 
                            type="number" 
                            placeholder="80,000" 
                            value={downPayment}
                            onChange={(e) => setDownPayment(e.target.value)}
                            className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-white/80 mb-2 block">Interest Rate (%)</Label>
                        <Input 
                          type="number" 
                          step="0.1"
                          placeholder="7.0" 
                          value={interestRate}
                          onChange={(e) => setInterestRate(e.target.value)}
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div>
                        <Label className="text-white/80 mb-2 block">Loan Term (Years)</Label>
                        <select 
                          value={loanTerm}
                          onChange={(e) => setLoanTerm(e.target.value)}
                          className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white"
                        >
                          <option value="15" className="bg-primary-dark">15 Years</option>
                          <option value="20" className="bg-primary-dark">20 Years</option>
                          <option value="30" className="bg-primary-dark">30 Years</option>
                        </select>
                      </div>
                    </div>

                    <Button onClick={calculateMonthlyPayment} className="w-full bg-accent hover:bg-accent-light text-primary-dark font-semibold py-6 rounded-xl mb-6">
                      Calculate Payment
                    </Button>

                    {monthlyPayment && (
                      <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
                        <p className="text-white/60 mb-2">Estimated Monthly Payment</p>
                        <p className="text-4xl font-bold text-accent">{formatCurrency(monthlyPayment)}</p>
                        <p className="text-white/50 text-sm mt-2">Principal & Interest only. Does not include taxes and insurance.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Refinance Calculator */}
                <TabsContent value="refinance">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 text-accent" />
                      </div>
                      Refinance Savings Calculator
                    </h2>
                    <p className="text-white/60 mb-8">See how much you could save by refinancing your current mortgage to a lower interest rate.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <Label className="text-white/80 mb-2 block">Current Loan Balance</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <Input 
                            type="number" 
                            placeholder="300,000" 
                            value={currentLoanBalance}
                            onChange={(e) => setCurrentLoanBalance(e.target.value)}
                            className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-white/80 mb-2 block">Current Interest Rate (%)</Label>
                        <Input 
                          type="number" 
                          step="0.1"
                          placeholder="7.5" 
                          value={currentRate}
                          onChange={(e) => setCurrentRate(e.target.value)}
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div>
                        <Label className="text-white/80 mb-2 block">New Interest Rate (%)</Label>
                        <Input 
                          type="number" 
                          step="0.1"
                          placeholder="6.5" 
                          value={newRate}
                          onChange={(e) => setNewRate(e.target.value)}
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div>
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

                    <Button onClick={calculateRefinanceSavings} className="w-full bg-accent hover:bg-accent-light text-primary-dark font-semibold py-6 rounded-xl mb-6">
                      Calculate Savings
                    </Button>

                    {refinanceSavings && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
                          <p className="text-white/60 mb-2">Estimated Monthly Savings</p>
                          <p className="text-3xl font-bold text-accent">{formatCurrency(refinanceSavings.monthly)}</p>
                        </div>
                        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
                          <p className="text-white/60 mb-2">Estimated Total Savings Over Loan</p>
                          <p className="text-3xl font-bold text-accent">{formatCurrency(refinanceSavings.total)}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Affordability Calculator */}
                <TabsContent value="affordability">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Home className="w-5 h-5 text-accent" />
                      </div>
                      Affordability Calculator
                    </h2>
                    <p className="text-white/60 mb-8">Estimate how much home you can afford based on your income and current debts.</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <Label className="text-white/80 mb-2 block">Annual Income (Before Taxes)</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <Input 
                            type="number" 
                            placeholder="100,000" 
                            value={annualIncome}
                            onChange={(e) => setAnnualIncome(e.target.value)}
                            className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>
                      </div>
                      <div>
                        <Label className="text-white/80 mb-2 block">Monthly Debts (Car, Student Loans, etc.)</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <Input 
                            type="number" 
                            placeholder="500" 
                            value={monthlyDebts}
                            onChange={(e) => setMonthlyDebts(e.target.value)}
                            className="pl-9 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <Label className="text-white/80 mb-2 block">Down Payment Percentage (%)</Label>
                        <select 
                          value={downPaymentPercent}
                          onChange={(e) => setDownPaymentPercent(e.target.value)}
                          className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/20 text-white"
                        >
                          <option value="3" className="bg-primary-dark">3%</option>
                          <option value="5" className="bg-primary-dark">5%</option>
                          <option value="10" className="bg-primary-dark">10%</option>
                          <option value="15" className="bg-primary-dark">15%</option>
                          <option value="20" className="bg-primary-dark">20%</option>
                        </select>
                      </div>
                    </div>

                    <Button onClick={calculateAffordability} className="w-full bg-accent hover:bg-accent-light text-primary-dark font-semibold py-6 rounded-xl mb-6">
                      Calculate Affordability
                    </Button>

                    {affordability && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
                          <p className="text-white/60 mb-2">Estimated Maximum Home Price</p>
                          <p className="text-3xl font-bold text-accent">{formatCurrency(affordability.maxHome)}</p>
                        </div>
                        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
                          <p className="text-white/60 mb-2">Estimated Max Monthly Payment</p>
                          <p className="text-3xl font-bold text-accent">{formatCurrency(affordability.maxPayment)}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>

              {/* CTA Section */}
              <div className="mt-12 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-white/70 mb-6 max-w-xl mx-auto">
                  These calculators provide estimates. For accurate rates and personalized advice, schedule a free consultation with our mortgage experts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/schedule">
                    <Button className="bg-accent hover:bg-accent-light text-primary-dark font-semibold px-8 py-6 rounded-xl">
                      Schedule Consultation
                    </Button>
                  </Link>
                  <a 
                    href="https://previsemortgage.my1003app.com?time=1766329396091"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-xl">
                      Start Application
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MortgageCalculator;
