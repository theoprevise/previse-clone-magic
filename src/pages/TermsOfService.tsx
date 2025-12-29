import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-white mb-8">📄 Terms & Conditions</h1>
          <p className="text-white/80 text-lg mb-8">Effective Date: August 3, 2025</p>
          
          <div className="space-y-8 text-white/90">
            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">1. Acceptance</h2>
              <p className="leading-relaxed">
                By accessing or using this website or applying for services, you agree to these Terms & Conditions and our Privacy Policy. Do not use the site if you do not agree.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">2. Eligibility</h2>
              <p className="leading-relaxed">
                You affirm that you are 18 years or older and legally authorized to apply for mortgage lending services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">3. About Previse Mortgage</h2>
              <p className="leading-relaxed">
                Previse Mortgage (NMLS #2730429, PA Broker #115658) is a Pennsylvania-company (incorporated June 4, 2025), headquartered in Spring Grove, PA 17362. We are licensed to originate residential mortgage loans in Pennsylvania (and possibly other states upon license expansion) via the NMLS system. Loans are subject to credit approval and underwriting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">4. Services Provided</h2>
              <p className="leading-relaxed mb-4">Through this website and associated portals, Previse Mortgage offers:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mortgage pre-qualification or pre-approval services</li>
                <li>Mortgage refinancing for primary residences or investment properties</li>
                <li>Education materials and informational tools</li>
                <li>Referral or placement with third-party lenders or brokers</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We are not a financial institution and do not directly deposit funds; all loans are funded by partner lenders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">5. Accuracy of Information</h2>
              <p className="leading-relaxed">
                You agree to provide complete, accurate, and truthful information. You authorize us to verify your identity, credit, employment, income, and other data to assess loan eligibility. Providing false information can result in rejection of services and termination of agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">6. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on this website (including text, logos, designs, graphics, and software) is owned by or licensed to Previse Mortgage and protected by intellectual property laws. You may not copy, distribute, modify, or reuse any of the materials without written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">7. No Guarantee of Lending Terms</h2>
              <p className="leading-relaxed">
                Any rates, fees, or terms discussed are approximate and for informational purposes only. Financing terms are not guaranteed until you receive a written loan estimate or closing disclosure from a licensed lender. We disclaim any obligation to replicate specific terms post‑closing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">8. Disclaimer of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, Previse Mortgage and its affiliates disclaim all liability for losses or damages arising from your use of this site, loan application errors, website downtime, or external links. We disclaim liability for fraudulent emails or communications falsely claiming to be from us—always verify via our official channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">9. External Links</h2>
              <p className="leading-relaxed">
                We may link to third-party websites for services such as calculators, credit monitoring tools, or disclosures. These are provided for convenience, not endorsement. We have no control over third-party content or security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">10. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict of law principles. Appropriate courts of York County, PA shall have exclusive jurisdiction over disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">11. Modification</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Revisions will be posted on this page with an updated "Effective Date." Continued use constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">12. Communication</h2>
              <p className="leading-relaxed">
                If you consent, we may send marketing and loan-related communications via email, SMS, mail, or phone. You may opt out at any time as described in section 6 of the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">13. Waiver and Severability</h2>
              <p className="leading-relaxed">
                Our failure to enforce a right does not waive it. If any part of these Terms is invalid, it will be severed, and the remainder will remain in full force.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">14. Contact Information</h2>
              <div className="leading-relaxed">
                <p className="font-semibold">Previse Mortgage</p>
                <p>Spring Grove, PA 17362</p>
                <p>Email: teddy@previsemortgage.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;