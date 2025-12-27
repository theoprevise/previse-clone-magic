import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebinarRegistrationForm from "@/components/WebinarRegistrationForm";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  Video,
  CheckCircle2,
  Home,
  FileText,
  Shield,
  Wallet,
  Target,
  HelpCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import teddyImage from "@/assets/teddy-carbone.jpg";

const WEBINAR_DATE = new Date('2026-01-15T18:00:00-05:00');

const topics = [
  {
    icon: Target,
    title: "Understanding Your Budget",
    description: "Learn how to calculate what you can truly afford"
  },
  {
    icon: FileText,
    title: "Pre-Approval Process",
    description: "What documents you need and how to get pre-approved"
  },
  {
    icon: Shield,
    title: "Loan Programs Explained",
    description: "FHA, VA, Conventional, and down payment assistance"
  },
  {
    icon: Wallet,
    title: "Hidden Costs Revealed",
    description: "Closing costs, inspections, and fees to prepare for"
  },
  {
    icon: Home,
    title: "House Hunting Tips",
    description: "How to find and evaluate your perfect home"
  },
  {
    icon: Target,
    title: "Working with Professionals",
    description: "Agents, lenders, inspectors - building your team"
  }
];

const faqs = [
  {
    question: "Is this webinar really free?",
    answer: "Yes! This webinar is completely free. We believe in educating first-time homebuyers to help them make informed decisions."
  },
  {
    question: "Will there be a recording?",
    answer: "Yes, all registered attendees will receive access to the replay even if they can't attend live."
  },
  {
    question: "Can I ask questions during the webinar?",
    answer: "Absolutely! We'll have a live Q&A session at the end where you can ask your specific questions."
  },
  {
    question: "Do I need to prepare anything?",
    answer: "Just bring your questions! We recommend having a pen and paper ready to take notes."
  }
];

const Webinar = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = WEBINAR_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <Header />
      
      {/* Back Button */}
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
      
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <span className="inline-block px-4 py-2 bg-success/20 border border-success/30 rounded-full text-success text-sm font-medium mb-6 animate-fade-in">
              FREE Live Webinar
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              First-Time Homebuyer <span className="text-accent">Secrets Revealed</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
              Join us for an exclusive 60-minute session where we'll share insider tips, 
              demystify the mortgage process, and answer your burning questions about buying your first home.
            </p>

            {/* Date & Time */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="text-white font-medium">{formatDate(WEBINAR_DATE)}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-white font-medium">{formatTime(WEBINAR_DATE)} (60 min)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Video className="h-5 w-5 text-accent" />
                <span className="text-white font-medium">Live on Zoom</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                Reserve Your Spot Now
              </h2>
              <WebinarRegistrationForm webinarDate={WEBINAR_DATE} />
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              What You'll <span className="text-accent">Learn</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              In just 60 minutes, you'll gain the knowledge and confidence to start your homebuying journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, idx) => {
              const IconComponent = topic.icon;
              return (
                <Card 
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:border-accent/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 rounded-xl flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{topic.title}</h3>
                      <p className="text-white/70 text-sm">{topic.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-accent/30 shadow-xl">
                  <img 
                    src={teddyImage} 
                    alt="Teddy Carbone - Mortgage Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Your Host: Teddy Carbone</h3>
                  <p className="text-accent font-medium mb-4">Mortgage Expert with 10+ Years Experience</p>
                  <p className="text-white/70 leading-relaxed">
                    Teddy Carbone has 10+ years in finance and is dedicated to providing hassle-free, 
                    honest mortgage advice. He's passionate about educating first-time homebuyers and 
                    believes that informed buyers make the best decisions. Join Teddy to get personalized 
                    answers to your questions and insider tips you won't find anywhere else.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, idx) => (
              <Card 
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/20 rounded-lg flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 text-center">
            <div className="p-4 bg-accent/20 rounded-full w-fit mx-auto mb-6">
              <Video className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Don't Miss This Opportunity
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Spots are limited. Register now to secure your place and take the first step toward homeownership.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Live Q&A</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Replay Available</span>
              </div>
            </div>
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group"
            >
              Register Now - It's Free
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Webinar;