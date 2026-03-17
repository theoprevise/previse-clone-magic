import { useState, useMemo } from "react";
import { Calculator, DollarSign, Percent, Calendar } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const QuickCalculatorWidget = () => {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPaymentPct, setDownPaymentPct] = useState(10);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const { monthlyPayment, loanAmount, downPayment } = useMemo(() => {
    const dp = homePrice * (downPaymentPct / 100);
    const loan = homePrice - dp;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      return { monthlyPayment: loan / numPayments, loanAmount: loan, downPayment: dp };
    }

    const payment =
      (loan * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    return { monthlyPayment: payment, loanAmount: loan, downPayment: dp };
  }, [homePrice, downPaymentPct, interestRate, loanTerm]);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/8 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              Interactive Tool
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
              Estimate Your <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Monthly Payment</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Drag the sliders to see how home price, down payment, and rate affect your payment. This is an estimate only — not a commitment to lend. Subject to credit approval.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={200}>
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Sliders */}
              <div className="space-y-8">
                {/* Home Price */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-white/80 text-sm font-semibold flex items-center gap-2">
                      <DollarSign size={16} className="text-accent" /> Home Price
                    </label>
                    <span className="text-accent font-bold text-lg">{formatCurrency(homePrice)}</span>
                  </div>
                  <Slider
                    value={[homePrice]}
                    onValueChange={(v) => setHomePrice(v[0])}
                    min={100000}
                    max={1500000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-white/40 text-xs mt-1">
                    <span>$100K</span><span>$1.5M</span>
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-white/80 text-sm font-semibold flex items-center gap-2">
                      <Percent size={16} className="text-accent" /> Down Payment
                    </label>
                    <span className="text-accent font-bold text-lg">{downPaymentPct}% ({formatCurrency(downPayment)})</span>
                  </div>
                  <Slider
                    value={[downPaymentPct]}
                    onValueChange={(v) => setDownPaymentPct(v[0])}
                    min={0}
                    max={30}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-white/40 text-xs mt-1">
                    <span>0%</span><span>30%</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-white/80 text-sm font-semibold flex items-center gap-2">
                      <Percent size={16} className="text-accent" /> Interest Rate
                    </label>
                    <span className="text-accent font-bold text-lg">{interestRate.toFixed(2)}%</span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(v) => setInterestRate(v[0])}
                    min={3}
                    max={10}
                    step={0.125}
                    className="w-full"
                  />
                  <div className="flex justify-between text-white/40 text-xs mt-1">
                    <span>3%</span><span>10%</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-white/80 text-sm font-semibold flex items-center gap-2">
                      <Calendar size={16} className="text-accent" /> Loan Term
                    </label>
                    <span className="text-accent font-bold text-lg">{loanTerm} years</span>
                  </div>
                  <div className="flex gap-3">
                    {[15, 20, 30].map((term) => (
                      <button
                        key={term}
                        onClick={() => setLoanTerm(term)}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                          loanTerm === term
                            ? "bg-accent text-white shadow-lg shadow-accent/30"
                            : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/10"
                        }`}
                      >
                        {term} yr
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30 rounded-3xl p-8 text-center w-full">
                  <Calculator className="text-accent mx-auto mb-4" size={36} />
                  <p className="text-white/60 text-sm mb-2">Estimated Monthly Payment</p>
                  <p className="text-5xl md:text-6xl font-bold text-white mb-2 font-serif">
                    {formatCurrency(monthlyPayment)}
                  </p>
                  <p className="text-white/50 text-xs mb-6">Principal & Interest Only*</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-xl p-3">
                      <p className="text-white/50 text-xs">Loan Amount</p>
                      <p className="text-white font-bold text-sm">{formatCurrency(loanAmount)}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <p className="text-white/50 text-xs">Down Payment</p>
                      <p className="text-white font-bold text-sm">{formatCurrency(downPayment)}</p>
                    </div>
                  </div>

                  <Button size="lg" variant="hero" className="w-full" asChild>
                    <a href="/pre-qualify">Get Your Personalized Rate</a>
                  </Button>
                </div>
                <p className="text-white/30 text-xs mt-4 text-center max-w-xs">
                  *Estimate does not include taxes, insurance, or PMI. Not a commitment to lend. Subject to credit approval.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default QuickCalculatorWidget;
