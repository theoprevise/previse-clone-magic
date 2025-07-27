import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      icon: "🏛️",
      question: "What types of home loans do you offer?",
      answer: "We offer a comprehensive range of loan products including Conventional loans, FHA loans, VA loans, USDA loans, Jumbo loans, DSCR loans, Bank Statement loans, and Construction loans. Each program is designed to meet different financial situations and homeownership goals."
    },
    {
      icon: "💳",
      question: "Will applying for a mortgage affect my credit score?",
      answer: "A mortgage pre-qualification involves a soft credit check that won't affect your credit score. However, when you formally apply for a mortgage, we'll perform a hard credit inquiry, which may temporarily lower your score by a few points. Multiple mortgage inquiries within a 14-45 day window are typically counted as a single inquiry."
    },
    {
      icon: "📊",
      question: "How much do I need for a down payment?",
      answer: "Down payment requirements vary by loan type. Conventional loans can be as low as 3%, FHA loans require 3.5%, VA and USDA loans offer 0% down options for qualified buyers, and Jumbo loans typically require 10-20%. We'll help you find the program that works best for your situation."
    },
    {
      icon: "💼",
      question: "How do I get pre-approved for a mortgage?",
      answer: "Getting pre-approved involves submitting a complete loan application with documentation of your income, assets, and debts. We'll verify your information and provide a pre-approval letter stating the loan amount you qualify for. This typically takes 1-3 business days and gives you a competitive advantage when making offers."
    },
    {
      icon: "⏰",
      question: "How long does the mortgage process take?",
      answer: "The typical mortgage process takes 30-45 days from application to closing. However, we often close loans in as little as 15-21 days with our streamlined process and advanced technology. Timeline depends on loan type, property type, and how quickly documentation is provided."
    },
    {
      icon: "💯",
      question: "What credit score do I need to qualify?",
      answer: "Credit score requirements vary by loan program. FHA loans can go as low as 580, VA loans typically require 620+, and conventional loans generally need 620+ for best rates. However, we work with borrowers across the credit spectrum and can often find solutions even for lower scores."
    },
    {
      icon: "💭",
      question: "What's the difference between pre-qualification and pre-approval?",
      answer: "Pre-qualification is an estimate based on basic financial information you provide, while pre-approval involves verifying your income, assets, and credit with documentation. Pre-approval carries more weight with sellers and gives you a better idea of your actual buying power."
    },
    {
      icon: "🏠",
      question: "Can I refinance my current mortgage?",
      answer: "Yes! We offer rate-and-term refinancing to lower your payment or shorten your loan term, and cash-out refinancing to access your home's equity. Refinancing can make sense when rates drop, your credit improves, or you need to access cash for home improvements or debt consolidation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              <Card key={index} className="bg-primary border-border hover:bg-primary-light transition-colors">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{faq.icon}</span>
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      </div>
                      {openIndex === index ? (
                        <ChevronUp className="text-accent" size={20} />
                      ) : (
                        <ChevronDown className="text-white" size={20} />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="pl-12">
                        <p className="text-white/90 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
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