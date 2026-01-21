import { useEffect } from "react";
import { Calendar } from "lucide-react";

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
    <section id="contact" className="py-10 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <Calendar className="text-accent" size={18} />
              <span className="text-accent text-xs font-bold uppercase tracking-wider">
                Schedule a Call
              </span>
            </div>
            <h2 className="font-serif text-xl lg:text-2xl font-bold text-white">
              Book a <span className="text-accent">Consultation</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3">
            <iframe 
              src="https://link.previsemortgage.com/widget/booking/mCGtajGuvJ2SRpcD595P" 
              style={{width: "100%", border: "none", overflow: "hidden", minHeight: "400px"}}
              scrolling="no" 
              id="5tsGqmMjQvIcZuvXizTv_1769035890629_booking"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;