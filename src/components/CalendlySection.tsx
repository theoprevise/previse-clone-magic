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
    <section id="contact" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                Education First · No Obligation · No Pressure
              </span>
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Book a Free <span className="text-accent">Previse Planning Session</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              Not a sales call — a structured mortgage education session built around your life goals. 
              We'll walk through scenarios, trade-offs, and strategies so you can make a confident, informed decision.
            </p>
          </div>

          {/* What to expect */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: BookOpen,
                title: "Scenario Education",
                desc: "We compare FHA vs conventional, ARM vs fixed, points vs no points, and show you real numbers — not sales pitches"
              },
              {
                icon: TrendingUp,
                title: "Life-Plan Alignment",
                desc: "Your mortgage should fit your 5-year plan. We discuss affordability limits, refi timing, and when to wait vs buy"
              },
              {
                icon: Shield,
                title: "Honest Next Steps",
                desc: "If the best advice is 'wait 6 months,' we'll say that. If a different lender is better for your profile, we'll tell you"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-accent/5 border border-accent/20 rounded-xl p-4 text-center">
                <item.icon className="text-accent mx-auto mb-2" size={22} />
                <h4 className="text-foreground font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-background border border-border rounded-xl p-3 shadow-lg">
            <iframe 
              src="https://link.previsemortgage.com/widget/booking/mCGtajGuvJ2SRpcD595P" 
              style={{width: "100%", border: "none", overflow: "hidden", minHeight: "400px"}}
              scrolling="no" 
              id="5tsGqmMjQvIcZuvXizTv_1769035890629_booking"
              className="rounded-lg"
            />
          </div>

          <p className="text-muted-foreground text-xs text-center mt-4">
            Every Previse Planning Session is complimentary, confidential, and zero-obligation. 
            Average session: 30 minutes. You'll leave with clarity — whether you work with us or not.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;