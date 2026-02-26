import { useEffect } from 'react';

const WIDGET_ID = '694202b4cd151717b26384fb';
const SCRIPT_ATTR = `script[data-widget-id="${WIDGET_ID}"]`;

// Listen for the gate unlock event, then load the script
const GoHighLevelChat = () => {
  useEffect(() => {
    const loadWidget = () => {
      if (document.querySelector(SCRIPT_ATTR)) return;

      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', WIDGET_ID);
      script.async = true;

      script.onload = () => {
        // Open the chat panel ~500ms after the widget renders
        setTimeout(() => {
          const btn = document.querySelector<HTMLElement>('.lc_text-widget--bubble');
          if (btn) btn.click();
        }, 600);
      };

      document.body.appendChild(script);
    };

    // If already unlocked from a previous session, load immediately
    if (localStorage.getItem('previse_chat_unlocked') === 'true') {
      loadWidget();
    }

    window.addEventListener('previse:chat-unlocked', loadWidget);
    return () => window.removeEventListener('previse:chat-unlocked', loadWidget);
  }, []);

  return null;
};

export default GoHighLevelChat;
