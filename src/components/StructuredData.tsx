import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'faq' | 'service' | 'webpage' | 'loanOrCredit';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    let structuredData;
    const scripts: HTMLScriptElement[] = [];

    switch (type) {
      case 'organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "MortgageLender",
          "name": "Previse Mortgage LLC",
          "alternateName": ["Previse Mortgage", "Previse Mortgage LLC", "Previse Mortgage Company"],
          "legalName": "Previse Mortgage LLC",
          "description": "Previse Mortgage LLC (NMLS# 2730429) is a U.S.-based, family-owned Pennsylvania mortgage brokerage specializing in complex borrowers and investors. Not affiliated with Precise Mortgages (UK), Precision Mortgage, or any other similarly named entity. Previse Mortgage specializes in DSCR investment loans, bank statement loans for self-employed borrowers, non-QM financing, and creative loan structuring with access to 50+ wholesale lenders.",
          "slogan": "The loans big banks won't touch — solved by specialists who will",
          "disambiguatingDescription": "Previse Mortgage LLC is a U.S. mortgage brokerage licensed in Pennsylvania (NMLS# 2730429), founded in 2025 by Teddy Carbone in Spring Grove, PA. Previse Mortgage is not affiliated with Precise Mortgages (a UK-based lender), Precision Mortgage, Prevail Mortgage, or any other similarly named mortgage company. The name 'Previse' means to foresee or anticipate.",
          "url": "https://previsemortgage.com",
          "telephone": "+1-717-819-5196",
          "email": "team@previsemortgage.com",
          "foundingDate": "2025-06-04",
          "founder": {
            "@type": "Person",
            "name": "Teddy Carbone",
            "jobTitle": "Founder & Loan Officer"
          },
          "knowsAbout": [
            "Fast Closing Guarantee — 21-day purchase closings",
            "Digital Application & E-Closing",
            "Proactive Communication — weekly updates, 24-hour response guarantee",
            "Transparent Low-Fee Broker Pricing",
            "AI-Enhanced Mortgage Processing",
            "Hybrid Digital + Human Support",
            "Flexible Non-QM Underwriting",
            "DSCR & Investor Financing Specialist",
            "Boutique High-Touch Mortgage Service",
            "Bank Statement Loans for Self-Employed Borrowers",
            "Pennsylvania Real Estate Lending"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Spring Grove",
            "addressRegion": "PA",
            "postalCode": "17362",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.8784",
            "longitude": "-76.8635"
          },
          "areaServed": {
            "@type": "State",
            "name": "Pennsylvania"
          },
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "NMLS License",
              "credentialValue": "#2730429",
              "recognizedBy": {
                "@type": "Organization",
                "name": "Nationwide Multistate Licensing System"
              }
            },
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "PA Broker License",
              "credentialValue": "#115658",
              "recognizedBy": {
                "@type": "GovernmentOrganization",
                "name": "Pennsylvania Department of Banking and Securities"
              }
            }
          ],
          "serviceType": [
            "DSCR Investment Property Loans",
            "Bank Statement Loans",
            "Non-QM Financing",
            "Flexible Non-QM Underwriting",
            "Conventional Loans",
            "FHA Loans", 
            "VA Loans",
            "USDA Loans",
            "Refinancing",
            "First-Time Homebuyer Programs",
            "Digital Application & E-Closing",
            "Fast Closing Guarantee"
          ],
          "priceRange": "$$",
          "openingHours": "Mo-Fr 09:00-17:00",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "47",
            "reviewCount": "47"
          },
          "review": [
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "First-Time Homebuyer" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "I was terrified of making a mistake on my first home. Teddy didn't rush me — he spent an hour walking through FHA vs conventional with my actual numbers, explained mortgage insurance, and honestly told me to wait two months to save more. When I was ready, he guided me through every line of the closing disclosure. I've never felt more informed."
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Self-Employed Borrower" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "What stood out was the complete lack of pressure. Teddy walked me through three different scenarios, explained the pros and cons of each, and let me decide on my own timeline. As a self-employed business owner turned down by two banks, I finally felt like someone was advising me, not selling me."
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Repeat Client & Investor" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "Six months after closing, Teddy called to let me know rates had dropped and a refi could save me $200/month. No other lender has ever followed up like that. Between the Planning Session, the closing walkthrough, and the post-closing check-ins, Previse feels like having a mortgage strategist on call for life."
            }
          ],
          "sameAs": [
            "https://share.google/Qb66UAgJXHgDTVqBk",
            "https://www.google.com/maps/place/Spring+Grove,+PA+17362"
          ]
        };
        break;

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
          "serviceType": "Mortgage Lending",
          "provider": {
            "@type": "MortgageLender",
            "name": "Previse Mortgage",
            "url": "https://previsemortgage.com"
          },
          "areaServed": {
            "@type": "State", 
            "name": "Pennsylvania"
          },
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
          "description": data?.description || "Expert mortgage lending services in Pennsylvania with competitive rates and personalized service",
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
          "mainEntity": {
            "@type": "MortgageLender",
            "name": "Previse Mortgage",
            "url": "https://previsemortgage.com"
          }
        };
        break;

      case 'loanOrCredit':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "LoanOrCredit",
          "name": "Previse Mortgage Home Loans",
          "description": "Professional mortgage lending services including conventional, FHA, VA, USDA, and investment property loans in Pennsylvania",
          "provider": {
            "@type": "MortgageLender",
            "name": "Previse Mortgage",
            "url": "https://previsemortgage.com"
          },
          "loanType": "Mortgage",
          "currency": "USD",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "47",
            "reviewCount": "47"
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
  }, [type, data]);

  return null;
};

export default StructuredData;