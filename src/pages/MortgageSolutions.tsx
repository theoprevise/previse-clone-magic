import { Home, DollarSign, Shield, TrendingUp, Building, ArrowLeft, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const MortgageSolutions = () => {
  const navigate = useNavigate();

  const mortgageTypes = [
    {
      icon: Home,
      title: "USDA Loans",
      description: "Rural development financing with zero down payment",
      details: [
        "No down payment required",
        "Competitive interest rates", 
        "For rural and suburban areas",
        "Income eligibility requirements"
      ]
    },
    {
      icon: Shield,
      title: "FHA Loans",
      description: "Government-backed loans with flexible requirements",
      details: [
        "Low down payment (3.5%)",
        "Flexible credit requirements",
        "Fixed and adjustable rates",
        "First-time buyer friendly"
      ]
    },
    {
      icon: TrendingUp,
      title: "Non-Conventional",
      description: "Alternative financing for unique situations",
      details: [
        "Bank statement loans",
        "DSCR (investment property)",
        "Asset-based lending",
        "Self-employed friendly"
      ]
    },
    {
      icon: DollarSign,
      title: "Conventional Loans",
      description: "Traditional financing with competitive terms",
      details: [
        "Down payments from 3%",
        "Various term options",
        "No geographic restrictions",
        "Flexible loan amounts"
      ]
    },
    {
      icon: Briefcase,
      title: "Bank Statement Loans",
      description: "Alternative documentation for self-employed",
      details: [
        "12-24 month statements",
        "Self-employed friendly",
        "Asset-based qualifying",
        "Flexible verification"
      ]
    },
    {
      icon: Building,
      title: "Investment Loans",
      description: "Financing for investment and rental properties",
      details: [
        "Property cash flow analysis",
        "Rental income consideration",
        "Multiple property financing",
        "Competitive investor rates"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary">
      <SEOHead 
        title="Mortgage Solutions | Home Loan Programs | Previse Mortgage"
        description="Explore mortgage solutions including USDA, FHA, conventional, bank statement, and investment property loans. Find the right home financing program for your needs in Pennsylvania."
        keywords="mortgage solutions, home loan programs, USDA loans, FHA loans, conventional mortgage, bank statement loans, investment property financing, Pennsylvania mortgage"
        canonicalUrl="https://previsemortgage.com/mortgage-solutions"
      />
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/8 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-accent/6 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Back to Home */}
        <div className="container mx-auto px-4 pt-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="text-white hover:text-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Mortgage 
              <span className="block bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive range of mortgage products designed to meet your unique financing needs
            </p>
          </div>
        </div>

        {/* Mortgage Solutions Grid */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mortgageTypes.map((mortgage, index) => (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Glass morphism card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 transform-gpu">
                  {/* Icon with glow effect */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <mortgage.icon className="text-accent" size={40} strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {mortgage.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {mortgage.description}
                  </p>

                  <ul className="space-y-3">
                    {mortgage.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                        <span className="text-white/80 group-hover/item:text-white transition-colors duration-200">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Content Section */}
        <div className="container mx-auto px-4 pb-24">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Choosing the Right <span className="text-accent">Mortgage Program</span>
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Selecting the right mortgage program is one of the most important financial decisions you'll make. Each loan type is designed for different borrower profiles, financial situations, and property types. Understanding the differences between government-backed programs like <Link to="/fha-loans" className="text-accent hover:underline">FHA</Link> and <Link to="/usda-loans" className="text-accent hover:underline">USDA loans</Link> versus <Link to="/conventional-loans" className="text-accent hover:underline">conventional financing</Link> can save you thousands of dollars over the life of your loan.
              </p>
              <p>
                For borrowers with limited savings, government-backed programs offer lower down payment requirements—as little as 0% for USDA and 3.5% for FHA loans. If you have strong credit and can put down 20% or more, conventional loans eliminate private mortgage insurance entirely, reducing your monthly payment significantly. Self-employed borrowers and real estate investors may benefit from alternative documentation programs like bank statement loans or <Link to="/dscr-loans" className="text-accent hover:underline">DSCR (Debt Service Coverage Ratio) loans</Link> that qualify based on property cash flow rather than personal tax returns.
              </p>
              <p>
                At Previse Mortgage, we take the time to analyze your complete financial picture—income, credit history, savings, and long-term goals—before recommending a specific program. As a licensed Pennsylvania mortgage broker, we have access to multiple wholesale lenders, which means we can compare rates and terms across different loan products to find the option that truly fits your situation. Whether you're a <Link to="/first-time-homebuyer" className="text-accent hover:underline">first-time homebuyer</Link> exploring down payment assistance or a seasoned <Link to="/investors" className="text-accent hover:underline">real estate investor</Link> scaling your portfolio, our team provides the expert guidance you need to make a confident, informed decision.
              </p>
              <p>
                Ready to explore your options? <Link to="/schedule" className="text-accent hover:underline font-semibold">Schedule a free consultation</Link> or use our <Link to="/mortgage-calculator" className="text-accent hover:underline">mortgage calculator</Link> to estimate your monthly payments across different loan scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageSolutions;
