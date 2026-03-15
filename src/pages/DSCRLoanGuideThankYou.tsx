import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Calendar, 
  Phone,
  Mail,
  ArrowRight,
  FileText,
  MessageCircle,
  BarChart3,
  Building2,
  Download
} from "lucide-react";

const DSCRLoanGuideThankYou = () => {
  const navigate = useNavigate();

  const nextSteps = [
    {
      icon: FileText,
      title: "Read the Guide",
      description: "Start with the DSCR Ratio section to understand the core qualification metric"
    },
    {
      icon: BarChart3,
      title: "Analyze a Property",
      description: "Use the cash flow worksheets to evaluate your next investment property"
    },
    {
      icon: Calendar,
      title: "Talk to a Specialist",
      description: "Schedule a free call to discuss your investment goals and get pre-approved"
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="Your DSCR Guide is Ready | Previse Mortgage"
        description="Thank you for requesting our DSCR Loan Investor Guide. Access your copy now."
        canonicalUrl="https://previsemortgage.com/dscr-loan-guide-thank-you"
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
              Your DSCR Guide is Ready!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for downloading The Complete DSCR Loan Investor Guide. 
              Click below to view and download your copy, and check your email for additional resources.
            </p>

            {/* Download Button */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 shadow-2xl shadow-accent/10 max-w-md mx-auto mb-6">
              <CardContent className="p-8">
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg mb-4"
                  onClick={() => navigate('/dscr-loan-guide-print')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  View & Download Your Free Guide
                </Button>
                <p className="text-sm text-muted-foreground">
                  Click above to view the guide. Use your browser's print function to save as PDF.
                </p>
              </CardContent>
            </Card>

            {/* Secondary CTA */}
            <Card className="bg-card/50 backdrop-blur-sm border-accent/10 max-w-md mx-auto mb-12">
              <CardContent className="p-6">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-accent/50 text-foreground hover:bg-accent/10 font-semibold"
                  onClick={() => navigate('/dscr-loans')}
                >
                  <Building2 className="mr-2 h-5 w-5" />
                  Explore DSCR Loan Options
                </Button>
              </CardContent>
            </Card>

            {/* Email Reminder */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
              <Mail className="w-5 h-5 text-accent" />
              <span>Check your inbox (and spam folder) for your guide download link</span>
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
              Here's how to get the most out of your DSCR guide
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
                Ready to Get Pre-Approved?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                The guide gives you the knowledge—now let's put it into action. 
                Schedule a free consultation with a DSCR loan specialist.
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
                  onClick={() => navigate('/mortgage-calculator')}
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Try DSCR Calculator
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <a href="tel:7178018498" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  (717) 801-8498
                </a>
                <a href="mailto:team@previsemortgage.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  team@previsemortgage.com
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
              onClick={() => navigate('/dscr-loans')}
            >
              DSCR Loan Programs
            </Button>
            <Button 
              variant="outline" 
              className="border-accent/30 hover:bg-accent/10"
              onClick={() => navigate('/investors')}
            >
              Investor Hub
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
              onClick={() => navigate('/current-mortgage-rates')}
            >
              Current Rates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DSCRLoanGuideThankYou;
