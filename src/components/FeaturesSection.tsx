import { Building2, RefreshCcw, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Building2,
      title: "DSCR Rental Loans",
      description: "Qualify on the property's rent — not your personal income or tax returns",
      items: [
        "No W-2s, tax returns, or DTI required",
        "No cap on the number of financed rentals",
        "Close in an LLC or entity name"
      ],
      path: "/dscr-loans"
    },
    {
      icon: TrendingUp,
      title: "Multifamily & Portfolio",
      description: "2-4 units, small apartment buildings, and blanket loans across multiple doors",
      items: [
        "Roll several rentals into one loan",
        "Cash-out to fund the next acquisition",
        "Short-term rental income considered"
      ],
      path: "/investors"
    },
    {
      icon: RefreshCcw,
      title: "Fix & Flip / Bridge",
      description: "Short-term capital for value-add projects and fast, competitive offers",
      items: [
        "Purchase plus rehab financing",
        "Interest-only during the project",
        "Exit into a DSCR refinance"
      ],
      path: "/mortgage-programs"
    },
    {
      icon: Shield,
      title: "Self-Employed & Non-QM",
      description: "Bank statement and asset-based options for investors with complex income",
      items: [
        "12-24 months of deposits instead of returns",
        "Recent credit events considered",
        "Conventional, FHA & VA for your own home"
      ],
      path: "/mortgage-solutions"
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
              Investment Property Lending Specialist
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Loans Built for <span className="text-accent">Real Estate Investors</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Previse Mortgage underwrites the deal, not just the borrower. Rental cash flow, entity ownership,
            and multiple financed properties are normal here — not exceptions that stall your file.
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