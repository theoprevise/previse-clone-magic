import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import UnifiedLeadForm from "@/components/UnifiedLeadForm";
import { 
  Trees, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  DollarSign,
  MapPin,
  Home
} from "lucide-react";

const usdaLoanProgram = {
  id: "usda",
  icon: Trees,
  title: "USDA Loans",
  description: "Zero down payment loans for eligible rural and suburban areas.",
  bestFor: [
    "Buyers in rural or suburban areas",
    "Low-to-moderate income households",
    "First-time homebuyers",
    "Those seeking 100% financing"
  ],
  qualifications: [
    "Property must be in USDA-eligible area",
    "Income must be below area median",
    "Minimum 640 credit score recommended",
    "Must be primary residence"
  ],
  highlights: ["Zero down payment", "No PMI", "Low rates", "Rural areas"]
};

const USDALoans = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead 
        title="USDA Loans Pennsylvania | Zero Down Payment Rural Mortgages | Previse Mortgage"
        description="USDA loans in Pennsylvania with zero down payment for rural and suburban homes. Check your eligibility for 100% financing. No PMI required!"
        keywords="USDA loans, rural development loan, zero down payment, Pennsylvania rural mortgage, 100% financing, no money down"
        canonicalUrl="https://previsemortgage.com/usda-loans"
      />
      <Header />
      
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
      
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
                100% Financing Available
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="text-accent">USDA Loans</span> for Rural Living
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
                Discover the benefits of rural homeownership with zero down payment. 
                More areas qualify than you might think!
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {usdaLoanProgram.highlights.map((highlight, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-4 text-center">Check Your USDA Eligibility</h2>
              <UnifiedLeadForm 
                source="loan_page_usda_rural"
                campaignType="usda_loan_inquiry"
                eventName="USDA Loan Interest - Rural Property"
                showAddress={true}
                buttonText="Check My Eligibility"
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:border-accent/30">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <Trees className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{usdaLoanProgram.title}</h2>
                    <p className="text-white/70">{usdaLoanProgram.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Best For</h3>
                </div>
                <ul className="space-y-2">
                  {usdaLoanProgram.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Quick Qualifications</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {usdaLoanProgram.qualifications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://previsemortgage.my1003app.com?time=1766329396091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    variant="outline"
                    className="w-full border-accent/30 text-accent hover:bg-accent/10"
                  >
                    Apply for USDA Loan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose a <span className="text-accent">USDA Loan?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: DollarSign, title: "Zero Down Payment", description: "Buy a home with no money down" },
              { icon: Home, title: "No PMI", description: "Save on monthly mortgage insurance" },
              { icon: MapPin, title: "Many Areas Qualify", description: "Suburban and rural areas eligible" },
              { icon: Trees, title: "Low Rates", description: "Competitive interest rates available" }
            ].map((benefit, idx) => (
              <Card 
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <benefit.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">USDA Rural Development Loans in Pennsylvania: A Complete Guide</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  USDA loans are a powerful homeownership tool backed by the United States Department of Agriculture's Rural Development program. Designed to promote homeownership in rural and suburban communities, <strong>USDA loans offer 100% financing with zero down payment</strong>—one of only two loan programs (alongside VA loans) that allow borrowers to purchase a home without any money down. For Pennsylvania buyers in eligible areas, this can mean saving tens of thousands of dollars at closing.
                </p>
                <p>
                  Despite the name, USDA eligibility extends well beyond farmland. In Pennsylvania, large portions of the state qualify, including many communities in Adams, Cumberland, Franklin, Perry, York, Lancaster, and dozens of other counties. Towns like Gettysburg, Carlisle, Chambersburg, and many suburbs outside Harrisburg and York often fall within USDA-eligible boundaries. The program uses income limits based on the area median income (AMI), typically allowing households earning up to 115% of the local median to qualify.
                </p>
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">How USDA Loans Work</h3>
                <p>
                  USDA loans come in two forms: the Guaranteed Loan (most common, offered through approved lenders like Previse Mortgage) and the Direct Loan (offered directly by USDA for very low-income borrowers). The Guaranteed Loan program features competitive fixed interest rates, 30-year terms, and a guarantee fee that is significantly lower than FHA's mortgage insurance premium. The upfront guarantee fee is currently 1% of the loan amount, and the annual fee is just 0.35%—compared to FHA's 1.75% upfront and 0.55% annual MIP.
                </p>
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">USDA vs. FHA: Which Zero-or-Low Down Option Is Better?</h3>
                <p>
                  If your property is in a USDA-eligible area, the USDA loan is almost always the better choice. You get true zero-down financing (vs. 3.5% for <a href="/fha-loans" className="text-accent hover:underline">FHA</a>), lower mortgage insurance costs, and no loan limit cap in most cases. The trade-off is geographic and income restrictions—your property must be in an eligible area and your household income must be below the local threshold. We check both of these criteria for every client in minutes at no cost.
                </p>
                <p>
                  For Pennsylvania buyers considering rural or suburban properties, USDA financing can be the most affordable path to homeownership available. Combined with state programs like <strong>PHFA Keystone Advantage Assistance</strong> (which can cover closing costs), eligible buyers may be able to purchase a home with virtually no out-of-pocket expense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">USDA Loan FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What areas in Pennsylvania are USDA eligible?",
                  a: "Large portions of Pennsylvania qualify for USDA financing, including many communities in Adams, Cumberland, Franklin, Perry, Lebanon, and York counties. Even some suburban areas outside major cities may qualify. We can check any specific address for USDA eligibility in minutes."
                },
                {
                  q: "What is the income limit for a USDA loan in PA?",
                  a: "USDA income limits are based on your county and household size. Generally, your household income must be at or below 115% of the area median income. For a family of four in many PA counties, this can be $100,000 or more. Limits are updated annually by USDA."
                },
                {
                  q: "Do USDA loans have mortgage insurance?",
                  a: "USDA loans have a guarantee fee instead of traditional mortgage insurance. The upfront fee is 1% of the loan amount (can be financed into the loan) and the annual fee is 0.35%—significantly lower than FHA's mortgage insurance premium."
                },
                {
                  q: "Can I use a USDA loan to buy a fixer-upper?",
                  a: "The property must meet USDA minimum property standards, meaning it needs to be safe, sanitary, and structurally sound. Major repairs may need to be completed before closing. However, minor cosmetic issues are typically acceptable."
                },
                {
                  q: "How long does a USDA loan take to close?",
                  a: "USDA loans typically take 30-45 days to close, similar to other mortgage types. The USDA guarantee process adds a few extra days compared to conventional loans, but with proper preparation and documentation, closings can often be completed within 35 days."
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-white/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Does Your Dream Home Qualify?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let us check if your area is USDA eligible and get you started on your path to homeownership.
            </p>
            <Button 
              size="lg" 
              variant="hero"
              className="group"
              onClick={() => navigate('/schedule')}
            >
              Check Eligibility Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default USDALoans;
