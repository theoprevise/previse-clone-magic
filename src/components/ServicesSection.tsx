import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, Building, TrendingUp, Calculator, FileText } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Purchase Loans",
      description: "First-time homebuyers and move-up buyers can choose from conventional, FHA, VA, and USDA loan programs.",
      features: ["Down payments as low as 3%", "Competitive interest rates", "First-time buyer programs", "Expert guidance"]
    },
    {
      icon: RefreshCw,
      title: "Refinancing",
      description: "Lower your monthly payment, reduce your interest rate, or tap into your home's equity with cash-out refinancing.",
      features: ["Rate & term refinancing", "Cash-out refinancing", "Streamline refinancing", "No closing cost options"]
    },
    {
      icon: Building,
      title: "Investment Properties",
      description: "Expand your real estate portfolio with financing options specifically designed for investment properties.",
      features: ["Up to 4 units", "DSCR loans available", "Portfolio lending", "Competitive investor rates"]
    },
    {
      icon: TrendingUp,
      title: "Jumbo Loans",
      description: "Financing for luxury homes and high-value properties that exceed conventional loan limits.",
      features: ["Loan amounts up to $3M+", "Flexible down payments", "Competitive jumbo rates", "Fast approvals"]
    },
    {
      icon: Calculator,
      title: "Construction Loans",
      description: "Build your dream home with our construction-to-permanent loan programs and lot loans.",
      features: ["One-time close loans", "Interest-only payments", "Custom home builds", "Lot purchase financing"]
    },
    {
      icon: FileText,
      title: "Bank Statement Loans",
      description: "Alternative documentation loans for self-employed borrowers and business owners.",
      features: ["12-24 month bank statements", "Self-employed friendly", "Asset-based qualifying", "Flexible income verification"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl font-bold text-primary mt-2 mb-6">
            Comprehensive Mortgage Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From first-time homebuyers to seasoned investors, we offer a complete range of 
            mortgage products to meet your unique financing needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-white border-border">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Not sure which loan is right for you?
          </h3>
          <p className="text-muted-foreground mb-8">
            Let's discuss your goals and find the perfect mortgage solution for your situation.
          </p>
          <Button size="lg" variant="hero">
            Get Personalized Recommendation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;