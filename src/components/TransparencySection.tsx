import { Shield, MessageCircle, Search, Users, Star, CheckCircle, Heart, Phone, FileCheck, ArrowRight, Clock, CalendarCheck, FileText, ListChecks, Lock, DollarSign, Eye, Scale } from "lucide-react";

const TransparencySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              Radical Transparency
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">
              Is <span className="text-accent">Previse Mortgage</span> Right for You?
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Not every lender is right for every borrower — and we think you deserve to know that upfront. 
              Previse Mortgage is a family-owned Pennsylvania mortgage brokerage built for borrowers 
              whose situations don't fit a one-size-fits-all mold. Here's how to know if we're the right fit.
            </p>
          </div>

          {/* Self-Selection Guide */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Star className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Previse Mortgage Is Built For You If…</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "You're self-employed and need a bank statement loan because tax returns don't reflect your real income",
                  "You're a real estate investor seeking DSCR loans where the property's income qualifies — not yours",
                  "Your financial situation is complex: multiple income sources, recent credit events, or non-traditional documentation",
                  "You're a first-time homebuyer who wants patient guidance, not a rushed transaction",
                  "You value certainty at closing over the absolute lowest rate — and want a broker who shops dozens of lenders for you",
                  "You've been turned down by a bank or online lender and need creative, compliant solutions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/50 border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                  <Users className="text-muted-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">We'll Be Honest When We're Not the Best Fit</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                If you're a W-2 employee with a 780+ credit score, 20% down, and a straightforward 
                purchase — a large direct lender or online platform will likely close your loan faster 
                and may offer a marginally lower rate. <strong className="text-foreground">We'll tell you 
                that in your first conversation.</strong>
              </p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                Why? Because we'd rather earn your trust by being honest than close a deal where 
                you won't see our full value. If your situation is straightforward, we'll even point 
                you in the right direction.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                But here's what big banks can't do: when your deal has complexity — a 1099 contractor 
                income, a rental portfolio, a recent bankruptcy, or a tight timeline on a unique 
                property — <strong className="text-foreground">Previse Mortgage's access to 50+ 
                wholesale lenders and niche non-QM programs finds solutions that banks simply don't 
                offer.</strong> That's where our pricing premium delivers real savings and certainty.
              </p>
            </div>
          </div>

          {/* NO-SURPRISE CLOSING GUARANTEE — NEW */}
          <div className="bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 border-2 border-accent/30 rounded-3xl p-8 md:p-12 mb-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Shield className="text-accent" size={28} />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  The No-Surprise Closing<sup>™</sup> Guarantee
                </h3>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
                Hidden fees and bait-and-switch tactics are the #1 source of borrower anxiety. Previse Mortgage eliminates 
                that anxiety with a structured, transparent fee experience from first quote to closing table.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-background/90 border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Scale className="text-accent" size={24} />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-2">Side-by-Side Scenario Comparison</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  We show you 2-3 loan scenarios side by side — different rates, points, and fee structures — 
                  so you can compare total cost of ownership, not just the monthly payment. We welcome you to bring 
                  competing Loan Estimates for an apples-to-apples comparison.
                </p>
              </div>
              <div className="bg-background/90 border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Eye className="text-accent" size={24} />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-2">Closing Disclosure Walkthrough</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Before you sign, we schedule a dedicated call to review your Closing Disclosure line by line. 
                  We compare it against your original Loan Estimate, explain every change, and confirm 
                  there are no surprises. If something changed, we explain why — or we fix it.
                </p>
              </div>
            </div>

            {/* Rate Lock Policy */}
            <div className="bg-background/70 border border-accent/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="text-accent" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">Previse Rate-Lock Policy — In Plain Language</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Rate locks protect you from rate increases while your loan is being processed. Here's exactly how ours works:
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { 
                    title: "When We Lock", 
                    desc: "You choose when to lock — during your Planning Session or later. We never lock without your explicit consent. We'll advise you on timing, but the decision is always yours." 
                  },
                  { 
                    title: "Lock Duration", 
                    desc: "Standard locks are 30-45 days. For complex files (DSCR, non-QM), we recommend 45-60 days to ensure closing without pressure. Extended locks available on request." 
                  },
                  { 
                    title: "If Rates Drop After Locking", 
                    desc: "Many of our wholesale lenders offer float-down options — if rates drop significantly before closing, we can renegotiate. We proactively monitor rates and contact you if a float-down opportunity arises." 
                  },
                  { 
                    title: "What Can Change vs What Can't", 
                    desc: "Your locked rate and lender fees cannot increase. Third-party fees (title, appraisal) are estimates and may vary slightly, but we explain every variance before closing." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-background/80 border border-border rounded-lg p-4">
                    <h5 className="font-bold text-foreground text-xs mb-1">{item.title}</h5>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Standards - Concrete, visible promises */}
          <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-3 text-center">
              Our Service Standards: What You Can Count On
            </h3>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto text-sm">
              We don't just say "high-touch service" — we back it with specific, measurable commitments 
              so your experience feels predictable and guided, never stressful.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              {[
                {
                  icon: <Clock className="text-accent" size={24} />,
                  title: "24-Hour Response Promise",
                  description: "Every question, email, or call gets a response within 24 hours during underwriting — guaranteed. No chasing, no wondering."
                },
                {
                  icon: <CalendarCheck className="text-accent" size={24} />,
                  title: "Weekly Status Check-Ins",
                  description: "Your loan officer contacts you every week with a clear update — even when nothing has changed — so you always know exactly where your loan stands."
                },
                {
                  icon: <FileText className="text-accent" size={24} />,
                  title: "Document Roadmap Upfront",
                  description: "Before we ask for a single document, you'll receive a personalized checklist explaining exactly what's needed and why — no repeated surprise requests."
                },
                {
                  icon: <ListChecks className="text-accent" size={24} />,
                  title: "Underwriting Pre-Brief",
                  description: "We walk you through the most demanding underwriting steps before they happen, so nothing feels unexpected. You'll know what's coming and why it matters."
                }
              ].map((standard, idx) => (
                <div key={idx} className="bg-background/80 border border-border rounded-xl p-5 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {standard.icon}
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-2">{standard.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{standard.description}</p>
                </div>
              ))}
            </div>

            {/* Reframing the "why" behind thoroughness */}
            <div className="bg-background/50 border border-border rounded-2xl p-6 md:p-8">
              <h4 className="font-bold text-foreground mb-4 text-center text-lg">
                Why Previse Mortgage's Underwriting Feels Different — By Design
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Search className="text-accent mx-auto mb-3" size={24} />
                  <h5 className="font-bold text-foreground text-sm mb-2">We Ask Hard Questions Early</h5>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Big banks approve fast and deny late. We do the deep review upfront — so when we say 
                    you're approved, you can trust it. Every document request has a clear reason, and we 
                    explain it before asking.
                  </p>
                </div>
                <div className="text-center">
                  <MessageCircle className="text-accent mx-auto mb-3" size={24} />
                  <h5 className="font-bold text-foreground text-sm mb-2">Direct Loan Officer Access</h5>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    You'll work directly with Teddy or Raine throughout your entire loan — same person, 
                    start to finish. No handoffs, no call centers, no repeating your story to someone new. 
                    When we say we'll call, we call.
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="text-accent mx-auto mb-3" size={24} />
                  <h5 className="font-bold text-foreground text-sm mb-2">Fast Because Thorough</h5>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Other lenders rush approvals and surprise you at closing. We front-load the deep review — 
                    catching issues on day one so they're solved by day five. The result: closings as fast as 21 days 
                    with no last-minute surprises, even on complex files. Speed and certainty, not one or the other.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* After-Closing Care */}
          <div className="bg-accent/5 border border-accent/20 rounded-3xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                The Previse Mortgage Relationship Doesn't End at Closing
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
                We know that loan servicing is often transferred after closing — that's standard across the 
                mortgage industry, whether you use a big bank or a broker. But your relationship with 
                Previse Mortgage doesn't transfer. Here's what you get for the life of your loan:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background/80 rounded-xl p-6 text-center">
                <Phone className="text-accent mx-auto mb-3" size={24} />
                <h4 className="font-bold text-foreground text-sm mb-2">Lifetime Loan Officer Access</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Questions about your mortgage after closing? Call or text Teddy or Raine directly — 
                  even years later. We remain your mortgage advisor for life, not just for the transaction.
                </p>
              </div>
              <div className="bg-background/80 rounded-xl p-6 text-center">
                <FileCheck className="text-accent mx-auto mb-3" size={24} />
                <h4 className="font-bold text-foreground text-sm mb-2">Annual Rate & Equity Reviews</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  We proactively reach out when market conditions create refinancing opportunities or 
                  when your equity position opens new options — so you always know where you stand.
                </p>
              </div>
              <div className="bg-background/80 rounded-xl p-6 text-center">
                <ArrowRight className="text-accent mx-auto mb-3" size={24} />
                <h4 className="font-bold text-foreground text-sm mb-2">Referral & Repeat Client Priority</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  When you're ready for your next purchase, investment property, or refinance, past clients 
                  get priority processing and loyalty pricing. Your history with us makes future deals smoother.
                </p>
              </div>
            </div>
          </div>

          {/* Client Success Stories */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              What Our Clients Say About Previse Mortgage
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              Real experiences from recent Previse Mortgage clients — because actions speak louder than promises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                quote: "I was terrified of making a mistake on my first home. Teddy didn't rush me — he spent an hour walking through FHA vs conventional with my actual numbers, explained mortgage insurance, and honestly told me to wait two months to save more. When I was ready, he guided me through every line of the closing disclosure. No surprises, clear fees, honest explanations.",
                name: "Recent Client",
                type: "First-Time Homebuyer",
                highlight: "No Surprises, Clear Fees"
              },
              {
                quote: "What stood out was the complete lack of pressure — and the transparency. Before I even applied, Teddy showed me three scenarios side by side with all fees itemized. He explained which costs were his, which were third-party, and which could change. When I brought a competing Loan Estimate, he welcomed the comparison and walked me through it line by line.",
                name: "Recent Client", 
                type: "Self-Employed Borrower",
                highlight: "Honest Fee Transparency"
              },
              {
                quote: "Six months after closing, Teddy called to let me know rates had dropped and a refi could save me $200/month. No other lender has ever followed up like that. Between the Planning Session, the closing walkthrough, and the post-closing check-ins, Previse feels like having a mortgage strategist on call for life.",
                name: "Recent Client",
                type: "Repeat Client & Investor",
                highlight: "Lifetime Mortgage Strategist"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background border border-border rounded-2xl p-6 flex flex-col">
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {testimonial.highlight}
                  </span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="text-accent fill-accent" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic flex-grow mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-3">
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Review CTA */}
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Had a Great Experience with Previse Mortgage?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your feedback helps other families find the right mortgage partner. Share your experience 
              and help us continue improving our service.
            </p>
            <a 
              href="https://share.google/Qb66UAgJXHgDTVqBk"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
            >
              <Star size={18} />
              Leave a Google Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;