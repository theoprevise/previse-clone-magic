import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StructuredData from "./StructuredData";
import HeroLeadForm from "./HeroLeadForm";
import teddyImage from '@/assets/teddy-carbone.jpg';


const HeroSection = () => {
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
        
        {/* Background Image - using img tag for better LCP performance */}
        <img 
          src="/lovable-uploads/d7d9e1d7-4741-4705-97a2-a94043e38964.png"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/60"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text & Image */}
            <div className="text-center lg:text-left">
              {/* Main heading */}
              <div className="mb-6 animate-fade-in">
                <span className="inline-block mb-4 text-lg md:text-xl font-medium text-accent tracking-wide">Pennsylvania Mortgage Broker · Purchase · Refinance · Invest</span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4" itemProp="name">
                  <span className="block mb-2">Your Home Loan,</span>
                  <span className="block bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                    Done Right
                  </span>
                </h1>
              </div>
              
              {/* Modern divider */}
              <div className="flex items-center justify-center lg:justify-start mb-6 animate-fade-in delay-300">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
                <div className="mx-3 w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
              </div>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in delay-500" itemProp="description">
                Buying your first home, refinancing for a better rate, or growing your investment portfolio — Previse Mortgage delivers fast closings, transparent pricing, and a dedicated advisor from start to finish. 50+ lenders. One trusted team.
              </p>
              
              {/* Team Photos + CTA */}
              <div className="flex flex-col items-center lg:items-start gap-6 animate-fade-in delay-700">
                <div className="flex items-center gap-6">
                  <img 
                    src={teddyImage} 
                    alt="Teddy Carbone - Loan Officer" 
                    className="w-16 h-16 rounded-full border-3 border-accent shadow-xl object-cover"
                  />
                  <div className="text-left">
                    <p className="text-white font-bold text-base">Teddy Carbone</p>
                    <p className="text-white/80 text-sm">Licensed Loan Officer in PA</p>
                  </div>
                </div>
                
                <a 
                  href="https://previsemortgage.my1003app.com?time=1766329396091"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="group bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary border-0 px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Right Column - Lead Form */}
            <div className="animate-fade-in delay-500">
              <HeroLeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;