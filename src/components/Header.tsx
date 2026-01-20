import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logoFull from "@/assets/logo-full.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const resourcesLinks = [
    { label: "First-Time Homebuyer Guide", path: "/first-time-homebuyer" },
    { label: "Free Homebuyer Guide Download", path: "/homebuyer-guide" },
    { label: "Blog", path: "/blog" },
    { label: "Credit Score & Approval Tips", path: "/credit-score-mortgage-tips" },
    { label: "How the Mortgage Process Works", path: "/how-the-mortgage-process-works" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-primary/95 backdrop-blur-md border-b border-accent/20 shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoFull} 
              alt="Previse Mortgage" 
              className="h-12 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>


          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => navigate('/investors')}
              className="text-white/80 hover:text-accent transition-colors font-medium"
            >
              Investor Loans
            </button>
            <button 
              onClick={() => navigate('/refinance')}
              className="text-white/80 hover:text-accent transition-colors font-medium"
            >
              Refinance
            </button>
            <button 
              onClick={() => navigate('/va-loans')}
              className="text-white/80 hover:text-accent transition-colors font-medium"
            >
              VA Loans
            </button>
            <button 
              onClick={() => navigate('/mortgage-calculator')}
              className="text-white/80 hover:text-accent transition-colors font-medium"
            >
              Calculators
            </button>
            
            {/* Resources Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="text-white/80 hover:text-accent transition-colors font-medium flex items-center gap-1"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-primary border border-accent/30 rounded-xl shadow-2xl shadow-accent/20 overflow-hidden z-50">
                  <div className="py-2">
                    {resourcesLinks.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          navigate(link.path);
                          setIsResourcesOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-white/80 hover:text-accent hover:bg-white/5 transition-colors font-medium text-sm"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button 
              size="lg" 
              variant="hero"
              onClick={() => navigate('/mortgage-programs')}
              className="font-semibold"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-primary/95 backdrop-blur-md border-t border-accent/20 py-4">
            <nav className="flex flex-col space-y-2 px-4">
              <button 
                onClick={() => {navigate('/investors'); setIsMenuOpen(false);}}
                className="text-white/80 hover:text-accent transition-colors font-medium text-left py-2"
              >
                Investor Loans
              </button>
              <button 
                onClick={() => {navigate('/refinance'); setIsMenuOpen(false);}}
                className="text-white/80 hover:text-accent transition-colors font-medium text-left py-2"
              >
                Refinance
              </button>
              <button 
                onClick={() => {navigate('/va-loans'); setIsMenuOpen(false);}}
                className="text-white/80 hover:text-accent transition-colors font-medium text-left py-2"
              >
                VA Loans
              </button>
              <button 
                onClick={() => {navigate('/mortgage-calculator'); setIsMenuOpen(false);}}
                className="text-white/80 hover:text-accent transition-colors font-medium text-left py-2"
              >
                Calculators
              </button>
              
              {/* Mobile Resources Dropdown */}
              <div className="border-t border-accent/20 pt-2 mt-2">
                <button 
                  onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                  className="text-white/80 hover:text-accent transition-colors font-medium text-left py-2 flex items-center justify-between w-full"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileResourcesOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {resourcesLinks.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          navigate(link.path);
                          setIsMenuOpen(false);
                          setIsMobileResourcesOpen(false);
                        }}
                        className="w-full text-left py-2 text-white/70 hover:text-accent transition-colors font-medium text-sm"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button 
                size="lg" 
                variant="hero"
                onClick={() => {navigate('/mortgage-programs'); setIsMenuOpen(false);}}
                className="w-full font-semibold mt-4"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
