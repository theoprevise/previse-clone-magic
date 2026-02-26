import { useEffect } from 'react';

const WIDGET_ID = '694202b4cd151717b26384fb';
const SCRIPT_ATTR = `script[data-widget-id="${WIDGET_ID}"]`;
const PHONE_KEY = 'previse_chat_phone';

declare global {
  interface Window {
    CHAT_WIDGET_PREFILL?: { phone: string };
    HL_CHAT_WIDGET?: {
      setData?: (data: { phone?: string; name?: string; email?: string }) => void;
      setContactInfo?: (data: { phone?: string; name?: string; email?: string }) => void;
    };
  }
}

const GoHighLevelChat = () => {
  useEffect(() => {
    const loadWidget = (phone?: string) => {
      // Set pre-fill global BEFORE the script loads so GHL reads it on init
      if (phone) {
        window.CHAT_WIDGET_PREFILL = { phone };
        localStorage.setItem(PHONE_KEY, phone);
      }

      if (document.querySelector(SCRIPT_ATTR)) {
        // Script already loaded — just open the panel & try to pass identity
        passPhoneToGHL(phone);
        openGHLPanel();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', WIDGET_ID);
      script.async = true;

      script.onload = () => {
        // Give the widget time to initialize, then pass identity + open
        setTimeout(() => {
          passPhoneToGHL(phone);
          openGHLPanel();
        }, 800);
      };

      document.body.appendChild(script);
    };

    const passPhoneToGHL = (phone?: string) => {
      const p = phone || localStorage.getItem(PHONE_KEY) || undefined;
      if (!p) return;
      // Try all known GHL identity APIs
      try { window.HL_CHAT_WIDGET?.setData?.({ phone: p }); } catch (_) {}
      try { window.HL_CHAT_WIDGET?.setContactInfo?.({ phone: p }); } catch (_) {}
    };

    const openGHLPanel = () => {
      const btn = document.querySelector<HTMLElement>('.lc_text-widget--bubble');
      if (btn) {
        btn.click();
      } else {
        // Retry a couple of times if bubble isn't rendered yet
        let tries = 0;
        const retry = setInterval(() => {
          tries++;
          const b = document.querySelector<HTMLElement>('.lc_text-widget--bubble');
          if (b) { b.click(); clearInterval(retry); }
          if (tries >= 10) clearInterval(retry);
        }, 300);
      }
    };

    // Return visit: script already loaded, load on mount and pass stored phone
    if (localStorage.getItem('previse_chat_unlocked') === 'true') {
      const storedPhone = localStorage.getItem(PHONE_KEY) || undefined;
      loadWidget(storedPhone);
    }

    const handleUnlock = (e: Event) => {
      const phone = (e as CustomEvent<{ phone: string }>).detail?.phone;
      loadWidget(phone);
    };

    window.addEventListener('previse:chat-unlocked', handleUnlock);
    return () => window.removeEventListener('previse:chat-unlocked', handleUnlock);
  }, []);

  return null;
};

export default GoHighLevelChat;
