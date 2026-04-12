import { Building2, RefreshCcw, Shield, TrendingUp, CheckCircle } from "lucide-react";
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
      </div>
    </section>
  );
};

export default FeaturesSection;