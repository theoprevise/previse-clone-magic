import { ArrowLeft, Building2, DollarSign, FileCheck, Clock, TrendingUp, Shield, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import UnifiedLeadForm from "@/components/UnifiedLeadForm";

const dscrLoanProgram = {
  title: "DSCR Loans",
  description: "Qualify based on your property's rental income—not your personal income. Perfect for real estate investors looking to grow their portfolio without traditional income documentation.",
  bestFor: [
    "Real estate investors",
    "Self-employed borrowers",
    "Those with multiple investment properties",
    "Investors seeking faster closings"
  ],
  qualifications: [
    "Use rental income to qualify",
    "Borrow up to 80% LTV",
    "No W-2s or tax returns required",
    "No bank statements needed",
    "Credit scores as low as 620"
  ],
  highlights: "Close faster with simplified documentation. Focus on property cash flow, not personal finances."
};

const benefits = [
  {
    icon: DollarSign,
    title: "Rental Income Qualification",
    description: "Qualify based on the property's rental income potential, not your personal earnings or employment."
  },
  {
    icon: FileCheck,
    title: "No W-2s or Tax Returns",
    description: "Skip the traditional income documentation. No need to provide pay stubs, W-2s, or years of tax returns."
  },
  {
    icon: Building2,
    title: "Up to 80% LTV",
    description: "Finance up to 80% of the property value, keeping your capital available for additional investments."
  },
  {
    icon: Clock,
    title: "Faster Closings",
    description: "Streamlined documentation means quicker approvals and faster closings to secure your investment."
  },
  {
    icon: TrendingUp,
    title: "Portfolio Growth",
    description: "No limit on the number of financed properties. Scale your real estate portfolio without restrictions."
  },
  {
    icon: Shield,
    title: "Flexible Credit Requirements",
    description: "Credit scores as low as 620 accepted. Focus on property performance over personal credit history."
  }
];

const DSCRLoans = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead 
        title="DSCR Loans | Investor-Friendly Financing | Previse Mortgage"
        description="Qualify for a mortgage using rental income. No W-2s, tax returns, or bank statements required. Up to 80% LTV for real estate investors. Apply today!"
        keywords="DSCR loans, investor loans, rental income mortgage, no income verification loan, investment property financing, real estate investor loans"
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Building2 className="h-4 w-4" />
                  Investor-Focused Financing
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  DSCR Loans for <span className="text-primary">Real Estate Investors</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {dscrLoanProgram.description}
                </p>

                {/* Key Highlights */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {dscrLoanProgram.qualifications.slice(0, 4).map((qualification, index) => (
                    <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{qualification}</span>
                    </div>
                  ))}
                </div>

                <p className="text-lg font-medium text-primary italic">
                  {dscrLoanProgram.highlights}
                </p>
              </div>

              {/* Right Column - Lead Form */}
              <div className="lg:sticky lg:top-24">
                <Card className="shadow-2xl border-2 border-primary/20">
                  <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                    <CardTitle className="text-2xl text-center">
                      Get Pre-Approved for a DSCR Loan
                    </CardTitle>
                    <p className="text-center text-primary-foreground/80">
                      Start building your portfolio today
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <UnifiedLeadForm 
                      campaignType="dscr-loans"
                      showAddress={false}
                      buttonText="Get My DSCR Quote"
                      successRedirectPath="/thank-you"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/10">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{dscrLoanProgram.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{dscrLoanProgram.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Best For
                      </h4>
                      <ul className="space-y-3">
                        {dscrLoanProgram.bestFor.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-primary" />
                        Quick Qualifications
                      </h4>
                      <ul className="space-y-3">
                        {dscrLoanProgram.qualifications.map((qual, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <Button 
                      size="lg" 
                      onClick={() => navigate('/application/dscr')}
                      className="w-full md:w-auto"
                    >
                      Start Full Application
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose DSCR Loans?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Designed specifically for real estate investors who want to qualify based on property performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-border">
                  <CardContent className="p-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How DSCR Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  How DSCR Loans Work
                </h2>
                <p className="text-xl text-muted-foreground">
                  Simple math determines your qualification
                </p>
              </div>

              <Card className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">DSCR</div>
                    <p className="text-muted-foreground">Debt Service Coverage Ratio</p>
                  </div>
                  <div className="text-center text-4xl font-bold text-muted-foreground">=</div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-foreground mb-2">
                      Monthly Rent ÷ Monthly Payment
                    </div>
                    <p className="text-muted-foreground">
                      Ratio of 1.0 or higher typically qualifies
                    </p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Example:</h4>
                  <p className="text-muted-foreground">
                    If your property rents for <strong className="text-foreground">$2,000/month</strong> and 
                    the mortgage payment is <strong className="text-foreground">$1,800/month</strong>, 
                    your DSCR is <strong className="text-primary">1.11</strong>—you qualify!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Grow Your Portfolio?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Speak with a DSCR loan specialist today. No obligation, just expert guidance for real estate investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate('/schedule')}
                className="text-lg px-8"
              >
                Schedule a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/application/dscr')}
                className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Start Application
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DSCRLoans;
