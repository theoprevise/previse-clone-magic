import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowLeft,
  ArrowRight,
  Play,
  CheckCircle2,
  FileText,
  Calendar,
  Download
} from "lucide-react";

const keyTakeaways = [
  "How to calculate what you can truly afford",
  "Documents needed for pre-approval",
  "Understanding FHA, VA, and Conventional loans",
  "Down payment assistance programs available",
  "Hidden costs to prepare for",
  "Tips for working with real estate agents"
];

const resources = [
  {
    title: "First-Time Homebuyer Checklist",
    description: "Complete checklist from pre-approval to closing",
    icon: FileText
  },
  {
    title: "Down Payment Calculator",
    description: "Calculate how much you need to save",
    icon: FileText
  },
  {
    title: "Mortgage Terms Glossary",
    description: "Understanding mortgage terminology",
    icon: FileText
  }
];

const WebinarReplay = () => {
  const navigate = useNavigate();

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
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Webinar Recording
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              First-Time Homebuyer <span className="text-accent">Secrets Revealed</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Missed the live session? Watch the full recording and learn everything you need to know 
              about buying your first home.
            </p>
          </div>

          {/* Video Embed */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/20 overflow-hidden">
              {/* Placeholder for video - Replace with actual Zoom/YouTube embed */}
              <div className="aspect-video bg-black/50 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-accent/30 transition-colors">
                    <Play className="h-10 w-10 text-accent ml-1" />
                  </div>
                  <p className="text-white/70">
                    Video recording will be available here
                  </p>
                  <p className="text-white/50 text-sm mt-2">
                    Replace this with your Zoom or YouTube embed
                  </p>
                </div>
                {/* 
                  To embed a Zoom recording, use:
                  <iframe 
                    src="https://zoom.us/rec/share/YOUR_RECORDING_ID" 
                    className="w-full h-full"
                    allowFullScreen
                  />
                  
                  To embed a YouTube video, use:
                  <iframe 
                    src="https://www.youtube.com/embed/VIDEO_ID" 
                    className="w-full h-full"
                    allowFullScreen
                  />
                */}
              </div>
              <div className="p-4 bg-white/5">
                <p className="text-white/60 text-sm">
                  Duration: 60 minutes | Recorded: January 15, 2026
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Key <span className="text-accent">Takeaways</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {keyTakeaways.map((takeaway, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-white/90">{takeaway}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Downloadable <span className="text-accent">Resources</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map((resource, idx) => {
                const IconComponent = resource.icon;
                return (
                  <Card 
                    key={idx}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="p-3 bg-accent/20 rounded-xl w-fit mb-4 group-hover:bg-accent/30 transition-colors">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center text-accent text-sm font-medium">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Now that you understand the process, let us help you get started on your homebuying journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="hero"
                onClick={() => navigate('/schedule')}
                className="group"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate('/application/conventional')}
              >
                Start Application
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Future Webinars CTA */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Don't Miss Our Next Webinar
            </h2>
            <p className="text-white/70 mb-6">
              We host regular educational webinars for homebuyers. Sign up to be notified about upcoming sessions.
            </p>
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate('/webinar')}
            >
              View Upcoming Webinars
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebinarReplay;