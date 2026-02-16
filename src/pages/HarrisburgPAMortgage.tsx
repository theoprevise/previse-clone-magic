import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { MapPin, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = lazy(() => import("@/components/Footer"));
const GoHighLevelChat = lazy(() => import("@/components/GoHighLevelChat"));
const FloatingContactWidget = lazy(() => import("@/components/FloatingContactWidget"));

const HarrisburgPAMortgage = () => {
  return (
    <div className="min-h-screen bg-primary">
      <SEOHead
        title="Mortgage Lender in Harrisburg, PA | Home Loans Dauphin County | Previse Mortgage"
        description="Trusted mortgage lender serving Harrisburg, PA and the Greater Harrisburg area. FHA, conventional, USDA, and investment property loans with competitive rates and personalized service."
        keywords="mortgage lender Harrisburg PA, Harrisburg PA home loans, Dauphin County mortgage broker, mortgage rates Harrisburg Pennsylvania, home loans Harrisburg PA, FHA loans Harrisburg, first time homebuyer Harrisburg PA, refinance Harrisburg PA, Greater Harrisburg mortgage, Camp Hill PA mortgage"
        canonicalUrl="https://previsemortgage.com/mortgage-lender-harrisburg-pa"
      />
      <StructuredData type="webpage" data={{
        title: "Mortgage Lender in Harrisburg, PA | Home Loans Dauphin County",
        description: "Trusted mortgage lender serving Harrisburg and the Greater Harrisburg area with competitive rates.",
        url: "https://previsemortgage.com/mortgage-lender-harrisburg-pa"
      }} />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Serving Harrisburg & Greater Capital Region</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mortgage Lender in <span className="text-accent">Harrisburg, PA</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Expert mortgage solutions for Harrisburg, Camp Hill, Mechanicsburg, and the entire Greater Harrisburg region. Competitive rates, fast pre-approvals, and a team that knows the Central PA market inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pre-qualify">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8">
                  Get Pre-Qualified <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+17178195196">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" /> (717) 819-5196
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Harrisburg, PA Home Loans: A Comprehensive Guide</h2>
            <p className="text-foreground/80 leading-relaxed">
              Harrisburg, Pennsylvania's capital city, anchors one of the most dynamic and affordable housing markets in the northeastern United States. The Greater Harrisburg area—spanning Dauphin, Cumberland, and Perry counties—offers an exceptional blend of urban amenities, suburban neighborhoods, and rural charm, all at a cost of living well below cities like Philadelphia, Washington D.C., or New York.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Whether you are a state government employee buying your first home in Susquehanna Township, a young professional looking at townhomes in Camp Hill, or an investor purchasing a multi-family property near the Harrisburg University district, Previse Mortgage has the loan programs and local expertise to help you close with confidence. Our office in nearby Spring Grove means we are deeply familiar with the Central PA market, settlement company requirements, and county-specific processes.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-10 mb-4">Loan Options for Harrisburg Area Buyers</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>FHA Loans</strong> — Popular among Harrisburg first-time buyers with down payments as low as 3.5% and lenient credit score requirements. <Link to="/fha-loans" className="text-accent hover:underline">FHA loan details →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>Conventional Loans</strong> — Ideal for buyers with strong credit. Down payments starting at 3% with competitive PMI rates. <Link to="/conventional-loans" className="text-accent hover:underline">Conventional options →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>USDA Loans</strong> — Zero-down financing for eligible areas in Perry County and rural portions of Dauphin and Cumberland counties. <Link to="/usda-loans" className="text-accent hover:underline">Check eligibility →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>DSCR Investment Loans</strong> — Harrisburg's strong rental demand near hospitals, universities, and state offices makes it ideal for investor financing. <Link to="/dscr-loans" className="text-accent hover:underline">DSCR details →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>Refinance</strong> — Lower your rate or access equity in your Harrisburg-area home. We handle rate-and-term and cash-out refinancing. <Link to="/refinance" className="text-accent hover:underline">Refinance options →</Link></span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mt-10 mb-4">Greater Harrisburg Housing Market Overview</h3>
            <p className="text-foreground/80 leading-relaxed">
              The Harrisburg metropolitan area has experienced consistent home value growth, fueled by a diversified economy that includes state government, healthcare (UPMC Pinnacle, Penn State Health), logistics, and a thriving small business community. Neighborhoods like Midtown Harrisburg have undergone significant revitalization, attracting young professionals and investors, while suburban communities like Lower Paxton, Mechanicsburg, and Hershey continue to draw families with excellent school districts and safe, walkable neighborhoods.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              For real estate investors, the Harrisburg area offers particularly compelling opportunities. Rental demand remains strong due to the high concentration of state employees, medical professionals, and university students. Properties near the Harrisburg hospital campus, downtown government district, and Messiah University consistently generate solid returns. Our <Link to="/dscr-loans" className="text-accent hover:underline">DSCR loan program</Link> allows investors to qualify based on the property's rental income rather than personal W-2 income, making it easier to scale a portfolio in this market.
            </p>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">Communities We Serve in the Harrisburg Area</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">From the capital city to surrounding suburbs, we help Greater Harrisburg residents find the right mortgage.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Harrisburg", "Camp Hill", "Mechanicsburg", "Hershey",
              "Lower Paxton", "Susquehanna Twp", "Carlisle", "Lemoyne",
              "New Cumberland", "Middletown", "Hummelstown", "Palmyra",
              "Dillsburg", "Enola", "Wormleysburg", "Steelton"
            ].map((town) => (
              <div key={town} className="bg-white rounded-lg p-4 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <MapPin className="h-4 w-4 text-accent mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">{town}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-10">Harrisburg Mortgage FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What are mortgage rates in Harrisburg, PA?",
                  a: "Rates in the Harrisburg area change daily. As a mortgage broker, we compare offers from multiple lenders to secure the most competitive rate for your specific situation. Visit our rates page or call us for a personalized quote."
                },
                {
                  q: "Is Harrisburg a good place to buy a home?",
                  a: "The Greater Harrisburg area offers excellent value with median home prices well below the national average, a stable economy driven by government and healthcare, quality schools, and easy access to major employment centers. It's a strong market for both homeowners and investors."
                },
                {
                  q: "What down payment assistance is available in the Harrisburg area?",
                  a: "Several programs are available including PHFA Keystone Home Loan, Keystone Advantage Assistance (up to $6,000), and Dauphin County-specific assistance programs. We help you identify and apply for every program you qualify for."
                },
                {
                  q: "How long does it take to close on a house in Harrisburg?",
                  a: "A typical mortgage closing in the Harrisburg area takes 30-45 days from accepted offer to settlement. With a strong pre-approval and responsive documentation, we often close in under 30 days. We coordinate closely with local settlement companies to ensure a smooth process."
                },
                {
                  q: "Do you serve areas outside of Harrisburg?",
                  a: "Yes! We serve the entire Greater Harrisburg region including Cumberland County (Camp Hill, Mechanicsburg, Carlisle), Perry County, Lebanon County, and beyond. We are licensed across all of Pennsylvania."
                },
              ].map((faq, i) => (
                <div key={i} className="bg-secondary/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">{faq.q}</h3>
                  <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Buy a Home in the Harrisburg Area?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Get pre-qualified in minutes. Your local Central PA mortgage team is standing by.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pre-qualify">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-8">
                Start Pre-Qualification <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/schedule">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
        <GoHighLevelChat />
        <FloatingContactWidget />
      </Suspense>
    </div>
  );
};

export default HarrisburgPAMortgage;
