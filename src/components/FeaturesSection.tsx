import { Handshake, Clock, TrendingUp } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-8">
            Your trusted partner in<br />
            home financing
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed">
              At Previse Mortgage, we're fast, flexible, and future ready. Mortgage 
              lending meets modern technology, so you get answers in minutes and 
              closings in days.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-8">
              <Handshake className="text-accent" size={60} strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Fast Closing</h3>
            <ul className="space-y-3 text-white/80 text-left max-w-xs mx-auto">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Timely coatings real-time view
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                AI-driven efficiency
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Fewer delays, more clarity
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-8">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-accent rounded-full flex items-center justify-center">
                  <span className="text-accent text-2xl font-bold">24</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-accent rounded-full"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Flexible Options</h3>
            <ul className="space-y-3 text-white/80 text-left max-w-xs mx-auto">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Traditional QM Financing
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Financing that fits your goals
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                DSCR, Bank Statement, Niche Loans
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-8">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent text-2xl font-bold">%</span>
                </div>
                <TrendingUp className="absolute -top-1 -left-1 text-accent" size={20} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Real-Time Updates</h3>
            <ul className="space-y-3 text-white/80 text-left max-w-xs mx-auto">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Track your loan via client portal
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Upload documents instantly
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Get automatic notifications, no surprises
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;