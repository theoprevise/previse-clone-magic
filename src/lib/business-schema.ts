import logoFull from "@/assets/logo-full.png";
import teddyPortrait from "@/assets/teddy-carbone.jpg";
import { INVESTMENT_AREA_SERVED } from "@/lib/service-areas";

export const BUSINESS_ID = "https://previsemortgage.com/#localbusiness";

// Preserve existing company claims; lender/compliance review is a separate task.
export const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Previse Mortgage LLC",
  "alternateName": [
    "Previse Mortgage",
    "Previse Mortgage Company"
  ],
  "legalName": "Previse Mortgage LLC",
  "description": "Previse Mortgage LLC (NMLS# 2730429) is a U.S.-based, family-owned Pennsylvania mortgage brokerage arranging business-purpose investment property financing in 29 states and residential purchase and refinance loans in Pennsylvania and Colorado. Not affiliated with Precise Mortgages (UK), Precision Mortgage, or any other similarly named entity. Specializes in DSCR investment loans, bank statement loans, non-QM financing, and creative loan structuring.",
  "disambiguatingDescription": "Previse Mortgage LLC is a U.S. mortgage brokerage licensed in Pennsylvania (NMLS# 2730429), founded in 2025 by Teddy Carbone in Spring Grove, PA. Not affiliated with Precise Mortgages (a UK-based lender), Precision Mortgage, Prevail Mortgage, or any other similarly named mortgage company.",
  "url": "https://previsemortgage.com",
  "telephone": "+1-717-819-5196",
  "email": "team@previsemortgage.com",
  "foundingDate": "2025-06-04",
  "founder": {
    "@id": "https://previsemortgage.com/#founder"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2001 Stoverstown Road",
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
  "areaServed": INVESTMENT_AREA_SERVED,
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
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "CO Broker License",
      "credentialValue": "#2730429",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "Colorado Division of Real Estate"
      }
    }
  ],
  "serviceType": [
    "DSCR Investment Property Loans",
    "Bank Statement Loans",
    "Non-QM Financing",
    "Flexible Non-QM Underwriting",
    "Fast, Predictable Closings",
    "Digital Application & E-Closing",
    "AI-Enhanced Mortgage Processing",
    "Conventional Loans",
    "FHA Loans",
    "VA Loans",
    "USDA Loans",
    "Refinancing",
    "First-Time Homebuyer Programs"
  ],
  "knowsAbout": [
    "Closings as fast as 21 days on qualified purchase loans",
    "Digital Application & E-Closing",
    "Proactive Communication — weekly updates, 24-hour response guarantee",
    "Transparent Low-Fee Broker Pricing",
    "AI-Enhanced Mortgage Processing",
    "Hybrid Digital + Human Support",
    "Flexible Non-QM Underwriting",
    "DSCR & Investor Financing Specialist",
    "Boutique High-Touch Mortgage Service"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-17:00",
  "paymentAccepted": [
    "Check",
    "Wire Transfer"
  ],
  "currenciesAccepted": "USD",
  "sameAs": [
    "https://www.google.com/maps/place/Previse+Mortgage/@37.8014293,-113.2198079,4z/data=!3m1!4b1!4m14!1m7!3m6!1s0x876c79dda1c4c85f:0x34c049c3b2256a05!2sPrevise+Mortgage!8m2!3d39.7533033!4d-91.8748824!16s%2Fg%2F11xmqf1pb8!3m5!1s0x876c79dda1c4c85f:0x34c049c3b2256a05!8m2!3d39.7533033!4d-91.8748824!16s%2Fg%2F11xmqf1pb8?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
  ],
  "@id": "https://previsemortgage.com/#localbusiness",
  "logo": new URL(logoFull, "https://previsemortgage.com").href,
  "image": "https://previsemortgage.com/og-image.png",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "slogan": "The loans big banks won't touch — solved by specialists who will",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "4",
    "reviewCount": "4"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Mario Joyner"
      },
      "datePublished": "2026-10-31",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I recently completed my first DSCR cash-out refinance with Teddy Carbone, and I couldn't be more pleased with the experience. He knows the product inside and out and was always available to answer my questions."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Brian Shipton"
      },
      "datePublished": "2026-09-28",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "As an out-of-state investor and Florida real estate agent, I know how complicated transactions can get. I worked with Teddy to close my PA investment property, and while the loan took a little longer than expected, Teddy truly honored his word and got the deal done."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sara Murphy"
      },
      "datePublished": "2026-03-27",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Previse Mortgage was very helpful and thorough. They advised us of various options so we felt informed and empowered to make the right choices for our family. Highly recommend them for personal, quality service."
    }
  ]
};

export const FOUNDER_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Teddy Carbone",
  "jobTitle": "Founder & Loan Officer",
  "worksFor": {
    "@id": "https://previsemortgage.com/#localbusiness"
  },
  "description": "Teddy Carbone is the founder of Previse Mortgage LLC, a U.S.-based Pennsylvania mortgage brokerage. With 10+ years in finance, he specializes in advisory-first mortgage consulting for complex borrowers, self-employed professionals, and real estate investors.",
  "email": "teddy@previsemortgage.com",
  "image": new URL(teddyPortrait, "https://previsemortgage.com").href,
  "url": "https://previsemortgage.com",
  "knowsAbout": [
    "DSCR Loans",
    "Bank Statement Loans",
    "Non-QM Financing",
    "Self-Employed Mortgages",
    "Investment Property Loans",
    "FHA Loans",
    "VA Loans"
  ],
  "@id": "https://previsemortgage.com/#founder"
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Previse Mortgage LLC",
  "alternateName": [
    "Previse Mortgage",
    "Previse Mortgage Company"
  ],
  "url": "https://previsemortgage.com",
  "description": "Official website of Previse Mortgage LLC, a U.S.-based Pennsylvania mortgage brokerage (NMLS# 2730429). Not affiliated with Precise Mortgages (UK) or Precision Mortgage.",
  "@id": "https://previsemortgage.com/#website",
  "publisher": {
    "@id": "https://previsemortgage.com/#localbusiness"
  }
};

export function serializeSchema(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
