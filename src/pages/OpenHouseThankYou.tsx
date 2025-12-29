import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Calendar, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OpenHouseThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen animate-gradient-shift bg-gradient-to-br from-primary via-primary-dark via-secondary to-primary-dark bg-[length:400%_400%]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl animate-float shadow-accent"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/12 rounded-full blur-2xl animate-pulse-slow shadow-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float shadow-accent" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 animate-scale-in">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-success/20 rounded-full border-2 border-success/30 backdrop-blur-sm shadow-success">
                <CheckCircle className="w-12 h-12 text-success animate-bounce-soft" />
              </div>
            </div>

            {/* Thank You Message */}
            <div className="mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                You're Registered!
              </h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-medium">
                <p className="text-white/90 text-xl lg:text-2xl leading-relaxed">
                  Thank you for signing up for our Open House event. We're excited to show you some amazing properties!
                </p>
              </div>
            </div>

            {/* What to Expect */}
            <div className="mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h2 className="text-2xl font-semibold text-white mb-4">What to Expect</h2>
              <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20 shadow-accent">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Confirmation Email</p>
                      <p className="text-white/70 text-sm">Check your inbox for event details and directions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Property Tour</p>
                      <p className="text-white/70 text-sm">Walk through beautiful homes with our expert team.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">No Rush</p>
                      <p className="text-white/70 text-sm">Take your time exploring at your own pace.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Tips */}
            <div className="mb-8 animate-slide-up" style={{animationDelay: '0.5s'}}>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-white/80 text-lg">
                  <strong className="text-accent">Pro tip:</strong> Bring any questions you have about financing—our mortgage specialists will be on-site to help!
                </p>
              </div>
            </div>

            {/* Return Home Button */}
            <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Button
                onClick={() => navigate('/')}
                className="bg-accent hover:bg-accent-light text-primary py-6 px-8 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-accent"
              >
                <Home className="mr-2 w-5 h-5" />
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenHouseThankYou;
