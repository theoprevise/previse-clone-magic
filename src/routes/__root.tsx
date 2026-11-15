import { Outlet, Link, createRootRouteWithContext, HeadContent, Scripts, useRouter, useLocation } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import ScrollToTop from "@/components/ScrollToTop";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import CookieConsent from "@/components/CookieConsent";
import FloatingReviews from "@/components/FloatingReviews";
import NotFound from "@/pages/NotFound";

// Site-wide tracking, consent and structured-data scripts carried over from the old index.html.
const HEAD_SCRIPTS = [
  {
    "children": "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}\n      gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});\n      gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500,region:['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH','CA-QC']});\n      try{var c=JSON.parse(localStorage.getItem('cookie_consent')||'null');if(c&&c.version){var m=c.marketing?'granted':'denied';gtag('consent','update',{ad_storage:m,ad_user_data:m,ad_personalization:m,analytics_storage:c.analytics?'granted':'denied'});}}catch(e){}"
  },
  {
    "children": "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','GTM-5H7FFP2N');"
  },
  {
    "src": "https://www.googletagmanager.com/gtag/js?id=G-47FS1TSS0V",
    "async": true
  },
  {
    "children": "window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', 'G-47FS1TSS0V');\n      gtag('config', 'AW-17802839913');"
  },
  {
    "children": "!function(f,b,e,v,n,t,s)\n      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n      n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n      n.queue=[];t=b.createElement(e);t.async=!0;\n      t.src=v;s=b.getElementsByTagName(e)[0];\n      s.parentNode.insertBefore(t,s)}(window, document,'script',\n      'https://connect.facebook.net/en_US/fbevents.js');\n      fbq('init', '3304403989731026');\n      fbq('track', 'PageView');"
  },
  {
    "children": "!function(e){\"use strict\";var t=e&&e.namespace;if(t&&e.profileId&&e.cdn){var i=window[t];if(i&&Array.isArray(i)||(i=window[t]=[]),!i.initialized&&!i._loaded)if(i._loaded)console&&console.warn(\"[Radar] Duplicate initialization attempted\");else{i._loaded=!0;[\"track\",\"page\",\"identify\",\"group\",\"alias\",\"ready\",\"debug\",\"on\",\"off\",\"once\",\"trackClick\",\"trackSubmit\",\"trackLink\",\"trackForm\",\"pageview\",\"screen\",\"reset\",\"register\",\"setAnonymousId\",\"addSourceMiddleware\",\"addIntegrationMiddleware\",\"addDestinationMiddleware\",\"giveCookieConsent\"].forEach((function(e){var a;i[e]=(a=e,function(){var e=window[t];if(e.initialized)return e[a].apply(e,arguments);var i=[].slice.call(arguments);return i.unshift(a),e.push(i),e})})),-1===e.apiEndpoint.indexOf(\"http\")&&(e.apiEndpoint=\"https://\"+e.apiEndpoint),i.bootstrap=function(){var t,i=document.createElement(\"script\");i.async=!0,i.type=\"text/javascript\",i.id=\"__radar__\",i.setAttribute(\"data-settings\",JSON.stringify(e)),i.src=[-1!==(t=e.cdn).indexOf(\"http\")?\"\":\"https://\",t,\"/releases/latest/radar.min.js\"].join(\"\");var a=document.scripts[0];a.parentNode.insertBefore(i,a)},i.bootstrap()}}else\"undefined\"!=typeof console&&console.error(\"[Radar] Configuration incomplete\")}({\n      \"apiEndpoint\": \"radar.snitcher.com\",\n      \"cdn\": \"cdn.snitcher.com\",\n      \"namespace\": \"Snitcher\",\n      \"profileId\": \"s6JxJfJL4U\"\n    });"
  },
  {
    "children": "// Load non-critical tracking scripts after page load\n      window.addEventListener('load', function() {\n        setTimeout(function() {\n          // Leadsy AI Tracking\n          var leadsy = document.createElement('script');\n          leadsy.id = 'vtag-ai-js';\n          leadsy.async = true;\n          leadsy.src = 'https://r2.leadsy.ai/tag.js';\n          leadsy.dataset.pid = '16avQfsObm2EC3LC8';\n          leadsy.dataset.version = '062024';\n          document.head.appendChild(leadsy);\n          \n          // Previse Mortgage Tracking\n          var previse = document.createElement('script');\n          previse.async = true;\n          previse.src = 'https://link.previsemortgage.com/js/external-tracking.js';\n          previse.dataset.trackingId = 'tk_33ba4ae1f9d84ee7a0d401546bdf6e2e';\n          document.head.appendChild(previse);\n          \n          // RB2B Tracking\n          !function(key) {\n            if (window.reb2b) return;\n            window.reb2b = {loaded: true};\n            var s = document.createElement(\"script\");\n            s.async = true;\n            s.src = \"https://ddwl4m2hdecbv.cloudfront.net/b/\" + key + \"/\" + key + \".js.gz\";\n            document.getElementsByTagName(\"script\")[0].parentNode.insertBefore(s, document.getElementsByTagName(\"script\")[0]);\n          }(\"VN080HZ3LV6J\");\n        }, 2000); // 2 second delay after load\n      });"
  },
  {
    "type": "application/ld+json",
    "children": "{\"@context\": \"https://schema.org\", \"@type\": \"MortgageLender\", \"name\": \"Previse Mortgage LLC\", \"alternateName\": [\"Previse Mortgage\", \"Previse Mortgage Company\"], \"legalName\": \"Previse Mortgage LLC\", \"description\": \"Previse Mortgage LLC (NMLS# 2730429) is a U.S.-based, family-owned Pennsylvania mortgage brokerage arranging business-purpose investment property financing in 29 states and residential purchase and refinance loans in Pennsylvania and Colorado. Not affiliated with Precise Mortgages (UK), Precision Mortgage, or any other similarly named entity. Specializes in DSCR investment loans, bank statement loans, non-QM financing, and creative loan structuring.\", \"disambiguatingDescription\": \"Previse Mortgage LLC is a U.S. mortgage brokerage licensed in Pennsylvania (NMLS# 2730429), founded in 2025 by Teddy Carbone in Spring Grove, PA. Not affiliated with Precise Mortgages (a UK-based lender), Precision Mortgage, Prevail Mortgage, or any other similarly named mortgage company.\", \"url\": \"https://previsemortgage.com\", \"telephone\": \"+1-717-819-5196\", \"email\": \"team@previsemortgage.com\", \"foundingDate\": \"2025-06-04\", \"founder\": {\"@type\": \"Person\", \"name\": \"Teddy Carbone\", \"jobTitle\": \"Founder & Loan Officer\"}, \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"2001 Stoverstown Road\", \"addressLocality\": \"Spring Grove\", \"addressRegion\": \"PA\", \"postalCode\": \"17362\", \"addressCountry\": \"US\"}, \"geo\": {\"@type\": \"GeoCoordinates\", \"latitude\": \"39.8784\", \"longitude\": \"-76.8635\"}, \"areaServed\": [{\"@type\": \"State\", \"name\": \"Alabama\"}, {\"@type\": \"State\", \"name\": \"Arkansas\"}, {\"@type\": \"State\", \"name\": \"Colorado\"}, {\"@type\": \"State\", \"name\": \"Connecticut\"}, {\"@type\": \"State\", \"name\": \"Delaware\"}, {\"@type\": \"State\", \"name\": \"Florida\"}, {\"@type\": \"State\", \"name\": \"Georgia\"}, {\"@type\": \"State\", \"name\": \"Hawaii\"}, {\"@type\": \"State\", \"name\": \"Indiana\"}, {\"@type\": \"State\", \"name\": \"Kansas\"}, {\"@type\": \"State\", \"name\": \"Kentucky\"}, {\"@type\": \"State\", \"name\": \"Louisiana\"}, {\"@type\": \"State\", \"name\": \"Maine\"}, {\"@type\": \"State\", \"name\": \"Maryland\"}, {\"@type\": \"State\", \"name\": \"Mississippi\"}, {\"@type\": \"State\", \"name\": \"Missouri\"}, {\"@type\": \"State\", \"name\": \"New Hampshire\"}, {\"@type\": \"State\", \"name\": \"New Mexico\"}, {\"@type\": \"State\", \"name\": \"Ohio\"}, {\"@type\": \"State\", \"name\": \"Oklahoma\"}, {\"@type\": \"State\", \"name\": \"Pennsylvania\"}, {\"@type\": \"State\", \"name\": \"Rhode Island\"}, {\"@type\": \"State\", \"name\": \"South Carolina\"}, {\"@type\": \"State\", \"name\": \"Tennessee\"}, {\"@type\": \"State\", \"name\": \"Texas\"}, {\"@type\": \"State\", \"name\": \"Washington\"}, {\"@type\": \"State\", \"name\": \"West Virginia\"}, {\"@type\": \"State\", \"name\": \"Wisconsin\"}, {\"@type\": \"State\", \"name\": \"Wyoming\"}], \"hasCredential\": [{\"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"NMLS License\", \"credentialValue\": \"#2730429\", \"recognizedBy\": {\"@type\": \"Organization\", \"name\": \"Nationwide Multistate Licensing System\"}}, {\"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"PA Broker License\", \"credentialValue\": \"#115658\", \"recognizedBy\": {\"@type\": \"GovernmentOrganization\", \"name\": \"Pennsylvania Department of Banking and Securities\"}}, {\"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"CO Broker License\", \"credentialValue\": \"#2730429\", \"recognizedBy\": {\"@type\": \"GovernmentOrganization\", \"name\": \"Colorado Division of Real Estate\"}}], \"serviceType\": [\"DSCR Investment Property Loans\", \"Bank Statement Loans\", \"Non-QM Financing\", \"Flexible Non-QM Underwriting\", \"Fast, Predictable Closings\", \"Digital Application & E-Closing\", \"AI-Enhanced Mortgage Processing\", \"Conventional Loans\", \"FHA Loans\", \"VA Loans\", \"USDA Loans\", \"Refinancing\", \"First-Time Homebuyer Programs\"], \"knowsAbout\": [\"Closings as fast as 21 days on qualified purchase loans\", \"Digital Application & E-Closing\", \"Proactive Communication \\u2014 weekly updates, 24-hour response guarantee\", \"Transparent Low-Fee Broker Pricing\", \"AI-Enhanced Mortgage Processing\", \"Hybrid Digital + Human Support\", \"Flexible Non-QM Underwriting\", \"DSCR & Investor Financing Specialist\", \"Boutique High-Touch Mortgage Service\"], \"priceRange\": \"$$\", \"openingHours\": \"Mo-Fr 09:00-17:00\", \"paymentAccepted\": [\"Check\", \"Wire Transfer\"], \"currenciesAccepted\": \"USD\", \"sameAs\": [\"https://www.google.com/maps/place/Previse+Mortgage/@37.8014293,-113.2198079,4z/data=!3m1!4b1!4m14!1m7!3m6!1s0x876c79dda1c4c85f:0x34c049c3b2256a05!2sPrevise+Mortgage!8m2!3d39.7533033!4d-91.8748824!16s%2Fg%2F11xmqf1pb8!3m5!1s0x876c79dda1c4c85f:0x34c049c3b2256a05!8m2!3d39.7533033!4d-91.8748824!16s%2Fg%2F11xmqf1pb8?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D\"]}"
  },
  {
    "type": "application/ld+json",
    "children": "{\"@context\": \"https://schema.org\", \"@type\": \"Person\", \"name\": \"Teddy Carbone\", \"jobTitle\": \"Founder & Loan Officer\", \"worksFor\": {\"@type\": \"MortgageLender\", \"name\": \"Previse Mortgage LLC\", \"url\": \"https://previsemortgage.com\", \"disambiguatingDescription\": \"U.S.-based Pennsylvania mortgage brokerage (NMLS# 2730429). Not affiliated with Precise Mortgages (UK) or Precision Mortgage.\"}, \"description\": \"Teddy Carbone is the founder of Previse Mortgage LLC, a U.S.-based Pennsylvania mortgage brokerage. With 10+ years in finance, he specializes in advisory-first mortgage consulting for complex borrowers, self-employed professionals, and real estate investors.\", \"email\": \"teddy@previsemortgage.com\", \"image\": \"https://previsemortgage.com/og-image.png\", \"url\": \"https://previsemortgage.com\", \"knowsAbout\": [\"DSCR Loans\", \"Bank Statement Loans\", \"Non-QM Financing\", \"Self-Employed Mortgages\", \"Investment Property Loans\", \"FHA Loans\", \"VA Loans\"]}"
  },
  {
    "type": "application/ld+json",
    "children": "{\"@context\": \"https://schema.org\", \"@type\": \"WebSite\", \"name\": \"Previse Mortgage LLC\", \"alternateName\": [\"Previse Mortgage\", \"Previse Mortgage Company\"], \"url\": \"https://previsemortgage.com\", \"description\": \"Official website of Previse Mortgage LLC, a U.S.-based Pennsylvania mortgage brokerage (NMLS# 2730429). Not affiliated with Precise Mortgages (UK) or Precision Mortgage.\", \"potentialAction\": {\"@type\": \"SearchAction\", \"target\": \"https://previsemortgage.com/?s={search_term_string}\", \"query-input\": \"required name=search_term_string\"}}"
  },
  {
    "type": "application/ld+json",
    "children": "{\"@context\": \"https://schema.org\", \"@type\": \"LocalBusiness\", \"@id\": \"https://previsemortgage.com/#localbusiness\", \"name\": \"Previse Mortgage LLC\", \"alternateName\": [\"Previse Mortgage\", \"Previse Mortgage Company\"], \"legalName\": \"Previse Mortgage LLC\", \"description\": \"Previse Mortgage LLC is a U.S.-based, family-owned Pennsylvania mortgage brokerage arranging business-purpose investment property financing in 29 states and residential purchase and refinance loans in Pennsylvania and Colorado. Not affiliated with Precise Mortgages (UK) or Precision Mortgage.\", \"disambiguatingDescription\": \"Previse Mortgage LLC (NMLS# 2730429) is a U.S. mortgage brokerage in Spring Grove, Pennsylvania. The name 'Previse' (pronounced preh-VIZE) means to foresee or anticipate. Not affiliated with UK-based Precise Mortgages, Precision Mortgage, or any other similarly named entity.\", \"url\": \"https://previsemortgage.com\", \"telephone\": \"+1-717-819-5196\", \"email\": \"team@previsemortgage.com\", \"image\": \"https://previsemortgage.com/og-image.png\", \"logo\": \"https://previsemortgage.com/assets/logo-full.png\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"2001 Stoverstown Road\", \"addressLocality\": \"Spring Grove\", \"addressRegion\": \"PA\", \"postalCode\": \"17362\", \"addressCountry\": \"US\"}, \"geo\": {\"@type\": \"GeoCoordinates\", \"latitude\": \"39.8784\", \"longitude\": \"-76.8635\"}, \"areaServed\": [{\"@type\": \"State\", \"name\": \"Alabama\"}, {\"@type\": \"State\", \"name\": \"Arkansas\"}, {\"@type\": \"State\", \"name\": \"Colorado\"}, {\"@type\": \"State\", \"name\": \"Connecticut\"}, {\"@type\": \"State\", \"name\": \"Delaware\"}, {\"@type\": \"State\", \"name\": \"Florida\"}, {\"@type\": \"State\", \"name\": \"Georgia\"}, {\"@type\": \"State\", \"name\": \"Hawaii\"}, {\"@type\": \"State\", \"name\": \"Indiana\"}, {\"@type\": \"State\", \"name\": \"Kansas\"}, {\"@type\": \"State\", \"name\": \"Kentucky\"}, {\"@type\": \"State\", \"name\": \"Louisiana\"}, {\"@type\": \"State\", \"name\": \"Maine\"}, {\"@type\": \"State\", \"name\": \"Maryland\"}, {\"@type\": \"State\", \"name\": \"Mississippi\"}, {\"@type\": \"State\", \"name\": \"Missouri\"}, {\"@type\": \"State\", \"name\": \"New Hampshire\"}, {\"@type\": \"State\", \"name\": \"New Mexico\"}, {\"@type\": \"State\", \"name\": \"Ohio\"}, {\"@type\": \"State\", \"name\": \"Oklahoma\"}, {\"@type\": \"State\", \"name\": \"Pennsylvania\"}, {\"@type\": \"State\", \"name\": \"Rhode Island\"}, {\"@type\": \"State\", \"name\": \"South Carolina\"}, {\"@type\": \"State\", \"name\": \"Tennessee\"}, {\"@type\": \"State\", \"name\": \"Texas\"}, {\"@type\": \"State\", \"name\": \"Washington\"}, {\"@type\": \"State\", \"name\": \"West Virginia\"}, {\"@type\": \"State\", \"name\": \"Wisconsin\"}, {\"@type\": \"State\", \"name\": \"Wyoming\"}, {\"@type\": \"City\", \"name\": \"Spring Grove\"}, {\"@type\": \"City\", \"name\": \"York\"}, {\"@type\": \"City\", \"name\": \"Hanover\"}], \"openingHoursSpecification\": [{\"@type\": \"OpeningHoursSpecification\", \"dayOfWeek\": [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\"], \"opens\": \"09:00\", \"closes\": \"17:00\"}], \"priceRange\": \"$$\", \"currenciesAccepted\": \"USD\", \"paymentAccepted\": [\"Check\", \"Wire Transfer\"], \"sameAs\": [\"https://www.google.com/maps/place/Previse+Mortgage/@37.8014293,-113.2198079,4z/data=!3m1!4b1!4m14!1m7!3m6!1s0x876c79dda1c4c85f:0x34c049c3b2256a05!2sPrevise+Mortgage!8m2!3d39.7533033!4d-91.8748824!16s%2Fg%2F11xmqf1pb8!3m5!1s0x876c79dda1c4c85f:0x34c049c3b2256a05!8m2!3d39.7533033!4d-91.8748824!16s%2Fg%2F11xmqf1pb8?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D\"], \"knowsAbout\": [\"DSCR Investment Property Loans\", \"Bank Statement Loans\", \"Non-QM Financing\", \"Self-Employed Mortgage Solutions\", \"Pennsylvania home financing\", \"FHA loans\", \"VA loans\", \"First-time homebuyer programs\", \"Mortgage refinancing\"], \"slogan\": \"The loans big banks won't touch \\u2014 solved by specialists who will\", \"foundingDate\": \"2025-06-04\", \"founder\": {\"@type\": \"Person\", \"name\": \"Teddy Carbone\"}}"
  },
  {
    "children": "function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement(\"script\");\no.src=\"https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=\"+n,o.async=!0,o.defer=!0,\no.onload=function(){window.trackingFunctions.onLoad({appId:\"69b871e1791718000d91614a\"})},\ndocument.head.appendChild(o)}initApollo();"
  }
];

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "google-site-verification", content: "7ZrNm6STv7k_u-wkW3nyiIGmef5jrUt_Gw_6yc72d0w" },
      { title: "Previse Mortgage LLC | Investment Property & DSCR Loans" },
      { name: "description", content: "Previse Mortgage LLC (NMLS# 2730429) arranges DSCR rental, multifamily, fix-and-flip and portfolio loans, plus purchase and refinance loans in Pennsylvania and Colorado." },
      { name: "author", content: "Previse Mortgage LLC" },
      { name: "application-name", content: "Previse Mortgage LLC" },
      { name: "geo.region", content: "US-PA" },
      { name: "geo.placename", content: "Spring Grove, Pennsylvania" },
      { name: "geo.position", content: "39.8784;-76.8635" },
      { name: "ICBM", content: "39.8784, -76.8635" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Previse Mortgage LLC" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://previsemortgage.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://previsemortgage.com/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://backend.leadconnectorhq.com" },
      { rel: "preconnect", href: "https://widgets.leadconnectorhq.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;700&display=swap" },
      { rel: "stylesheet", href: "https://assets.calendly.com/assets/external/widget.css" },
    ],
    scripts: HEAD_SCRIPTS,
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5H7FFP2N" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=3304403989731026&ev=PageView&noscript=1" alt="" />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const PAGES_WITH_FORMS = [
  "/", "/webinar", "/webinar-replay", "/open-house", "/events", "/youtube", "/social",
  "/homebuyer-guide", "/offer", "/lp", "/pre-qualify", "/first-time-homebuyer", "/schedule",
  "/refinance", "/va-loans", "/fha-loans", "/conventional-loans", "/usda-loans", "/dscr-loans",
  "/colorado-dscr-loans", "/dscr-loan-guide", "/investors", "/mortgage-calculator", "/ai-readiness",
  "/pennsylvania-mortgage", "/mortgage-lender-york-pa", "/mortgage-lender-harrisburg-pa",
  "/real-estate-investment-loans",
];

function ConditionalLeadPopup() {
  const { pathname } = useLocation();
  const hide =
    PAGES_WITH_FORMS.includes(pathname) ||
    pathname.includes("thank-you") ||
    pathname.includes("-print") ||
    pathname.startsWith("/application");
  if (hide) return null;
  return <LeadCapturePopup />;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <ConditionalLeadPopup />
          <CookieConsent />
          <FloatingReviews />
          <Outlet />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">This page didn't load</h1>
        <p className="mt-2 text-muted-foreground">Something went wrong. Please try again.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-accent px-4 py-2 text-accent-foreground"
          >
            Try again
          </button>
          <Link to="/" className="rounded-md border border-border px-4 py-2">Go home</Link>
        </div>
      </div>
    </div>
  );
}
