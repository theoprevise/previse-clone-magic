import { CheckCircle, XCircle, ArrowRight, Users, MessageSquare, Shield, TrendingUp, Handshake, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import UnifiedLeadForm from "@/components/UnifiedLeadForm";

const RealtorPartnership = () => {
  const navigate = useNavigate();

  const whatThisIsNot = [
    "Not a referral program with quotas or pressure",
    "Not rate marketing or deal blasting",
    "Not a handoff that removes you from the relationship"
  ];

  const howItWorks = [
    {
      icon: Handshake,
      title: "You Offer a Trusted Resource",
      description: "When your clients have financing questions, you introduce Previse as a trusted mortgage resource."
    },
    {
      icon: MessageSquare,
      title: "Client Opts In",
      description: "Your client opts in to a clarity-focused conversation about their financing options."
    },
    {
      icon: TrendingUp,
      title: "Education & Clarity",
      description: "Previse provides education around loan programs, qualifications, and structure."
    },
    {
      icon: Users,
      title: "You Stay Looped In",
      description: "You remain informed as the transaction progresses."
    }
  ];

  const whyRealtorsUse = [
    {
      icon: Shield,
      title: "Confident Clients",
      description: "Clients feel more confident and prepared throughout the process"
    },
    {
      icon: CheckCircle,
      title: "Reduced Friction",
      description: "Financing friction is reduced before offers are written"
    },
    {
      icon: TrendingUp,
      title: "Strategic Positioning",
      description: "You look proactive and strategic"
    },
    {
      icon: MessageSquare,
      title: "Clean Communication",
      description: "Communication stays clean and professional"
    }
  ];

  const whenToIntroduce = [
    "First-time homebuyer conversations",
    "Pre-approval or qualification questions",
    "Clients comparing loan programs (FHA, VA, Conventional, DSCR)",
    "Before an offer is submitted"
  ];

  return (
    <>
      <SEOHead 
        title="Realtor Partnership | Co-Marketing System | Previse Mortgage"
        description="Partner with Previse Mortgage to support your clients with expert mortgage guidance. No pressure, no quotas — just clarity for first-time buyers, investors, and everyone in between."
        keywords="realtor partnership, mortgage partner, real estate agents, co-marketing, first-time homebuyer, FHA loans, VA loans, conventional loans"
      />
      
      <div className="min-h-screen bg-primary">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4" />
                  For Real Estate Professionals
                </div>
                
                <h1 className="heading-hero text-white">
                  Realtor<br />
                  <span className="text-accent">Co-Marketing System</span>
                </h1>
                
                <p className="text-body-lg text-white/80 max-w-xl">
                  A simple, professional way to support all your clients — first-time buyers, move-up buyers, investors, and beyond — with clarity around financing options, without pressure, sales tactics, or disruption to your client relationships.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="hero" 
                    size="xl"
                    onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Become a Partner
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="border-white/30 text-white hover:bg-white/10"
                    onClick={() => navigate('/mortgage-programs')}
                  >
                    View Our Loan Programs
                  </Button>
                </div>
              </div>
              
              {/* What This Is Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h2 className="heading-card text-white mb-6">What This Is</h2>
                <p className="text-body text-white/80 mb-8">
                  This is an <span className="text-accent font-semibold">education-first collaboration</span> designed to help your clients — whether they're first-time buyers, seasoned homeowners, or investors — understand their financing options early, so they can write stronger offers and move forward with confidence.
                </p>
                
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-lg font-semibold text-white/60 mb-4">What This Is NOT</h3>
                  <ul className="space-y-3">
                    {whatThisIsNot.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary to-primary/95">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-section text-white mb-4">How the System Works</h2>
              <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
                A straightforward process that keeps you in control while providing value to your investor clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <div 
                  key={index}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="absolute -top-4 left-6 bg-accent text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="mt-4">
                    <step.icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Realtors Use This + When to Introduce */}
        <section className="py-16 md:py-24 bg-primary/95">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Why Realtors Use This */}
              <div>
                <h2 className="heading-section text-white mb-8">Why Realtors Use This</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyRealtorsUse.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent/30 transition-all duration-300"
                    >
                      <item.icon className="w-8 h-8 text-accent mb-3" />
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* When to Introduce */}
              <div>
                <h2 className="heading-section text-white mb-8">When to Introduce It</h2>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="space-y-4">
                    {whenToIntroduce.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-accent/20 transition-all duration-300"
                      >
                        <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                        <span className="text-white font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Role Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/95 to-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-section text-white mb-6">Your Role</h2>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-3xl p-8 md:p-12">
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                  You remain the <span className="text-accent font-semibold">primary relationship</span>. Previse supports the financing side and keeps you informed — <span className="text-accent font-semibold">no bypassing, no pressure, no surprises</span>.
                </p>
                <p className="text-white/70 text-lg">
                  If you'd like to use this system for your investor clients, simply offer the introduction when it feels helpful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Form Section */}
        <section id="partner-form" className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="heading-section text-white mb-4">Ready to Partner?</h2>
                <p className="text-body-lg text-white/70">
                  Fill out the form below and we'll reach out to discuss how we can support your investor clients.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <UnifiedLeadForm
                  campaignType="realtor_partnership"
                  source="Realtor Partnership Page"
                  submitButtonText="Submit Partnership Request"
                  showAddress={false}
                  onSuccess={() => navigate('/schedule-thank-you')}
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default RealtorPartnership;
