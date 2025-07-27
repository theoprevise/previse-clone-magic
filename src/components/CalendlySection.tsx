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
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            Schedule a Meeting
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-16"></div>

          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/team-previsemortgage/30min?background_color=1e3557&text_color=ffffff" 
            style={{minWidth:"320px", height:"700px"}}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;