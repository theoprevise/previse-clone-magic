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
    <section className="py-24 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-accent/6 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-accent/8 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                Support Center
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-8">
              Frequently Asked<br />
              <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-accent-light to-accent mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12">
            <p className="text-white/90 text-center text-lg">
              Please reach us at{" "}
              <a href="mailto:teddy@previsemortgage.com" className="text-accent hover:text-accent-light transition-colors duration-300 font-semibold">
                teddy@previsemortgage.com
              </a>{" "}
              if you cannot find an answer to your question.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left focus:outline-none group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {faq.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                      {openIndex === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pl-16 border-l-2 border-accent/30 ml-4">
                      <p className="text-white/90 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;