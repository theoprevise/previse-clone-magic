import { useNavigate } from "react-router-dom";
import { CheckCircle, Calendar, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ScheduleThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-primary-dark">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="py-16 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              {/* Success Icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center animate-float">
                  <CheckCircle className="w-12 h-12 text-accent" />
                </div>
              </div>

              {/* Main Message */}
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                Appointment<br />
                <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                  Confirmed!
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-12 max-w-lg mx-auto">
                Thank you for scheduling a consultation with us. We're excited to help you on your mortgage journey!
              </p>

              {/* What to Expect */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12">
                <h2 className="text-xl font-semibold text-white mb-6">What Happens Next</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Check Your Email</h3>
                    <p className="text-white/60 text-sm">You'll receive a calendar invite with meeting details</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Be Ready</h3>
                    <p className="text-white/60 text-sm">Have questions ready about your homebuying goals</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-white font-medium mb-2">We'll Connect</h3>
                    <p className="text-white/60 text-sm">Our expert will call you at the scheduled time</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate("/")}
                  variant="hero"
                  size="lg"
                >
                  Return Home
                </Button>
                <Button 
                  onClick={() => navigate("/mortgage-calculator")}
                  variant="outline"
                  size="lg"
                  className="border-accent/40 text-white hover:bg-accent/10"
                >
                  Try Our Calculator
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ScheduleThankYou;
