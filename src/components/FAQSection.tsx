import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import StructuredData from "./StructuredData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What happens in a Previse Planning Session?",
      answer: "A Previse Planning Session is a free, 30-minute education-focused consultation — not a sales call. We review your financial picture, walk through loan options side-by-side (FHA vs conventional, ARM vs fixed, points vs no points), discuss your 5-year life plan, and give you honest guidance — even if that means recommending you wait or use a different lender."
    },
    {
      question: "Should I choose FHA or conventional? How do I decide?",
      answer: "It depends on your credit score, down payment, and long-term plan. FHA loans accept lower credit scores (580+) with 3.5% down but carry mortgage insurance for the loan's life. Conventional loans require 620+ credit but let you drop MI at 80% equity. In your Planning Session, we run both scenarios with your real numbers so you can see the monthly payment, total cost, and break-even point clearly."
    },
    {
      question: "Will Previse Mortgage help me understand closing disclosures line by line?",
      answer: "Yes — that's core to our process. Before closing, we schedule an Underwriting Pre-Brief where we walk through every line of your Closing Disclosure, explain each fee, and answer every question. No surprises at the closing table."
    },
    {
      question: "What if I'm not sure I can afford to buy right now?",
      answer: "That's exactly what the Planning Session is for. We'll review your income, debts, savings, and goals to determine a comfortable budget — not just what you qualify for. If the honest answer is 'wait 6 months and save more,' we'll tell you that and help you build a plan to get there."
    },
    {
      question: "Does Previse Mortgage support me after closing?",
      answer: "Absolutely. Our After-Closing Care program includes lifetime loan officer access (call or text Teddy or Raine anytime), annual rate and equity reviews to identify refinancing opportunities, and priority processing for future purchases or investment properties. Your relationship with Previse doesn't end when the loan funds."
    },
    {
      question: "What types of loans does Previse Mortgage specialize in?",
      answer: "We specialize in complex borrower scenarios: DSCR investment property loans, bank statement loans for self-employed borrowers, non-QM financing, and creative loan structuring. We also offer conventional, FHA, VA, and USDA loans — all with broker-level pricing from 50+ wholesale lenders."
    },
    {
      question: "How quickly can Previse Mortgage close a loan?",
      answer: "We target closings as fast as 21 days on purchase loans, subject to file complexity and third-party timelines. We achieve this through AI-enhanced processing, digital application and e-closing, and front-loading the hard underwriting work. Complex files (DSCR, bank statement, non-QM) that would stall at big banks close on schedule because we identify issues early."
    },
    {
      question: "Is it better to pay points or accept a higher rate?",
      answer: "It depends on how long you plan to stay in the home. Points lower your rate but cost money upfront — the 'break-even' point is typically 3-5 years. In your Planning Session, we calculate the exact break-even for your scenario and align the decision with your life plan and timeline."
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
                  Common Questions from First-Time & Anxious Buyers
                </span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
                Answers That <span className="text-accent">Educate</span>, Not Sell
              </h2>
              <p className="text-white/70 text-sm max-w-xl mx-auto">
                The questions below reflect what real borrowers ask when they're nervous, unsure, or comparing options. 
                We answer them the same way we would in a Planning Session — honestly.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 mb-6">
              <p className="text-white/90 text-center text-sm">
                Have a question not listed here? Email{" "}
                <a href="mailto:team@previsemortgage.com" className="text-accent hover:text-accent-light transition-colors font-semibold">
                  team@previsemortgage.com
                </a>{" "}
                or{" "}
                <a href="#contact" className="text-accent hover:text-accent-light transition-colors font-semibold">
                  book a free Planning Session
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