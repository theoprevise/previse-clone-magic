import { Building2, RefreshCcw, Shield, TrendingUp, CheckCircle, Award, FileWarning, Landmark, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Building2,
      title: "DSCR Investment Loans",
      description: "Qualify based on property income — not personal income or tax returns",
      items: [
        "No W-2s, tax returns, or DTI required",
        "Finance unlimited rental properties",
        "Close in LLC or entity name"
      ],
      path: "/investors"
    },
    {
      icon: Shield,
      title: "Bank Statement Loans",
      description: "Self-employed? Use 12-24 months of deposits instead of tax returns",
      items: [
        "Personal or business statements",
        "1099 and gig-economy friendly",
        "Declined by a bank? Start here"
      ],
      path: "/mortgage-solutions"
    },
    {
      icon: RefreshCcw,
      title: "Non-QM & Creative Financing",
      description: "Solutions for borrowers who don't fit the standard mold",
      items: [
        "Recent credit events OK",
        "Asset depletion programs",
        "Interest-only options available"
      ],
      path: "/mortgage-programs"
    },
    {
      icon: TrendingUp,
      title: "Conventional, FHA & VA",
      description: "Traditional programs with broker-level pricing advantages",
      items: [
        "First-time buyer programs (3% down)",
        "VA loans — 0% down for veterans",
        "FHA — 3.5% down, flexible credit"
      ],
      path: "/mortgage-programs"
    }
  ];

  const caseStudies = [
    {
      icon: Wallet,
      scenario: "Self-Employed Contractor",
      problem: "Declined by two banks — tax returns showed $48K but real income was $140K",
      solution: "24-month bank statement program through a niche non-QM lender",
      result: "Qualified at $140K income, purchased $385K home, closed in 24 days",
      tag: "Bank Statement Loan"
    },
    {
      icon: Building2,
      scenario: "Portfolio Investor — 8th Property",
      problem: "Big bank capped at 4 financed properties and required full DTI qualification",
      solution: "DSCR loan qualifying on rental income only — no personal income docs required",
      result: "Closed in LLC, 1.35 DSCR, funded in 22 days with no W-2s or tax returns",
      tag: "DSCR Investment Loan"
    },
    {
      icon: FileWarning,
      scenario: "Recent Bankruptcy — 18 Months Out",
      problem: "Every conventional and FHA lender required 2-4 year waiting period",
      solution: "Non-QM program with manual underwriting, strong compensating factors",
      result: "Approved with 20% down, competitive rate, closed on time for contract deadline",
      tag: "Non-QM Financing"
    },
    {
      icon: Landmark,
      scenario: "Mixed Income — W-2 + 1099 + Rental",
      problem: "Online lender couldn't underwrite three income sources; kept requesting more docs",
      solution: "Previse matched to a wholesale lender with flexible income-blending guidelines",
      result: "All three income streams counted, qualified for $520K purchase, 21-day close",
      tag: "Complex Income"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              Complex Borrower & Investor Specialist
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            The Loans <span className="text-accent">Big Banks</span> Won't Touch
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Previse Mortgage is built for self-employed borrowers, real estate investors, and anyone whose 
            financial story doesn't fit a standard box. We find solutions where others see risk.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer"
              onClick={() => {
                navigate(feature.path);
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-accent" size={28} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-white/80 text-sm group-hover/item:text-white transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies — Complex Files Solved */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="text-accent" size={24} />
              <span className="text-accent text-sm font-bold uppercase tracking-wider">
                Files Other Lenders Couldn't Close
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              Complex Borrower <span className="text-accent">Case Studies</span>
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto text-sm">
              Real scenarios where Previse found solutions after banks declined the file. 
              This is where access to 50+ wholesale lenders and niche non-QM programs makes the difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <study.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      {study.tag}
                    </span>
                    <h4 className="text-white font-bold text-sm mt-1">{study.scenario}</h4>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-white/50 text-xs font-bold uppercase">The Problem</span>
                    <p className="text-white/70 text-sm leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <span className="text-white/50 text-xs font-bold uppercase">Previse Solution</span>
                    <p className="text-white/70 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                    <span className="text-accent text-xs font-bold uppercase">Result</span>
                    <p className="text-white text-sm font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;