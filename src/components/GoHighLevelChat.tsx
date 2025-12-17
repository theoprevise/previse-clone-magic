import { useEffect, useState } from 'react';

const GoHighLevelChat = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[data-widget-id="6941fa334ca1821c63dd36d0"]')) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '6941fa334ca1821c63dd36d0');
    script.async = true;
    
    script.onload = () => {
      setIsLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      // Don't remove on cleanup to prevent re-loading issues
    };
  }, []);

  // Add custom animation styles for the chat widget
  useEffect(() => {
    if (!isLoaded) return;

    const style = document.createElement('style');
    style.id = 'ghl-chat-animations';
    style.textContent = `
      /* Animation for GoHighLevel chat widget */
      [class*="chat-widget-container"],
      [id*="chat-widget"],
      .lc_text-widget-container {
        animation: ghl-scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
        transform-origin: bottom right !important;
      }
      
      @keyframes ghl-scale-in {
        0% {
          opacity: 0;
          transform: scale(0.8) translateY(20px);
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
      
      /* Pulse animation for the chat button */
      [class*="chat-widget-button"],
      .lc_text-widget-button {
        transition: transform 0.2s ease, box-shadow 0.2s ease !important;
      }
      
      [class*="chat-widget-button"]:hover,
      .lc_text-widget-button:hover {
        transform: scale(1.1) !important;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
      }
    `;
    
    if (!document.getElementById('ghl-chat-animations')) {
      document.head.appendChild(style);
    }

    return () => {
      const existingStyle = document.getElementById('ghl-chat-animations');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [isLoaded]);

  return null; // This component only loads the script, no visual output
};

export default GoHighLevelChat;
