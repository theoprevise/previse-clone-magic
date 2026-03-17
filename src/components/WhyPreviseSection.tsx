import { Lightbulb, Eye, Target, Sparkles, HandHeart, GraduationCap, BarChart3, Calendar } from "lucide-react";

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
                Education First · Life-Plan Driven
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Mortgage Should Fit Your <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Life Plan</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-accent-light to-accent mx-auto rounded-full"></div>
          </div>
          
          {/* Main explanation card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <HandHeart className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Advisory-First, <span className="text-accent">Never Pushy</span>
                </h3>
                <p className="text-xl text-white/90 leading-relaxed">
                  At <strong className="text-accent">Previse Mortgage</strong>, every conversation starts with your goals — not ours. 
                  We believe that a mortgage is one of the biggest financial decisions you'll ever make, and your loan officer's job is to 
                  <strong className="text-accent"> educate, advise, and walk through scenarios</strong> so you feel confident and in control. 
                  Sometimes the best advice is "wait six months." We'll tell you that too.
                </p>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <p className="text-lg text-white/80 leading-relaxed italic">
                "Every Previse Planning Session starts the same way: <span className="text-accent font-semibold">we listen, then we teach</span>. 
                We walk through FHA vs conventional, ARM vs fixed, points vs no points — real numbers, not sales pitches. 
                We discuss your 5-year plan, your risk tolerance, and when buying makes sense vs when waiting does. 
                If Previse isn't the right fit, we'll tell you who is."
              </p>
              <p className="text-accent font-semibold mt-4">— Teddy Carbone, Founder</p>
            </div>
          </div>

          {/* Educational Journey callout */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8 mb-12">
            <div className="text-center mb-6">
              <GraduationCap className="text-accent mx-auto mb-3" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">The Previse Educational Journey</h3>
              <p className="text-white/70 text-sm max-w-2xl mx-auto">
                Whether you book a Planning Session or start with a pre-qualification, we guide you through 
                the key trade-offs that shape your mortgage — so you never feel lost or pressured.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: BarChart3, title: "Budget & Affordability", desc: "What can you truly afford without over-stretching? We run the numbers honestly." },
                { icon: Lightbulb, title: "Loan Comparison", desc: "FHA vs conventional, ARM vs fixed, 15 vs 30 year — explained with your real scenario." },
                { icon: Calendar, title: "Timing & Strategy", desc: "Buy now or wait? Lock the rate? Pay points? We map out each path clearly." },
                { icon: Target, title: "Post-Close Planning", desc: "When to refinance, how equity builds, and your personalized mortgage roadmap ahead." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <item.icon className="text-accent mx-auto mb-2" size={22} />
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Four pillars */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Educate First</h4>
              <p className="text-white/70 text-sm">
                Every consultation begins with a structured scenario walkthrough — we explain your options, trade-offs, and costs before any application
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Anticipate</h4>
              <p className="text-white/70 text-sm">
                We foresee challenges in your file and prepare solutions before they become problems — that's what "Previse" means
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Be Transparent</h4>
              <p className="text-white/70 text-sm">
                If Previse isn't the best option — or if the best advice is "wait" — we'll tell you and point you in the right direction
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Stay With You</h4>
              <p className="text-white/70 text-sm">
                Your relationship with Previse doesn't end at closing — annual reviews, refi strategy, and lifetime loan officer access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPreviseSection;