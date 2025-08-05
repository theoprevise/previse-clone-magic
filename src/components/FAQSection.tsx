import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      icon: "🏛️",
      question: "What types of home loans do you offer?",
      answer: "We offer comprehensive mortgage solutions including: Conventional loans (down payments as low as 3%), FHA loans (3.5% down), VA loans (0% down for eligible veterans), USDA loans (0% down for rural areas), jumbo loans (up to $3M+), DSCR investment property loans, bank statement loans for self-employed borrowers, and construction-to-permanent financing. Each loan type has specific requirements and benefits tailored to different borrower situations in the Wichita, Kansas area."
    },
    {
      icon: "💳",
      question: "Will applying for a mortgage affect my credit score?",
      answer: "Yes, applying for a mortgage results in a hard credit inquiry which may temporarily lower your credit score by 2-5 points. However, multiple mortgage inquiries within a 14-45 day window are typically counted as a single inquiry for scoring purposes. This minimal impact is temporary, and your score usually recovers within a few months. The benefits of getting pre-approved far outweigh the temporary score impact."
    },
    {
      icon: "📊",
      question: "How much do I need for a down payment?",
      answer: "Down payment requirements vary significantly by loan type: VA and USDA loans require 0% down, FHA loans require 3.5% minimum, conventional loans can be as low as 3% for first-time buyers or 5% for others, and jumbo loans typically require 10-20%. Additionally, you'll need funds for closing costs (2-5% of loan amount), which can sometimes be rolled into the loan or covered by seller concessions."
    },
    {
      icon: "💼",
      question: "How do I get pre-approved for a mortgage?",
      answer: "Getting pre-approved involves submitting a complete mortgage application with supporting documentation including: recent pay stubs (2-3 months), tax returns (2 years), bank statements (2 months), employment verification, and asset documentation. We review your credit, income, and debt-to-income ratio to determine your qualified loan amount. Pre-approval typically takes 24-48 hours and gives you a committed loan amount from the lender."
    },
    {
      icon: "⏰",
      question: "How long does the mortgage process take?",
      answer: "The typical mortgage process takes 30-45 days from application to closing in Wichita, Kansas. Our advanced technology and local processing can often close loans faster: purchase loans in 21-30 days, refinances in 15-30 days, and cash-out refinances in 30-45 days. Timeline factors include loan complexity, property type, appraisal scheduling, and borrower documentation completeness."
    },
    {
      icon: "💯",
      question: "What credit score do I need to qualify?",
      answer: "Minimum credit score requirements depend on loan type: FHA loans accept scores as low as 580 (or 500 with 10% down), VA loans have no official minimum but 580+ is preferred, USDA loans typically require 640+, conventional loans generally need 620+, and jumbo loans often require 700+. Lower scores may qualify with higher down payments or stronger compensating factors like high income or significant assets."
    },
    {
      icon: "💭",
      question: "What's the difference between pre-qualification and pre-approval?",
      answer: "Pre-qualification is an initial estimate based on basic information you provide without credit check or documentation verification - it gives you a rough idea of your potential loan amount. Pre-approval involves a comprehensive review including credit check, income verification, asset documentation, and full underwriting analysis, providing a committed loan amount from the lender. Pre-approval carries significantly more weight with sellers."
    },
    {
      icon: "🏠",
      question: "Can I refinance my current mortgage?",
      answer: "Yes, we offer several refinancing options in the Wichita area: Rate-and-term refinancing to lower your interest rate or change loan terms, cash-out refinancing to access home equity for improvements or debt consolidation, streamline refinancing for existing FHA/VA loans with minimal documentation, and no-closing-cost options where closing costs are built into the rate. Refinancing typically makes sense when rates drop by 0.5-1% or when you need to access equity."
    },
    {
      icon: "🌾",
      question: "Are there special programs for first-time homebuyers in Kansas?",
      answer: "Yes, Kansas offers several first-time homebuyer programs: Kansas Housing Resources Corporation (KHRC) provides down payment assistance grants up to $5,000, FHA loans with 3.5% down payment, VA loans for eligible veterans with 0% down, USDA loans for qualifying rural areas with 0% down, and conventional loans with as little as 3% down. Additionally, many local Wichita programs offer closing cost assistance and favorable interest rates."
    },
    {
      icon: "💰",
      question: "How much house can I afford in Wichita?",
      answer: "In Wichita, Kansas, your housing payment (including principal, interest, taxes, and insurance) should typically not exceed 28-31% of your gross monthly income. With the median home price in Wichita around $150,000-$200,000, a household income of $50,000-$60,000 can often qualify for a typical home purchase. Use our pre-approval process to determine your exact purchasing power based on your specific financial situation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden" itemScope itemType="https://schema.org/FAQPage">
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
              <article key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300" itemScope itemType="https://schema.org/Question">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left focus:outline-none group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {faq.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300" itemProp="name">
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
                  <div className="px-6 pb-6 animate-fade-in" itemScope itemType="https://schema.org/Answer">
                    <div className="pl-16 border-l-2 border-accent/30 ml-4">
                      <p className="text-white/90 leading-relaxed text-lg" itemProp="text">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;