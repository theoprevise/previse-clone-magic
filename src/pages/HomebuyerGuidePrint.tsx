import { Button } from "@/components/ui/button";
import { Printer, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logoPrint from "@/assets/previse-logo-print.png";

const HomebuyerGuidePrint = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Print Controls - Hidden when printing */}
      <div className="print:hidden sticky top-0 z-50 bg-primary text-primary-foreground p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/homebuyer-guide-thank-you" className="flex items-center gap-2 hover:opacity-80">
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
            The Complete First-Time Homebuyer Guide
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Your Step-by-Step Roadmap to Homeownership
          </p>
          <div className="w-32 h-1 bg-accent mb-8"></div>
          <p className="text-lg text-gray-600 max-w-md">
            Everything you need to know about buying your first home, 
            from pre-approval to closing day.
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
              "Introduction: Your Path to Homeownership",
              "Step 1: Assess Your Financial Health",
              "Step 2: Get Pre-Approved",
              "Step 3: Find Your Dream Home",
              "Step 4: Complete the Loan Process",
              "Step 5: Close and Get Your Keys",
              "Pre-Approval Document Checklist",
              "Closing Day Essentials Checklist",
              "Down Payment Assistance Programs",
              "Common First-Time Buyer Mistakes",
              "Mortgage Terminology Glossary",
              "Next Steps: Schedule Your Consultation"
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
            Introduction: Your Path to Homeownership
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Congratulations on taking the first step toward homeownership! Buying your first home 
              is one of the most significant financial decisions you'll ever make, and we're here 
              to guide you through every step of the journey.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              This guide is designed specifically for first-time homebuyers like you. Whether you're 
              just starting to explore the idea of homeownership or you're ready to begin the 
              process, you'll find everything you need to know right here.
            </p>
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 my-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Learn:</h3>
              <ul className="space-y-2 text-gray-800">
                <li>✓ How to prepare your finances for a mortgage</li>
                <li>✓ The step-by-step home buying process</li>
                <li>✓ What documents you'll need</li>
                <li>✓ Available assistance programs for first-time buyers</li>
                <li>✓ Common mistakes to avoid</li>
                <li>✓ Key mortgage terms explained simply</li>
              </ul>
            </div>
            <p className="text-lg leading-relaxed">
              At Previse Mortgage, we believe everyone deserves the opportunity to own a home. 
              Let's make your dream of homeownership a reality.
            </p>
          </div>
        </section>

        {/* Step 1 */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Step 1: Assess Your Financial Health
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Before you start shopping for homes, it's essential to understand your financial 
              situation. This will help you determine how much house you can afford and what 
              type of loan might be best for you.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Check Your Credit Score</h3>
            <p className="mb-4">
              Your credit score is one of the most important factors in getting approved for a mortgage 
              and determining your interest rate. Here's what different scores typically mean:
            </p>
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-800">740+ Excellent</p>
                <p className="text-sm text-green-700">Best rates available</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-800">670-739 Good</p>
                <p className="text-sm text-blue-700">Competitive rates</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="font-semibold text-yellow-800">580-669 Fair</p>
                <p className="text-sm text-yellow-700">FHA loans available</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="font-semibold text-orange-800">Below 580</p>
                <p className="text-sm text-orange-700">May need improvement</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Calculate Your Debt-to-Income Ratio</h3>
            <p className="mb-4">
              Lenders want to see that your monthly debt payments don't exceed a certain percentage 
              of your income. The general rule is:
            </p>
            <ul className="space-y-2 mb-6">
              <li><strong>Front-end ratio:</strong> Housing costs should be ≤ 28% of gross income</li>
              <li><strong>Back-end ratio:</strong> Total debts should be ≤ 43% of gross income</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Save for Your Down Payment</h3>
            <p className="mb-4">
              While 20% down is ideal, many first-time buyer programs require much less:
            </p>
            <ul className="space-y-2">
              <li><strong>Conventional loans:</strong> As low as 3% down</li>
              <li><strong>FHA loans:</strong> 3.5% down with 580+ credit score</li>
              <li><strong>VA loans:</strong> 0% down for eligible veterans</li>
              <li><strong>USDA loans:</strong> 0% down for eligible rural properties</li>
            </ul>
          </div>
        </section>

        {/* Step 2 */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Step 2: Get Pre-Approved
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Getting pre-approved is a crucial step that shows sellers you're a serious buyer. 
              A pre-approval letter tells you exactly how much you can borrow and gives you 
              confidence when making offers.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pre-Qualification vs. Pre-Approval</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-900">Pre-Qualification</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Quick estimate based on self-reported info</li>
                    <li>• No credit check required</li>
                    <li>• Not verified by lender</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Pre-Approval (Recommended)</p>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Based on verified financial documents</li>
                    <li>• Includes credit check</li>
                    <li>• Stronger offer when house hunting</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Pre-Approval Process</h3>
            <ol className="space-y-4">
              <li><strong>1. Choose a lender</strong> - Compare rates and fees from multiple lenders</li>
              <li><strong>2. Submit application</strong> - Complete the loan application with your information</li>
              <li><strong>3. Provide documentation</strong> - Submit required financial documents</li>
              <li><strong>4. Credit check</strong> - Lender reviews your credit history</li>
              <li><strong>5. Receive pre-approval letter</strong> - Usually within 1-3 business days</li>
            </ol>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mt-8">
              <p className="font-semibold text-gray-900">💡 Pro Tip:</p>
              <p className="text-gray-700">Pre-approval letters are typically valid for 60-90 days. If you haven't found a home 
              by then, you may need to get re-approved with updated documentation.</p>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Step 3: Find Your Dream Home (Without an Agent)
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Now comes the exciting part—house hunting! With your pre-approval in hand, 
              you're ready to start looking for your perfect home. The good news? You don't 
              need a real estate agent to find and buy a great home, and going without one 
              can save you thousands of dollars.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
              <p className="font-semibold text-gray-900">💰 Why Skip the Buyer's Agent?</p>
              <p className="text-gray-700">
                Buyer's agent commissions typically range from 2.5-3% of the home price. On a $300,000 home, 
                that's $7,500-$9,000 that could stay in your pocket or be used to negotiate a lower purchase price. 
                With today's online tools, you have access to the same listings agents use.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Create Your Must-Have List</h3>
            <p className="mb-4">Before you start searching, divide your preferences into three categories:</p>
            
            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-800 mb-2">Must-Haves</p>
                <p className="text-sm text-green-700">Non-negotiable features (bedrooms, location, etc.)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-800 mb-2">Nice-to-Haves</p>
                <p className="text-sm text-blue-700">Preferred but flexible (garage, yard size)</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-semibold text-purple-800 mb-2">Dream Features</p>
                <p className="text-sm text-purple-700">Would love but not essential (pool, view)</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Search the Market Yourself</h3>
            <p className="mb-4">
              Today's technology gives you direct access to the same home listings that agents use. 
              Take control of your home search with these powerful tools and strategies:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• <strong>Zillow, Realtor.com, Redfin:</strong> Search all MLS listings, view photos, virtual tours, and price history</li>
              <li>• <strong>Set up alerts:</strong> Get instant notifications when new homes matching your criteria hit the market</li>
              <li>• <strong>Research neighborhoods:</strong> Use these sites to check school ratings, crime stats, and local amenities</li>
              <li>• <strong>Track market trends:</strong> Monitor days on market and price changes to identify motivated sellers</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Connect Directly with Sellers</h3>
            <p className="mb-4">
              Once you find homes you like, reach out directly to sellers or their listing agents:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• <strong>Attend open houses:</strong> Meet sellers or listing agents in person and ask questions directly</li>
              <li>• <strong>Look for FSBO listings:</strong> For Sale By Owner homes are often priced lower and sellers are open to negotiation</li>
              <li>• <strong>Contact listing agents:</strong> Call the seller's agent directly to schedule private showings</li>
              <li>• <strong>Drive neighborhoods:</strong> Look for "For Sale" signs—some homes aren't listed online yet</li>
              <li>• <strong>Network locally:</strong> Tell friends, family, and coworkers you're looking—word of mouth finds hidden gems</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Making an Offer Without an Agent</h3>
            <p className="mb-4">
              You can absolutely make an offer on your own. Here's what to include:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• <strong>Offer price:</strong> Research comparable sales to determine fair market value</li>
              <li>• <strong>Earnest money deposit:</strong> Shows you're serious (typically 1-3% of price)</li>
              <li>• <strong>Contingencies:</strong> Protect yourself with inspection and financing contingencies</li>
              <li>• <strong>Closing timeline:</strong> Propose a realistic closing date (typically 30-45 days)</li>
              <li>• <strong>Pre-approval letter:</strong> Include this to show sellers you're qualified</li>
            </ul>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mt-6">
              <p className="font-semibold text-gray-900">💡 Pro Tip: Hire a Real Estate Attorney</p>
              <p className="text-gray-700">
                Instead of paying an agent 2.5-3%, consider hiring a real estate attorney for $500-$1,500 
                to review contracts and handle the legal paperwork. You get professional protection at a 
                fraction of the cost. Your lender (that's us!) will guide you through the financing side.
              </p>
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Step 4: Complete the Loan Process
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Once your offer is accepted, it's time to finalize your mortgage. This is called 
              "going under contract" and typically takes 30-45 days to complete.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Steps in the Process</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-gray-900">1. Home Inspection</h4>
                <p className="text-gray-700">Hire a professional inspector to evaluate the property's condition. 
                This usually costs $300-$500 and can reveal issues that may affect your decision or price negotiation.</p>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-gray-900">2. Appraisal</h4>
                <p className="text-gray-700">Your lender will order an appraisal to ensure the home's value 
                supports the loan amount. This protects both you and the lender.</p>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-gray-900">3. Underwriting</h4>
                <p className="text-gray-700">The lender's underwriting team reviews all documentation to 
                make a final lending decision. They may request additional documents during this phase.</p>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-semibold text-gray-900">4. Clear to Close</h4>
                <p className="text-gray-700">Once underwriting approves your loan, you'll receive a 
                "clear to close" and can schedule your closing date.</p>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-8">
              <h3 className="text-xl font-semibold text-red-800 mb-3">⚠️ What NOT to Do During This Process</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Don't make large purchases or open new credit accounts</li>
                <li>• Don't change jobs without consulting your lender</li>
                <li>• Don't move money between accounts without documentation</li>
                <li>• Don't co-sign on anyone else's loans</li>
                <li>• Don't close any credit accounts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 5 */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Step 5: Close and Get Your Keys
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Closing day is when ownership officially transfers to you. Here's what to expect.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Before Closing Day</h3>
            <ul className="space-y-2 mb-6">
              <li>• <strong>Review Closing Disclosure</strong> - You'll receive this at least 3 days before closing</li>
              <li>• <strong>Do a final walkthrough</strong> - Verify the home's condition and any agreed repairs</li>
              <li>• <strong>Get certified funds</strong> - Wire transfer or cashier's check for closing costs</li>
              <li>• <strong>Bring required documents</strong> - ID, proof of insurance, etc.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">At the Closing Table</h3>
            <p className="mb-4">You'll sign numerous documents including:</p>
            <ul className="space-y-2 mb-6">
              <li>• Promissory Note - Your promise to repay the loan</li>
              <li>• Deed of Trust/Mortgage - Secures the loan with the property</li>
              <li>• Closing Disclosure - Final loan terms and costs</li>
              <li>• Title documents - Transfers ownership to you</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
              <h3 className="text-xl font-semibold text-green-800 mb-3">🎉 Congratulations!</h3>
              <p className="text-green-700">
                After signing all documents and funds are transferred, you'll receive the keys 
                to your new home. You're officially a homeowner!
              </p>
            </div>
          </div>
        </section>

        {/* Pre-Approval Checklist */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Pre-Approval Document Checklist
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Gather these documents before applying for pre-approval to speed up the process.
          </p>
          
          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Income Verification</h3>
              <div className="space-y-3">
                {[
                  "Pay stubs from the last 30 days",
                  "W-2 forms from the past 2 years",
                  "Federal tax returns from the past 2 years",
                  "If self-employed: Business tax returns and profit/loss statements",
                  "Additional income documentation (bonuses, commissions, etc.)"
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-gray-300" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Asset Documentation</h3>
              <div className="space-y-3">
                {[
                  "Bank statements from the past 2-3 months (all pages)",
                  "Investment account statements",
                  "Retirement account statements (401k, IRA)",
                  "Gift letter (if receiving down payment assistance from family)"
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-gray-300" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Identification</h3>
              <div className="space-y-3">
                {[
                  "Government-issued photo ID (driver's license or passport)",
                  "Social Security card or proof of SSN",
                  "Proof of current address (utility bill, bank statement)"
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-gray-300" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Documents</h3>
              <div className="space-y-3">
                {[
                  "Rental history or landlord contact information",
                  "Divorce decree (if applicable)",
                  "Bankruptcy discharge papers (if applicable)",
                  "VA Certificate of Eligibility (for VA loans)"
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-gray-300" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing Day Checklist */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Closing Day Essentials Checklist
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Don't forget these items on closing day!
          </p>

          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documents to Bring</h3>
              <div className="space-y-3">
                {[
                  "Government-issued photo ID for all borrowers",
                  "Proof of homeowners insurance",
                  "Copy of the purchase contract",
                  "Closing Disclosure (review before signing)"
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-gray-300" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment</h3>
              <div className="space-y-3">
                {[
                  "Cashier's check or wire transfer confirmation for closing costs",
                  "Personal checkbook (for minor adjustments)"
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-gray-300" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Before Closing</h3>
              <div className="space-y-3">
                {[
                  "Complete final walkthrough of the property",
                  "Verify all agreed repairs have been made",
                  "Confirm utilities are ready to be transferred to your name",
                  "Review all closing documents carefully"
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-gray-300" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">After Closing</h3>
              <div className="space-y-3">
                {[
                  "Keep copies of all signed documents in a safe place",
                  "Change locks on exterior doors",
                  "Update your address with important contacts",
                  "Set up automatic mortgage payments"
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1.5 h-5 w-5 rounded border-gray-300" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Down Payment Assistance */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Down Payment Assistance Programs
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Many first-time homebuyers qualify for assistance programs that can help with 
            down payment and closing costs.
          </p>

          <div className="space-y-6 text-gray-800">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">FHA Loans</h3>
              <p className="mb-3">Backed by the Federal Housing Administration</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Down payment as low as 3.5%</li>
                <li>• Credit scores as low as 580</li>
                <li>• More flexible debt-to-income ratios</li>
                <li>• Requires mortgage insurance premium (MIP)</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">VA Loans</h3>
              <p className="mb-3">For eligible veterans, active military, and surviving spouses</p>
              <ul className="space-y-2 text-gray-700">
                <li>• No down payment required</li>
                <li>• No private mortgage insurance</li>
                <li>• Competitive interest rates</li>
                <li>• Flexible credit requirements</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">USDA Loans</h3>
              <p className="mb-3">For properties in eligible rural and suburban areas</p>
              <ul className="space-y-2 text-gray-700">
                <li>• No down payment required</li>
                <li>• Below-market interest rates</li>
                <li>• Income limits apply</li>
                <li>• Property must be in eligible area</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">State & Local Programs</h3>
              <p className="mb-3">Many states and cities offer additional assistance</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Down payment grants (don't need to be repaid)</li>
                <li>• Second mortgages with deferred payments</li>
                <li>• Closing cost assistance</li>
                <li>• Tax credits for first-time buyers</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mt-8">
            <p className="font-semibold text-gray-900">💡 Ask Us About Programs You Qualify For</p>
            <p className="text-gray-700">
              We can help you identify which programs you're eligible for based on your 
              income, location, and other factors. Contact us for a personalized consultation.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Common First-Time Buyer Mistakes to Avoid
          </h2>

          <div className="space-y-6 text-gray-800">
            {[
              {
                mistake: "Not Getting Pre-Approved First",
                why: "Without pre-approval, you don't know your true budget and sellers may not take your offer seriously.",
                solution: "Get pre-approved before you start house hunting."
              },
              {
                mistake: "Looking at Homes Outside Your Budget",
                why: "It's easy to fall in love with a home you can't afford, leading to disappointment or financial strain.",
                solution: "Stick to homes priced at or below your pre-approved amount."
              },
              {
                mistake: "Forgetting About Closing Costs",
                why: "Closing costs typically run 2-5% of the purchase price and can catch buyers off guard.",
                solution: "Budget for closing costs in addition to your down payment."
              },
              {
                mistake: "Skipping the Home Inspection",
                why: "Hidden problems can cost thousands to repair after you move in.",
                solution: "Always get a professional inspection, even for new construction."
              },
              {
                mistake: "Making Big Purchases Before Closing",
                why: "Large purchases or new credit can change your debt-to-income ratio and jeopardize your loan.",
                solution: "Wait until after closing to make major purchases."
              },
              {
                mistake: "Not Shopping Around for a Mortgage",
                why: "Different lenders offer different rates and terms. Even a small rate difference can save thousands.",
                solution: "Compare offers from at least 3 different lenders."
              },
              {
                mistake: "Ignoring the Neighborhood",
                why: "You're buying a location as much as a home. Research schools, crime rates, and future development.",
                solution: "Visit at different times of day and talk to neighbors."
              },
              {
                mistake: "Draining Your Savings for the Down Payment",
                why: "You need reserves for moving costs, repairs, emergencies, and unexpected expenses.",
                solution: "Keep 3-6 months of expenses in reserve after closing."
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-red-400 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {index + 1}. {item.mistake}
                </h3>
                <p className="text-gray-700 mb-2"><strong>Why it's a problem:</strong> {item.why}</p>
                <p className="text-green-700"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Glossary */}
        <section className="page-break-after mb-8 print:mb-0 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Mortgage Terminology Glossary
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { term: "Amortization", definition: "The process of paying off a loan through regular payments over time." },
              { term: "APR", definition: "Annual Percentage Rate - the total cost of borrowing including interest and fees." },
              { term: "Appraisal", definition: "Professional assessment of a property's market value." },
              { term: "Closing Costs", definition: "Fees paid at closing, typically 2-5% of the loan amount." },
              { term: "Closing Disclosure", definition: "Document showing final loan terms and costs, provided 3 days before closing." },
              { term: "Contingency", definition: "Conditions that must be met for the sale to proceed." },
              { term: "Debt-to-Income Ratio", definition: "Monthly debt payments divided by gross monthly income." },
              { term: "Down Payment", definition: "The upfront payment made when purchasing a home." },
              { term: "Earnest Money", definition: "Deposit showing good faith when making an offer." },
              { term: "Equity", definition: "The portion of the home you own outright (value minus loan balance)." },
              { term: "Escrow", definition: "Account where funds are held by a third party during the transaction." },
              { term: "Fixed-Rate Mortgage", definition: "Loan with an interest rate that stays the same for the entire term." },
              { term: "Interest Rate", definition: "The percentage charged on the loan principal." },
              { term: "Loan-to-Value Ratio", definition: "Loan amount divided by the home's appraised value." },
              { term: "PMI", definition: "Private Mortgage Insurance - required when down payment is less than 20%." },
              { term: "Pre-Approval", definition: "Lender's commitment to lend based on verified financial information." },
              { term: "Principal", definition: "The original loan amount, not including interest." },
              { term: "Title Insurance", definition: "Protection against claims or disputes over property ownership." },
              { term: "Underwriting", definition: "The process of evaluating a loan application for approval." }
            ].map((item, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded">
                <p className="font-semibold text-gray-900">{item.term}</p>
                <p className="text-sm text-gray-700">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <section className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-accent pb-4">
            Next Steps: Schedule Your Consultation
          </h2>
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              You've taken the first step by reading this guide. Now let's turn your 
              homeownership dreams into reality.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Schedule a free, no-obligation consultation with one of our mortgage experts. 
                We'll review your situation and help you understand your options.
              </p>
              <div className="space-y-2 text-gray-800">
                <p className="text-xl font-semibold text-gray-900">Previse Mortgage</p>
                <p className="text-lg">📞 Call or Text: (717) 819-5196</p>
                <p className="text-lg">📧 Email: teddy@previsemortgage.com</p>
                <p className="text-lg">🌐 Web: www.previsemortgage.com</p>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <img src={logoPrint} alt="Previse Mortgage" className="h-14 mx-auto mb-4 rounded-lg" />
              <p className="text-sm text-gray-600">
                Previse Mortgage | NMLS #2611291
              </p>
              <p className="text-xs text-gray-500 mt-2">
                © {new Date().getFullYear()} Previse Mortgage. All rights reserved.
                This guide is for informational purposes only and does not constitute financial advice.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .page-break-after {
            page-break-after: always;
          }
          @page {
            margin: 0.75in;
            size: letter;
          }
        }
      `}</style>
    </div>
  );
};

export default HomebuyerGuidePrint;
