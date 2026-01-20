const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <div className="relative group flex-shrink-0">
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
                <img 
                  src="/lovable-uploads/db4b2cd8-b7e7-45fa-a676-5be234dd4750.png" 
                  alt="Teddy Carbone - Previse Mortgage Loan Officer"
                  className="rounded-xl shadow-xl w-40 h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="160"
                  height="160"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                About
              </span>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mt-3 mb-4">
                Your Partner in <span className="text-accent">Home Financing</span>
              </h2>
              <p className="text-white/90 leading-relaxed">
                <span className="text-accent font-semibold">Teddy Carbone</span>, founder of Previse Mortgage, has 10+ years in finance 
                and is dedicated to hassle-free honest mortgage advice. Experience modern lending 
                with personalized guidance every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;