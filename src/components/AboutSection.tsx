import teddyImage from '@/assets/teddy-carbone.jpg';
import raineImage from '@/assets/raine-valentine.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-accent text-sm font-bold uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
              Meet Our Team
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mt-3 mb-4">
              A Family-Owned <span className="text-accent">Mortgage Brokerage</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              At Previse Mortgage, we treat every client like family. Our dedicated team brings 
              experience, integrity, and a personal touch to every loan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Teddy */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300">
              <img 
                src={teddyImage} 
                alt="Teddy Carbone - Founder & Loan Officer at Previse Mortgage"
                className="rounded-xl shadow-xl w-32 h-32 object-cover mb-4 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="128"
                height="128"
              />
              <h3 className="text-xl font-bold text-white">Teddy Carbone</h3>
              <p className="text-accent font-medium text-sm mb-1">Founder & Loan Officer</p>
              <p className="text-white/60 text-xs mb-3">NMLS# 2723255 · Licensed in PA</p>
              <p className="text-white/80 text-sm leading-relaxed">
                With 10+ years in finance, Teddy founded Previse Mortgage to deliver 
                hassle-free, honest mortgage advice with modern technology.
              </p>
            </div>
            
            {/* Raine */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300">
              <img 
                src={raineImage} 
                alt="Raine Valentine - Loan Officer at Previse Mortgage"
                className="rounded-xl shadow-xl w-32 h-32 object-cover mb-4 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="128"
                height="128"
              />
              <h3 className="text-xl font-bold text-white">Raine Valentine</h3>
              <p className="text-accent font-medium text-sm mb-1">Loan Officer</p>
              <p className="text-white/60 text-xs mb-3">Licensed in PA</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Raine brings a personal, client-first approach to every transaction, 
                ensuring families feel supported throughout their entire mortgage journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;