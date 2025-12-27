import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Video, ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";

const WEBINAR_DATE = new Date('2026-01-15T18:00:00-05:00');

interface WebinarBannerProps {
  variant?: 'inline' | 'floating';
}

const WebinarBanner = ({ variant = 'inline' }: WebinarBannerProps) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = WEBINAR_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Check if webinar has passed
  const webinarPassed = new Date() > WEBINAR_DATE;
  if (webinarPassed || !isVisible) return null;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-fade-in">
        <div className="bg-gradient-to-r from-accent/90 to-secondary/90 backdrop-blur-xl rounded-lg p-4 shadow-lg shadow-accent/20 border border-white/20">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-white/70 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Video className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm mb-1">
                Free Webinar: First-Time Homebuyers
              </p>
              <p className="text-white/80 text-xs mb-3">
                {formatDate(WEBINAR_DATE)} • {timeLeft.days}d {timeLeft.hours}h left
              </p>
              <Button
                size="sm"
                variant="secondary"
                className="w-full bg-white text-primary hover:bg-white/90"
                onClick={() => navigate('/webinar')}
              >
                Register Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-accent/20 to-secondary/20 border-y border-accent/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-accent/20 rounded-lg">
              <Video className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-white font-bold">
                FREE Webinar: First-Time Homebuyer Secrets
              </p>
              <p className="text-white/70 text-sm">
                {formatDate(WEBINAR_DATE)} at 6:00 PM EST • Starts in {timeLeft.days} days, {timeLeft.hours} hours
              </p>
            </div>
          </div>
          <Button
            variant="hero"
            onClick={() => navigate('/webinar')}
            className="group whitespace-nowrap"
          >
            Register Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WebinarBanner;