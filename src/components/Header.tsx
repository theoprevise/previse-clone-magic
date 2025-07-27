import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Home button on the left */}
          <div className="flex items-center">
            <a href="#home" className="text-foreground hover:text-accent transition-colors border-b-2 border-accent pb-1 font-medium">
              Home
            </a>
          </div>
          
          {/* Centered company logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <img 
              src="https://img1.wsimg.com/isteam/ip/bc7cebe9-b604-4d0e-9c6e-660ac5ced5e1/tmplacbura9.webp/:/rs=w:205,h:70,cg:true,m/cr=w:205,h:70/qt=q:95" 
              alt="Previse Mortgage" 
              className="h-10"
            />
          </div>
          
          {/* About button on the right */}
          <nav className="hidden md:flex items-center">
            <a href="#about" className="text-foreground hover:text-accent transition-colors font-medium">About</a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden text-foreground">
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;