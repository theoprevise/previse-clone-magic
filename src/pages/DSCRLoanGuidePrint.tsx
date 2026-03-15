import { Button } from "@/components/ui/button";
import { Printer, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logoPrint from "@/assets/previse-logo-print.png";

const DSCRLoanGuidePrint = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Print Controls - Hidden when printing */}
      <div className="print:hidden sticky top-0 z-50 bg-primary text-primary-foreground p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/dscr-loan-guide-thank-you" className="flex items-center gap-2 hover:opacity-80">
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
          <div className="flex items-center gap-4">
            <p className="text-sm">Use your browser's print function or click the button to save as PDF</p>
            <Button onClick={handlePrint} variant="secondary" className="gap-2">
              <Printer className="h-4 w-4" />
              Print / Save as PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Printable Content */}
      <div className="print:p-0 p-8 max-w-4xl mx-auto">
        {/* Cover Page */}
        <div className="page-break-after min-h-[100vh] flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-primary/5 to-accent/10 print:bg-white rounded-lg print:rounded-none mb-8 print:mb-0">
          <img src={logoPrint} alt="Previse Mortgage" className="h-20 mb-8 rounded-lg" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            The Complete DSCR Loan Investor Guide
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Your Blueprint for Financing Rental Properties with DSCR Loans
          </p>
          <div className="w-32 h-1 bg-accent mb-8"></div>
          <p className="text-lg text-gray-600 max-w-md">
            Everything you need to understand, qualify for, and leverage DSCR loans to build your real estate investment portfolio.
          </p>
          <div className="mt-12 text-sm text-gray-600">
            <p>Previse Mortgage</p>
            <p>NMLS #2611291</p>
            <p>www.previsemortgage.com</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-accent pb-4">
            Table of Contents
          </h2>
          <nav className="space-y-3 text-lg text-gray-800">
            {[
              "Introduction: What is a DSCR Loan?",
              "Chapter 1: Understanding the DSCR Ratio",
              "Chapter 2: DSCR Loan Qualification Requirements",
              "Chapter 3: Property Analysis Framework",
              "Chapter 4: DSCR Calculation Worksheets",
              "Chapter 5: Comparing DSCR vs Traditional Loans",
              "Chapter 6: Portfolio Scaling Strategies",
              "Chapter 7: Common Mistakes to Avoid",
              "DSCR Qualification Checklist",
              "Cash Flow Analysis Worksheet",
              "Investor Loan Glossary",
              "Next Steps: Get Pre-Approved"
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-dashed border-gray-300 py-2">
                <span>{item}</span>
                <span className="text-gray-600">{index + 3}</span>
              </div>
            ))}
          </nav>
        </div>

        {/* Introduction */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Introduction: What is a DSCR Loan?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              A DSCR (Debt Service Coverage Ratio) loan is a type of mortgage designed specifically for real estate investors.
              Unlike traditional mortgages that rely on your personal income, tax returns, and employment history,
              DSCR loans qualify you based on the income the property itself generates.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              This makes DSCR loans an ideal financing tool for self-employed investors, those with complex tax returns,
              or anyone who wants to scale their portfolio without the limitations of conventional underwriting.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits of DSCR Loans:</h3>
              <ul className="space-y-2 text-gray-800">
                <li>✓ No personal income verification required</li>
                <li>✓ No W-2s or tax returns needed</li>
                <li>✓ Qualify based on rental income, not personal earnings</li>
                <li>✓ Close in an LLC or business entity</li>
                <li>✓ No limit on the number of financed properties</li>
                <li>✓ Faster closings than conventional investor loans</li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed">
              This guide will walk you through everything you need to know about DSCR loans — from understanding
              the ratio itself to analyzing properties and scaling your portfolio.
            </p>
          </div>
        </section>

        {/* Chapter 1: Understanding the DSCR Ratio */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Chapter 1: Understanding the DSCR Ratio
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              The DSCR is the single most important number in DSCR lending. It measures whether a property's
              rental income is sufficient to cover its debt obligations.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The DSCR Formula</h3>
              <p className="text-2xl font-bold text-blue-800 mb-2">
                DSCR = Gross Rental Income ÷ Total Debt Service (PITIA)
              </p>
              <p className="text-sm text-gray-600">
                PITIA = Principal + Interest + Taxes + Insurance + Association Dues
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What DSCR Numbers Mean</h3>
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-800">1.25+ Excellent</p>
                <p className="text-sm text-green-700">Property generates 25%+ more income than its debt — best rates available</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-800">1.00–1.24 Good</p>
                <p className="text-sm text-blue-700">Property covers its debt with some margin — qualifies for most programs</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="font-semibold text-yellow-800">0.75–0.99 Below Breakeven</p>
                <p className="text-sm text-yellow-700">Property doesn't fully cover debt — some lenders still offer financing</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-semibold text-red-800">Below 0.75 Risky</p>
                <p className="text-sm text-red-700">Significant cash shortfall — most lenders will decline</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Example DSCR Calculation</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
              <p className="mb-2"><strong>Monthly Gross Rent:</strong> $2,500</p>
              <p className="mb-2"><strong>Monthly PITIA:</strong></p>
              <ul className="ml-4 mb-4 space-y-1">
                <li>Principal & Interest: $1,400</li>
                <li>Property Taxes: $250</li>
                <li>Insurance: $150</li>
                <li>HOA: $0</li>
                <li><strong>Total PITIA: $1,800</strong></li>
              </ul>
              <p className="text-xl font-bold text-blue-800">
                DSCR = $2,500 ÷ $1,800 = 1.39 ✓
              </p>
              <p className="text-sm text-gray-600 mt-2">This property qualifies — it generates 39% more income than its debt payments.</p>
            </div>
          </div>
        </section>

        {/* Chapter 2: Qualification Requirements */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Chapter 2: DSCR Loan Qualification Requirements
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              While DSCR loans are more flexible than conventional mortgages, they still have specific qualification criteria.
              Here's what you'll typically need:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Credit Score</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Minimum:</strong> 620 (some programs accept 660+)</li>
              <li><strong>Best rates:</strong> 720+ credit score</li>
              <li>Higher credit scores = lower interest rates and better terms</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Down Payment</h3>
            <ul className="space-y-2 mb-6">
              <li><strong>Minimum:</strong> 20% down (80% LTV)</li>
              <li><strong>Better rates:</strong> 25–30% down (70–75% LTV)</li>
              <li>Higher down payments reduce risk and improve pricing</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Property Types That Qualify</h3>
            <ul className="space-y-2 mb-6">
              <li>✓ Single-family rental homes</li>
              <li>✓ 2–4 unit properties</li>
              <li>✓ Condos and townhomes (warrantable)</li>
              <li>✓ Short-term rentals (Airbnb/VRBO) — some programs</li>
              <li>✗ Commercial properties (5+ units typically require commercial financing)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Reserves</h3>
            <p className="mb-4">
              Most DSCR lenders require 6–12 months of reserves (mortgage payments) in liquid assets after closing.
              This ensures you can cover payments during vacancy periods.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What You Won't Need:</h3>
              <ul className="space-y-2 text-gray-800">
                <li>✗ W-2s or pay stubs</li>
                <li>✗ Tax returns</li>
                <li>✗ Employment verification</li>
                <li>✗ Debt-to-income ratio calculation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chapter 3: Property Analysis Framework */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Chapter 3: Property Analysis Framework
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Before applying for a DSCR loan, you need to analyze whether the property will qualify.
              Follow this step-by-step framework:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 1: Determine Market Rent</h3>
            <p className="mb-4">
              Research comparable rental properties in the area to estimate realistic monthly rent:
            </p>
            <ul className="space-y-2 mb-6">
              <li>Check Zillow, Rentometer, or Apartments.com for rent comparables</li>
              <li>Look at 3–5 similar properties within a 1-mile radius</li>
              <li>Consider property condition, size, and amenities</li>
              <li>Use the appraiser's "Form 1007" rental survey for the most accurate estimate</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 2: Estimate Total PITIA</h3>
            <p className="mb-4">Calculate all components of your monthly debt service:</p>
            <ul className="space-y-2 mb-6">
              <li><strong>Principal & Interest:</strong> Use current DSCR loan rates for your scenario</li>
              <li><strong>Property Taxes:</strong> Check county assessor records</li>
              <li><strong>Homeowner's Insurance:</strong> Get quotes from 2–3 providers</li>
              <li><strong>HOA Dues:</strong> Contact the association if applicable</li>
              <li><strong>Flood Insurance:</strong> Required if in a flood zone</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 3: Calculate DSCR</h3>
            <p className="mb-4">Divide monthly rent by total PITIA. Target a DSCR of 1.25 or higher for the best rates.</p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 4: Evaluate Cash-on-Cash Return</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
              <p className="font-semibold mb-2">Cash-on-Cash Return Formula:</p>
              <p className="text-lg font-bold text-blue-800 mb-2">
                Annual Cash Flow ÷ Total Cash Invested × 100
              </p>
              <p className="text-sm text-gray-600">
                A good target is 8–12% cash-on-cash return for most rental markets.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 4: DSCR Calculation Worksheets */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Chapter 4: DSCR Calculation Worksheets
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Use these worksheets to evaluate any rental property for DSCR loan qualification.
            </p>

            {/* Worksheet 1 */}
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Worksheet 1: DSCR Quick Calculator</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 font-semibold">Property Address:</td>
                    <td className="py-3">______________________________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 font-semibold">Purchase Price:</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 font-semibold">Down Payment (%):</td>
                    <td className="py-3">___________% = $ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 font-semibold">Loan Amount:</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 font-semibold">Interest Rate:</td>
                    <td className="py-3">___________%</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 font-semibold">Monthly P&I:</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 font-semibold">Monthly Taxes:</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 font-semibold">Monthly Insurance:</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 font-semibold">Monthly HOA:</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-blue-50">
                    <td className="py-3 font-bold">Total PITIA:</td>
                    <td className="py-3 font-bold">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3 font-semibold">Monthly Gross Rent:</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-3 font-bold text-lg">DSCR Ratio:</td>
                    <td className="py-3 font-bold text-lg">___________</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Worksheet 2 */}
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Worksheet 2: Cash Flow Analysis</h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-300 bg-blue-50">
                    <td className="py-3 font-bold" colSpan={2}>INCOME</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3">Monthly Gross Rent:</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3">Other Income (laundry, parking, etc.):</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3">Vacancy Allowance (5–10%):</td>
                    <td className="py-3">– $ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-green-50">
                    <td className="py-3 font-bold">Effective Gross Income:</td>
                    <td className="py-3 font-bold">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300 bg-red-50">
                    <td className="py-3 font-bold" colSpan={2}>EXPENSES</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3">Monthly PITIA:</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3">Property Management (8–10%):</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3">Maintenance Reserve (5%):</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-3">CapEx Reserve (5%):</td>
                    <td className="py-3">$ ___________</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="py-3 font-bold text-lg">Monthly Cash Flow:</td>
                    <td className="py-3 font-bold text-lg">$ ___________</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Chapter 5: DSCR vs Traditional Loans */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Chapter 5: Comparing DSCR vs Traditional Loans
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Understanding the differences between DSCR and traditional investor loans will help you choose the right financing strategy.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Feature</th>
                    <th className="border border-gray-300 p-3 text-left">DSCR Loan</th>
                    <th className="border border-gray-300 p-3 text-left">Conventional Investor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Income Verification</td>
                    <td className="border border-gray-300 p-3">Based on property rental income</td>
                    <td className="border border-gray-300 p-3">Full personal income docs required</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Tax Returns Needed?</td>
                    <td className="border border-gray-300 p-3">No</td>
                    <td className="border border-gray-300 p-3">Yes (2 years)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Min Down Payment</td>
                    <td className="border border-gray-300 p-3">20%</td>
                    <td className="border border-gray-300 p-3">15–25%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Min Credit Score</td>
                    <td className="border border-gray-300 p-3">620–660</td>
                    <td className="border border-gray-300 p-3">620–680</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Property Limit</td>
                    <td className="border border-gray-300 p-3">No limit</td>
                    <td className="border border-gray-300 p-3">Max 10 financed properties</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Close in LLC?</td>
                    <td className="border border-gray-300 p-3">Yes</td>
                    <td className="border border-gray-300 p-3">No (personal name only)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Closing Speed</td>
                    <td className="border border-gray-300 p-3">2–3 weeks typical</td>
                    <td className="border border-gray-300 p-3">30–45 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Interest Rates</td>
                    <td className="border border-gray-300 p-3">Slightly higher</td>
                    <td className="border border-gray-300 p-3">Generally lower</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">When to Use DSCR vs Conventional:</h3>
              <ul className="space-y-2 text-gray-800">
                <li><strong>Choose DSCR if:</strong> You're self-employed, have complex returns, own 5+ properties, or want to close in an LLC</li>
                <li><strong>Choose Conventional if:</strong> You have W-2 income, fewer than 10 properties, and want the lowest possible rate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Chapter 6: Portfolio Scaling Strategies */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Chapter 6: Portfolio Scaling Strategies
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              One of the biggest advantages of DSCR loans is the ability to scale your portfolio without the limitations
              of conventional financing. Here's how to go from 1 to 10+ properties:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Strategy 1: The Snowball Method</h3>
            <p className="mb-4">
              Start with one high-DSCR property, use the cash flow to build reserves, and reinvest into your next acquisition.
              Each property's cash flow accelerates your ability to save for the next down payment.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Strategy 2: Cash-Out Refinance</h3>
            <p className="mb-4">
              Once a property has appreciated, use a DSCR cash-out refinance to pull equity and fund your next purchase.
              Many DSCR programs allow up to 75% LTV on cash-out refinances.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Strategy 3: BRRRR with DSCR</h3>
            <p className="mb-4">
              Buy, Rehab, Rent, Refinance, Repeat. After stabilizing a property with renters, refinance into a DSCR loan
              based on the new rental income and appraised value.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Strategy 4: Multi-Property Closings</h3>
            <p className="mb-4">
              Some DSCR lenders allow you to close on multiple properties simultaneously, saving time on separate applications.
              If you have the capital, this is the fastest way to scale.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pro Tip: Build Your Team</h3>
              <p className="text-gray-800">
                Scaling requires a reliable team: a DSCR-experienced loan officer (like us!), a real estate agent who understands
                investment properties, a property manager, and a good CPA. Having these relationships in place before you need
                them will save you time and money.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 7: Common Mistakes */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Chapter 7: Common Mistakes to Avoid
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <div className="space-y-6">
              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Mistake #1: Overestimating Rental Income</h3>
                <p className="text-gray-800">
                  Using above-market rent projections to make DSCR numbers work. Always use conservative, verifiable market rents.
                  The appraiser will use comparable rentals, not your optimistic estimates.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Mistake #2: Forgetting About Reserves</h3>
                <p className="text-gray-800">
                  Many investors focus on the down payment but forget they need 6–12 months of reserves after closing.
                  Plan your capital allocation ahead of time.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Mistake #3: Ignoring Property Condition</h3>
                <p className="text-gray-800">
                  DSCR loans require the property to be in rentable condition. Fixer-uppers that need significant
                  work may not qualify until repairs are completed.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Mistake #4: Not Shopping Lenders</h3>
                <p className="text-gray-800">
                  DSCR rates and terms vary significantly between lenders. Even a 0.25% rate difference on a $300K loan
                  is $750/year. Compare at least 2–3 lenders before committing.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Mistake #5: Skipping the Insurance Quote</h3>
                <p className="text-gray-800">
                  Insurance costs affect your DSCR calculation. Get accurate insurance quotes before making an offer —
                  a high insurance cost can push your DSCR below qualification thresholds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DSCR Qualification Checklist */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            DSCR Qualification Checklist
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg mb-6">Use this checklist to make sure you have everything ready before applying:</p>

            <div className="space-y-3">
              {[
                "Credit score of 620+ (check all three bureaus)",
                "20%+ down payment funds verified in bank account",
                "6–12 months of reserve funds available after closing",
                "Property identified with market rent data",
                "DSCR ratio calculated at 1.0+ (ideally 1.25+)",
                "Property in rentable condition (no major repairs needed)",
                "Insurance quotes obtained for the property",
                "Property tax records reviewed from county assessor",
                "HOA dues confirmed (if applicable)",
                "LLC formed (if closing in entity name)",
                "Operating agreement for LLC (if applicable)",
                "Bank statements (2–3 months for asset verification)",
                "Photo ID and entity documents ready",
                "Existing lease agreement (if property is already rented)",
                "Comparable rental analysis completed"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 py-2 border-b border-gray-200">
                  <div className="w-5 h-5 border-2 border-gray-400 rounded mt-0.5 flex-shrink-0"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investor Loan Glossary */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Investor Loan Glossary
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <dl className="space-y-4">
              {[
                { term: "DSCR (Debt Service Coverage Ratio)", def: "A ratio comparing a property's gross rental income to its total debt service (PITIA). A DSCR of 1.0 means the property breaks even; above 1.0 means positive cash flow." },
                { term: "LTV (Loan-to-Value)", def: "The ratio of the loan amount to the property's appraised value. Example: a $240K loan on a $300K property = 80% LTV." },
                { term: "PITIA", def: "Principal, Interest, Taxes, Insurance, and Association dues — the total monthly housing payment used in DSCR calculations." },
                { term: "NOI (Net Operating Income)", def: "Gross rental income minus operating expenses (not including debt service). Used to calculate cap rates." },
                { term: "Cap Rate (Capitalization Rate)", def: "NOI ÷ Property Value × 100. Measures the rate of return on a real estate investment, assuming an all-cash purchase." },
                { term: "Cash-on-Cash Return", def: "Annual pre-tax cash flow ÷ total cash invested × 100. Measures the return on your actual out-of-pocket investment." },
                { term: "BRRRR", def: "Buy, Rehab, Rent, Refinance, Repeat — a strategy for building a rental portfolio by recycling capital through refinancing." },
                { term: "Form 1007", def: "A single-family comparable rent schedule used by appraisers to determine the fair market rent for a property." },
                { term: "Reserves", def: "Liquid assets (cash, stocks, retirement funds) available after closing. Lenders require reserves to ensure you can cover payments during vacancy." },
                { term: "Prepayment Penalty", def: "A fee charged if you pay off the loan early. Common in DSCR loans — typically 3–5 years with declining percentages." },
                { term: "Yield Spread", def: "The difference between the interest rate on a loan and a benchmark rate. Affects pricing on DSCR loans." },
                { term: "Non-QM (Non-Qualified Mortgage)", def: "A mortgage that doesn't meet the Consumer Financial Protection Bureau's qualified mortgage standards. DSCR loans are non-QM products." },
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <dt className="font-bold text-gray-900 text-lg">{item.term}</dt>
                  <dd className="text-gray-700 mt-1">{item.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Next Steps / CTA */}
        <section className="mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Next Steps: Get Pre-Approved
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Now that you understand how DSCR loans work, you're ready to take the next step.
              Whether you have a property in mind or you're just starting your search,
              getting pre-approved gives you a clear picture of your financing options.
            </p>

            <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-500 my-8 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-lg text-gray-800 mb-4">
                Schedule a free consultation with our DSCR loan specialists.
              </p>
              <div className="space-y-2 text-gray-800">
                <p>📞 <strong>(717) 801-8498</strong></p>
                <p>✉️ <strong>team@previsemortgage.com</strong></p>
                <p>🌐 <strong>www.previsemortgage.com/schedule</strong></p>
              </div>
            </div>

            <div className="mt-12 text-center text-gray-600 border-t border-gray-300 pt-8">
              <img src={logoPrint} alt="Previse Mortgage" className="h-12 mx-auto mb-4 rounded-lg" />
              <p className="font-semibold">Previse Mortgage</p>
              <p>NMLS #2611291</p>
              <p className="mt-2 text-sm">
                This guide is for informational purposes only and does not constitute a commitment to lend.
                All loan programs are subject to credit approval and property eligibility.
                Rates, terms, and conditions are subject to change without notice.
              </p>
              <p className="mt-2 text-sm">
                © {new Date().getFullYear()} Previse Mortgage. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DSCRLoanGuidePrint;
