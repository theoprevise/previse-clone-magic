import { useEffect, useState } from 'react';

// Inject CSS immediately to hide GHL button before it renders
const hideStyle = document.createElement('style');
hideStyle.id = 'ghl-hide-button';
hideStyle.textContent = `
  .lc_text-widget--bubble,
  [class*="chat-widget-button"],
  .lc_text-widget-button {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
`;
if (!document.getElementById('ghl-hide-button')) {
  document.head.appendChild(hideStyle);
}

const GoHighLevelChat = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[data-widget-id="694202b4cd151717b26384fb"]')) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '694202b4cd151717b26384fb');
    script.async = true;
    
    script.onload = () => {
      setIsLoaded(true);
    };

    document.body.appendChild(script);

    // MutationObserver to keep the button hidden even after late DOM injection
    const observer = new MutationObserver(() => {
      const btn = document.querySelector<HTMLElement>(
        '.lc_text-widget--bubble, [class*="chat-widget-button"], .lc_text-widget-button'
      );
      if (btn) {
        btn.style.setProperty('display', 'none', 'important');
        btn.style.setProperty('visibility', 'hidden', 'important');
        btn.style.setProperty('pointer-events', 'none', 'important');
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Add custom animation styles for the chat widget
  useEffect(() => {
    if (!isLoaded) return;

    const style = document.createElement('style');
    style.id = 'ghl-chat-animations';
    style.textContent = `
      /* Hide the native GHL floating button — we use ChatGate instead */
      [class*="chat-widget-button"],
      .lc_text-widget-button {
        display: none !important;
        pointer-events: none !important;
      }

      /* Animation for GoHighLevel chat widget panel */
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
