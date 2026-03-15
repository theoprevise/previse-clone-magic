import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { UnifiedLeadForm } from "@/components/UnifiedLeadForm";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  FileText, 
  Building2, 
  Calculator, 
  Shield, 
  Download,
  BookOpen,
  ClipboardCheck,
  DollarSign,
  TrendingUp,
  BarChart3,
  Briefcase
} from "lucide-react";

const DSCRLoanGuide = () => {
  const guideContents = [
    {
      icon: BarChart3,
      title: "DSCR Ratio Explained",
      description: "Learn how the Debt Service Coverage Ratio works and how to calculate it for any property"
    },
    {
      icon: ClipboardCheck,
      title: "Qualification Checklist",
      description: "Complete list of requirements and documents needed for DSCR loan approval"
    },
    {
      icon: Building2,
      title: "Property Analysis Framework",
      description: "Step-by-step method to evaluate if a rental property will qualify"
    },
    {
      icon: Calculator,
      title: "Cash Flow Worksheets",
      description: "Templates to calculate DSCR, cap rates, and projected returns"
    },
    {
      icon: TrendingUp,
      title: "Portfolio Scaling Strategies",
      description: "How to use DSCR loans to grow from 1 to 10+ investment properties"
    },
    {
      icon: BookOpen,
      title: "Investor Loan Glossary",
      description: "Plain-English definitions of DSCR, LTV, cap rate, NOI, and more"
    }
  ];

  const benefits = [
    "Understand exactly how DSCR qualification works",
    "Avoid costly mistakes that disqualify properties",
    "Calculate your DSCR ratio before applying",
    "Learn which property types qualify for the best rates",
    "Scale your portfolio faster with the right financing"
  ];

  return (
    <div className="min-h-screen bg-primary">
      <SEOHead 
        title="Free DSCR Loan Guide for Investors | Previse Mortgage"
        description="Download our free DSCR loan guide for real estate investors. Includes DSCR calculators, qualification checklists, and portfolio scaling strategies."
        keywords="DSCR loan guide, investor mortgage guide, rental property financing, DSCR ratio calculator, investment property loan guide"
        canonicalUrl="https://previsemortgage.com/dscr-loan-guide"
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
                <span className="text-accent font-medium text-sm">FREE INVESTOR GUIDE</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                The Complete
                <span className="text-accent block">DSCR Loan</span>
                Investor Guide
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Everything you need to qualify for DSCR financing and scale your rental property portfolio. 
                Packed with calculators, checklists, and strategies from experienced investor loan specialists.
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
                      Get Your Free DSCR Guide
                    </h2>
                    <p className="text-muted-foreground">
                      Enter your info below for instant access
                    </p>
                  </div>
                  
                  <UnifiedLeadForm 
                    campaignType="dscr_guide_download"
                    source="dscr_loan_guide_download_page"
                    eventName="Downloaded DSCR Loan Investor Guide"
                    buttonText="Download Free Guide"
                    successRedirectPath="/dscr-loan-guide-thank-you"
                  />

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By downloading, you agree to receive helpful investor tips. 
                    Unsubscribe anytime. View our <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">Privacy Policy</Link>.
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
              20+ pages of actionable strategies, worksheets, and checklists to help you qualify for DSCR financing and grow your portfolio.
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
                "The DSCR calculator alone was worth the download. I used it to analyze three properties and closed on my best deal yet."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">M</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Marcus T.</p>
                  <p className="text-sm text-muted-foreground">Real estate investor, 6 properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who Is This Guide For?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Building2, title: "New Investors", desc: "Buying your first rental property" },
              { icon: TrendingUp, title: "Portfolio Builders", desc: "Scaling beyond 4+ properties" },
              { icon: Briefcase, title: "Self-Employed", desc: "Complex tax returns making it hard to qualify" },
              { icon: DollarSign, title: "Cash Flow Seekers", desc: "Focused on rental income returns" },
            ].map((item, index) => (
              <Card key={index} className="bg-card/50 border-accent/10 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Invest Smarter?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Download the guide now and start analyzing properties like a pro.
          </p>
          
          <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border-accent/20">
            <CardContent className="p-6">
              <UnifiedLeadForm 
                campaignType="dscr_guide_download"
                source="dscr_loan_guide_landing_bottom"
                buttonText="Get My Free DSCR Guide"
                successRedirectPath="/dscr-loan-guide-thank-you"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DSCRLoanGuide;
