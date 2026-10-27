import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQStructuredData from "@/components/FAQStructuredData";
import UnifiedLeadForm from "@/components/UnifiedLeadForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Phone } from "lucide-react";

const money = (n: number) => (Number.isFinite(n) ? "$" + Math.round(n).toLocaleString("en-US") : "—");

const faqs = [
  { question: "What DSCR do I need?", answer: "Previse investor programs generally look for a DSCR of 1.25x or higher, a 680+ credit score, and a $250,000 minimum loan amount. A higher ratio can improve pricing and leverage." },
  { question: "How much down payment is required?", answer: "It depends on the lender, credit, ratio, property, and loan size. Use the calculator to explore an assumed LTV, then discuss your scenario with Previse." },
  { question: "Can I use a DSCR loan for an Airbnb?", answer: "Some lenders accept short-term rentals using historical income or a market-rent analysis. Colorado municipalities and HOAs have different rental rules; verify permits and eligibility for the specific property." },
  { question: "Can a first-time investor or an LLC qualify?", answer: "Some programs accept first-time investors or loans vested in an eligible entity. Credit, guarantees, entity documentation, and experience requirements vary by lender." },
  { question: "Does 1.25x mean the property is profitable?", answer: "Not necessarily. PITIA generally excludes vacancy, repairs, management, utilities, capital expenses, and income taxes. Include those in your own investment analysis." },
  { question: "What should I have ready?", answer: "The property address, purchase price or estimated value, expected rent or lease, taxes, insurance, HOA dues, your estimated credit profile, and available funds. For a refinance, include the current loan balance." },
];

type Field = { key: string; label: string; step?: number };
const fields: Field[] = [
  { key: "price", label: "Purchase price / value ($)" },
  { key: "ltv", label: "Loan-to-value (%)", step: 0.1 },
  { key: "rate", label: "Interest rate (%)", step: 0.01 },
  { key: "term", label: "Amortization (years)" },
  { key: "rent", label: "Monthly qualifying rent ($)" },
  { key: "tax", label: "Annual property taxes ($)" },
  { key: "insurance", label: "Annual insurance ($)" },
  { key: "hoa", label: "Monthly HOA / dues ($)" },
  { key: "target", label: "Target DSCR (x)", step: 0.01 },
  { key: "closing", label: "Est. closing costs ($)" },
  { key: "expenses", label: "Monthly vacancy & op. expenses ($)" },
];

