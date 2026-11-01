import { useEffect, useState } from 'react';

const GoHighLevelChat = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src="https://beta.leadconnectorhq.com/loader.js"]')) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://beta.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '694202b4cd151717b26384fb');
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

  // The widget renders bottom-left inside its own shadow DOM; move it bottom-right
  // so it doesn't cover the floating Google reviews card.
  useEffect(() => {
    if (!isLoaded) return;
    const css = `
      #lc_text-widget, .lc_text-widget {
        left: auto !important;
        right: 20px !important;
        align-items: flex-end !important;
      }
    `;
    const apply = () => {
      const host = document.querySelector('chat-widget');
      const root = host?.shadowRoot;
      if (!root) return false;
      if (!root.getElementById('previse-chat-position')) {
        const style = document.createElement('style');
        style.id = 'previse-chat-position';
        style.textContent = css;
        root.appendChild(style);
      }
      return true;
    };
    if (apply()) return;
    const timer = setInterval(() => { if (apply()) clearInterval(timer); }, 500);
    const stop = setTimeout(() => clearInterval(timer), 20000);
    return () => { clearInterval(timer); clearTimeout(stop); };
  }, [isLoaded]);

  return null; // This component only loads the script, no visual output
};

export default GoHighLevelChat;
