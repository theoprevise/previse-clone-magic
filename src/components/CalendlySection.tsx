import { useEffect } from "react";
import { Calendar } from "lucide-react";

const CalendlySection = () => {
  useEffect(() => {
    // Load GoHighLevel booking script
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
    <section id="contact" className="py-16 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="text-accent" size={20} />
              <span className="text-accent text-sm font-bold uppercase tracking-wider">
                Book Appointment
              </span>
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
              Schedule a <span className="text-accent">Consultation</span>
            </h2>
            <p className="text-white/80 max-w-xl mx-auto">
              Ready to discuss your financing options? Book a quick call with our team.
            </p>
          </div>

          {/* Compact container for booking widget */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
            <iframe 
              src="https://link.previsemortgage.com/widget/booking/MiB1LE4lMUcxJjgAKwnN" 
              style={{width: "100%", border: "none", overflow: "hidden", minHeight: "500px"}}
              scrolling="no" 
              id="MiB1LE4lMUcxJjgAKwnN_booking"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;