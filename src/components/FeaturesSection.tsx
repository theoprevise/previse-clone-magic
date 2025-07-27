import { Handshake, Clock, TrendingUp, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturesSection = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Handshake,
      title: "Fast Closing",
      description: "Advanced technology meets personalized service",
      items: [
        "Timely coatings real-time view",
        "AI-driven efficiency",
        "Fewer delays, more clarity"
      ]
    },
    {
      icon: Clock,
      title: "Flexible Options",
      description: "Financing solutions tailored to your needs",
      items: [
        "Traditional QM Financing",
        "Financing that fits your goals",
        "DSCR, Bank Statement, Niche Loans"
      ]
    },
    {
      icon: TrendingUp,
      title: "Real-Time Updates",
      description: "Stay informed throughout your journey",
      items: [
        "Track your loan via client portal",
        "Upload documents instantly",
        "Get automatic notifications, no surprises"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/8 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-accent/6 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              Why Choose Previse
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            Your trusted partner in<br />
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
              home financing
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/80 leading-relaxed">
              At Previse Mortgage, we're fast, flexible, and future ready. Mortgage 
              lending meets modern technology, so you get answers in minutes and 
              closings in days.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer"
              onClick={() => {
                navigate('/mortgage-solutions');
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
            >
              {/* Glass morphism card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
                {/* Icon with glow effect */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-accent" size={40} strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <CheckCircle className="text-accent mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" size={16} />
                      <span className="text-white/80 group-hover/item:text-white transition-colors duration-200">
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