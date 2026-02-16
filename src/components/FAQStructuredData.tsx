import { useEffect } from 'react';

interface FAQItem {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
}

const FAQStructuredData = ({ faqs }: FAQStructuredDataProps) => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question || faq.q || "",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer || faq.a || ""
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [faqs]);

  return null;
};

export default FAQStructuredData;
