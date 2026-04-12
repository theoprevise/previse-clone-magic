import { useEffect } from "react";
import { Calendar, BookOpen, TrendingUp, Shield } from "lucide-react";

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
    <section id="contact" className="py-12 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-accent text-xs font-semibold uppercase tracking-wider bg-accent/10 px-3 py-1.5 rounded-full">
              Education First · No Obligation
            </span>
            <h2 className="font-serif text-xl lg:text-2xl font-bold text-foreground mt-3 mb-2">
              Book a Free <span className="text-accent">Planning Session</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
              A structured mortgage education session built around your goals — not a sales call.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 mb-6">
            {[
              {
                icon: BookOpen,
                title: "Scenario Education",
                desc: "Real numbers comparing loan options — not sales pitches"
              },
              {
                icon: TrendingUp,
                title: "Life-Plan Alignment",
                desc: "Mortgage strategies that fit your 5-year plan"
              },
              {
                icon: Shield,
                title: "Honest Next Steps",
                desc: "If 'wait 6 months' is best, we'll tell you"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-background/60 border border-border/50 rounded-lg p-3 text-center">
                <item.icon className="text-accent mx-auto mb-1.5" size={18} />
                <h4 className="text-foreground font-semibold text-xs mb-0.5">{item.title}</h4>
                <p className="text-muted-foreground text-[11px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-background/80 border border-border/40 rounded-lg p-2 shadow-sm">
            <iframe 
              src="https://link.previsemortgage.com/widget/booking/mCGtajGuvJ2SRpcD595P" 
              style={{width: "100%", border: "none", overflow: "hidden", minHeight: "350px"}}
              scrolling="no" 
              id="5tsGqmMjQvIcZuvXizTv_1769035890629_booking"
              className="rounded-md"
            />
          </div>

          <p className="text-muted-foreground text-[11px] text-center mt-3">
            Complimentary, confidential, zero-obligation. ~30 minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;