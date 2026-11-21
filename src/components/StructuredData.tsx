import { useEffect } from 'react';
import { INVESTMENT_AREA_SERVED } from '@/lib/service-areas';
import { BUSINESS_ID } from '@/lib/business-schema';

interface StructuredDataProps {
  type: 'organization' | 'faq' | 'service' | 'webpage' | 'loanOrCredit';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    let structuredData;

    switch (type) {
      case 'organization':
        // The root head owns the canonical business identity during SSR.
        return;

      case 'faq':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What types of home loans does Previse Mortgage offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Previse Mortgage offers comprehensive mortgage solutions including: Conventional loans (down payments as low as 3%), FHA loans (3.5% down), USDA loans (0% down for rural areas), jumbo loans (up to $3M+), DSCR investment property loans, bank statement loans for self-employed borrowers, and construction-to-permanent financing."
              }
            },
            {
              "@type": "Question", 
              "name": "Will applying for a mortgage affect my credit score?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, applying for a mortgage results in a hard credit inquiry which may temporarily lower your credit score by 2-5 points. However, multiple mortgage inquiries within a 14-45 day window are typically counted as a single inquiry for scoring purposes."
              }
            },
            {
              "@type": "Question",
              "name": "How much do I need for a down payment?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "Down payment requirements vary by loan type: USDA loans require 0% down, FHA loans require 3.5% minimum, conventional loans can be as low as 3% for first-time buyers, and jumbo loans typically require 10-20%."
              }
            },
            {
              "@type": "Question",
              "name": "How do I get pre-approved for a mortgage at Previse Mortgage?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Getting pre-approved involves submitting a complete mortgage application with supporting documentation including recent pay stubs, tax returns, bank statements, employment verification, and asset documentation. Pre-approval typically takes 24-48 hours."
              }
            },
            {
              "@type": "Question",
              "name": "How long does the mortgage process take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The typical mortgage process takes 30-45 days from application to closing. Previse Mortgage's advanced technology and local processing can often close purchase loans in 21-30 days and refinances in 15-30 days."
              }
            },
            {
              "@type": "Question",
              "name": "What credit score do I need to qualify?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Minimum credit score requirements depend on loan type: FHA loans accept scores as low as 580, USDA loans typically require 640+, conventional loans need 620+, and jumbo loans often require 700+."
              }
            }
          ]
        };
        break;

      case 'service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Business-Purpose Investment Property Financing",
          "provider": { "@id": BUSINESS_ID },
          "areaServed": INVESTMENT_AREA_SERVED,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Previse Mortgage Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Conventional Loans",
                  "description": "Traditional mortgage loans with competitive rates and flexible terms"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "FHA Loans",
                  "description": "Government-backed loans with low down payment options"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "VA Loans",
                  "description": "Zero down payment loans for eligible veterans and active military"
                }
              }
            ]
          }
        };
        break;

      case 'webpage':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data?.title || "Previse Mortgage - Professional Mortgage Services",
          "description": data?.description || "Investment property financing in 29 states, with residential purchase and refinance loans in Pennsylvania and Colorado.",
          "url": data?.url || "https://previsemortgage.com",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://previsemortgage.com"
              }
            ]
          },
          "mainEntity": { "@id": BUSINESS_ID }
        };
        break;

      case 'loanOrCredit':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "LoanOrCredit",
          "name": "Previse Mortgage Home Loans",
          "description": "Business-purpose investment property financing in 29 states, plus conventional, FHA, VA and USDA home loans in Pennsylvania and Colorado.",
          "provider": { "@id": BUSINESS_ID },
          "loanType": "Mortgage",
          "currency": "USD",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "4",
            "reviewCount": "4"
          }
        };
        break;
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
    return undefined;
  }, [type, data]);

  return null;
};

export default StructuredData;