import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import StructuredData from "./StructuredData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of investment property loans do you offer?",
      answer: "We specialize in DSCR loans for real estate investors, bank statement loans for self-employed borrowers, and traditional investment property financing. DSCR loans qualify based on rental income, not personal income."
    },
    {
      question: "What credit score do I need to qualify?",
      answer: "For most loan programs, we recommend a minimum credit score of 680+. DSCR loans typically require 680+, while conventional loans may accept 620+. Higher scores unlock better rates and terms."
    },
    {
      question: "What loan amounts do you work with?",
      answer: "We focus on loan amounts of $250,000 and above. This includes conventional loans, jumbo loans up to $3M+, and DSCR investment property loans for qualified borrowers."
    },
    {
      question: "How quickly can you close a loan?",
      answer: "Our technology-driven process enables fast closings: purchase loans in 21-30 days, refinances in 15-30 days. DSCR and investment loans may take 30-45 days depending on property complexity."
    },
    {
      question: "Can I refinance my investment property?",
      answer: "Yes! We offer rate-and-term refinancing, cash-out refinancing to access equity, and DSCR refinancing for rental properties. Refinancing can lower your rate or help you pull equity for additional investments."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <StructuredData type="faq" />
      <section id="faq" className="py-16 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
        {/* Minimal background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <HelpCircle className="text-accent" size={20} />
                <span className="text-accent text-sm font-bold uppercase tracking-wider">
                  FAQ
                </span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
                Common <span className="text-accent">Questions</span>
              </h2>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 mb-6">
              <p className="text-white/90 text-center text-sm">
                Questions? Email{" "}
                <a href="mailto:teddy@previsemortgage.com" className="text-accent hover:text-accent-light transition-colors font-semibold">
                  teddy@previsemortgage.com
                </a>
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <article key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 text-left focus:outline-none group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-white group-hover:text-accent transition-colors duration-300 pr-4">
                        {faq.question}
                      </h3>
                      <div className="text-accent flex-shrink-0">
                        {openIndex === index ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </div>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4 animate-fade-in">
                      <p className="text-white/80 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;