import { useNavigate } from 'react-router-dom';
import { Youtube, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoIcon from "@/assets/logo-icon.png";
const Footer = () => {
  const navigate = useNavigate();
  return <footer className="bg-gradient-to-t from-primary-dark to-primary py-16 border-t border-accent/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/8 rounded-full blur-xl animate-float" style={{
        animationDelay: '3s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Logo section */}
          <div className="mb-12">
            <img src={logoIcon} alt="Previse Mortgage Logo - Pennsylvania Mortgage Lender" className="h-20 mx-auto mb-8 hover:scale-105 transition-transform duration-300" />
          </div>
          
          {/* Company info in modern card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Previse Mortgage</h3>
            <p className="text-accent/80 text-sm mb-4 italic">Foresee • Anticipate • Deliver</p>
            <div className="space-y-2 text-white/80 text-lg">
              <p>Spring Grove, PA 17362</p>
              <a 
                href="tel:+17178195196" 
                className="block text-accent font-semibold text-xl hover:text-accent/80 transition-colors"
              >
                (717) 819-5196
              </a>
              <a 
                href="mailto:teddy@previsemortgage.com" 
                className="block text-white/80 hover:text-accent transition-colors"
              >
                teddy@previsemortgage.com
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-white/10">
              <a
                href="https://www.youtube.com/@PreviseMortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/PreviseMortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/previsemortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-pink-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/previsemortgage/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Regulatory Disclaimer */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-white/60 text-xs leading-relaxed mb-3">
              <strong className="text-white/80">Equal Housing Opportunity.</strong> Previse Mortgage is committed to ensuring 
              equal access to mortgage credit. All lending decisions are made without regard to race, color, religion, national origin, 
              sex, marital status, age, or other protected characteristics under the Equal Credit Opportunity Act.
            </p>
            <p className="text-white/60 text-xs leading-relaxed mb-3">
              <strong className="text-white/80">Disclaimer:</strong> All loans are subject to credit approval. Interest rates, fees, and 
              terms are subject to change without notice and may vary based on credit score, down payment, loan amount, property type, 
              and other factors. This is not a commitment to lend. All rates and terms shown are for illustration purposes only. 
              The actual terms of your loan will be provided in a Loan Estimate upon application.
            </p>
            <p className="text-white/60 text-xs leading-relaxed">
              *Savings and rate benefits described are estimates only and are not guaranteed. Your actual results may vary. 
              Pre-qualification is not a commitment to lend and does not guarantee final loan approval.
            </p>
          </div>

          {/* Legal info */}
          <div className="space-y-2 text-white/60 text-sm max-w-3xl mx-auto">
            <p className="text-base font-medium">Copyright © 2025 Previse Mortgage • All Rights Reserved.</p>
            <p>Previse Mortgage NMLS# 2730429</p>
            <p>PA Broker License #115658</p>
            <p>MLO Licenses: CO# 100542483 | PA# 115609</p>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-white/10">
            <button onClick={() => navigate('/privacy-policy')} className="text-white/60 hover:text-accent transition-colors duration-300 text-sm underline">
              Privacy Policy
            </button>
            <button onClick={() => navigate('/terms-of-service')} className="text-white/60 hover:text-accent transition-colors duration-300 text-sm underline">
              Terms of Service
            </button>
          </div>
          
        </div>
      </div>
    </footer>;
};
export default Footer;
