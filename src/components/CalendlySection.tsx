import { useEffect } from "react";

const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-accent/7 rounded-full blur-xl animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/2 w-28 h-28 bg-accent/6 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                Book Appointment
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-8">
              Schedule a<br />
              <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                Meeting
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-accent-light to-accent mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ready to start your mortgage journey? Book a 30-minute consultation with our expert team.
            </p>
          </div>

          {/* Modern container for Calendly widget */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div 
              className="calendly-inline-widget rounded-2xl overflow-hidden" 
              data-url="https://calendly.com/previsemortgage/30min" 
              style={{minWidth:"320px", height:"700px"}}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;