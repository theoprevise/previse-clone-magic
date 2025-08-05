import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Shield, TrendingUp, Home, RefreshCw, Building, CheckCircle, Phone, Calendar } from "lucide-react";

const ServicesAndFAQ = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: CheckCircle,
      headline: "Mortgage Pre-Approval",
      keyBenefits: [
        "Get approved in 24-48 hours",
        "Know your exact budget before house hunting",
        "Stronger offers that sellers accept",
        "Lock in rates early"
      ],
      proofOfTrust: "Local Wichita expertise with 15+ years serving Kansas homebuyers",
      nextStep: "Apply online in 10 minutes or schedule consultation"
    },
    {
      icon: RefreshCw,
      headline: "Refinancing Services",
      keyBenefits: [
        "Lower monthly payments",
        "Reduce interest rates",
        "Cash-out for home improvements",
        "No closing cost options available"
      ],
      proofOfTrust: "Successfully closed 500+ refinances in Wichita metro area",
      nextStep: "Get rate quote and savings analysis"
    },
    {
      icon: Home,
      headline: "First-Time Homebuyer Programs",
      keyBenefits: [
        "Down payments as low as 3%",
        "FHA, VA, USDA loan options",
        "First-time buyer grants available",
        "Step-by-step guidance throughout"
      ],
      proofOfTrust: "Helped 200+ first-time buyers in Wichita achieve homeownership",
      nextStep: "Schedule free homebuyer consultation"
    },
    {
      icon: Building,
      headline: "Investment Property Loans",
      keyBenefits: [
        "Finance up to 4 units",
        "DSCR loans for investors",
        "Portfolio lending options",
        "Competitive investor rates"
      ],
      proofOfTrust: "Local market knowledge of Kansas rental property values",
      nextStep: "Discuss investment strategy and loan options"
    },
    {
      icon: TrendingUp,
      headline: "Jumbo Loans",
      keyBenefits: [
        "Loans up to $3M+",
        "Luxury home financing",
        "Flexible down payment options",
        "Fast approval process"
      ],
      proofOfTrust: "Experienced with high-value properties in Wichita's premium neighborhoods",
      nextStep: "Get jumbo loan pre-qualification"
    },
    {
      icon: Shield,
      headline: "Construction Loans",
      keyBenefits: [
        "One-time close convenience",
        "Interest-only during construction",
        "Custom home financing",
        "Lot purchase options"
      ],
      proofOfTrust: "Worked with local Wichita builders for seamless construction financing",
      nextStep: "Review construction plans and timeline"
    }
  ];

  const faqs = [
    {
      question: "What documents do I need for pre-approval?",
      answer: "You'll need recent pay stubs (2-3 months), tax returns (2 years), bank statements (2 months), and employment verification. Self-employed borrowers need additional documentation including profit/loss statements."
    },
    {
      question: "How long does pre-approval take?",
      answer: "Most pre-approvals are completed within 24-48 hours. Complex cases or self-employed applicants may take 3-5 business days. Rush processing available for time-sensitive situations."
    },
    {
      question: "What credit score is needed for a mortgage?",
      answer: "Minimum credit scores vary by loan type: FHA loans start at 580, conventional loans typically require 620+, VA loans have no minimum but 580+ is preferred. Lower scores may qualify with higher down payments."
    },
    {
      question: "How much can I afford to borrow?",
      answer: "Generally, total monthly housing costs shouldn't exceed 28-31% of gross monthly income. Debt-to-income ratio should stay below 43-50% depending on loan program. Use our calculator for personalized estimates."
    },
    {
      question: "What's the difference between pre-qualification and pre-approval?",
      answer: "Pre-qualification is an estimate based on basic information. Pre-approval involves credit check, income verification, and full underwriting review, providing a committed loan amount from the lender."
    },
    {
      question: "Are there programs for first-time homebuyers in Kansas?",
      answer: "Yes, Kansas offers down payment assistance, USDA rural loans for qualifying areas, VA loans for veterans, and FHA loans with 3.5% down. Local Wichita programs may provide additional grants."
    },
    {
      question: "How much should I put down on a house?",
      answer: "Down payment requirements range from 0% (VA/USDA) to 20% (conventional). FHA requires 3.5%. Higher down payments reduce monthly costs and eliminate PMI at 20%. Consider cash reserves for closing costs."
    },
    {
      question: "Can I get pre-approved if I'm self-employed?",
      answer: "Yes, self-employed borrowers can qualify using bank statement loans, tax returns, or alternative documentation. Typically need 2 years of self-employment history and additional financial documentation for income verification."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 pt-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 text-foreground hover:bg-muted"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Mortgage Services & Common Questions
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Complete mortgage solutions with transparent answers to help you make informed decisions about your home financing.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Mortgage Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive mortgage solutions tailored to your specific needs and financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{service.headline}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.keyBenefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Local Expertise:</h4>
                    <p className="text-sm text-muted-foreground">{service.proofOfTrust}</p>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-foreground mb-2">Next Step:</h4>
                    <p className="text-sm text-muted-foreground mb-3">{service.nextStep}</p>
                    <Button size="sm" className="w-full">
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get answers to common mortgage questions before you apply. Our expert guidance helps you understand the process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized answers and expert guidance for your specific situation. 
              Schedule a consultation to discuss your mortgage needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="inline-flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button size="lg" variant="outline" className="inline-flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesAndFAQ;