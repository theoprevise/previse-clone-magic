import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StructuredData from "./StructuredData";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <StructuredData type="service" />
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center justify-center overflow-hidden" itemScope itemType="https://schema.org/FinancialService">
      {/* Animated background elements - symmetrical */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>
      
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/lovable-uploads/d7d9e1d7-4741-4705-97a2-a94043e38964.png')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main heading with modern typography */}
          <div className="mb-8 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-relaxed mb-8 text-white pb-4" itemProp="name">
              <span className="block mb-4">Professionalized</span>
              <span className="block bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent py-4" style={{ paddingBottom: '0.5rem', lineHeight: '1.2' }}>
                Loan Financing
              </span>
            </h1>
          </div>
          
          {/* Modern divider */}
          <div className="flex items-center justify-center mb-8 animate-fade-in delay-300">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
            <div className="mx-4 w-2 h-2 bg-accent rounded-full"></div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500" itemProp="description">
            Get the guidance you need with cutting-edge technology and personalized service
          </p>
          
          {/* Modern CTA button */}
          <div className="flex justify-center animate-fade-in delay-700">
            <a 
              href="https://previsemortgage.my1003app.com?time=1766329396091"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary border-0 px-10 py-4 rounded-full text-lg font-bold min-w-[200px] shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Apply Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;