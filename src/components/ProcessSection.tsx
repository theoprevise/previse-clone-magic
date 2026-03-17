import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileSearch, Calculator, CheckCircle, Key, Clock, Zap, Timer, TrendingUp, Shield, Users, BarChart3, CalendarCheck } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileSearch,
      step: "01",
      title: "Digital Application",
      time: "Day 1",
      description: "Apply online in minutes. Upload documents through our secure portal — no branch visit needed.",
      details: ["Fully digital application", "Secure document upload", "E-disclosures & e-signatures", "Instant pre-qualification"]
    },
    {
      icon: Calculator,
      step: "02", 
      title: "AI-Enhanced Processing",
      time: "Days 1–3",
      description: "Automated income verification and intelligent document analysis pre-screen your file before human review.",
      details: ["Automated underwriting", "Digital income verification", "Early condition detection", "Transparent low-fee pricing"]
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Proactive Communication",
      time: "Days 3–14",
      description: "Weekly status check-ins, 24-hour response guarantee, and a personalized document roadmap — you never chase us.",
      details: ["Weekly loan officer updates", "24-hour response guarantee", "Same person start to finish", "No handoffs or call centers"]
    },
    {
      icon: Key,
      step: "04",
      title: "Clear-to-Close & E-Close",
      time: "Days 14–21",
      description: "Purchase closings as fast as 21 days. E-closing available. Complex files close on time because we front-load the hard work.",
      details: ["As fast as 21-day closings", "E-closing available", "Line-by-line CD walkthrough", "Keys to your new home!"]
    }
  ];

  const closingBenchmarks = [
    {
      scenario: "W-2 Purchase",
      target: "17–21 days",
      description: "Standard income, clean credit — our fastest path to closing",
      icon: Zap
    },
    {
      scenario: "Self-Employed Purchase",
      target: "21–28 days",
      description: "Bank statement or full-doc — front-loaded review eliminates late surprises",
      icon: Calculator
    },
    {
      scenario: "DSCR / Investor",
      target: "21–30 days",
      description: "Property-income qualification with no W-2 delays or DTI complications",
      icon: TrendingUp
    },
    {
      scenario: "Rate-and-Term Refi",
      target: "14–21 days",
      description: "Streamlined processing when property value and title are clear",
      icon: Timer
    }
  ];

  const agentProofPoints = [
    {
      icon: Shield,
      title: "Strengthen Buyer Offers",
      description: "A Previse pre-approval with a target closing timeline gives your buyer's offer a competitive edge. Listing agents trust specific timelines over vague promises."
    },
    {
      icon: CalendarCheck,
      title: "Predictable Timelines",
      description: "We front-load underwriting so appraisals and conditions surface in week one — not week three. Your contract dates hold because we've already done the hard work."
    },
    {
      icon: BarChart3,
      title: "Early Delay Flags",
      description: "AI pre-screening catches 90% of potential issues within 48 hours of application. When a delay risk emerges, you and your client know immediately — never at the last minute."
    },
    {
      icon: Users,
      title: "One Call, One Person",
      description: "No phone trees or 'I'll check with my processor.' Call Teddy or Raine directly for instant status. Your listing agent gets the same direct access."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
            Closings as Fast as 21 Days · Real Performance Data · Agent-Ready Proof Points
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-6">
            Fast <span className="text-accent">and</span> Thorough — Not One or the Other
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Other lenders promise speed but surprise you at the finish line. Previse Mortgage targets closings as fast as 21 days 
            <em> because</em> we front-load the hard work — not by skipping it. AI-enhanced processing catches 
            issues on day one so humans solve them before they become delays.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/15 rounded-full mb-4">
                      <step.icon className="text-accent" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Timeline badge */}
                  <div className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3">
                    <Clock size={12} />
                    {step.time}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed text-sm">{step.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/80">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Closing Benchmarks by Scenario */}
        <div className="bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 border-2 border-accent/30 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <BarChart3 className="text-accent" size={28} />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Closing Benchmarks — By Scenario
              </h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
              We publish specific closing targets for every loan type — not vague "fast closing" promises. 
              These benchmarks reflect real performance data, not marketing claims.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {closingBenchmarks.map((item, idx) => (
              <div key={idx} className="bg-background/90 border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="text-accent" size={24} />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">{item.scenario}</h4>
                <div className="text-2xl font-bold text-accent mb-2">{item.target}</div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-background/70 border border-accent/20 rounded-xl p-6 text-center">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mx-auto">
              <strong className="text-foreground">How we hit these numbers:</strong> AI pre-screening catches 
              conditions within 48 hours. Documents are reviewed and cleared before submission. Appraisals are 
              ordered on day one, not day ten. Every file gets a pre-underwriting review so the formal submission 
              is clean — not a first draft. <em>This is what "fast because thorough" means in practice.</em>
            </p>
          </div>
        </div>

        {/* Timestamped Case Studies */}
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-3">
            Real Timelines from Recent Closings
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto text-sm">
            Not hypotheticals — these are real closing timelines from actual Previse Mortgage transactions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                type: "W-2 Purchase — York County, PA",
                timeline: "Application to Keys: 18 Days",
                highlights: ["Pre-approval: Same day", "Appraisal ordered: Day 1", "Conditions cleared: Day 10", "Clear-to-close: Day 15", "Closing & keys: Day 18"],
                quote: "Our listing agent couldn't believe we closed three days early. Previse made the fastest, cleanest transaction I've experienced."
              },
              {
                type: "Self-Employed Purchase — Lancaster County, PA",
                timeline: "Application to Keys: 24 Days",
                highlights: ["Bank statement review: Day 1-2", "Program match from 50+ lenders: Day 3", "Appraisal + conditions: Day 5-14", "Clear-to-close: Day 19", "Closing & keys: Day 24"],
                quote: "Two banks declined me. Previse found the right program in 3 days and closed faster than the bank that turned me down promised they would."
              },
              {
                type: "DSCR Investment — Dauphin County, PA",
                timeline: "Application to Funded: 22 Days",
                highlights: ["DSCR analysis: Day 1", "Property cash flow verified: Day 3", "Appraisal rush ordered: Day 1", "Clear-to-close: Day 17", "Funded in LLC: Day 22"],
                quote: "I've closed 12 investment properties. This was my fastest and smoothest closing — and my first with no last-minute surprises."
              }
            ].map((study, idx) => (
              <div key={idx} className="bg-background/80 border border-border rounded-xl p-6">
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {study.type}
                  </span>
                </div>
                <div className="text-lg font-bold text-foreground mb-4">{study.timeline}</div>
                <ul className="space-y-2 mb-4">
                  {study.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="text-accent flex-shrink-0" size={14} />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-xs italic leading-relaxed border-t border-border pt-3">
                  "{study.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Agent-Facing Proof Points */}
        <div className="bg-accent/5 border border-accent/20 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              For Agents: Speed & Predictability That Wins Offers
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
              When your buyer's offer needs a lender that listing agents trust, Previse's specific 
              closing commitments and direct loan officer access give you a competitive edge.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {agentProofPoints.map((point, idx) => (
              <div key={idx} className="bg-background/80 border border-border rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <point.icon className="text-accent" size={24} />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-2">{point.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-background rounded-2xl p-8 shadow-soft max-w-4xl mx-auto border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Close Fast — Without the Stress?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you're a buyer on a tight timeline, an agent who needs a lender that performs, 
              or an investor who won't accept last-minute surprises — Previse Mortgage delivers 
              fast closings backed by thorough upfront work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero">
                Start My Application
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Planning Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;