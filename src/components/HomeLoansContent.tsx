import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeLoansContent = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-accent/8 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              Mortgage Lending Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-6">
              Home <span className="text-accent">Loans</span> Tailored to Your Goals
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-accent-light to-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 text-white/90 leading-relaxed text-lg">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Finding the Right <span className="text-accent">Loan</span> for You
              </h3>
              <p>
                Your income, credit profile, down payment, and goals all shape which mortgage program fits best. Previse Mortgage matches Pennsylvania borrowers with competitive rates from 50+ wholesale lenders — whether you're buying your first home, refinancing, or growing an investment portfolio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/conventional-loans" className="hover:text-accent transition-colors">
                    Conventional Loans
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  The most popular option for borrowers with 620+ credit. Down payments from 3% — put 20% down to skip PMI. Flexible terms for primary residences and second homes.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/fha-loans" className="hover:text-accent transition-colors">
                    FHA Loans
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  Government-insured with just 3.5% down and credit scores from 580. Higher debt-to-income ratios allowed — ideal for first-time homebuyers seeking maximum purchasing power.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/va-loans" className="hover:text-accent transition-colors">
                    VA Loans
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  Zero down payment, no PMI, and some of the lowest rates available — exclusively for veterans, active-duty service members, and qualifying surviving spouses.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/usda-loans" className="hover:text-accent transition-colors">
                    USDA Loans
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  100% financing for eligible rural and suburban PA areas — no down payment required. Reduced mortgage insurance makes homeownership affordable for moderate-income households.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Investment &amp; Specialty <span className="text-accent">Financing</span>
              </h3>
              <p className="mb-3">
                <Link to="/dscr-loans" className="text-accent hover:text-accent-light transition-colors font-semibold">DSCR loans</Link> let investors qualify on rental income — no tax returns needed. Bank statement loans serve self-employed borrowers using 12–24 months of deposits instead of W-2s. Jumbo loans cover high-value properties up to $3M+.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                <Link to="/refinance" className="hover:text-accent transition-colors">
                  Refinance Your Mortgage
                </Link>
              </h3>
              <p>
                Lower your rate, reduce monthly payments, or tap into home equity with a cash-out refinance. Previse Mortgage can close refinance loans in as few as 15–30 days with clear, upfront pricing.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/pre-qualify"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Your Loan Options
                <ArrowRight size={20} />
              </Link>
              <p className="text-white/60 text-sm mt-4">
                Free consultation • No obligation • NMLS #2730429
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLoansContent;