const ColoradoDSCR = () => {
  const [type, setType] = useState<"purchase" | "refi">("purchase");
  const [payment, setPayment] = useState<"amort" | "io">("amort");
  const [v, setV] = useState<Record<string, string>>({
    price: "500000", ltv: "75", rate: "7.5", term: "30", rent: "3500", tax: "3600",
    insurance: "2400", hoa: "0", target: "1.25", closing: "10000", expenses: "500", payoff: "0",
  });

  const r = useMemo(() => {
    const n = (k: string) => Number(v[k]);
    const price = n("price"), ltv = n("ltv"), term = n("term"), target = n("target");
    if (!(price > 0 && term > 0 && target > 0) || Object.values(v).some((x) => x === "" || Number(x) < 0)) return null;
    const loan = (price * ltv) / 100;
    const mr = n("rate") / 1200, months = term * 12;
    const f = payment === "io" ? mr : mr === 0 ? 1 / months : mr / (1 - Math.pow(1 + mr, -months));
    const pi = loan * f;
    const esc = (n("tax") + n("insurance")) / 12 + n("hoa");
    const pitia = pi + esc;
    const ratio = pitia > 0 ? n("rent") / pitia : NaN;
    const max = f > 0 ? Math.max(0, Math.min(price, (n("rent") / target - esc) / f)) : 0;
    const cash = type === "refi" ? loan - n("payoff") - n("closing") : price - loan + n("closing");
    return { loan, ltv, pi, esc, pitia, ratio, target, needed: pitia * target, max, cash, flow: n("rent") - pitia - n("expenses") };
  }, [v, type, payment]);

  const input = "w-full min-h-11 rounded-md border border-border bg-background/60 px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Colorado DSCR Loans & Rental Property Calculator | Previse Mortgage"
        description="Explore Colorado DSCR loans for rental property purchases and refinances. Calculate rental coverage, estimated payments, and loan scenarios with Previse Mortgage."
        keywords="Colorado DSCR loans, Denver DSCR loan, Colorado Springs rental loan, DSCR calculator, Colorado investment property financing"
        canonicalUrl="https://previsemortgage.com/colorado-dscr-loans"
      />
      <FAQStructuredData faqs={faqs} />
      <Header />

      <main>
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_.8fr] gap-12 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-accent">Colorado investment property financing</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4 mb-6">
                Let the property <span className="text-accent">do the talking.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Your next Colorado rental deserves a financing strategy built around its income. Explore DSCR loans, run your numbers, and get a real conversation about what's possible.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="#calculator"><Calculator className="mr-2 h-5 w-5" />Calculate your DSCR</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-foreground/60 text-foreground bg-transparent hover:bg-foreground/10">
                  <a href="tel:17178195196"><Phone className="mr-2 h-5 w-5" />(717) 819-5196</a>
                </Button>
              </div>
            </div>
            <div className="border-l border-border pl-6 text-muted-foreground">
              <strong className="block text-2xl text-foreground mb-2">Built for investors.</strong>
              From a first rental to a growing portfolio, see how the numbers come together before your next move.
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 flex flex-wrap justify-between gap-4 text-xs font-bold uppercase tracking-widest text-accent border-y border-border py-4">
            <span>Purchase & refinance</span><span>Long & short-term rentals</span><span>Colorado properties</span><span>NMLS #2730429</span>
          </div>
        </section>

        <section id="calculator" className="py-16 px-4 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Run your rental scenario.</h2>
            <p className="text-muted-foreground mb-8">Adjust the assumptions to estimate payment, coverage, and purchasing power. The sample rate is illustrative, not a rate quote.</p>
            <div className="grid lg:grid-cols-[1.35fr_.85fr] gap-6 items-start">
              <div className="rounded-xl border border-border bg-card/60 p-6 grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1 text-sm font-semibold">Transaction
                  <select className={input} value={type} onChange={(e) => setType(e.target.value as any)}>
                    <option value="purchase">Purchase</option><option value="refi">Refinance</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1 text-sm font-semibold">Payment type
                  <select className={input} value={payment} onChange={(e) => setPayment(e.target.value as any)}>
                    <option value="amort">Principal & interest</option><option value="io">Interest-only</option>
                  </select>
                </label>
                {fields.map((f) => (
                  <label key={f.key} className="flex flex-col gap-1 text-sm font-semibold">{f.label}
                    <input type="number" min={0} step={f.step ?? 1} className={input} value={v[f.key]}
                      onChange={(e) => setV({ ...v, [f.key]: e.target.value })} />
                  </label>
                ))}
                {type === "refi" && (
                  <label className="flex flex-col gap-1 text-sm font-semibold">Existing loan payoff ($)
                    <input type="number" min={0} className={input} value={v.payoff} onChange={(e) => setV({ ...v, payoff: e.target.value })} />
                  </label>
                )}
              </div>
              <aside aria-live="polite" className="rounded-xl border border-accent/40 bg-card p-6 lg:sticky lg:top-24">
                <p className="text-xs uppercase tracking-widest font-bold text-accent">Estimated coverage</p>
                <div className="text-6xl font-bold my-3">{r && Number.isFinite(r.ratio) ? r.ratio.toFixed(2) + "x" : "—"}</div>
                <p className="text-sm text-muted-foreground mb-4">
                  {!r ? "Enter valid, non-negative values." : r.ratio >= r.target ? "At or above your target" : "Below your target"}
                </p>
                {r && [
                  ["Estimated loan", money(r.loan)],
                  ["Loan-to-value", r.ltv.toFixed(1) + "%"],
                  ["Principal & interest", money(r.pi) + "/mo"],
                  ["Taxes, insurance & dues", money(r.esc) + "/mo"],
                  ["Total monthly PITIA", money(r.pitia) + "/mo"],
                  ["Rent needed for target", money(r.needed) + "/mo"],
                  ["Max loan at target DSCR*", money(r.max)],
                  [type === "refi" ? "Net proceeds after payoff & costs" : "Down payment + closing costs", money(r.cash)],
                  ["Cash flow after expenses**", money(r.flow) + "/mo"],
                ].map(([k, val]) => (
                  <div key={k} className="flex justify-between gap-4 border-t border-border py-2 text-sm"><span>{k}</span><strong>{val}</strong></div>
                ))}
                {payment === "io" && <p className="text-xs text-accent mt-2">Interest-only payments apply only during the IO period; later payments may be higher.</p>}
                <Button asChild className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="#contact">Review this scenario with Previse <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <p className="text-xs text-muted-foreground mt-3">*Estimate only, capped at property value; actual LTV limits may be lower. **Rent minus PITIA and entered expenses.</p>
              </aside>
            </div>
            <p className="text-xs text-muted-foreground mt-6">This calculator is educational and is not a pre-qualification, approval, commitment, or offer. Rates, terms, rent calculations, reserves, credit, property eligibility, and underwriting vary by lender. Previse investor loans require a $250,000 minimum loan amount.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What is a DSCR loan?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["01", "Calculate coverage", "Qualifying monthly rent is divided by principal, interest, taxes, insurance, and association dues — often called PITIA."],
                ["02", "Understand the ratio", "1.00x means rent equals PITIA. At 1.25x, rent is 25% higher. Neither figure alone tells you the property's full profit."],
                ["03", "Review the whole deal", "Lenders also evaluate credit, reserves, equity, the property, and rent documentation. Rules and pricing differ."],
              ].map(([num, t, d]) => (
                <article key={num} className="rounded-xl border border-border bg-card/60 p-6">
                  <span className="text-3xl font-bold text-accent">{num}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">{t}</h3>
                  <p className="text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A strategy for the way you invest.</h2>
              <p className="text-muted-foreground mb-4">Whether you're buying in Denver, refinancing a Colorado Springs rental, or exploring a mountain short-term rental, the right structure depends on your property and plans.</p>
              <p className="text-muted-foreground">Previse Mortgage, founded by Teddy Carbone, helps you compare lender programs and the tradeoffs in rate, leverage, reserves, prepayment terms, and documentation.</p>
            </div>
            <div className="divide-y divide-border">
              {[
                ["Purchase a rental", "Model a down payment and payment against qualifying rent."],
                ["Refinance or access equity", "Rate-and-term or cash-out, subject to equity, seasoning, and program limits."],
                ["Long-term & short-term rentals", "Income documentation, occupancy, and local rental rules can differ substantially."],
                ["Flexible structures", "Interest-only and entity vesting options may be available. Terms vary."],
              ].map(([t, d]) => (
                <div key={t} className="py-4"><strong className="block text-lg">{t}</strong><p className="text-muted-foreground">{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Colorado DSCR questions, answered.</h2>
            {faqs.map((f, i) => (
              <details key={f.question} open={i === 0} className="border-b border-border py-4">
                <summary className="font-semibold text-lg cursor-pointer">{f.question}</summary>
                <p className="text-muted-foreground mt-3">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 px-4 scroll-mt-24">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Colorado deal in mind?</h2>
              <p className="text-muted-foreground mb-6">Bring us the property and the questions. We'll help you understand the numbers and explore available financing options.</p>
              <Button asChild variant="outline" className="border-foreground/60 text-foreground bg-transparent hover:bg-foreground/10">
                <Link to="/schedule">Schedule a conversation</Link>
              </Button>
            </div>
            <UnifiedLeadForm
              source="landing_colorado_dscr"
              campaignType="dscr_investment_loan"
              eventName="Colorado DSCR Landing - Lead"
              buttonText="Discuss My Deal"
            />
          </div>
          <p className="max-w-5xl mx-auto text-xs text-muted-foreground mt-12">
            Previse Mortgage LLC (NMLS #2730429) is a mortgage brokerage licensed in Pennsylvania and Colorado for residential lending, with investment property financing arranged where permitted by state law. Financing is subject to lender approval, property eligibility, and program guidelines. This is not a commitment to lend. Investment properties involve risk.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ColoradoDSCR;
