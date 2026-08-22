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
                Strategy First · Portfolio Driven
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Financing Should Fit Your <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">Investment Plan</span>
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
                  At <strong className="text-accent">Previse Mortgage</strong>, every conversation starts with the deal and your long-term portfolio — not our pipeline.
                  Leverage is the most powerful tool an investor has, and your loan officer's job is to
                  <strong className="text-accent"> model the numbers, compare structures, and stress-test the exit</strong> before you commit capital.
                  Sometimes the honest answer is "this deal doesn't cash flow." We'll tell you that too.
                </p>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <p className="text-lg text-white/80 leading-relaxed italic">
                "Every investor call starts the same way: <span className="text-accent font-semibold">we run the numbers, then we explain them</span>.
                DSCR vs conventional, 30-year fixed vs interest-only, single-property vs blanket, cash-out now vs season and wait —
                real figures on your actual property. We talk about reserves, vacancy, and what happens if rents soften.
                If the financing doesn't serve the strategy, we'll say so."
              </p>
              <p className="text-accent font-semibold mt-4">— Teddy Carbone, Founder</p>
            </div>
          </div>


          {/* Educational Journey callout */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-8 mb-12">
            <div className="text-center mb-6">
              <GraduationCap className="text-accent mx-auto mb-3" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">The Previse Deal Review</h3>
              <p className="text-white/70 text-sm max-w-2xl mx-auto">
                Whether you're analyzing a first duplex or refinancing five doors, we walk through the
                trade-offs that decide whether a deal pencils — before you're under contract.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: BarChart3, title: "Cash Flow & DSCR", desc: "Rent versus PITIA, coverage ratio, vacancy and reserves — the honest numbers on the deal." },
                { icon: Lightbulb, title: "Structure Comparison", desc: "DSCR vs conventional, fixed vs interest-only, single-property vs blanket loan." },
                { icon: Calendar, title: "Timing & Leverage", desc: "How much to put down, when to season, and whether to close cash and refinance later." },
                { icon: Target, title: "Scaling Plan", desc: "Cash-out strategy, entity setup, and the financing path to your next several doors." }

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
              <h4 className="text-lg font-bold text-white mb-2">Underwrite the Deal</h4>
              <p className="text-white/70 text-sm">
                We review rents, leases, and coverage ratios up front so the property is pre-vetted before you spend money on an appraisal
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Anticipate</h4>
              <p className="text-white/70 text-sm">
                Entity docs, leases, and payoff details get handled early — the issues that stall investor files never reach underwriting
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Be Transparent</h4>
              <p className="text-white/70 text-sm">
                Rate, points, and lender fees on the table from day one — and if the deal doesn't cash flow, we'll say so
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-accent" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Scale With You</h4>
              <p className="text-white/70 text-sm">
                Repeat-investor pricing, portfolio reviews, and a lender who already knows your entities on the next acquisition
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPreviseSection;