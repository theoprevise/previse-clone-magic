const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-8">
            Who I Am
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-12"></div>
        </div>
        
        <div className="max-w-md mx-auto mb-12">
          <img 
            src="/lovable-uploads/db4b2cd8-b7e7-45fa-a676-5be234dd4750.png" 
            alt="Teddy Carbone - Mortgage Professional"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-8">
            Your trusted<br />
            partner in home<br />
            financing
          </h3>
          
          <p className="text-lg text-white/90 leading-relaxed">
            Teddy Carbone has 10+ years in finance and is dedicated to hassle-free honest 
            mortgage advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;