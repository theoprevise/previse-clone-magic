import { Lightbulb, Eye, Target, Sparkles } from "lucide-react";

const WhyPreviseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-accent/8 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                Our Name, Our Promise
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Previse</span> Mortgage?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-accent-light to-accent mx-auto rounded-full"></div>
          </div>
          
          {/* Main explanation card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Eye className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  <span className="text-accent">Previse</span> means to <em className="text-accent-light">foresee</em> or <em className="text-accent-light">anticipate</em>
                </h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  At <strong className="text-accent">Previse Mortgage</strong>, we don't just process loans — we anticipate your needs, 
                  foresee potential challenges, and prepare solutions before problems arise. That's the 
                  <strong className="text-accent"> Previse</strong> difference.
                </p>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <p className="text-lg text-white/80 leading-relaxed italic">
                "While other lenders react to problems, <span className="text-accent font-semibold">Previse Mortgage</span> stays 
                ahead — using modern technology and proactive service to ensure a smooth, stress-free closing."
              </p>
              <p className="text-accent font-semibold mt-4">— Teddy Carbone, Founder of Previse Mortgage</p>
            </div>
          </div>
          
          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Anticipate</h4>
              <p className="text-white/70 text-sm">
                <span className="text-accent">Previse Mortgage</span> anticipates market changes and prepares you for success
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Prepare</h4>
              <p className="text-white/70 text-sm">
                We prepare your loan file proactively to avoid last-minute surprises
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Deliver</h4>
              <p className="text-white/70 text-sm">
                <span className="text-accent">Previse Mortgage</span> delivers on-time closings with confidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPreviseSection;
