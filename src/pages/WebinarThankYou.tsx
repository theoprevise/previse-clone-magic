import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { 
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  Mail,
  ArrowRight,
  CalendarPlus
} from "lucide-react";

const WEBINAR_DATE = new Date('2026-01-15T18:00:00-05:00');

const WebinarThankYou = () => {
  const navigate = useNavigate();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  // Generate calendar links
  const generateGoogleCalendarLink = () => {
    const startDate = WEBINAR_DATE.toISOString().replace(/-|:|\.\d+/g, '');
    const endDate = new Date(WEBINAR_DATE.getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '');
    const title = encodeURIComponent('First-Time Homebuyer Webinar - Previse Home Loans');
    const details = encodeURIComponent('Join us for an exclusive 60-minute session on first-time homebuying secrets. Zoom link will be sent via email.');
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}`;
  };

  const generateOutlookCalendarLink = () => {
    const startDate = WEBINAR_DATE.toISOString();
    const endDate = new Date(WEBINAR_DATE.getTime() + 60 * 60 * 1000).toISOString();
    const title = encodeURIComponent('First-Time Homebuyer Webinar - Previse Home Loans');
    const details = encodeURIComponent('Join us for an exclusive 60-minute session on first-time homebuying secrets. Zoom link will be sent via email.');
    
    return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${startDate}&enddt=${endDate}&body=${details}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead title="Webinar Registration Confirmed | Previse Mortgage" noIndex={true} />
      <Header />
      
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-success/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-success/20 border-2 border-success rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="h-10 w-10 text-success" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              You're <span className="text-success">Registered!</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Thank you for registering for our First-Time Homebuyer Webinar. 
              We can't wait to see you there!
            </p>

            {/* Confirmation Card */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 mb-8 text-left">
              <h2 className="text-xl font-bold text-white mb-6 text-center">Webinar Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <Calendar className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm">Date</p>
                    <p className="text-white font-medium">{formatDate(WEBINAR_DATE)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm">Time</p>
                    <p className="text-white font-medium">{formatTime(WEBINAR_DATE)} (60 minutes)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <Video className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm">Platform</p>
                    <p className="text-white font-medium">Zoom (link sent via email)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm">Confirmation Email</p>
                    <p className="text-white font-medium">Check your inbox for details and Zoom link</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Add to Calendar Buttons */}
            <div className="mb-8">
              <p className="text-white/70 mb-4 flex items-center justify-center gap-2">
                <CalendarPlus className="h-5 w-5" />
                Add to your calendar so you don't forget:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open(generateGoogleCalendarLink(), '_blank')}
                >
                  Google Calendar
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open(generateOutlookCalendarLink(), '_blank')}
                >
                  Outlook
                </Button>
              </div>
            </div>

            {/* What's Next */}
            <Card className="bg-accent/10 border border-accent/30 p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-4">What Happens Next?</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Check your email for confirmation and Zoom meeting details</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>You'll receive a reminder email 24 hours before the webinar</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span>Prepare your questions for our live Q&A session</span>
                </li>
              </ul>
            </Card>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero"
                size="lg"
                onClick={() => navigate('/first-time-homebuyer')}
                className="group"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate('/')}
              >
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebinarThankYou;