import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main heading with modern typography */}
          <div className="mb-8 animate-fade-in">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6 text-white">
              <span className="block mb-4">Professionalized</span>
              <span className="block bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                Loan Financing
              </span>
            </h1>
          </div>
          
          {/* Modern divider */}
          <div className="flex items-center justify-center mb-8 animate-fade-in delay-300">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-accent rounded-full"></div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-accent via-transparent to-transparent"></div>
          </div>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-16 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
            Get the guidance you need with cutting-edge technology and personalized service
          </p>
          
          {/* Modern CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700">
            <a 
              href="https://2730429.my1003app.com/"
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
            <Button 
              size="lg" 
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-full text-lg font-semibold min-w-[200px] shadow-xl transition-all duration-300"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={18} />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;