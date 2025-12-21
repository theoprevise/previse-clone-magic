import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoFull from "@/assets/logo-full.png";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary/95 backdrop-blur-md border-b border-accent/20 shadow-lg">
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
              onClick={() => navigate('/mortgage-programs')}
              className="text-white/80 hover:text-accent transition-colors font-medium"
            >
              Loan Programs
            </button>
            <button 
              onClick={() => navigate('/first-time-homebuyer')}
              className="text-white/80 hover:text-accent transition-colors font-medium"
            >
              First-Time Buyers
            </button>
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => navigate('/mortgage-solutions')}
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
            <nav className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => {navigate('/mortgage-programs'); setIsMenuOpen(false);}}
                className="text-white/80 hover:text-accent transition-colors font-medium text-left py-2"
              >
                Loan Programs
              </button>
              <button 
                onClick={() => {navigate('/first-time-homebuyer'); setIsMenuOpen(false);}}
                className="text-white/80 hover:text-accent transition-colors font-medium text-left py-2"
              >
                First-Time Buyers
              </button>
              <Button 
                size="lg" 
                variant="hero"
                onClick={() => {navigate('/mortgage-solutions'); setIsMenuOpen(false);}}
                className="w-full font-semibold"
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
