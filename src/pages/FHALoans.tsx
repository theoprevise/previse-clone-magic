import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQStructuredData from "@/components/FAQStructuredData";
import UnifiedLeadForm from "@/components/UnifiedLeadForm";
import { 
  Home, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  DollarSign,
  Percent,
  Shield
} from "lucide-react";

const fhaLoanProgram = {
  id: "fha",
  icon: Home,
  title: "FHA Loans",
  description: "Government-backed loans with lower credit and down payment requirements.",
  bestFor: [
    "First-time homebuyers",
    "Buyers with lower credit scores",
    "Those with limited down payment funds",
    "Buyers recovering from bankruptcy"
  ],
  qualifications: [
    "Minimum 580 credit score for 3.5% down",
    "500-579 credit score with 10% down",
    "Steady employment history (2 years)",
    "Debt-to-income ratio under 43%"
  ],
  highlights: ["3.5% down payment", "Lower credit requirements", "Gift funds allowed", "Assumable loans"]
};

const FHALoans = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead 
        title="FHA Loans Pennsylvania | Low Down Payment Mortgages | Previse Mortgage"
        description="FHA loans in Pennsylvania with as little as 3.5% down payment. Perfect for first-time homebuyers and those with lower credit scores. Get pre-approved today!"
        keywords="FHA loans, FHA mortgage, first time homebuyer, low down payment, Pennsylvania FHA loans, 3.5% down payment"
        canonicalUrl="https://previsemortgage.com/fha-loans"
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
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 animate-fade-in">
                Low Down Payment Option
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="text-accent">FHA Loans</span> Made Simple
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-8">
                The perfect solution for first-time homebuyers and those with limited savings. 
                Get into your dream home with as little as 3.5% down.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {fhaLoanProgram.highlights.map((highlight, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Lead Capture Form */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-4 text-center">Get Pre-Approved for an FHA Loan</h2>
              <UnifiedLeadForm 
                source="loan_page_fha"
                campaignType="fha_loan_inquiry"
                eventName="FHA Loan Interest - Low Down Payment"
                showAddress={false}
                buttonText="Check My FHA Eligibility"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* FHA Loan Details */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card 
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:border-accent/30"
          >
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Header */}
              <div className="lg:col-span-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <Home className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{fhaLoanProgram.title}</h2>
                    <p className="text-white/70">{fhaLoanProgram.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Best For */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Best For</h3>
                </div>
                <ul className="space-y-2">
                  {fhaLoanProgram.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Qualifications */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">Quick Qualifications</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {fhaLoanProgram.qualifications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <Percent className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
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
                    Apply for FHA Loan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose an <span className="text-accent">FHA Loan?</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
              FHA loans make homeownership accessible with flexible requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Percent, title: "3.5% Down Payment", description: "One of the lowest down payments available" },
              { icon: Shield, title: "Lower Credit OK", description: "Qualify with credit scores as low as 580" },
              { icon: DollarSign, title: "Gift Funds Allowed", description: "Use gift money for your entire down payment" },
              { icon: Home, title: "Assumable Loans", description: "Future buyers can take over your loan" }
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

      {/* In-Depth Educational Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose-invert">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What Is an <span className="text-accent">FHA Loan</span> and How Does It Work?
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                An FHA loan is a mortgage insured by the Federal Housing Administration, a government agency within the U.S. Department of Housing and Urban Development (HUD). Because FHA loans are backed by the federal government, lenders face less risk, which allows them to offer more flexible qualification requirements and lower down payments compared to conventional mortgages.
              </p>
              <p>
                FHA loans are one of the most popular mortgage options for first-time homebuyers, borrowers with lower credit scores, and anyone who has limited savings for a down payment. With an FHA loan, you can purchase a home with as little as 3.5% down if your credit score is 580 or higher. Borrowers with credit scores between 500 and 579 may still qualify with a 10% down payment.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">FHA Loan Requirements in 2026</h3>
              <p>
                To qualify for an FHA loan, borrowers must meet several requirements. You'll need a minimum credit score of 580 for the 3.5% down payment option, a debt-to-income (DTI) ratio generally below 43%, and at least two years of steady employment history. The property must serve as your primary residence—FHA loans cannot be used for investment properties or vacation homes.
              </p>
              <p>
                FHA loans also require mortgage insurance premiums (MIP). You'll pay an upfront mortgage insurance premium of 1.75% of the loan amount at closing, plus an annual MIP that ranges from 0.45% to 1.05% depending on your loan term, loan-to-value ratio, and loan amount. This insurance protects the lender if you default on the loan.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">FHA vs. Conventional Loans: Which Is Right for You?</h3>
              <p>
                The biggest advantage of FHA loans over conventional mortgages is accessibility. Conventional loans typically require a minimum credit score of 620 and a down payment of at least 5% (though 20% avoids private mortgage insurance). FHA loans accept lower credit scores and smaller down payments, making homeownership possible for borrowers who might not qualify for conventional financing.
              </p>
              <p>
                However, conventional loans offer benefits too—once you reach 20% equity, you can drop mortgage insurance entirely, while FHA MIP lasts the life of the loan for most borrowers. Your loan officer at Previse Mortgage can help you compare both options and determine which saves you more money over the life of your loan.
              </p>
              <h3 className="text-xl font-bold text-white mt-8 mb-4">How to Apply for an FHA Loan</h3>
              <p>
                Applying for an FHA loan with Previse Mortgage is straightforward. Start by getting pre-approved—this tells you exactly how much home you can afford and shows sellers you're a serious buyer. You'll need to provide income documentation (W-2s, pay stubs, tax returns), bank statements, and employment verification. Our team guides you through every step, from pre-approval to closing.
              </p>
            </div>

            {/* FHA FAQ Section */}
            <FAQStructuredData faqs={[
              { q: "What credit score do I need for an FHA loan?", a: "You need a minimum credit score of 580 to qualify for the 3.5% down payment option. Borrowers with scores between 500 and 579 may qualify with a 10% down payment. Higher credit scores will help you secure better interest rates." },
              { q: "Can I use an FHA loan to buy an investment property?", a: "No, FHA loans are only available for primary residences. You must live in the home as your main residence. If you're looking to finance an investment property, consider a DSCR loan or conventional investment property mortgage." },
              { q: "How much is the FHA down payment?", a: "The minimum FHA down payment is 3.5% of the purchase price with a credit score of 580 or higher. On a $300,000 home, that's just $10,500. Your entire down payment can come from gift funds from family members, making FHA loans even more accessible." },
              { q: "How long does it take to close an FHA loan?", a: "FHA loans typically take 30 to 45 days to close from application to funding. The timeline depends on factors like the appraisal, your documentation readiness, and current lender volume. At Previse Mortgage, we work to close as quickly as possible." },
              { q: "Can I refinance an FHA loan?", a: "Yes, FHA offers several refinance options including the FHA Streamline Refinance, which requires minimal documentation and no appraisal. You can also refinance from an FHA loan into a conventional loan once you've built sufficient equity." },
            ]} />
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-16 mb-8">
              Frequently Asked Questions About <span className="text-accent">FHA Loans</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What credit score do I need for an FHA loan?",
                  a: "You need a minimum credit score of 580 to qualify for the 3.5% down payment option. Borrowers with scores between 500 and 579 may qualify with a 10% down payment. Higher credit scores will help you secure better interest rates."
                },
                {
                  q: "Can I use an FHA loan to buy an investment property?",
                  a: "No, FHA loans are only available for primary residences. You must live in the home as your main residence. If you're looking to finance an investment property, consider a DSCR loan or conventional investment property mortgage."
                },
                {
                  q: "How much is the FHA down payment?",
                  a: "The minimum FHA down payment is 3.5% of the purchase price with a credit score of 580 or higher. On a $300,000 home, that's just $10,500. Your entire down payment can come from gift funds from family members, making FHA loans even more accessible."
                },
                {
                  q: "How long does it take to close an FHA loan?",
                  a: "FHA loans typically take 30 to 45 days to close from application to funding. The timeline depends on factors like the appraisal, your documentation readiness, and current lender volume. At Previse Mortgage, we work to close as quickly as possible."
                },
                {
                  q: "Can I refinance an FHA loan?",
                  a: "Yes, FHA offers several refinance options including the FHA Streamline Refinance, which requires minimal documentation and no appraisal. You can also refinance from an FHA loan into a conventional loan once you've built sufficient equity."
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
              <h3 className="text-lg font-bold text-white mb-4">Explore More Mortgage Options</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/conventional-loans')}>Conventional Loans</Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/usda-loans')}>USDA Loans</Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/dscr-loans')}>DSCR Investor Loans</Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/refinance')}>Refinance Options</Button>
                <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => navigate('/mortgage-calculator')}>Mortgage Calculator</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 backdrop-blur-xl border border-accent/30 p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started with an FHA Loan?
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our FHA loan specialists are ready to help you through every step of the process.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                variant="hero"
                className="group"
                onClick={() => navigate('/schedule')}
              >
                Talk to an FHA Specialist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FHALoans;
