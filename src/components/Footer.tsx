const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-primary-dark to-primary py-16 border-t border-accent/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Logo section */}
          <div className="mb-12">
            <img 
              src="https://img1.wsimg.com/isteam/ip/bc7cebe9-b604-4d0e-9c6e-660ac5ced5e1/tmplacbura9.webp/:/rs=w:205,h:70,cg:true,m/cr=w:205,h:70/qt=q:95" 
              alt="Previse Mortgage" 
              className="h-16 mx-auto mb-8 hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Company info in modern card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Previse Mortgage</h3>
            <div className="space-y-2 text-white/80 text-lg">
              <p>2001 Stoverstown Rd. York PA 17362</p>
              <p className="text-accent font-semibold text-xl">(717) 819-5196</p>
            </div>
          </div>

          {/* Legal info */}
          <div className="space-y-3 text-white/60 text-sm max-w-3xl mx-auto">
            <p className="text-base font-medium">Copyright © 2025 Previse Mortgage • All Rights Reserved.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <span>PA Broker #116558 NMLS | 2730429</span>
              <span className="hidden sm:block">•</span>
              <span>CO #100542483 | PA #115609</span>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;