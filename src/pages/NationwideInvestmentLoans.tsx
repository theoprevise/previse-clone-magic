import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnifiedLeadForm from "@/components/UnifiedLeadForm";
import { Link } from "@/lib/router-compat";
import { Building2, Hammer, RefreshCw, Home, MapPin, CheckCircle2 } from "lucide-react";
import { INVESTMENT_STATES } from "@/lib/service-areas";

const programs = [
  { icon: Building2, title: "DSCR Rental Loans", text: "Qualify on the property's rental income instead of your personal tax returns. LLC and corporate borrowers welcome." },
  { icon: Hammer, title: "Fix & Flip Financing", text: "Short-term financing for purchase and renovation of investment properties." },
  { icon: Home, title: "Multifamily & Portfolio", text: "Financing for 2–4 unit, small multifamily and multi-property portfolios." },
  { icon: RefreshCw, title: "Cash-Out Refinance", text: "Pull equity from existing rentals to fund repairs, reserves or your next acquisition." },
];

const NationwideInvestmentLoans = () => {
  const h2 = "text-2xl md:text-3xl font-bold text-white mb-4";
  const p = "text-white/80 leading-relaxed";
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-primary">
      <Header />
      <section className="py-14">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Service Area · Investment Property Lending
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Estate Investment Loans <span className="text-accent">Nationwide*</span>
            </h1>
            <p className={p + " text-lg mb-6"}>
              Previse Mortgage LLC brokers business-purpose financing for rental and investment properties in 29 states, with competitive rates and a clear, predictable process. Residential owner-occupied home loans are offered in Pennsylvania and Colorado only.
            </p>
            <ul className="space-y-2 text-white/80 text-left inline-block">
              {["Loans from $250,000", "680+ credit score", "1.25+ DSCR for rental loans", "LLC and corporate borrowers"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-accent" />{t}</li>
              ))}
            </ul>
          </div>
          <Card className="p-6 bg-card/95">
            <h2 className="text-xl font-bold mb-4">Get Investment Loan Options</h2>
            <UnifiedLeadForm source="nationwide_investment_loans" campaignType="dscr_investment_loan" eventName="Investment Loan Interest - Nationwide Page" showAddress={false} buttonText="Get My Loan Options" />
          </Card>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className={h2 + " text-center"}>Investment Loan <span className="text-accent">Programs</span></h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {programs.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="p-6 bg-white/5 border-accent/20">
                <Icon className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className={p}>{text}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/dscr-loans">Learn About DSCR Loans</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className={h2 + " text-center"}>States We Serve for <span className="text-accent">Investment Loans</span></h2>
          <p className={p + " text-center mb-8"}>Business-purpose investment property loans are available in these 29 states:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {INVESTMENT_STATES.map((s) => (
              <div key={s} className="flex items-center gap-2 text-white/90"><MapPin className="h-4 w-4 text-accent shrink-0" />{s}</div>
            ))}
          </div>
          <p className="text-white/60 text-sm mt-8">
            *Investment property loans are available only in the states listed above where permitted by state law; some states require licensing we do not currently hold. Residential owner-occupied loans are offered in Pennsylvania and Colorado only. Loan approval, terms and program availability depend on lender guidelines, borrower qualifications and property eligibility. Previse Mortgage LLC is a mortgage broker. NMLS #2730429.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NationwideInvestmentLoans;
