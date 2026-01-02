import { Phone } from 'lucide-react';

const FloatingContactWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="tel:+17178195196"
        className="flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3 px-5 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <Phone className="w-5 h-5" />
        <div className="flex flex-col leading-tight">
          <span className="text-xs opacity-90">Questions? Call or text now</span>
          <span className="text-sm font-bold">(717) 819-5196</span>
        </div>
      </a>
    </div>
  );
};

export default FloatingContactWidget;
