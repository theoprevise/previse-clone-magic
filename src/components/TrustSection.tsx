import { Star, Quote, CheckCircle } from "lucide-react";

const TrustSection = () => {
  const testimonials = [
    {
      quote: "Teddy made the entire process seamless. He anticipated every question I had before I even asked it. Highly recommend Previse Mortgage!",
      author: "Michael R.",
      role: "First-Time Homebuyer",
      rating: 5,
    },
    {
      quote: "As an investor, I needed a lender who understood DSCR loans. Previse delivered with fast closings and great communication.",
      author: "Sarah K.",
      role: "Real Estate Investor",
      rating: 5,
    },
    {
      quote: "The refinance process was quick and painless. Teddy kept me informed every step of the way. Professional and trustworthy.",
      author: "David L.",
      role: "Refinance Client",
      rating: 5,
    },
  ];

  const trustPoints = [
    "Licensed in Multiple States",
    "10+ Years Finance Experience",
    "Transparent, No-Pressure Process",
    "Fast Pre-Approvals",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
            Client Success
          </span>
          <h2 className="heading-section text-white mt-6 mb-4">
            Trusted by <span className="text-accent">Homeowners & Investors</span>
          </h2>
          <p className="text-body text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it — hear from clients who've experienced the Previse difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <Quote className="text-accent/40 mb-4" size={32} />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={18} />
                ))}
              </div>
              
              <p className="text-white/90 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-bold">{testimonial.author}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-accent" size={20} />
                </div>
                <span className="text-white font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
