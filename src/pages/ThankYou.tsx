import { Button } from "@/components/ui/button";
import { CheckCircle, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen animate-gradient-shift bg-gradient-to-br from-primary via-primary-dark via-secondary to-primary-dark bg-[length:400%_400%]">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/8 rounded-full blur-3xl animate-float shadow-accent"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/12 rounded-full blur-2xl animate-pulse-slow shadow-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float shadow-accent" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-success/8 rounded-full blur-lg animate-bounce-soft" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-accent-light/6 rounded-full blur-2xl animate-float" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 animate-scale-in">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-success/20 rounded-full border-2 border-success/30 backdrop-blur-sm shadow-success">
                <CheckCircle className="w-12 h-12 text-success animate-bounce-soft" />
              </div>
            </div>

            {/* Thank You Message */}
            <div className="mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Thank You!
              </h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-medium">
                <p className="text-white/90 text-xl lg:text-2xl leading-relaxed">
                  Your information has been received. We'll be in touch with you shortly!
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20 shadow-accent">
                <p className="text-white/80 text-lg">
                  A member of our team will reach out within 24 hours to assist you.
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

export default ThankYou;