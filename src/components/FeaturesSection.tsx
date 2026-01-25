import { Building2, RefreshCcw, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Building2,
      title: "Investor Loans (DSCR)",
      description: "Qualify based on property income, not personal income",
      items: [
        "No tax returns or W-2s required",
        "Finance unlimited properties",
        "Competitive rates for rentals"
      ],
      path: "/investors"
    },
    {
      icon: RefreshCcw,
      title: "Refinancing",
      description: "Lower your rate or access home equity",
      items: [
        "Rate-and-term refinancing",
        "Cash-out for investments",
        "Fast 15-30 day closings"
      ],
      path: "/refinance"
    },
    {
      icon: Shield,
      title: "VA Loans",
      description: "Exclusive benefits for those who served",
      items: [
        "0% down payment options",
        "No private mortgage insurance",
        "Competitive interest rates"
      ],
      path: "/va-loans"
    },
    {
      icon: TrendingUp,
      title: "Traditional Financing",
      description: "Conventional and jumbo loan options",
      items: [
        "Loans from $250K to $3M+",
        "First-time buyer programs",
        "Flexible down payment options"
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
              Our Specialties
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Financing for <span className="text-accent">Investors</span> & <span className="text-accent">Homeowners</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Specialized lending for qualified borrowers. Minimum $250K loan amount, 680+ credit score recommended.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer"
              onClick={() => {
                navigate(feature.path);
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
            >
              {/* Glass morphism card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
                {/* Icon with glow effect */}
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