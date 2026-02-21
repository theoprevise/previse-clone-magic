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
                Understanding Your <span className="text-accent">Loan</span> Options
              </h3>
              <p className="mb-4">
                Choosing the right home loan is one of the most important financial decisions you'll make. At Previse Mortgage, we specialize in helping Pennsylvania borrowers navigate the wide range of loans available — from government-backed programs to conventional and specialty financing. Whether you're purchasing your first home, refinancing an existing mortgage, or expanding a real estate portfolio, understanding each loan type helps you make a confident, informed choice.
              </p>
              <p>
                Every borrower's situation is different. Your income, credit history, down payment savings, and long-term goals all influence which loans will offer the best terms. Our approach is to match you with the loan program that fits your unique financial profile, so you get competitive rates without unnecessary complexity.
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
                  Conventional loans remain the most popular choice for qualified borrowers. These loans aren't backed by a government agency, which often means more flexible terms and fewer restrictions. Down payments can start as low as 3% for first-time buyers, though putting down 20% eliminates private mortgage insurance. Conventional loans are ideal for borrowers with strong credit scores (620+) who want straightforward, predictable financing for a primary residence or second home.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/fha-loans" className="hover:text-accent transition-colors">
                    FHA Loans
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  FHA loans are government-insured mortgages designed to make homeownership accessible to a wider range of borrowers. With down payments as low as 3.5% and credit score requirements starting at 580, FHA loans are particularly popular among first-time homebuyers. These loans also allow higher debt-to-income ratios than conventional programs, giving buyers more purchasing power. FHA loans can be used for single-family homes, condos, and certain multi-unit properties.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/va-loans" className="hover:text-accent transition-colors">
                    VA Loans
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  VA loans offer exceptional benefits for eligible veterans, active-duty service members, and qualifying surviving spouses. The standout advantage of VA loans is the ability to purchase a home with zero down payment and no private mortgage insurance. VA loans typically feature some of the lowest interest rates available, and there is no maximum loan amount for borrowers with full entitlement. These loans represent one of the most powerful homeownership tools for those who have served.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  <Link to="/usda-loans" className="hover:text-accent transition-colors">
                    USDA Loans
                  </Link>
                </h3>
                <p className="text-white/80 text-base">
                  USDA loans provide 100% financing for homes in eligible rural and suburban areas across Pennsylvania. With no down payment requirement and reduced mortgage insurance costs, USDA loans make homeownership affordable for moderate-income households. Many areas that qualify as "rural" are actually thriving suburban communities just outside major cities, making these loans more accessible than most borrowers expect. Income limits apply, but they're generous enough to include many middle-class families.
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Investment Property <span className="text-accent">Loans</span> &amp; Specialty Financing
              </h3>
              <p className="mb-4">
                Beyond traditional home purchase loans, Previse Mortgage offers specialized financing for real estate investors and self-employed borrowers. Our <Link to="/dscr-loans" className="text-accent hover:text-accent-light transition-colors font-semibold">DSCR (Debt Service Coverage Ratio) loans</Link> allow investors to qualify based on the rental income a property generates rather than personal income or tax returns. This means you can scale your portfolio without the documentation hurdles that often slow down traditional lending.
              </p>
              <p className="mb-4">
                For self-employed professionals, bank statement loans offer an alternative to conventional income verification. Instead of W-2s and tax returns, qualification is based on 12-24 months of bank statements, making it easier for business owners, freelancers, and contractors to access competitive mortgage rates.
              </p>
              <p>
                We also offer jumbo loans for high-value properties exceeding conforming loan limits, with financing available up to $3 million and beyond. Whether you're purchasing a luxury home or a multi-unit investment property, our jumbo loan programs provide the flexibility and competitive pricing that high-net-worth borrowers expect.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                <Link to="/refinance" className="hover:text-accent transition-colors">
                  Refinancing Your Existing Loan
                </Link>
              </h3>
              <p className="mb-4">
                If you already have a mortgage, refinancing can help you take advantage of lower rates, reduce your monthly payment, or access the equity you've built. Rate-and-term refinancing replaces your current loan with a new one at better terms, while cash-out refinancing lets you borrow against your home equity for renovations, debt consolidation, or investment opportunities.
              </p>
              <p>
                Previse Mortgage's technology-driven process can close refinance loans in as few as 15-30 days. We analyze your current loan terms, compare them against today's rates, and present clear options so you can determine whether refinancing makes financial sense for your situation.
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
