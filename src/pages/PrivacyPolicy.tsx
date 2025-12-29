import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-white mb-8">🛡️ Privacy Policy</h1>
          <p className="text-white/80 text-lg mb-8">Effective Date: August 3, 2025</p>
          
          <div className="space-y-8 text-white/90">
            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Previse Mortgage ("we," "us," or "our") is a Pennsylvania-limited liability company (formed June 4, 2025) located in Spring Grove, PA 17362. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit previsemortgage.com, apply for services, or contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We collect:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Identification Data:</strong> Name, contact info (email, phone, address), Social Security Number, date of birth, employment, income, and residential (or investment) property information.</li>
                <li><strong>Loan and Financial Information:</strong> Credit scores/reports, income documentation, assets, liabilities, tax returns, bank statements, and other mortgage application documents.</li>
                <li><strong>Usage and Device Information:</strong> IP addresses, device type, browser and OS, referral sites, pages visited, session times.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and analytics technologies for site operation and improvement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">3. How We Use Your Data</h2>
              <p className="leading-relaxed mb-4">We use collected data to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Evaluate eligibility and process mortgage or refinancing requests.</li>
                <li>Communicate with you, respond to questions, and fulfill service requests.</li>
                <li>Provide customer support and service updates.</li>
                <li>Improve our website, processes, and overall customer experience.</li>
                <li>Comply with legal and regulatory requirements (e.g., anti-fraud checks, escrow services).</li>
                <li>Send marketing messages (only if you opt in, with an easy opt‑out).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">4. Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">We do not sell your personal data. We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Credit bureaus, underwriters, loan processors, and title companies as needed to process your application.</li>
                <li>Government and regulatory authorities (e.g., Pennsylvania Department of Banking & Securities) when required by law.</li>
                <li>Third-party service providers (hosting, analytics, fraud monitoring, marketing).</li>
                <li>Affiliates or lenders if you consent to being matched or pre-approved.</li>
              </ul>
              <p className="leading-relaxed mt-4">We require these parties to safeguard your information and use it only as permitted.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                Your privacy is critical. We implement reasonable physical, electronic, and administrative safeguards to protect your data, including encryption, firewalls, access controls, and secure hosting. While no system is 100% secure, we continuously assess risk and adapt our practices to current standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">6. Retention and Deletion</h2>
              <p className="leading-relaxed mb-4">We retain personal data for as long as necessary for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The duration of any mortgage application, last loan servicing or refinancing;</li>
                <li>Compliance with applicable record‑keeping laws (e.g. HMDA, RESPA);</li>
                <li>Resolving disputes, claims, or inquiries.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You may request access to your personal information, corrections, or deletion (subject to regulatory retention requirements) by contacting teddy@previsemortgage.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">7. Your Rights</h2>
              <p className="leading-relaxed mb-4">Depending on applicable laws, you may have rights to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access, correct, or delete your personal data.</li>
                <li>Withdraw consent or opt out of marketing messages.</li>
                <li>Lodge a complaint.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">8. International Transfers</h2>
              <p className="leading-relaxed">
                If we or any partner processes your information outside the U.S., it will be handled under similar privacy safeguards consistent with U.S. law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our services are intended for individuals 18 or older and not knowingly provided to minors under 13. We do not knowingly collect information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mb-4">10. Updates to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. The latest version will be posted here, with the "Effective Date" updated accordingly.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;