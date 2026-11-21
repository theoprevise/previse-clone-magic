import { useNavigate, Link } from "@/lib/router-compat";
import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingDown, 
  TrendingUp,
  Clock,
  Shield,
  Info,
  CheckCircle2,
  Calendar
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQStructuredData from "@/components/FAQStructuredData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { MORTGAGE_RATE_SOURCE, mortgageRateAverages, weeklyRateChange } from "@/lib/mortgage-rate-averages";

const rateFactors = [
  {
    title: "Credit Score",
    description: "Higher scores qualify for better rates. 740+ gets the best terms."
  },
  {
    title: "Down Payment",
    description: "Larger down payments often mean lower rates and no PMI."
  },
  {
    title: "Loan Term",
    description: "Shorter terms typically have lower rates but higher monthly payments."
  },
  {
    title: "Loan Type",
    description: "Conventional, FHA, VA, and USDA loans have different rate structures."
  },
  {
    title: "Property Type",
    description: "Primary residences get better rates than investment properties."
  },
  {
    title: "Market Conditions",
    description: "Rates fluctuate daily based on economic factors and Fed policy."
  }
];

const CurrentMortgageRates = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead 
        title="Freddie Mac Mortgage Rate Averages | Previse Mortgage"
        description="View Freddie Mac national 30-year and 15-year fixed mortgage averages, dated November 19, 2026. These are market benchmarks, not Previse loan quotes."
        keywords="current mortgage rates, today's mortgage rates, 30 year fixed rate, 15 year mortgage rate, FHA rates, VA loan rates, jumbo mortgage rates, compare mortgage rates, competitive mortgage rates"
        canonicalUrl="https://previsemortgage.com/current-mortgage-rates"
      />
      <Header />
      
      {/* Back Button */}
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

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
              Freddie Mac • U.S. Weekly Averages
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Current <span className="text-accent">Mortgage Rates</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Freddie Mac national averages provide a market benchmark—not a Previse Mortgage rate quote. Your actual rate and APR depend on your loan and financial profile.
            </p>
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <Calendar className="h-4 w-4" />
              <span>Survey published: {MORTGAGE_RATE_SOURCE.publishedAt}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Table Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-4">
              {mortgageRateAverages.map((average) => {
                const rate = { ...average, change: weeklyRateChange(average.rate, average.previousRate) };
                return (
                <Card 
                  key={rate.type}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:border-accent/30"
                >
                  <div className="grid md:grid-cols-12 gap-4 items-center">
                    {/* Loan Type */}
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-bold text-white">{rate.type}</h3>
                      <p className="text-white/60 text-sm">{rate.description}</p>
                    </div>
                    
                    {/* Rate */}
                    <div className="md:col-span-3 text-center">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">National Average</p>
                      <p className="text-3xl font-bold text-accent">{rate.rate.toFixed(2)}%</p>
                    </div>
                    
                    {/* Change */}
                    <div className="md:col-span-3 text-center">
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Weekly Change</p>
                      <div className={`flex items-center justify-center gap-1 ${rate.change < 0 ? 'text-success' : rate.change > 0 ? 'text-destructive' : 'text-white/60'}`}>
                        {rate.change < 0 ? (
                          <TrendingDown className="h-4 w-4" />
                        ) : rate.change > 0 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <span>—</span>
                        )}
                        <span className="font-medium">
                          {rate.change !== 0 ? `${rate.change > 0 ? '+' : ''}${rate.change.toFixed(2)} percentage points` : 'No change'}
                        </span>
                      </div>
                    </div>
                    
                    {/* Best For */}
                    <div className="md:col-span-3 text-center md:text-right">
                      <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm">
                        {rate.bestFor}
                      </span>
                    </div>
                  </div>
                </Card>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm">
                  <strong className="text-white">National averages, not loan offers:</strong> These figures are a dated snapshot of Freddie Mac’s PMMS, not daily rates, APRs, or a commitment to lend. The survey covers conventional conforming single-family purchase mortgages; it does not represent FHA, VA, jumbo, refinance, or DSCR/investment loan pricing. Freddie Mac does not publish APRs or average fees and points for this survey. Your rate, APR, fees, and eligibility require an individual quote and credit approval. Residential lending through Previse Mortgage is limited to Pennsylvania and Colorado.
                  <br />
                  Source: <a href={MORTGAGE_RATE_SOURCE.url} target="_blank" rel="noopener noreferrer" className="text-accent underline">{MORTGAGE_RATE_SOURCE.name}</a>. Published {MORTGAGE_RATE_SOURCE.publishedAt}. Freddie Mac publishes new results weekly; this page is a manually updated snapshot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Your Rate Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Affects <span className="text-accent">Your Rate?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Understanding these factors can help you qualify for more competitive rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rateFactors.map((factor, idx) => (
              <Card 
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{factor.title}</h3>
                    <p className="text-white/70 text-sm">{factor.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose-invert">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Understanding <span className="text-accent">Mortgage Rates</span> in 2026
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Mortgage rates are one of the most important factors in determining your monthly payment and the total cost of homeownership. Even a small difference in your interest rate—as little as 0.25%—can save or cost you tens of thousands of dollars over the life of a 30-year mortgage. Understanding how rates work and what influences them helps you make smarter borrowing decisions.
              </p>
              <p>
                Mortgage interest rates are influenced by a combination of macroeconomic factors and your personal financial profile. The Federal Reserve's monetary policy, inflation expectations, the bond market, and overall economic conditions all play a role in setting baseline rates. Your individual rate is then adjusted based on your credit score, down payment, loan type, property type, and loan amount.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Fixed-Rate vs. Adjustable-Rate Mortgages (ARM)</h3>
              <p>
                A fixed-rate mortgage locks in your interest rate for the entire loan term—typically 15 or 30 years. Your monthly principal and interest payment never changes, making budgeting predictable. An adjustable-rate mortgage (ARM) starts with a lower fixed rate for an initial period (usually 5 or 7 years), then adjusts periodically based on market conditions. ARMs can be a smart choice if you plan to sell or refinance before the adjustment period begins.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">How to Get a Competitive Mortgage Rate</h3>
              <p>
                The most competitive mortgage rates generally go to borrowers with strong credit scores (740+), substantial down payments (20%+), low debt-to-income ratios, and stable employment history. Here are actionable steps to improve your rate: pay down existing debts to lower your DTI, avoid opening new credit accounts before applying, save for a larger down payment, and compare offers from multiple lenders. At Previse Mortgage, we shop across our lending partners to find you the most competitive rate available.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Rate vs. APR: What's the Difference?</h3>
              <p>
                The interest rate is the cost of borrowing the principal loan amount. The Annual Percentage Rate (APR) includes the interest rate plus other loan costs like origination fees, discount points, and mortgage insurance. APR gives you a more complete picture of the total cost of the loan. When comparing mortgage offers, always look at both the rate and APR to make an apples-to-apples comparison.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Should You Lock Your Mortgage Rate?</h3>
              <p>
                A rate lock guarantees your interest rate for a specific period—typically 30 to 60 days—while your loan is being processed. If rates rise during that period, you're protected. Rate locks are especially valuable in volatile rate environments. Ask your Previse Mortgage loan officer about rate lock options, including float-down provisions that allow you to benefit if rates drop after you lock.
              </p>
            </div>

            {/* Rates FAQ */}
            <FAQStructuredData faqs={[
              { q: "How often do mortgage rates change?", a: "Mortgage rates can change daily, sometimes multiple times per day. Rates are influenced by bond market movements, economic data releases, Federal Reserve decisions, and global events. Freddie Mac publishes weekly national averages; this page shows the dated survey snapshot above, not a daily quote. Your actual rate is established through an individual quote and any applicable rate lock." },
              { q: "What credit score do I need for a competitive mortgage rate?", a: "Borrowers with credit scores of 740 or higher typically qualify for the most competitive available rates. Scores between 700 and 739 get very competitive rates, while scores from 680 to 699 are still strong. Below 680, you may pay slightly higher rates but can still qualify for many loan programs including FHA loans." },
              { q: "Are mortgage rates the same for all loan types?", a: "No, rates vary by loan type. Conventional loans, FHA loans, VA loans, USDA loans, and jumbo loans each have different rate structures. VA loans typically offer some of the most competitive rates because they're backed by the Department of Veterans Affairs. FHA loans have competitive rates but include mortgage insurance that increases the effective cost." },
              { q: "Should I pay points to lower my mortgage rate?", a: "Paying discount points (each point equals 1% of the loan amount) can lower your rate by approximately 0.25%. This makes sense if you plan to keep the loan long enough to recoup the upfront cost—typically 4 to 7 years. If you might sell or refinance sooner, saving on points is usually the better financial decision." },
              { q: "How can I get a personalized mortgage rate quote?", a: "Contact Previse Mortgage for a personalized rate quote based on your specific financial situation. We'll review your credit score, income, down payment, loan amount, and property type to provide an accurate rate. There's no obligation and no impact to your credit score for an initial consultation." },
            ]} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-16 mb-8">
              Mortgage Rate <span className="text-accent">FAQ</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "How often do mortgage rates change?",
                  a: "Mortgage rates can change daily, sometimes multiple times per day. Rates are influenced by bond market movements, economic data releases, Federal Reserve decisions, and global events. Freddie Mac publishes weekly national averages; this page shows the dated survey snapshot above, not a daily quote. Your actual rate is established through an individual quote and any applicable rate lock."
                },
                {
                  q: "What credit score do I need for a competitive mortgage rate?",
                  a: "Borrowers with credit scores of 740 or higher typically qualify for the most competitive available rates. Scores between 700 and 739 get very competitive rates, while scores from 680 to 699 are still strong. Below 680, you may pay slightly higher rates but can still qualify for many loan programs including FHA loans."
                },
                {
                  q: "Are mortgage rates the same for all loan types?",
                  a: "No, rates vary by loan type. Conventional loans, FHA loans, VA loans, USDA loans, and jumbo loans each have different rate structures. VA loans typically offer some of the most competitive rates because they're backed by the Department of Veterans Affairs. FHA loans have competitive rates but include mortgage insurance that increases the effective cost."
                },
                {
                  q: "Should I pay points to lower my mortgage rate?",
                  a: "Paying discount points (each point equals 1% of the loan amount) can lower your rate by approximately 0.25%. This makes sense if you plan to keep the loan long enough to recoup the upfront cost—typically 4 to 7 years. If you might sell or refinance sooner, saving on points is usually the better financial decision."
                },
                {
                  q: "How can I get a personalized mortgage rate quote?",
                  a: "Contact Previse Mortgage for a personalized rate quote based on your specific financial situation. We'll review your credit score, income, down payment, loan amount, and property type to provide an accurate rate. There's no obligation and no impact to your credit score for an initial consultation."
                }
              ].map((faq, idx) => (
                <article key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Internal Links */}
            <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4">Explore Your Options</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" asChild><Link to="/mortgage-calculator">Payment Calculator</Link></Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" asChild><Link to="/refinance">Refinance Options</Link></Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" asChild><Link to="/fha-loans">FHA Loans</Link></Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" asChild><Link to="/conventional-loans">Conventional Loans</Link></Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" asChild><Link to="/first-time-homebuyer">First-Time Buyer Guide</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Approval Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                  <span className="text-accent font-semibold">Quick Pre-Qualification</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get Your Personalized Rate
                </h2>
                <p className="text-white/80 mb-6">
                  The rates shown are Freddie Mac national averages, not Previse quotes. Your actual rate will depend on various factors like: credit score, down payment, loan amount, property type. Contact us for a personalized rate quote based on your specific situation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-white/80">
                    <Shield className="h-4 w-4 text-success" />
                    <span>No credit check for initial quote</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2 text-white/80">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Lock your rate for up to 60 days</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <Button 
                  size="lg" 
                  variant="hero"
                  onClick={() => navigate('/schedule')}
                  className="group w-full"
                >
                  Check Your Rate
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a 
                  href="https://previsemortgage.my1003app.com?time=1766329396091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 w-full"
                  >
                    Start Pre-Approval
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CurrentMortgageRates;
