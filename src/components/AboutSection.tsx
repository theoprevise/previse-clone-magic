const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              About Our Team
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-8">
            Who I Am
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent via-accent-light to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Modern image container with glass morphism */}
          <div className="relative mb-16 group">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
              <div className="relative max-w-sm mx-auto">
                <img 
                  src="/lovable-uploads/db4b2cd8-b7e7-45fa-a676-5be234dd4750.png" 
                  alt="Teddy Carbone - Previse Mortgage Loan Officer with 10+ years experience in Pennsylvania home financing and refinancing"
                  className="rounded-2xl shadow-2xl w-full group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="400"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Your trusted<br />
              <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                partner in home<br />
                financing
              </span>
            </h3>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
              <p className="text-xl text-white/90 leading-relaxed">
                <span className="text-accent font-semibold">Teddy Carbone</span>, founder of <span className="text-accent font-semibold">Previse Mortgage</span>, has 10+ years in finance 
                and is dedicated to hassle-free honest mortgage advice. Experience modern lending 
                with personalized guidance every step of the way.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
                  Why Choose Us
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-accent via-accent-light to-accent mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                  <h4 className="text-accent font-semibold text-lg mb-3">Fast Local Pre-Approvals</h4>
                  <p className="text-white/90 leading-relaxed">
                    Get locally managed pre-approvals quickly with personalized attention from someone who understands your market and community needs.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                  <h4 className="text-accent font-semibold text-lg mb-3">Transparent Service</h4>
                  <p className="text-white/90 leading-relaxed">
                    Clear communication throughout the process with no hidden fees or surprises. You'll always know exactly where you stand.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                  <h4 className="text-accent font-semibold text-lg mb-3">Strong Closing Record</h4>
                  <p className="text-white/90 leading-relaxed">
                    Proven track record of successful closings with attention to detail that ensures your home purchase goes smoothly.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                  <h4 className="text-accent font-semibold text-lg mb-3">Competitive Rates</h4>
                  <p className="text-white/90 leading-relaxed">
                    Access to competitive interest rates and loan programs designed to save you money over the life of your mortgage.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;