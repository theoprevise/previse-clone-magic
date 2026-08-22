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
              Investment Lending Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 mb-6">
              Investment <span className="text-accent">Loans</span> Built Around Your Strategy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-accent-light to-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 text-white/90 leading-relaxed text-lg">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Financing the <span className="text-accent">Next Door</span> You Buy
              </h3>
              <p>
                Cash flow, entity structure, exit plan, and how fast you need to close all shape which investor program fits. Previse Mortgage matches Pennsylvania investors with rental, multifamily, and bridge financing from 50+ wholesale lenders — whether it's your first duplex or your twentieth unit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/dscr-loans" className="hover:text-accent transition-colors">
                    DSCR Rental Loans
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  Qualify on the property's rent instead of tax returns or DTI. Close in an LLC, finance an unlimited number of rentals, and keep your personal balance sheet uncluttered.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/investors" className="hover:text-accent transition-colors">
                    Multifamily &amp; Portfolio Loans
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  2-4 unit and small apartment financing, plus blanket loans that combine several rentals into one payment — useful when you're scaling faster than conventional limits allow.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/mortgage-programs" className="hover:text-accent transition-colors">
                    Fix &amp; Flip / Bridge
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  Purchase-plus-rehab capital with interest-only payments during the project, then a clean exit into a DSCR refinance or sale once the value-add work is done.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/mortgage-solutions" className="hover:text-accent transition-colors">
                    Bank Statement &amp; Non-QM
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  For investors whose returns show heavy depreciation or write-offs: 12-24 months of deposits, asset depletion, and other common-sense documentation paths.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Cash-Out <span className="text-accent">Refinance</span> to Fund the Next Deal
              </h3>
              <p>
                Turn trapped equity in a rental into the down payment for your next acquisition. We model the new payment, the resulting DSCR, and whether a single-property or blanket <Link to="/refinance" className="text-accent hover:text-accent-light transition-colors font-semibold">refinance</Link> nets more usable capital — with clear, upfront pricing.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Also Available: <span className="text-accent">Home Purchase &amp; Refinance</span>
              </h3>
              <p>
                Investors need somewhere to live too. We offer <Link to="/conventional-loans" className="text-accent hover:text-accent-light transition-colors font-semibold">conventional</Link>, <Link to="/fha-loans" className="text-accent hover:text-accent-light transition-colors font-semibold">FHA</Link>, <Link to="/va-loans" className="text-accent hover:text-accent-light transition-colors font-semibold">VA</Link>, and <Link to="/usda-loans" className="text-accent hover:text-accent-light transition-colors font-semibold">USDA</Link> loans for primary residences and second homes, along with rate-and-term refinances — including house-hacking strategies where you live in one unit and rent the rest.
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
