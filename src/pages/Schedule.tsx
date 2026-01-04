import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Schedule = () => {
  const navigate = useNavigate();
  
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
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-primary-dark">
        <Header />
        
        {/* Back to Home */}
        <div className="container mx-auto px-4 pt-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="text-white hover:text-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
        
        <main className="pt-8 pb-16">
          {/* Hero Section */}
          <section className="py-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <div className="inline-block mb-6">
                  <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                    Free Consultation
                  </span>
                </div>
                <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                  Schedule Your<br />
                  <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                    Mortgage Consultation
                  </span>
                </h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Book a free 30-minute consultation with our mortgage experts. We'll help you understand your options and create a personalized plan.
                </p>
              </div>

              {/* Booking Widget */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  <iframe 
                    src="https://link.previsemortgage.com/widget/booking/MiB1LE4lMUcxJjgAKwnN" 
                    style={{width: "100%", border: "none", overflow: "hidden", minHeight: "700px"}}
                    scrolling="no" 
                    id="MiB1LE4lMUcxJjgAKwnN_schedule"
                    className="rounded-2xl"
                  />
                </div>
              </div>

              {/* Benefits */}
              <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">30-Minute Sessions</h3>
                  <p className="text-white/60 text-sm">Quick, focused consultations that respect your time</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">No Obligation</h3>
                  <p className="text-white/60 text-sm">Get expert advice without any pressure</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-white/60 text-sm">Work with experienced mortgage professionals</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
  );
};

export default Schedule;
