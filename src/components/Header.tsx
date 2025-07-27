import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="text-accent text-2xl">🏛️</div>
              <h1 className="text-xl font-bold text-foreground tracking-wide">PREVISE</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors border-b-2 border-accent pb-1">Home</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
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