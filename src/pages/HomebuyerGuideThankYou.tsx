import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Download, 
  CheckCircle, 
  Calendar, 
  Phone,
  Mail,
  ArrowRight,
  FileText,
  MessageCircle
} from "lucide-react";

const HomebuyerGuideThankYou = () => {
  const navigate = useNavigate();

  const nextSteps = [
    {
      icon: FileText,
      title: "Read the Guide",
      description: "Start with the 5-Step Homebuying Roadmap to understand the journey ahead"
    },
    {
      icon: CheckCircle,
      title: "Complete the Checklists",
      description: "Use the pre-approval checklist to gather your documents"
    },
    {
      icon: Calendar,
      title: "Schedule a Consultation",
      description: "Let's discuss your unique situation and create a personalized plan"
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="Download Your Free Guide | Previse Mortgage"
        description="Thank you for requesting our First-Time Homebuyer Guide. Download your copy now."
        canonicalUrl="https://previsemortgage.com/homebuyer-guide-thank-you"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(210,177,140,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Guide is Ready!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for downloading The Complete First-Time Homebuyer Guide. 
              Click below to get your copy, and check your email for additional resources.
            </p>

            {/* Download Button */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 shadow-2xl shadow-accent/10 max-w-md mx-auto mb-12">
              <CardContent className="p-8">
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg mb-4"
                  onClick={() => navigate('/homebuyer-guide-print')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  View & Download Your Free Guide
                </Button>
                <p className="text-sm text-muted-foreground">
                  Click above to view the guide. Use your browser's print function to save as PDF.
                </p>
              </CardContent>
            </Card>

            {/* Email Reminder */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
              <Mail className="w-5 h-5 text-accent" />
              <span>Check your inbox (and spam folder) for your confirmation email</span>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Next Steps
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's how to get the most out of your new guide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {nextSteps.map((step, index) => (
              <Card key={index} className="bg-card/50 border-accent/10">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Consultation CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <MessageCircle className="w-12 h-12 text-accent mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Take the Next Step?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                The guide is a great start, but nothing beats personalized advice. 
                Schedule a free consultation to discuss your unique situation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={() => navigate('/schedule')}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-accent/50 text-foreground hover:bg-accent/10"
                  onClick={() => navigate('/pre-qualify')}
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Get Pre-Qualified Now
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <a href="tel:7178018498" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  (717) 801-8498
                </a>
                <a href="mailto:teddy@previsemortgage.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  teddy@previsemortgage.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Explore More Resources
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-accent/30 hover:bg-accent/10"
              onClick={() => navigate('/first-time-homebuyer')}
            >
              First-Time Buyer Programs
            </Button>
            <Button 
              variant="outline" 
              className="border-accent/30 hover:bg-accent/10"
              onClick={() => navigate('/mortgage-calculator')}
            >
              Mortgage Calculator
            </Button>
            <Button 
              variant="outline" 
              className="border-accent/30 hover:bg-accent/10"
              onClick={() => navigate('/credit-score-mortgage-tips')}
            >
              Credit Score Tips
            </Button>
            <Button 
              variant="outline" 
              className="border-accent/30 hover:bg-accent/10"
              onClick={() => navigate('/blog')}
            >
              Read Our Blog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomebuyerGuideThankYou;
