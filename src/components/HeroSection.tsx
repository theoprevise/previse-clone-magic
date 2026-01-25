import { Button } from "@/components/ui/button";
import { ArrowRight, Home, RefreshCcw, Building2, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StructuredData from "./StructuredData";
import teddyImage from '@/assets/teddy-carbone.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const loanPaths = [
    { icon: Home, label: "Buy a Home", path: "/first-time-homebuyer", color: "from-accent to-accent-light" },
    { icon: RefreshCcw, label: "Refinance", path: "/refinance", color: "from-success to-accent" },
    { icon: Building2, label: "Invest", path: "/investors", color: "from-primary-light to-accent" },
    { icon: Shield, label: "VA Loans", path: "/va-loans", color: "from-accent-light to-success" },
  ];

  return (
    <>
      <StructuredData type="service" />
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center overflow-hidden py-24 lg:py-32" itemScope itemType="https://schema.org/FinancialService">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>
        
        {/* Background Image */}
        <img 
          src="/lovable-uploads/d7d9e1d7-4741-4705-97a2-a94043e38964.png"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/70"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Bold Hero Headline */}
            <div className="mb-8 animate-fade-in">
              <span className="inline-block mb-4 text-sm md:text-base font-bold uppercase tracking-wider text-accent bg-accent/10 px-4 py-2 rounded-full">
                Previse Mortgage • NMLS# 2723255
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6" itemProp="name">
                <span className="block mb-2">Your Home.</span>
                <span className="block bg-gradient-to-r from-accent via-accent-light to-success bg-clip-text text-transparent">
                  Your Future.
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-white/90">We've Got You.</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300" itemProp="description">
              Whether you're buying your first home, refinancing, or building your investment portfolio — 
              Previse Mortgage delivers expert guidance with cutting-edge technology.
            </p>

            {/* Path Selector Cards - NAF Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-fade-in delay-500">
              {loanPaths.map((path, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(path.path);
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                  }}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20"
                >
                  <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <path.icon className="text-primary" size={28} strokeWidth={2} />
                  </div>
                  <span className="text-white font-bold text-base md:text-lg group-hover:text-accent transition-colors duration-300">
                    {path.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in delay-700">
              <a 
                href="https://previsemortgage.my1003app.com?time=1766329396091"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="xl" 
                  className="group bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary border-0 px-10 py-6 rounded-full text-lg font-bold shadow-2xl hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Your Application
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={22} />
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-full"
                onClick={() => navigate('/mortgage-calculator')}
              >
                Calculate Your Payment
              </Button>
            </div>

            {/* Advisor Trust Badge */}
            <div className="flex items-center justify-center gap-4 animate-fade-in delay-1000">
              <img 
                src={teddyImage} 
                alt="Teddy Carbone - Senior Mortgage Advisor" 
                className="w-16 h-16 rounded-full border-3 border-accent shadow-xl object-cover"
              />
              <div className="text-left">
                <p className="text-white font-bold">Teddy Carbone</p>
                <p className="text-white/70 text-sm">Senior Mortgage Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
