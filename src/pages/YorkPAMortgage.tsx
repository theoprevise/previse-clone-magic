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

const YorkPAMortgage = () => {
  return (
    <div className="min-h-screen bg-primary">
      <SEOHead
        title="Mortgage Lender in York, PA | Home Loans York County | Previse Mortgage"
        description="Local mortgage lender serving York, PA and York County. FHA, conventional, USDA, and investment property loans with competitive rates. Based in nearby Spring Grove, PA."
        keywords="mortgage lender York PA, York PA home loans, York County mortgage broker, mortgage rates York Pennsylvania, Spring Grove PA mortgage, home loans York County PA, FHA loans York PA, first time homebuyer York PA, refinance York PA, USDA loans York County"
        canonicalUrl="https://previsemortgage.com/mortgage-lender-york-pa"
      />
      <StructuredData type="webpage" data={{
        title: "Mortgage Lender in York, PA | Home Loans York County",
        description: "Local mortgage lender serving York, PA and York County with competitive rates and fast closings.",
        url: "https://previsemortgage.com/mortgage-lender-york-pa"
      }} />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Based in Spring Grove — Serving All of York County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mortgage Lender in <span className="text-accent">York, Pennsylvania</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Your local York County mortgage expert. From downtown York to Hanover, Dallastown, and Red Lion — we help families across York County achieve homeownership with the right loan at the right rate.
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
            <h2 className="text-3xl font-bold text-primary mb-6">Home Loans in York, PA: What You Need to Know</h2>
            <p className="text-foreground/80 leading-relaxed">
              York, Pennsylvania sits at the heart of one of the most affordable and fast-growing housing markets in the Mid-Atlantic region. With a median home price well below the national average and a strong local economy anchored by manufacturing, healthcare, and logistics, York County offers exceptional value for first-time homebuyers, growing families, and real estate investors alike.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Previse Mortgage is headquartered in <strong>Spring Grove, PA</strong> — just minutes from downtown York. As your neighbor and local mortgage broker, we bring deep knowledge of York County's real estate market, school districts, and community dynamics to every transaction. We work with dozens of wholesale lenders to find you the best rate and loan structure, whether you are buying in West York, Springettsbury Township, or the rural outskirts of southern York County.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-10 mb-4">Popular Loan Programs for York County Buyers</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>FHA Loans</strong> — Widely used by York County first-time buyers. Low 3.5% down payment and flexible credit requirements make homeownership accessible. <Link to="/fha-loans" className="text-accent hover:underline">FHA loan details →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>USDA Loans</strong> — Many York County communities qualify for zero-down USDA financing, including areas around Stewartstown, Glen Rock, and Shrewsbury. <Link to="/usda-loans" className="text-accent hover:underline">Check eligibility →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>Conventional Loans</strong> — Competitive rates with as little as 3% down. A great option for buyers with good credit looking to avoid mortgage insurance sooner. <Link to="/conventional-loans" className="text-accent hover:underline">Learn more →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>DSCR Investment Loans</strong> — York's growing rental market makes it a hotspot for investors. Qualify based on rental income, not personal W-2s. <Link to="/dscr-loans" className="text-accent hover:underline">DSCR details →</Link></span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mt-10 mb-4">York County Real Estate Market Insights</h3>
            <p className="text-foreground/80 leading-relaxed">
              York County's housing market has seen steady appreciation over the past several years, driven by its proximity to Baltimore and Harrisburg, affordable cost of living, and an influx of remote workers seeking more space outside major metro areas. Communities like Dallastown, Red Lion, Dover, and Hanover continue to attract buyers looking for quality school districts and suburban charm at a fraction of the cost of neighboring counties.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              For investors, York offers strong rental yields with relatively low acquisition costs compared to markets like Lancaster or Chester County. Multi-family properties and single-family rentals near York College or in the downtown revitalization area are particularly popular among our investor clients who leverage <Link to="/dscr-loans" className="text-accent hover:underline">DSCR financing</Link> to scale their portfolios.
            </p>
          </div>
        </div>
      </section>

      {/* Local Communities */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">Communities We Serve in York County</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">From borough to township, we help York County residents find the right mortgage.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "City of York", "Spring Grove", "Hanover", "Dallastown",
              "Red Lion", "Dover", "West York", "Shrewsbury",
              "Glen Rock", "Stewartstown", "Springettsbury", "Manchester",
              "Wrightsville", "Dillsburg", "New Freedom", "Jacobus"
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
            <h2 className="text-3xl font-bold text-primary text-center mb-10">York PA Mortgage FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What are mortgage rates in York, PA right now?",
                  a: "Mortgage rates in York fluctuate daily based on market conditions. As a broker, we compare rates from multiple lenders to find the lowest available for your loan scenario. Contact us or visit our rates page for today's York PA mortgage rates."
                },
                {
                  q: "Is York, PA a good place to buy a house?",
                  a: "Yes. York County offers some of the most affordable housing in the Mid-Atlantic with strong appreciation trends, quality school districts, and easy access to Harrisburg, Baltimore, and the I-83 corridor. It's an excellent market for both primary residence and investment purchases."
                },
                {
                  q: "Are there USDA-eligible areas in York County?",
                  a: "Many communities in York County qualify for USDA zero-down financing, particularly in the southern and western portions of the county. Towns like Stewartstown, Glen Rock, and Shrewsbury often fall within eligible zones. We can verify your property's eligibility quickly."
                },
                {
                  q: "How do I get pre-approved for a mortgage in York, PA?",
                  a: "Start by completing our online pre-qualification form — it takes just a few minutes and won't affect your credit score. We'll review your information and connect you with a loan officer to discuss your options and get you a pre-approval letter for your home search."
                },
                {
                  q: "Do you work with local York County real estate agents?",
                  a: "Absolutely. We partner with real estate agents across York County and can provide fast pre-approval letters, responsive communication, and reliable closings. If you're an agent, visit our Realtor Partnership page to learn how we support your buyers."
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Buy a Home in York County?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Your local Spring Grove mortgage team is ready to help you find the perfect loan for your York County home purchase.</p>
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

export default YorkPAMortgage;
