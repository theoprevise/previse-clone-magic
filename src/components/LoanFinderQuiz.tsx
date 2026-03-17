import { useState } from "react";
import { ArrowRight, ArrowLeft, Home, Building2, RefreshCw, Briefcase, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

interface QuizOption {
  label: string;
  value: string;
  icon: React.ReactNode;
  description: string;
}

interface QuizStep {
  question: string;
  options: QuizOption[];
}

interface LoanResult {
  title: string;
  description: string;
  programs: string[];
  cta: string;
  link: string;
}

const steps: QuizStep[] = [
  {
    question: "What's your primary goal?",
    options: [
      { label: "Buy a Home", value: "purchase", icon: <Home size={24} />, description: "First-time or move-up buyer" },
      { label: "Refinance", value: "refinance", icon: <RefreshCw size={24} />, description: "Lower rate or access equity" },
      { label: "Invest", value: "invest", icon: <Building2 size={24} />, description: "Rental or investment property" },
    ],
  },
  {
    question: "How do you earn your income?",
    options: [
      { label: "W-2 Employee", value: "w2", icon: <Briefcase size={24} />, description: "Steady paycheck employer" },
      { label: "Self-Employed", value: "self-employed", icon: <Briefcase size={24} />, description: "1099, business owner, freelancer" },
      { label: "Mixed / Other", value: "mixed", icon: <Briefcase size={24} />, description: "Multiple sources or non-traditional" },
    ],
  },
  {
    question: "How would you describe your credit?",
    options: [
      { label: "Excellent (720+)", value: "excellent", icon: <CheckCircle size={24} />, description: "Strong history, few issues" },
      { label: "Good (660–719)", value: "good", icon: <CheckCircle size={24} />, description: "Solid with minor blemishes" },
      { label: "Rebuilding (<660)", value: "rebuilding", icon: <CheckCircle size={24} />, description: "Past events, working on it" },
    ],
  },
  {
    question: "What's your down payment situation?",
    options: [
      { label: "20%+ Available", value: "high", icon: <Home size={24} />, description: "Strong savings or equity" },
      { label: "5–19%", value: "moderate", icon: <Home size={24} />, description: "Moderate savings" },
      { label: "Under 5% / Need Help", value: "low", icon: <Home size={24} />, description: "Looking for low-down options" },
    ],
  },
];

const getResult = (answers: string[]): LoanResult => {
  const [goal, income, credit, downpayment] = answers;

  if (goal === "invest") {
    return {
      title: "DSCR / Investor Loan Programs",
      description: "Based on your answers, you may qualify for investor-focused programs where the property's rental income qualifies — not your personal income. Ideal for building a portfolio.",
      programs: ["DSCR Loans", "Bank Statement Loans", "Investor Cash Flow Programs", "Fix & Flip Lines"],
      cta: "Explore Investor Options",
      link: "/investors",
    };
  }

  if (income === "self-employed" || income === "mixed") {
    return {
      title: "Self-Employed & Non-QM Programs",
      description: "Standard tax returns don't always reflect your real income. We specialize in bank statement loans and alternative documentation programs designed for entrepreneurs.",
      programs: ["Bank Statement Loans", "Asset-Based Loans", "1099 Income Programs", "Profit & Loss Loans"],
      cta: "See Self-Employed Options",
      link: "/mortgage-programs",
    };
  }

  if (goal === "refinance") {
    return {
      title: "Refinance Programs",
      description: "Whether you want a lower rate, shorter term, or cash out equity — we'll compare options from 50+ lenders to find the best fit for your situation.",
      programs: ["Rate & Term Refinance", "Cash-Out Refinance", "Streamline Refinance", "Debt Consolidation"],
      cta: "Start Your Refinance",
      link: "/refinance",
    };
  }

  if (credit === "rebuilding" || downpayment === "low") {
    return {
      title: "First-Time & Low-Down Payment Programs",
      description: "You may qualify for government-backed loans with as little as 3–3.5% down and flexible credit guidelines. We'll find the right path based on your unique situation.",
      programs: ["FHA Loans (3.5% down)", "VA Loans (0% down)", "USDA Loans (0% down)", "Conventional 97 (3% down)"],
      cta: "Explore Low-Down Options",
      link: "/first-time-homebuyer",
    };
  }

  return {
    title: "Conventional Purchase Programs",
    description: "With strong credit and solid savings, you'll likely qualify for competitive conventional loan options. We shop 50+ wholesale lenders to get you the best terms.",
    programs: ["Conventional Fixed-Rate", "Adjustable-Rate (ARM)", "Jumbo Loans", "Interest-Only Options"],
    cta: "Get Pre-Qualified",
    link: "/pre-qualify",
  };
};

const LoanFinderQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = value;
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const result = showResult ? getResult(answers) : null;
  const progress = showResult ? 100 : ((currentStep) / steps.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              Interactive Quiz
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-4">
              Find Your <span className="text-accent">Ideal Loan</span> in 60 Seconds
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Answer 4 quick questions and we'll recommend the mortgage programs that fit your situation. No email required.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={200}>
          <div className="max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-muted-foreground text-xs mt-2">
                <span>Question {Math.min(currentStep + 1, steps.length)} of {steps.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
            </div>

            {!showResult ? (
              <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
                  {steps[currentStep].question}
                </h3>
                <div className="space-y-3">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left group ${
                        answers[currentStep] === option.value
                          ? "bg-accent/10 border-accent/40 shadow-lg shadow-accent/10"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-accent/20"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        answers[currentStep] === option.value ? "bg-accent/20 text-accent" : "bg-white/5 text-muted-foreground group-hover:text-accent"
                      }`}>
                        {option.icon}
                      </div>
                      <div>
                        <span className="font-bold text-foreground block">{option.label}</span>
                        <span className="text-muted-foreground text-sm">{option.description}</span>
                      </div>
                      <ArrowRight className="ml-auto text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" size={18} />
                    </button>
                  ))}
                </div>
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent text-sm mt-6 transition-colors"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                )}
              </div>
            ) : result ? (
              <div className="bg-card/50 backdrop-blur-xl border border-accent/20 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{result.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{result.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {result.programs.map((program) => (
                    <span key={program} className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full border border-accent/20">
                      {program}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" variant="hero" asChild>
                    <a href={result.link}>{result.cta}</a>
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleReset} className="border-border text-foreground hover:bg-white/5">
                    <RefreshCw size={16} className="mr-2" /> Retake Quiz
                  </Button>
                </div>
                <p className="text-muted-foreground text-xs mt-6">
                  This recommendation is for educational purposes only. Not a commitment to lend. Subject to credit approval and underwriting guidelines.
                </p>
              </div>
            ) : null}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LoanFinderQuiz;
