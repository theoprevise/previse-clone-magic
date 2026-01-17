import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { UnifiedLeadForm } from "@/components/UnifiedLeadForm";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  FileText, 
  Home, 
  Calculator, 
  Shield, 
  Download,
  BookOpen,
  ClipboardCheck,
  DollarSign,
  Key
} from "lucide-react";

const HomebuyerGuide = () => {
  const guideContents = [
    {
      icon: ClipboardCheck,
      title: "Pre-Approval Checklist",
      description: "Complete list of documents you'll need to get pre-approved"
    },
    {
      icon: Home,
      title: "5-Step Homebuying Roadmap",
      description: "Clear path from dreaming to owning your first home"
    },
    {
      icon: DollarSign,
      title: "Down Payment Programs",
      description: "Pennsylvania assistance programs that could save you thousands"
    },
    {
      icon: Calculator,
      title: "Budget Worksheets",
      description: "Calculate what you can truly afford"
    },
    {
      icon: Key,
      title: "Closing Day Checklist",
      description: "Everything you need for a smooth closing"
    },
    {
      icon: BookOpen,
      title: "Mortgage Glossary",
      description: "Plain-English definitions of confusing terms"
    }
  ];

  const benefits = [
    "Understand exactly what you can afford",
    "Avoid common first-time buyer mistakes",
    "Get pre-approved faster with the right documents",
    "Learn about programs that reduce your down payment",
    "Navigate the process with confidence"
  ];

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="Free First-Time Homebuyer Guide | Previse Mortgage"
        description="Download our free comprehensive guide for first-time homebuyers. Includes checklists, down payment programs, and step-by-step roadmap to homeownership."
        keywords="first time homebuyer guide, homebuying checklist, down payment assistance, mortgage guide, Pennsylvania first time buyer"
        canonicalUrl="https://previsemortgage.com/homebuyer-guide"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(210,177,140,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
                <Download className="w-4 h-4 text-accent" />
                <span className="text-accent font-medium text-sm">FREE DOWNLOAD</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                The Complete
                <span className="text-accent block">First-Time Homebuyer</span>
                Guide
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Everything you need to confidently navigate your journey from renter to homeowner. 
                Packed with checklists, worksheets, and insider tips from mortgage professionals.
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" />
                  <span>Instant PDF download</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:pl-8">
              <Card className="bg-card/50 backdrop-blur-sm border-accent/20 shadow-2xl shadow-accent/10">
                <CardContent className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Get Your Free Guide
                    </h2>
                    <p className="text-muted-foreground">
                      Enter your info below for instant access
                    </p>
                  </div>
                  
                  <UnifiedLeadForm 
                    campaignType="lead_magnet_download"
                    source="homebuyer_guide_download_page"
                    eventName="Downloaded First-Time Homebuyer Guide"
                    buttonText="Download Free Guide"
                    successRedirectPath="/homebuyer-guide-thank-you"
                  />

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By downloading, you agree to receive helpful homebuying tips. 
                    Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Inside Your Free Guide
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              24 pages of actionable insights, checklists, and worksheets to make your homebuying journey smooth and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideContents.map((item, index) => (
              <Card key={index} className="bg-card/50 border-accent/10 hover:border-accent/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-3xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-medium text-foreground mb-6 italic">
                "This guide answered questions I didn't even know I had. The checklists alone saved me so much stress during my homebuying process."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">S</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Sarah M.</p>
                  <p className="text-sm text-muted-foreground">First-time homeowner, York PA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Homebuying Journey?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Download the guide now and take the first step toward owning your dream home.
          </p>
          
          <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border-accent/20">
            <CardContent className="p-6">
              <UnifiedLeadForm 
                campaignType="homebuyer_guide"
                source="homebuyer_guide_landing"
                buttonText="Get My Free Guide"
                successRedirectPath="/homebuyer-guide-thank-you"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomebuyerGuide;
