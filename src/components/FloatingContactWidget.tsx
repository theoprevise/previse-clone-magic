import { Phone } from 'lucide-react';

const FloatingContactWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <a 
        href="tel:+17178195196"
        aria-label="Call or text (717) 819-5196"
        className="flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold p-4 md:py-3 md:px-5 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <Phone className="w-5 h-5" />
        {/* Phones show the icon only so the button doesn't cover the floating reviews card. */}
        <div className="hidden md:flex flex-col leading-tight">
          <span className="text-xs opacity-90">Questions? Call or text now</span>
          <span className="text-sm font-bold">(717) 819-5196</span>
        </div>
      </a>
    </div>
  );
};

export default FloatingContactWidget;
