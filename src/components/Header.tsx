import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
              src="https://img1.wsimg.com/isteam/ip/bc7cebe9-b604-4d0e-9c6e-660ac5ced5e1/tmplacbura9.webp/:/rs=w:205,h:70,cg:true,m/cr=w:205,h:70/qt=q:95" 
              alt="Previse Mortgage" 
              className="h-12 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>


          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => navigate('/mortgage-solutions')}
              className="font-semibold"
            >
              Get Started
            </Button>
          </div>

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
            <nav className="flex flex-col space-y-4">
              <div className="px-4 pt-4">
                <Button 
                  size="lg" 
                  variant="hero"
                  onClick={() => {navigate('/mortgage-solutions'); setIsMenuOpen(false);}}
                  className="w-full font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;