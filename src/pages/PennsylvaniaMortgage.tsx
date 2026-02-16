import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { MapPin, Home, Shield, Clock, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = lazy(() => import("@/components/Footer"));
const GoHighLevelChat = lazy(() => import("@/components/GoHighLevelChat"));
const FloatingContactWidget = lazy(() => import("@/components/FloatingContactWidget"));

const PennsylvaniaMortgage = () => {
  return (
    <div className="min-h-screen bg-primary">
      <SEOHead
        title="Pennsylvania Mortgage Lender | PA Home Loans | Previse Mortgage"
        description="Licensed Pennsylvania mortgage lender offering FHA, conventional, USDA, and DSCR loans across all PA counties. Competitive rates, fast closings, and personalized service from Spring Grove, PA."
        keywords="Pennsylvania mortgage lender, PA home loans, mortgage broker Pennsylvania, PA mortgage rates, Spring Grove PA mortgage, York County mortgage, Pennsylvania FHA loans, PA first time homebuyer, Pennsylvania refinance, PA USDA loans, mortgage company Pennsylvania"
        canonicalUrl="https://previsemortgage.com/pennsylvania-mortgage"
      />
      <StructuredData type="webpage" data={{
        title: "Pennsylvania Mortgage Lender | PA Home Loans",
        description: "Licensed Pennsylvania mortgage lender serving all PA counties with competitive rates and personalized service.",
        url: "https://previsemortgage.com/pennsylvania-mortgage"
      }} />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Licensed in Pennsylvania — NMLS# 2730429</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Trusted Pennsylvania <span className="text-accent">Mortgage Lender</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Serving homebuyers and investors across every county in the Commonwealth of Pennsylvania with competitive rates, fast closings, and expert guidance from application to closing day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pre-qualify">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8">
                  Get Pre-Qualified Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/current-mortgage-rates">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
                  View PA Mortgage Rates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content — Keyword-Rich Educational Prose */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Pennsylvania Home Loans: Your Complete Guide</h2>
            <p className="text-foreground/80 leading-relaxed">
              Pennsylvania is one of the most diverse real estate markets in the United States, spanning rural farmland in Lancaster County to bustling urban neighborhoods in Philadelphia and Pittsburgh. Whether you are purchasing your first home in the suburbs of Harrisburg, investing in rental properties in York County, or refinancing a home in the Lehigh Valley, Previse Mortgage provides tailored lending solutions designed for Pennsylvania borrowers.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              As a licensed Pennsylvania mortgage broker (PA Broker License #115658), we have access to a wide network of wholesale lenders, which means we can shop multiple rate options on your behalf—often securing lower rates than borrowers find on their own. Our team understands the nuances of PA-specific programs, including the <strong>Pennsylvania Housing Finance Agency (PHFA)</strong> assistance programs that offer down payment and closing cost help to eligible first-time homebuyers.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-10 mb-4">Mortgage Programs Available in Pennsylvania</h3>
            <p className="text-foreground/80 leading-relaxed">
              We offer a full spectrum of loan products to serve every type of Pennsylvania borrower:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>FHA Loans</strong> — Low down payment options starting at 3.5%, ideal for first-time buyers and borrowers with credit scores as low as 580. <Link to="/fha-loans" className="text-accent hover:underline">Learn more about PA FHA loans →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>Conventional Loans</strong> — Competitive rates with as little as 3% down for qualified borrowers. PMI can be removed once you reach 20% equity. <Link to="/conventional-loans" className="text-accent hover:underline">Explore conventional options →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>USDA Loans</strong> — Zero down payment for homes in eligible rural areas of Pennsylvania, including many towns in Adams, Cumberland, and Franklin counties. <Link to="/usda-loans" className="text-accent hover:underline">Check USDA eligibility →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>DSCR Loans</strong> — Investment property financing based on rental income rather than personal income, perfect for PA real estate investors. <Link to="/dscr-loans" className="text-accent hover:underline">See DSCR loan details →</Link></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span><strong>Refinance Options</strong> — Rate-and-term or cash-out refinancing to lower your monthly payment or access your home equity. <Link to="/refinance" className="text-accent hover:underline">Explore refinance options →</Link></span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mt-10 mb-4">Why Pennsylvania Homebuyers Choose Previse Mortgage</h3>
            <p className="text-foreground/80 leading-relaxed">
              Buying a home in Pennsylvania comes with unique considerations—from transfer taxes that vary by municipality to flood zone requirements along the Susquehanna River corridor. Our team lives and works in PA, which means we understand local market conditions, county-specific tax structures, and the documentation requirements that can vary from one settlement company to the next. We guide you through every step so there are no surprises at the closing table.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Pennsylvania's median home price remains more affordable than many neighboring states, making it an attractive market for both primary residence buyers and real estate investors. With property values rising steadily in metro areas like York, Lancaster, and the Greater Harrisburg region, locking in a competitive mortgage rate today positions you to build long-term equity in one of the Mid-Atlantic's strongest housing markets.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">Areas We Serve Across Pennsylvania</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">We are licensed to serve borrowers in every county in Pennsylvania. Here are some of the communities we proudly help:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "York County", "Adams County", "Cumberland County", "Dauphin County",
              "Lancaster County", "Lebanon County", "Franklin County", "Chester County",
              "Berks County", "Lehigh County", "Montgomery County", "Delaware County",
              "Allegheny County", "Bucks County", "Centre County", "Erie County"
            ].map((area) => (
              <div key={area} className="bg-white rounded-lg p-4 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <MapPin className="h-4 w-4 text-accent mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-10">Pennsylvania Mortgage FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What are current mortgage rates in Pennsylvania?",
                  a: "Mortgage rates in Pennsylvania vary based on loan type, credit score, and down payment. As a mortgage broker, we shop multiple lenders to find the most competitive rate for your situation. Visit our current rates page for today's PA mortgage rates."
                },
                {
                  q: "Does Pennsylvania have first-time homebuyer programs?",
                  a: "Yes. The Pennsylvania Housing Finance Agency (PHFA) offers several programs including the Keystone Home Loan with below-market interest rates and the Keystone Advantage Assistance Loan providing up to $6,000 in down payment and closing cost assistance for eligible buyers."
                },
                {
                  q: "How much do I need for a down payment on a house in PA?",
                  a: "Down payment requirements depend on the loan program. FHA loans require as little as 3.5% down, conventional loans start at 3%, and USDA loans offer zero down payment for homes in eligible rural areas of Pennsylvania. We help you identify the best option for your budget."
                },
                {
                  q: "What is the transfer tax in Pennsylvania?",
                  a: "Pennsylvania charges a 2% realty transfer tax on property sales, typically split 1% for the buyer and 1% for the seller. Some municipalities add additional local transfer taxes. First-time homebuyers may qualify for a transfer tax exemption under certain conditions."
                },
                {
                  q: "Can I get a USDA loan in Pennsylvania?",
                  a: "Many areas of Pennsylvania qualify for USDA financing, particularly in rural and suburban communities outside major metro areas. Towns in Adams, Cumberland, Franklin, and many other PA counties are eligible. We can check your property's eligibility in minutes."
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-dark to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Pennsylvania Home Loan?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Get pre-qualified in minutes with no impact to your credit score. Our PA mortgage experts are ready to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pre-qualify">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-bold px-8">
                Start Pre-Qualification <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+17178195196">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                <Phone className="mr-2 h-5 w-5" /> Call (717) 819-5196
              </Button>
            </a>
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

export default PennsylvaniaMortgage;
