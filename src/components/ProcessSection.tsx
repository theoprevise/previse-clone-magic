import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileSearch, Calculator, CheckCircle, Key, Clock, Zap, Timer, TrendingUp, BarChart3 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileSearch,
      step: "01",
      title: "Digital Application",
      time: "Day 1",
      description: "Apply online in minutes and upload documents securely — no branch visit needed."
    },
    {
      icon: Calculator,
      step: "02", 
      title: "AI-Enhanced Processing",
      time: "Days 1–3",
      description: "Automated verification and document analysis pre-screen your file before human review."
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Proactive Communication",
      time: "Days 3–14",
      description: "Weekly updates and a personalized roadmap keep you informed — you never chase us."
    },
    {
      icon: Key,
      step: "04",
      title: "Clear-to-Close & E-Close",
      time: "Days 14–21",
      description: "Purchase closings as fast as 21 days. E-closing available. Complex files close on time because we front-load the work."
    }
  ];

  const closingBenchmarks = [
    { scenario: "W-2 Purchase", target: "17–21 days", icon: Zap },
    { scenario: "Self-Employed Purchase", target: "21–28 days", icon: Calculator },
    { scenario: "DSCR / Investor", target: "21–30 days", icon: TrendingUp },
    { scenario: "Rate-and-Term Refi", target: "14–21 days", icon: Timer }
  ];

  return (
    <section id="process" className="py-12 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
            Closings as Fast as 21 Days
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-5 mb-4">
            Fast <span className="text-accent">and</span> Thorough
          </h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed">
            We target closings as fast as 21 days because we front-load the hard work — not by skipping it.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid lg:grid-cols-4 gap-5 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-5 text-center">
                  <div className="relative mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/15 rounded-full mb-3">
                      <step.icon className="text-accent" size={28} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-2">
                    <Clock size={12} />
                    {step.time}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Closing Benchmarks */}
        <div className="bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-6 mb-10">
          <div className="flex items-center justify-center gap-2 mb-5">
            <BarChart3 className="text-accent" size={24} />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Closing Benchmarks — By Scenario
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {closingBenchmarks.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <item.icon className="text-accent" size={20} />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{item.scenario}</h4>
                <div className="text-xl font-bold text-accent mb-1">{item.target}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to Close Fast — Without the Stress?
            </h3>
            <p className="text-white/70 text-sm mb-5">
              Whether you're buying, refinancing, or investing — Previse Mortgage delivers fast closings backed by thorough upfront work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg shadow-accent/25">
                Start My Application
              </Button>
              <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
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
