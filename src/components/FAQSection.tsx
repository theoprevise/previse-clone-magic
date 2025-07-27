import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      icon: "🏛️",
      question: "What types of home loans do you offer?"
    },
    {
      icon: "💳",
      question: "Will applying for a mortgage affect my credit score?"
    },
    {
      icon: "📊",
      question: "How much do I need for a down payment?"
    },
    {
      icon: "💼",
      question: "How do I get pre-approved for a mortgage?"
    },
    {
      icon: "⏰",
      question: "How long does the mortgage process take?"
    },
    {
      icon: "💯",
      question: "What credit score do I need to qualify?"
    },
    {
      icon: "💭",
      question: "What's the difference between pre-qualification and pre-approval?"
    },
    {
      icon: "🏠",
      question: "Can I refinance my current mortgage?"
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-0.5 bg-accent mb-12"></div>
          
          <p className="text-white/90 mb-12">
            Please reach us at{" "}
            <a href="mailto:teddy@previsemortgage.com" className="text-accent hover:underline">
              teddy@previsemortgage.com
            </a>{" "}
            if you cannot find an answer to your question.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-primary border-border hover:bg-primary-light transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{faq.icon}</span>
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    </div>
                    <ChevronDown className="text-white" size={20} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;