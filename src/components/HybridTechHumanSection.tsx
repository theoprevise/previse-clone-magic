import { Cpu, User, Zap, ShieldCheck, MessageSquare, Smartphone, Bell, Upload, ArrowRight } from "lucide-react";

const HybridTechHumanSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              AI Speed · Human Guidance · One Dedicated Advisor
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-6 mb-6">
              The Best of <span className="text-accent">Technology</span> + a Real Person Who Knows Your Name
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              You shouldn't have to choose between a fast, digital experience and a real human advisor who 
              understands your situation. Previse Mortgage gives you both — and here's exactly how the division of labor works.
            </p>
          </div>

          {/* AI vs Human Division of Labor — Core Visual */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* What AI Does */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Cpu className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">What Technology Handles</h3>
                  <p className="text-muted-foreground text-xs">Speed, accuracy, fewer errors</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Automated Underwriting", desc: "AI pre-screens your file in minutes — catching conditions and issues that would take humans hours to find" },
                  { title: "Digital Income Verification", desc: "Instant bank and employment verification eliminates manual document chasing and reduces errors" },
                  { title: "Smart Document Analysis", desc: "Intelligent scanning identifies missing pages, inconsistencies, and potential issues before your file reaches underwriting" },
                  { title: "Real-Time Status Portal", desc: "Track your loan 24/7 — see exactly where you are, what's needed, and what's next, from any device" },
                  { title: "Secure Document Upload", desc: "Upload pay stubs, bank statements, and tax returns from your phone — no faxing, no branch visits, no printing" },
                  { title: "Automated Rate Monitoring", desc: "Our systems watch rates continuously and alert your loan officer when a float-down or lock opportunity arises" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Zap className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="font-semibold text-foreground text-sm">{item.title}</span>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Your Human Advisor Does */}
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <User className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">What Your Advisor Handles</h3>
                  <p className="text-muted-foreground text-xs">Strategy, education, reassurance</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  { title: "Scenario Strategy & Education", desc: "Teddy or Raine walks you through loan options, trade-offs, and what-ifs — real numbers, not generic advice" },
                  { title: "Complex File Navigation", desc: "When your situation is non-standard (self-employed, investor, credit events), a human matches you to the right program from 50+ lenders" },
                  { title: "Closing Disclosure Walkthrough", desc: "Before you sign, your advisor reviews every line of your closing docs with you — explaining fees, changes, and what to expect" },
                  { title: "Emotional Reassurance", desc: "Buying a home is stressful. Your advisor is a text or call away for questions, nerves, or just a status check when you need to hear a real voice" },
                  { title: "Post-Closing Relationship", desc: "Annual rate reviews, refi strategy, equity check-ins — your advisor stays your advisor for life, not just the transaction" },
                  { title: "One Point of Contact — Always", desc: "You'll never be passed between departments. Same person from first call to closing table to 5-year refi check-in" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="text-accent flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <span className="font-semibold text-foreground text-sm">{item.title}</span>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How It Feels — Mini UX walkthrough */}
          <div className="bg-foreground/5 border border-border rounded-3xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-3">
              How It Feels: A Borrower's Journey at Previse
            </h3>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto text-sm">
              Here's what a first-time homebuyer or tech-savvy borrower actually experiences — 
              no chatbot runarounds, no voicemail trees, no repeating your story.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                {
                  icon: Smartphone,
                  step: "1",
                  title: "Apply from Your Phone",
                  desc: "Complete your application in 10 minutes. Upload docs by snapping a photo. Get an instant pre-qualification."
                },
                {
                  icon: Bell,
                  step: "2",
                  title: "AI Pre-Screens Your File",
                  desc: "Automated systems verify income, flag missing docs, and run preliminary underwriting — all before your advisor reviews."
                },
                {
                  icon: MessageSquare,
                  step: "3",
                  title: "Your Advisor Calls You",
                  desc: "Teddy or Raine reviews the AI findings, explains your options in a Planning Session, and builds your personalized loan strategy."
                },
                {
                  icon: Upload,
                  step: "4",
                  title: "Track & Close Digitally",
                  desc: "Monitor progress in real-time. Get weekly updates from your advisor. E-sign disclosures. Close with confidence — as fast as 21 days."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-background/80 border border-border rounded-xl p-5 text-center relative">
                  <div className="absolute -top-3 -right-2 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {item.step}
                  </div>
                  <item.icon className="text-accent mx-auto mb-3" size={24} />
                  <h4 className="font-bold text-foreground text-sm mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Concerns addressed */}
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
            <h4 className="font-bold text-foreground text-center mb-6 text-lg">
              Common Concerns — Addressed Directly
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  q: "Will I just talk to a chatbot?",
                  a: "No. AI handles data processing behind the scenes. Every conversation, call, and strategy session is with Teddy or Raine directly. You'll have their cell phone numbers."
                },
                {
                  q: "Will I be passed between people?",
                  a: "Never. One dedicated loan officer from first call to closing table. No handoffs, no departments, no ticket systems. Your advisor is your advisor — period."
                },
                {
                  q: "Is AI making my lending decision?",
                  a: "No. AI pre-screens and accelerates processing. Every lending decision, scenario recommendation, and program selection is made by your human advisor based on your unique situation."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-background/80 border border-border rounded-xl p-5">
                  <h5 className="font-bold text-foreground text-sm mb-2 flex items-start gap-2">
                    <MessageSquare className="text-accent flex-shrink-0 mt-0.5" size={16} />
                    "{item.q}"
                  </h5>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridTechHumanSection;