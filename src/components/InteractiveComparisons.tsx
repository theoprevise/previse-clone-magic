import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Home, Banknote, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const RentVsBuy = () => {
  const [monthlyRent, setMonthlyRent] = useState(1800);
  const [homePrice, setHomePrice] = useState(350000);
  const [years, setYears] = useState(5);

  const results = useMemo(() => {
    const annualAppreciation = 0.035;
    const monthlyMortgage = (homePrice * 0.9 * 0.065 / 12) / (1 - Math.pow(1 + 0.065 / 12, -360));
    const totalRent = monthlyRent * 12 * years;
    const rentIncrease = 0.03;
    let totalRentAdjusted = 0;
    for (let i = 0; i < years; i++) {
      totalRentAdjusted += monthlyRent * Math.pow(1 + rentIncrease, i) * 12;
    }
    const homeValue = homePrice * Math.pow(1 + annualAppreciation, years);
    const equityBuilt = homeValue - homePrice * 0.9 * 0.95 + homePrice * 0.1; // simplified
    const totalMortgage = monthlyMortgage * 12 * years;
    const netCostBuying = totalMortgage - equityBuilt;

    return {
      totalRent: totalRentAdjusted,
      totalMortgage,
      monthlyMortgage,
      equityBuilt: Math.max(equityBuilt, 0),
      homeValue,
      savings: totalRentAdjusted - netCostBuying,
    };
  }, [monthlyRent, homePrice, years]);

  const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
          <Home className="text-accent" size={22} />
        </div>
        <h3 className="text-xl font-bold text-white">Rent vs. Buy</h3>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/70 text-sm">Monthly Rent</span>
            <span className="text-accent font-bold">{fmt(monthlyRent)}</span>
          </div>
          <Slider value={[monthlyRent]} onValueChange={(v) => setMonthlyRent(v[0])} min={800} max={4000} step={50} />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/70 text-sm">Home Purchase Price</span>
            <span className="text-accent font-bold">{fmt(homePrice)}</span>
          </div>
          <Slider value={[homePrice]} onValueChange={(v) => setHomePrice(v[0])} min={150000} max={800000} step={5000} />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/70 text-sm">Time Horizon</span>
            <span className="text-accent font-bold">{years} years</span>
          </div>
          <Slider value={[years]} onValueChange={(v) => setYears(v[0])} min={1} max={10} step={1} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
          <p className="text-white/50 text-xs mb-1">Total Rent Paid</p>
          <p className="text-red-400 font-bold text-lg">{fmt(results.totalRent)}</p>
          <p className="text-white/30 text-xs">$0 equity built</p>
        </div>
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 text-center">
          <p className="text-white/50 text-xs mb-1">Equity Built (Buying)</p>
          <p className="text-accent font-bold text-lg">{fmt(results.equityBuilt)}</p>
          <p className="text-white/30 text-xs">{fmt(results.monthlyMortgage)}/mo mortgage</p>
        </div>
      </div>

      {results.savings > 0 && (
        <div className="bg-accent/5 border border-accent/15 rounded-xl p-3 text-center">
          <p className="text-accent text-sm font-semibold">
            Buying could save you ~{fmt(results.savings)} over {years} years vs renting*
          </p>
        </div>
      )}
    </div>
  );
};

const PointsComparison = () => {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [baseRate, setBaseRate] = useState(6.75);

  const results = useMemo(() => {
    const pointCost = loanAmount * 0.01;
    const rateWithPoints = baseRate - 0.25;
    const monthlyNoPoints = (loanAmount * (baseRate / 100 / 12)) / (1 - Math.pow(1 + baseRate / 100 / 12, -360));
    const monthlyWithPoints = (loanAmount * (rateWithPoints / 100 / 12)) / (1 - Math.pow(1 + rateWithPoints / 100 / 12, -360));
    const monthlySavings = monthlyNoPoints - monthlyWithPoints;
    const breakEvenMonths = Math.ceil(pointCost / monthlySavings);

    return {
      pointCost,
      rateWithPoints,
      monthlyNoPoints,
      monthlyWithPoints,
      monthlySavings,
      breakEvenMonths,
      totalSavings30yr: monthlySavings * 360 - pointCost,
    };
  }, [loanAmount, baseRate]);

  const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
          <Banknote className="text-accent" size={22} />
        </div>
        <h3 className="text-xl font-bold text-white">Points vs. No Points</h3>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/70 text-sm">Loan Amount</span>
            <span className="text-accent font-bold">{fmt(loanAmount)}</span>
          </div>
          <Slider value={[loanAmount]} onValueChange={(v) => setLoanAmount(v[0])} min={100000} max={800000} step={5000} />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white/70 text-sm">Base Rate (No Points)</span>
            <span className="text-accent font-bold">{baseRate.toFixed(2)}%</span>
          </div>
          <Slider value={[baseRate]} onValueChange={(v) => setBaseRate(v[0])} min={4} max={9} step={0.125} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
          <p className="text-white/50 text-xs mb-1">No Points</p>
          <p className="text-white font-bold">{baseRate.toFixed(2)}% rate</p>
          <p className="text-white/70 text-sm">{fmt(results.monthlyNoPoints)}/mo</p>
          <p className="text-white/30 text-xs">$0 upfront</p>
        </div>
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 text-center">
          <p className="text-white/50 text-xs mb-1">With 1 Point</p>
          <p className="text-accent font-bold">{results.rateWithPoints.toFixed(2)}% rate</p>
          <p className="text-white/70 text-sm">{fmt(results.monthlyWithPoints)}/mo</p>
          <p className="text-white/30 text-xs">{fmt(results.pointCost)} upfront</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="bg-accent/5 border border-accent/15 rounded-xl p-3 flex justify-between items-center">
          <span className="text-white/70 text-sm">Monthly Savings</span>
          <span className="text-accent font-bold">{fmt(results.monthlySavings)}</span>
        </div>
        <div className="bg-accent/5 border border-accent/15 rounded-xl p-3 flex justify-between items-center">
          <span className="text-white/70 text-sm">Break-Even</span>
          <span className="text-accent font-bold">{results.breakEvenMonths} months</span>
        </div>
        <div className="bg-accent/5 border border-accent/15 rounded-xl p-3 flex justify-between items-center">
          <span className="text-white/70 text-sm">30-Year Net Savings</span>
          <span className="text-accent font-bold">{fmt(results.totalSavings30yr)}</span>
        </div>
      </div>
    </div>
  );
};

const InteractiveComparisons = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              Compare Scenarios
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
              See the <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Numbers</span> for Yourself
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Drag the sliders to compare real scenarios. Educational estimates only — not a commitment to lend.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <AnimatedSection animation="fade-left" delay={100}>
            <RentVsBuy />
          </AnimatedSection>
          <AnimatedSection animation="fade-right" delay={200}>
            <PointsComparison />
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center mt-10">
            <p className="text-white/40 text-xs max-w-xl mx-auto">
              *All calculations are estimates for educational purposes. Actual rates, payments, and savings depend on your individual financial situation, credit profile, and market conditions. Not a commitment to lend. Subject to credit approval.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InteractiveComparisons;
