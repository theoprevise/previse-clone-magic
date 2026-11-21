// Mortgage Learning Center content. Claims listed in `reviewFlags` must be
// confirmed by the lender / compliance before publishing.

export type LearnCategory = {
  id: "homebuying" | "refinancing" | "self-employed" | "real-estate-investing";
  name: string;
  blurb: string;
};

export const LEARN_CATEGORIES: LearnCategory[] = [
  { id: "homebuying", name: "Homebuying", blurb: "Plain-English answers for buyers, especially first-time buyers in Pennsylvania and Colorado." },
  { id: "refinancing", name: "Refinancing", blurb: "When refinancing can make sense, and what to compare before you apply." },
  { id: "self-employed", name: "Self-Employed Borrowers", blurb: "How business owners, 1099 earners and freelancers can document income." },
  { id: "real-estate-investing", name: "Real Estate Investing", blurb: "DSCR loans, rental property financing and building a portfolio." },
];

export type LearnLink = { label: string; to: string };
export type LearnSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type LearnFaq = { q: string; a: string };

export type LearnArticle = {
  slug: string;
  category: LearnCategory["id"];
  title: string; // <title>
  description: string; // meta description
  h1: string;
  answer: string; // short answer shown first
  sections: LearnSection[];
  caveats: string[];
  faqs: LearnFaq[];
  related: LearnLink[];
  reviewFlags: string[]; // claims needing lender / compliance verification
};

