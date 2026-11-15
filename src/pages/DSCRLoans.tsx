import { useNavigate } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQStructuredData from "@/components/FAQStructuredData";
import UnifiedLeadForm from "@/components/UnifiedLeadForm";
import { Building2, ArrowRight, ArrowLeft, CheckCircle2, DollarSign, Briefcase, RefreshCw, Home, MapPin } from "lucide-react";
import { INVESTMENT_STATES } from "@/lib/service-areas";

const BROKER_STATEMENT =
  "Previse Mortgage LLC helps real estate investors secure DSCR financing for rental and investment properties held in LLCs or corporations. As a mortgage broker, we work with wholesale lending partners to provide business-purpose investment property financing solutions in states where we are authorized to operate. Loan approval, terms, and program availability are subject to lender guidelines, borrower qualifications, property eligibility, and applicable state requirements.";

const faqs = [
  { q: "What is a DSCR loan?", a: "A DSCR (Debt Service Coverage Ratio) loan is a business-purpose mortgage for non-owner-occupied investment properties. Lenders generally evaluate the property's rental income against its monthly debt service rather than relying primarily on the borrower's personal employment income." },
  { q: "Can I get a DSCR loan in an LLC?", a: "Yes. DSCR programs are designed for investors who hold rental properties in an LLC or corporation. Lenders typically review the entity documents and require a personal guarantee. Holding property in an LLC does not guarantee approval." },
  { q: "What are the minimum requirements?", a: "Through Previse, DSCR loans generally start at a $250,000 loan amount, a 680+ credit score and a 1.25 DSCR. Down payment, reserves and other terms depend on the lender program and the property." },
  { q: "Is income documentation required?", a: "DSCR programs focus on property cash flow, so personal income is generally not the primary qualifier. Lenders still require documentation such as leases or rent schedules, credit, assets/reserves, entity documents and an appraisal. Exact requirements vary by program." },
  { q: "Can I do a DSCR cash-out refinance?", a: "Yes. Eligible investors can refinance a rental property to pull out equity for repairs, reserves or additional acquisitions, subject to lender loan-to-value limits and seasoning requirements." },
  { q: "Which states do you serve for DSCR loans?", a: "We currently broker business-purpose DSCR loans in the 29 states listed on this page. Residential owner-occupied loans are offered in Pennsylvania and Colorado only." },
];

