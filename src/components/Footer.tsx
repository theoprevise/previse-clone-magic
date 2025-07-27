const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <a href="#home" className="text-white hover:text-accent transition-colors text-lg font-semibold">
              Home
            </a>
          </div>
          
          <div className="mb-8">
            <h3 className="text-white text-xl font-bold mb-2">Previse Mortgage</h3>
            <p className="text-white/80 mb-4">2001 Stoverstown Rd. York PA 17362</p>
            <p className="text-white/80">(717) 819-5196</p>
          </div>

          <div className="text-sm text-white/60 space-y-2">
            <p>Copyright © 2025 Previse Mortgage • All Rights Reserved.</p>
            <p>PA Broker #116558 NMLS | 2730429</p>
            <p>CO #100542483 | PA #115609</p>
          </div>
          
          <div className="mt-8 flex justify-end">
            <div className="text-white/60 text-sm">
              Powered by{" "}
              <span className="text-accent">GoDaddy Airo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;