export const LEARN_ARTICLES: LearnArticle[] = [
  {
    slug: "what-is-a-dscr-loan-pennsylvania",
    category: "real-estate-investing",
    title: "What Is a DSCR Loan and How Does It Work in Pennsylvania? | Previse Mortgage",
    description: "Learn how DSCR loans qualify Pennsylvania rental properties on rental income instead of tax returns, how the ratio is calculated, and who they fit.",
    h1: "What Is a DSCR Loan and How Does It Work in Pennsylvania?",
    answer:
      "A DSCR (debt service coverage ratio) loan is a business-purpose mortgage for investment property that is qualified mainly on the property's rental income rather than the borrower's personal income. The lender divides the property's monthly rent by its monthly housing payment (principal, interest, taxes, insurance and any HOA dues). In Pennsylvania, DSCR loans work the same way as in other states, but local property taxes and insurance costs strongly affect the ratio, so the same rent can qualify in one county and fall short in another.",
    sections: [
      {
        heading: "How the DSCR is calculated",
        paragraphs: [
          "DSCR = monthly rental income ÷ monthly PITIA (principal, interest, taxes, insurance and association dues). A ratio of 1.00 means the rent exactly covers the payment; above 1.00 means the property produces more rent than the payment.",
          "Example for illustration only: if a duplex rents for $3,000 per month and the full monthly payment is $2,400, the DSCR is 3,000 ÷ 2,400 = 1.25.",
          "Lenders usually use the lower of current lease rent or market rent from an appraiser's rent schedule. Vacant properties are typically qualified on market rent.",
        ],
      },
      {
        heading: "Why Pennsylvania details matter",
        paragraphs: [
          "Pennsylvania property taxes are set locally by county, municipality and school district, so two similar homes a few miles apart can carry very different tax bills. Because taxes are part of PITIA, they directly change your ratio.",
          "Older housing stock in many Pennsylvania towns can mean higher insurance premiums or repair needs that appraisers note. Budget for these before making an offer.",
        ],
      },
      {
        heading: "Who a DSCR loan usually fits",
        paragraphs: ["DSCR financing is commonly used by:"],
        bullets: [
          "Investors whose tax returns show low income after depreciation and write-offs",
          "Self-employed investors and those growing a portfolio of rentals",
          "Buyers who want to hold property in an LLC",
          "Investors doing a cash-out refinance on an existing rental",
        ],
      },
      {
        heading: "Previse Mortgage DSCR guidelines",
        paragraphs: [
          "For DSCR loans arranged through Previse Mortgage, typical minimums are a $250,000 loan amount, a 680 or higher credit score and a 1.25 or higher DSCR. Down payment, reserves, rates and other terms depend on the lender and the full loan file.",
        ],
      },
    ],
    caveats: [
      "DSCR loans are for business-purpose, non-owner-occupied property only. You cannot live in the home.",
      "Approval is not guaranteed. Credit, reserves, property type, appraisal and lender guidelines all apply.",
      "Rates and down payments for DSCR loans are often different from owner-occupied mortgages. Ask for a written Loan Estimate or term sheet.",
    ],
    faqs: [
      { q: "Do DSCR loans require tax returns?", a: "Most DSCR programs do not use personal tax returns or W-2s to calculate income. Lenders still review credit, assets, reserves and the property." },
      { q: "Can I close a DSCR loan in an LLC in Pennsylvania?", a: "Many DSCR lenders allow vesting in an LLC with a personal guarantee. Ask your attorney or tax advisor whether an LLC is right for you." },
      { q: "What if my property's DSCR is below 1.25?", a: "A larger down payment, a lower loan amount or a different property may raise the ratio. We can review options before you make an offer." },
      { q: "Can I use a DSCR loan for a short-term rental?", a: "Some lenders accept short-term rental income with specific documentation. Availability varies by lender and location." },
    ],
    related: [
      { label: "DSCR Loans for LLCs and Investors", to: "/dscr-loans" },
      { label: "Free DSCR Loan Guide", to: "/dscr-loan-guide" },
      { label: "How to finance a rental property in Pennsylvania", to: "/learn/how-to-finance-a-rental-property-in-pennsylvania" },
      { label: "Real Estate Investment Loans Nationwide*", to: "/real-estate-investment-loans" },
    ],
    reviewFlags: [
      "Previse DSCR minimums ($250K loan, 680+ credit, 1.25+ DSCR) — confirm current lender guidelines.",
      "Short-term rental income acceptance and LLC vesting with personal guarantee — confirm with partner lenders.",
      "Statement that DSCR programs usually do not use personal tax returns — confirm.",
    ],
  },
  {
    slug: "first-time-homebuyer-mortgage-york-county-pa",
    category: "homebuying",
    title: "How First-Time Buyers Qualify for a Mortgage in York County, PA | Previse Mortgage",
    description: "What first-time homebuyers in York County, PA need to qualify: credit, income, debt-to-income, down payment options, and local programs to ask about.",
    h1: "How Can First-Time Homebuyers Qualify for a Mortgage in York County, PA?",
    answer:
      "First-time homebuyers in York County, PA generally qualify by showing steady, documented income, a credit score that meets the loan program's minimum, a manageable debt-to-income ratio, and enough money for the down payment and closing costs. Common options include FHA, conventional, VA (for eligible veterans) and USDA loans in eligible rural areas, and Pennsylvania offers state homebuyer programs through PHFA. The right program depends on your credit, savings and the home you choose.",
    sections: [
      {
        heading: "What lenders look at",
        paragraphs: ["Every mortgage application is reviewed on a few core factors:"],
        bullets: [
          "Income and employment: usually two years of history, verified with pay stubs, W-2s or tax returns",
          "Credit: your scores and payment history",
          "Debt-to-income (DTI): your monthly debts, including the new housing payment, divided by gross monthly income",
          "Assets: money for the down payment, closing costs and sometimes reserves",
          "The property: appraisal and, for some programs, condition and location requirements",
        ],
      },
      {
        heading: "Loan programs to compare",
        paragraphs: [
          "FHA loans are insured by the federal government and are often used by buyers with smaller down payments or lower credit scores. Conventional loans can offer low down payment options for qualified first-time buyers, with mortgage insurance that can be removed later. VA loans are available to eligible veterans and service members. USDA loans serve eligible rural areas; parts of York County may qualify, which you can check on the USDA eligibility map.",
          "The Pennsylvania Housing Finance Agency (PHFA) offers first-time buyer loan and down payment assistance programs with income and purchase price limits. Ask us which programs we can currently offer.",
        ],
      },
      {
        heading: "Steps to get ready",
        paragraphs: [],
        bullets: [
          "Check your credit reports for errors at annualcreditreport.com",
          "Avoid new debt or large unexplained deposits before applying",
          "Save for closing costs as well as the down payment",
          "Get pre-approved before you shop so you know your price range",
          "Consider a homebuyer education course, which some programs require",
        ],
      },
    ],
    caveats: [
      "Program minimums, limits and availability change. Not every borrower will qualify for every program.",
      "Down payment assistance has its own eligibility rules and may need to be repaid.",
      "Pre-qualification is not a loan approval or commitment to lend.",
    ],
    faqs: [
      { q: "Who counts as a first-time homebuyer?", a: "Many programs define a first-time buyer as someone who has not owned a home in the past three years, but definitions vary by program." },
      { q: "How much do I need to put down?", a: "It depends on the program. Some government and conventional options allow low down payments; you will also need funds for closing costs." },
      { q: "Is there down payment help in York County?", a: "Pennsylvania offers statewide assistance through PHFA, and local programs may exist. Eligibility and funding change, so check current availability." },
      { q: "Does Previse Mortgage lend in York County?", a: "Yes. Previse Mortgage arranges residential purchase and refinance loans in Pennsylvania and Colorado, including York County." },
    ],
    related: [
      { label: "First-Time Homebuyer Programs", to: "/first-time-homebuyer" },
      { label: "Mortgage Lender in York, PA", to: "/mortgage-lender-york-pa" },
      { label: "FHA vs. conventional mortgages", to: "/learn/fha-vs-conventional-mortgage" },
      { label: "Credit Score & Approval Tips", to: "/credit-score-mortgage-tips" },
      { label: "Free Homebuyers Guide", to: "/homebuyer-guide" },
    ],
    reviewFlags: [
      "Which PHFA programs Previse can currently originate — confirm before publishing.",
      "USDA eligibility of parts of York County — confirm on current USDA map.",
      "'Three-year' first-time buyer definition — confirm per program.",
    ],
  },
  {
    slug: "self-employed-mortgage-options",
    category: "self-employed",
    title: "Mortgage Options for Self-Employed Borrowers | Bank Statement & More | Previse Mortgage",
    description: "Compare mortgage options for self-employed borrowers: conventional with tax returns, bank statement loans, 1099, P&L and asset-based programs, plus DSCR for rentals.",
    h1: "What Mortgage Options Are Available to Self-Employed Borrowers?",
    answer:
      "Self-employed borrowers can qualify for a conventional or government-backed mortgage using tax returns, or for non-QM programs that document income differently, such as bank statement loans, 1099-only loans, profit-and-loss statement loans and asset-based loans. Investors buying rentals can also use DSCR loans that rely on the property's rent. The best fit depends on how your income appears on paper and how long you have been in business.",
    sections: [
      {
        heading: "Option 1: Traditional loans using tax returns",
        paragraphs: [
          "Conventional, FHA and VA loans can work well for self-employed borrowers whose tax returns show strong, stable net income. Lenders typically look at your most recent two years of personal and business returns and average the qualifying income. Write-offs that lower your taxable income also lower your qualifying income.",
        ],
      },
      {
        heading: "Option 2: Non-QM alternative documentation",
        paragraphs: ["Non-QM loans are outside government-agency guidelines and may use other evidence of income:"],
        bullets: [
          "Bank statement loans: average deposits from 12 or 24 months of personal or business bank statements",
          "1099 loans: income from 1099 forms for independent contractors",
          "Profit-and-loss loans: a P&L statement, often prepared by a CPA or tax preparer",
          "Asset-based loans: qualifying income calculated from liquid assets",
        ],
      },
      {
        heading: "Option 3: DSCR loans for investment properties",
        paragraphs: [
          "If you are buying a rental rather than a home to live in, a DSCR loan qualifies mainly on the property's rental income compared with its payment, without using your personal income.",
        ],
      },
      {
        heading: "How to prepare",
        paragraphs: [],
        bullets: [
          "Keep business and personal accounts separate",
          "Gather two years of tax returns, year-to-date figures and business license or CPA letter",
          "Be ready to explain large or irregular deposits",
          "Talk with your tax preparer before filing if you plan to buy soon",
        ],
      },
    ],
    caveats: [
      "Non-QM loans often have higher rates, larger down payments or reserve requirements than conventional loans.",
      "Documentation requirements vary by lender and program. Approval is not guaranteed.",
      "DSCR loans are for business-purpose investment property only, not a primary residence.",
    ],
    faqs: [
      { q: "How long do I need to be self-employed?", a: "Many lenders prefer two years of self-employment history. Some programs consider less with prior experience in the same field." },
      { q: "Will lenders use my gross revenue?", a: "Tax-return loans use net income after expenses. Bank statement programs apply an expense factor to deposits instead." },
      { q: "Can I get a bank statement loan in Pennsylvania or Colorado?", a: "Previse Mortgage can review bank statement options for primary homes in Pennsylvania and Colorado. Availability depends on the lender and your file." },
    ],
    related: [
      { label: "Mortgage Solutions for Complex Income", to: "/mortgage-solutions" },
      { label: "What is a DSCR loan?", to: "/learn/what-is-a-dscr-loan-pennsylvania" },
      { label: "Conventional Loans", to: "/conventional-loans" },
      { label: "How the Mortgage Process Works", to: "/how-the-mortgage-process-works" },
    ],
    reviewFlags: [
      "Which non-QM programs (bank statement, 1099, P&L, asset-based) Previse can currently offer — confirm.",
      "Self-employment history requirements — confirm with current lender guidelines.",
    ],
  },
  {
    slug: "fha-vs-conventional-mortgage",
    category: "homebuying",
    title: "FHA vs. Conventional Mortgage: Key Differences Explained | Previse Mortgage",
    description: "Compare FHA and conventional mortgages: down payment, credit, mortgage insurance, loan limits and property rules, so you can see which may fit you.",
    h1: "What Is the Difference Between FHA and Conventional Mortgages?",
    answer:
      "An FHA loan is insured by the Federal Housing Administration and is designed to help borrowers with smaller down payments or lower credit scores, but it carries FHA mortgage insurance that often lasts longer. A conventional loan is not government-insured; it usually rewards stronger credit, and its private mortgage insurance can be removed once you build enough equity. Which costs less overall depends on your credit, down payment and how long you plan to keep the loan.",
    sections: [
      {
        heading: "Side-by-side comparison",
        paragraphs: [],
        bullets: [
          "Backing: FHA is insured by HUD/FHA; conventional loans follow Fannie Mae or Freddie Mac guidelines or the lender's own rules",
          "Down payment: FHA allows 3.5% down with a 580+ credit score; some conventional programs allow 3% down for qualified buyers",
          "Credit: FHA is generally more flexible on credit; conventional pricing improves more with higher scores",
          "Mortgage insurance: FHA has an upfront and annual premium; conventional PMI applies below 20% down and can be cancelled later",
          "Property: FHA appraisals include minimum property standards; the home must be your primary residence",
          "Loan limits: both have county-based limits that change yearly",
        ],
      },
      {
        heading: "Mortgage insurance in more detail",
        paragraphs: [
          "FHA loans charge an upfront mortgage insurance premium that can be financed into the loan, plus an annual premium paid monthly. With less than 10% down, the annual premium generally stays for the life of the loan unless you refinance.",
          "Conventional PMI is paid monthly when you put less than 20% down. Under federal law you can request cancellation once your balance reaches 80% of the original value, and it ends automatically at 78% if you are current on payments.",
        ],
      },
      {
        heading: "Which one fits?",
        paragraphs: [
          "FHA often fits buyers with lower credit scores, higher debt-to-income ratios or limited savings. Conventional often fits buyers with stronger credit or larger down payments, or who want to remove mortgage insurance later. The fair way to decide is to compare Loan Estimates for both on the same home.",
        ],
      },
    ],
    caveats: [
      "Program limits, premiums and minimums are set by FHA, Fannie Mae, Freddie Mac and lenders and change over time.",
      "Lender overlays may require higher credit scores than program minimums.",
      "This page is educational and is not a commitment to lend.",
    ],
    faqs: [
      { q: "Can I switch from FHA to conventional later?", a: "Yes, by refinancing, which some borrowers do to remove FHA mortgage insurance once they have enough equity and qualify." },
      { q: "Are FHA rates lower?", a: "Sometimes the interest rate is lower, but mortgage insurance can make the total cost higher. Compare the APR and total monthly payment." },
      { q: "Can I use FHA for an investment property?", a: "No. FHA requires owner occupancy, though you can buy a 2–4 unit home, live in one unit and rent the others." },
    ],
    related: [
      { label: "FHA Loans", to: "/fha-loans" },
      { label: "Conventional Loans", to: "/conventional-loans" },
      { label: "First-time buyers in York County", to: "/learn/first-time-homebuyer-mortgage-york-county-pa" },
      { label: "Mortgage Calculator", to: "/mortgage-calculator" },
    ],
    reviewFlags: [
      "FHA 3.5% down with 580+ credit and conventional 3% down programs — confirm current guidelines.",
      "FHA annual MIP life-of-loan rule under 10% down; PMI 80%/78% cancellation — confirm wording with compliance.",
    ],
  },
  {
    slug: "how-to-finance-a-rental-property-in-pennsylvania",
    category: "real-estate-investing",
    title: "How to Finance a Rental Property in Pennsylvania | Loan Options | Previse Mortgage",
    description: "Ways to finance a Pennsylvania rental property: conventional investment loans, DSCR loans, owner-occupied multi-unit, cash-out refinance and portfolio loans.",
    h1: "How Can I Finance a Rental Property in Pennsylvania?",
    answer:
      "You can finance a Pennsylvania rental property with a conventional investment property loan, a DSCR loan qualified on the property's rent, an owner-occupied 2–4 unit loan where you live in one unit, a cash-out refinance or home equity loan on property you already own, or a portfolio or blanket loan for multiple properties. Investment loans usually need a larger down payment and reserves than a primary-home mortgage, so start by comparing which option fits your income documentation and goals.",
    sections: [
      {
        heading: "Common financing options",
        paragraphs: [],
        bullets: [
          "Conventional investment loan: uses your personal income, credit and tax returns",
          "DSCR loan: qualifies mainly on the property's rental income versus its payment; can often close in an LLC",
          "Owner-occupied 2–4 unit: live in one unit and rent the others, using FHA, VA or conventional financing",
          "Cash-out refinance or home equity: use equity in property you already own toward a down payment",
          "Portfolio or blanket loans: finance several rentals together",
          "Fix-and-flip or bridge loans: short-term financing for properties needing renovation",
        ],
      },
      {
        heading: "Pennsylvania factors to budget for",
        paragraphs: [
          "Property taxes vary widely by county and school district, and Pennsylvania charges realty transfer tax at closing, which local municipalities and school districts may add to. Some municipalities require rental registration or inspections. Factor these costs into your cash flow before you make an offer.",
        ],
      },
      {
        heading: "Steps to get started",
        paragraphs: [],
        bullets: [
          "Decide whether you will live in the property or hold it purely as an investment",
          "Estimate rent with comparable listings and the property's full monthly payment",
          "Gather proof of down payment funds and reserves",
          "Talk with a loan officer about which programs match your documentation",
        ],
      },
    ],
    caveats: [
      "Owner-occupied programs require you to actually live in the home as required by the loan.",
      "Investment loan terms, rates and down payments vary by lender and file. Approval is not guaranteed.",
      "Consult a tax professional and attorney about LLCs, taxes and local rental rules.",
    ],
    faqs: [
      { q: "How much down do I need for a rental property?", a: "Investment loans typically need a larger down payment than primary-home loans. The amount depends on the program, credit and property." },
      { q: "Can rental income help me qualify?", a: "Yes. Conventional loans may count a portion of documented rent, and DSCR loans qualify mainly on the rent." },
      { q: "What are Previse Mortgage's minimums for investor loans?", a: "Investor loans through Previse typically require a $250,000 minimum loan, 680+ credit score and, for DSCR loans, a 1.25+ ratio." },
    ],
    related: [
      { label: "What is a DSCR loan?", to: "/learn/what-is-a-dscr-loan-pennsylvania" },
      { label: "Investor Loans", to: "/investors" },
      { label: "DSCR Loans", to: "/dscr-loans" },
      { label: "Refinance Options", to: "/refinance" },
      { label: "Pennsylvania Mortgages", to: "/pennsylvania-mortgage" },
    ],
    reviewFlags: [
      "Pennsylvania realty transfer tax description and local rental registration — confirm wording.",
      "Investor minimums and which portfolio, blanket, fix-and-flip programs are currently available — confirm.",
    ],
  },
];

export const getLearnArticle = (slug: string) => LEARN_ARTICLES.find((a) => a.slug === slug);
