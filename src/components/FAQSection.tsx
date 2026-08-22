import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import StructuredData from "./StructuredData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a DSCR loan and how do I qualify?",
      answer: "A DSCR (Debt Service Coverage Ratio) loan qualifies on the property's rental income rather than your personal income. We compare the market or in-place rent to the proposed payment (principal, interest, taxes, insurance, and any HOA dues). No W-2s, tax returns, or debt-to-income calculation is required. Qualifying ratios, credit minimums, and reserve requirements vary by lender and property type."
    },
    {
      question: "Can I close an investment property loan in my LLC?",
      answer: "Yes. Most of our investor programs allow title and the loan to be held in an LLC or other entity, usually with a personal guarantee. We help structure the entity documents up front so the closing isn't delayed by operating agreement or EIN issues."
    },
    {
      question: "How many rental properties can I finance with Previse?",
      answer: "Conventional financing typically caps you at ten financed properties. Our DSCR and portfolio programs have no such cap — investors regularly finance additional doors, and blanket loans can combine several rentals into a single loan with one payment."
    },
    {
      question: "Can I use short-term rental (Airbnb) income to qualify?",
      answer: "Often, yes. Several of our lenders will use short-term rental income documented through AirDNA projections or 12 months of platform statements. The market matters — some municipalities restrict short-term rentals — so we review local rules and lender appetite before you go under contract."
    },
    {
      question: "How much down payment do investment property loans require?",
      answer: "Plan on roughly 20-25% down for most DSCR and rental purchases, with pricing improving at lower loan-to-value. Rate-and-term or cash-out refinances on rentals generally allow up to 70-75% LTV. Exact terms depend on credit, property type, and DSCR coverage."
    },
    {
      question: "Can I pull cash out of a rental to buy the next property?",
      answer: "That's one of the most common reasons investors call us. A cash-out refinance on an existing rental converts trapped equity into a down payment for your next acquisition. We model the payment change, the resulting DSCR, and whether a blanket loan across several properties nets more usable capital."
    },
    {
      question: "How quickly can Previse close an investor loan?",
      answer: "We target closings as fast as 21 days, subject to file complexity, appraisal turn times, and third-party timelines. Investor files move faster here because we front-load entity documents, leases, and rent analysis instead of discovering them in underwriting."
    },
    {
      question: "Do you also handle primary residences and refinances?",
      answer: "Yes. Alongside our investor programs we offer conventional, FHA, VA, USDA, jumbo, and bank statement loans for primary homes and second homes, plus rate-and-term and cash-out refinances — all with broker pricing from 50+ wholesale lenders."
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
                  Common Questions from Real Estate Investors
                </span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
                Investor Financing, <span className="text-accent">Explained</span>
              </h2>
              <p className="text-white/70 text-sm max-w-xl mx-auto">
                The questions below are what investors actually ask before an acquisition — DSCR math, LLC closings,
                cash-out strategy, and timelines. We answer them the same way we would on a strategy call.
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