const DSCRLoans = () => {
  const navigate = useNavigate();
  const section = "py-14 relative";
  const h2 = "text-2xl md:text-3xl font-bold text-white mb-4";
  const p = "text-white/80 leading-relaxed";

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <SEOHead
        title="DSCR Loans for LLCs | Investment Property Financing — Previse Mortgage LLC"
        description="DSCR loans for LLCs and real estate investors. Rental property financing, purchases and DSCR cash-out refinance in 29 states through Previse Mortgage LLC, a mortgage broker."
        keywords="DSCR loans, DSCR loans for LLCs, investment property loans, LLC mortgage loans, rental property financing, real estate investor financing, business-purpose mortgage loans, DSCR cash-out refinance, DSCR loans for rental properties"
        canonicalUrl="https://previsemortgage.com/dscr-loans"
        ogType="product"
      />
      <FAQStructuredData faqs={faqs} />
      <Header />

      <div className="container mx-auto px-4 pt-6">
        <Button variant="ghost" onClick={() => navigate(-1)} className="text-white hover:text-accent">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      <section className="py-12 relative">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Business-Purpose Investment Financing
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="text-accent">DSCR Loans for LLCs</span> & Rental Property Investors
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6">{BROKER_STATEMENT}</p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {["$250K+ loan amounts", "680+ credit", "1.25 DSCR", "Purchase & cash-out refi"].map((t) => (
                <span key={t} className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm">{t}</span>
              ))}
            </div>
          </div>
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-4 text-center">Get a DSCR Investment Property Quote</h2>
            <UnifiedLeadForm source="loan_page_dscr_investor" campaignType="dscr_investment_loan" eventName="DSCR Loan Interest - Investment Property" showAddress={false} buttonText="Explore DSCR Loan Options" />
          </Card>
        </div>
      </section>

      <section className={section}>
        <div className="container mx-auto px-4 max-w-4xl space-y-4">
          <h2 className={h2}>What Is a <span className="text-accent">DSCR Loan</span>?</h2>
          <p className={p}>A DSCR loan is a business-purpose mortgage for non-owner-occupied rental and investment properties. Instead of relying primarily on your W-2 or tax-return income, lenders generally look at whether the property's rent covers its monthly debt service — principal, interest, taxes, insurance and any association dues (PITIA).</p>
          <h3 className="text-xl font-bold text-white pt-4">How Do DSCR Loans Work?</h3>
          <p className={p}>The ratio is gross monthly rent divided by the monthly PITIA payment. A DSCR of 1.0 means rent equals the payment; Previse looks for 1.25 or higher, meaning rent exceeds the payment by 25%. Example: $2,500 in rent against a $2,000 payment is a 1.25 DSCR.</p>
          <h3 className="text-xl font-bold text-white pt-4">How Rental Income Is Used to Qualify</h3>
          <p className={p}>For leased properties, lenders typically use the current lease. For vacant or newly purchased properties, the appraiser's market rent schedule is commonly used. Some programs consider short-term rental history. The lender's guidelines determine which figure applies.</p>
        </div>
      </section>

      <section className={section}>
        <div className="container mx-auto px-4">
          <h2 className={`${h2} text-center`}>Benefits of Financing Through an <span className="text-accent">LLC</span></h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
            {[
              { icon: Briefcase, t: "Entity ownership", d: "Close in your LLC or corporation, keeping investment holdings organized under your business." },
              { icon: DollarSign, t: "Cash-flow based review", d: "Qualification centers on the property's rental income and debt service." },
              { icon: Building2, t: "Portfolio scaling", d: "Each property is evaluated on its own performance, which can help investors grow a portfolio." },
            ].map((b) => (
              <Card key={b.t} className="bg-white/5 border border-white/10 p-6 text-center">
                <b.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{b.t}</h3>
                <p className="text-white/70 text-sm">{b.d}</p>
              </Card>
            ))}
          </div>
          <p className="text-white/60 text-sm text-center mt-6 max-w-3xl mx-auto">LLC ownership does not guarantee loan approval and does not create an exemption from state licensing requirements. Consult your tax or legal advisor about entity structure.</p>
        </div>
      </section>

      <section className={section}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className={h2}>DSCR Loan Qualification Requirements</h2>
          <ul className="space-y-2">
            {["Minimum loan amount of $250,000", "Credit score of 680 or higher", "DSCR of 1.25 or higher", "Non-owner-occupied investment property (single-family, 2–4 unit, condo, townhome; others by program)", "Down payment, reserves and entity documents per lender guidelines", "Appraisal with rent schedule"].map((r) => (
              <li key={r} className="flex gap-2 text-white/80"><CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={section}>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
          <Card className="bg-white/5 border border-white/10 p-6">
            <Home className="h-7 w-7 text-accent mb-3" />
            <h2 className="text-xl font-bold text-white mb-2">Purchasing an Investment Property</h2>
            <p className="text-white/75 text-sm">Finance your next rental using the property's projected market rent. Get pre-qualified before you make offers so you know your target price and payment.</p>
          </Card>
          <Card className="bg-white/5 border border-white/10 p-6">
            <RefreshCw className="h-7 w-7 text-accent mb-3" />
            <h2 className="text-xl font-bold text-white mb-2">DSCR Cash-Out Refinance</h2>
            <p className="text-white/75 text-sm">Refinance an existing rental to replace a hard-money or bank loan, or access equity for repairs and new acquisitions, subject to lender LTV and seasoning rules.</p>
          </Card>
        </div>
        <div className="text-center mt-8">
          <a href="https://previsemortgage.my1003app.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Finance Your Next Rental Property <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </a>
        </div>
      </section>

      <section className={section}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className={h2}><MapPin className="inline h-7 w-7 text-accent mr-2" />DSCR Investment Property Financing — States We Serve</h2>
          <p className={`${p} mb-6`}>We currently broker business-purpose DSCR loans in the following 29 states. Availability depends on lender programs and applicable state requirements.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {INVESTMENT_STATES.map((s) => (
              <div key={s} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white/85 text-sm">{s}</div>
            ))}
          </div>
          <p className="text-white/60 text-sm mt-4">Residential owner-occupied mortgages are offered in Pennsylvania and Colorado only.</p>
        </div>
      </section>

      <section className={section}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className={h2}>Frequently Asked Questions About <span className="text-accent">DSCR Loans</span></h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <article key={f.q} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-base font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{f.a}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4">Explore More Investment Financing</h3>
            <div className="flex flex-wrap gap-3">
              {[["Investor Hub", "/investors"], ["DSCR Loan Guide", "/dscr-loan-guide"], ["Mortgage Calculator", "/mortgage-calculator"], ["Current Rates", "/current-mortgage-rates"]].map(([l, h]) => (
                <Button key={h} variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" onClick={() => h && navigate(h)}>{l}</Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Explore LLC Investment Property Financing</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Talk with Previse about your property, entity and goals. No obligation.</p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => navigate("/schedule")}>Talk to a DSCR Specialist <ArrowRight className="ml-2 h-5 w-5" /></Button>
            <p className="text-white/50 text-xs mt-8 max-w-3xl mx-auto">{BROKER_STATEMENT}</p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DSCRLoans;
