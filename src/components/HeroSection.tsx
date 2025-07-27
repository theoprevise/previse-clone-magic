import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-primary flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80')"
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            Professionalized Loan
            <br />
            Financing
          </h1>
          
          <div className="w-24 h-0.5 bg-accent mx-auto mb-8"></div>
          
          <p className="text-xl lg:text-2xl text-white mb-12 max-w-md mx-auto">
            Get the guidance you need
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary-light hover:bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold min-w-[160px]"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary-light text-white hover:bg-primary-light hover:text-white px-8 py-3 rounded-full text-lg font-semibold min-w-[160px]"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;