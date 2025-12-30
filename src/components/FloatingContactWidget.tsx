import { useState } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';

const FloatingContactWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Widget */}
      {isExpanded && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in w-80">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-dark p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Have Questions?</h3>
                  <p className="text-white/90 text-sm">We're here to help!</p>
                </div>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close contact widget"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-5">
            <p className="text-gray-700 mb-4 text-center font-medium">
              Call or text today
            </p>
            
            <a 
              href="tel:+17175770727"
              className="flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-primary font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mb-4 group"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span className="text-lg">(717) 577-0727</span>
            </a>
            
            {/* Disclaimer */}
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              By contacting us, you consent to receive calls and texts, including marketing, from Previse Mortgage. This consent is not a condition of purchase. Message and data rates may apply.
            </p>
          </div>
        </div>
      )}
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          w-16 h-16 rounded-full shadow-2xl flex items-center justify-center
          transition-all duration-300 transform hover:scale-110
          ${isExpanded 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent'
          }
        `}
        aria-label={isExpanded ? 'Close contact widget' : 'Open contact widget'}
      >
        {isExpanded ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-primary" />
        )}
      </button>
    </div>
  );
};

export default FloatingContactWidget;
