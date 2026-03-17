import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileSearch, Calculator, CheckCircle, Key } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileSearch,
      step: "01",
      title: "Digital Application",
      description: "Apply online in minutes. Upload documents through our secure portal — no branch visit needed.",
      details: ["Fully digital application", "Secure document upload", "E-disclosures & e-signatures", "Instant pre-qualification"]
    },
    {
      icon: Calculator,
      step: "02", 
      title: "AI-Enhanced Processing",
      description: "Automated income verification and intelligent document analysis pre-screen your file before human review.",
      details: ["Automated underwriting", "Digital income verification", "Early condition detection", "Transparent low-fee pricing"]
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Proactive Communication",
      description: "Weekly status check-ins, 24-hour response guarantee, and a personalized document roadmap — you never chase us.",
      details: ["Weekly loan officer updates", "24-hour response guarantee", "Same person start to finish", "No handoffs or call centers"]
    },
    {
      icon: Key,
      step: "04",
      title: "Fast Closing & E-Close",
      description: "21-day closings on purchase loans. E-closing available. Complex files close on time because we front-load the hard work.",
      details: ["21-day closing target", "E-closing available", "Boutique high-touch service", "Keys to your new home!"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-lg">Our Process</span>
          <h2 className="text-4xl font-bold text-primary mt-2 mb-6">
            Simple Steps to Homeownership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined mortgage process is designed to be transparent, efficient, and stress-free. 
            Here's how we'll guide you from application to closing.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                      <step.icon className="text-primary" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground">
                        <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 z-10"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              The typical mortgage process takes 30-45 days, but we often close loans in as little as 15-21 days. 
              Let's start your journey to homeownership today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero">
                Start My Application
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;