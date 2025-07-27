import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Your Dream Home
              <span className="block text-accent-light">Starts Here</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Expert mortgage guidance and competitive rates to help you secure the perfect home loan. 
              From first-time buyers to refinancing, we make homeownership possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Get Pre-Approved
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Calculate Payment
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                  <Calculator className="text-accent-light" size={24} />
                </div>
                <h3 className="font-semibold mb-1">Quick Approval</h3>
                <p className="text-white/80 text-sm">Get approved in 24 hours</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                  <Shield className="text-accent-light" size={24} />
                </div>
                <h3 className="font-semibold mb-1">Secure Process</h3>
                <p className="text-white/80 text-sm">Bank-level security</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                  <Clock className="text-accent-light" size={24} />
                </div>
                <h3 className="font-semibold mb-1">Fast Closing</h3>
                <p className="text-white/80 text-sm">Close in 15-30 days</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Get Your Rate Quote</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Home Price</label>
                    <input type="text" placeholder="$500,000" className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Down Payment</label>
                    <input type="text" placeholder="$100,000" className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Credit Score</label>
                  <select className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Excellent (740+)</option>
                    <option>Good (670-739)</option>
                    <option>Fair (580-669)</option>
                    <option>Poor (Below 580)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <Button variant="success" size="lg" className="w-full">
                  Get My Rate Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;