import { useEffect } from "react";
import { BookOpen, TrendingUp, Shield, Clock, CheckCircle } from "lucide-react";

const CalendlySection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.previsemortgage.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://link.previsemortgage.com/js/form_embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.08),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            
            {/* Left column - Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 px-4 py-2 rounded-full mb-5">
                  <Clock size={14} className="text-accent" />
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    Free · 30 Min · No Obligation
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                  Book Your <br />
                  <span className="text-accent">Planning Session</span>
                </h2>
                
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Not a sales call — a structured mortgage education session built around 
                  your life goals, timeline, and financial picture.
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-4">
                {[
                  {
                    icon: BookOpen,
                    title: "Scenario Education",
                    desc: "We compare FHA vs conventional, ARM vs fixed, and show you real numbers"
                  },
                  {
                    icon: TrendingUp,
                    title: "Life-Plan Alignment",
                    desc: "Your mortgage should fit your 5-year plan — we'll help you see how"
                  },
                  {
                    icon: Shield,
                    title: "Honest Next Steps",
                    desc: "If the best advice is 'wait 6 months,' that's what we'll tell you"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="text-accent" size={16} />
                    </div>
                    <div>
                      <h4 className="text-primary-foreground font-semibold text-sm">{item.title}</h4>
                      <p className="text-primary-foreground/55 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {["Complimentary", "Confidential", "Zero-Pressure"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-primary-foreground/60">
                    <CheckCircle size={12} className="text-accent" />
                    <span className="text-xs">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Calendar embed */}
            <div className="lg:col-span-3">
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl border border-border/60 shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.15)] overflow-hidden">
                <div className="bg-accent/5 border-b border-border/40 px-6 py-3 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  <span className="text-foreground/70 text-xs font-medium">Select a time that works for you</span>
                </div>
                <div className="p-3">
                  <iframe 
                    src="https://link.previsemortgage.com/widget/booking/mCGtajGuvJ2SRpcD595P" 
                    style={{width: "100%", border: "none", overflow: "hidden", minHeight: "500px"}}
                    scrolling="no" 
                    id="5tsGqmMjQvIcZuvXizTv_1769035890629_booking"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
