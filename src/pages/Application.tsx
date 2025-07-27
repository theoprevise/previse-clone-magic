import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Shield } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const Application = () => {
  const navigate = useNavigate();
  const { loanType } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Property purpose
    propertyPurpose: "",
    // Step 2: Property type
    propertyType: "",
    // Step 3: Property use
    propertyUse: "",
    // Step 4: Credit score
    creditScore: "",
    // Step 5: Down payment
    downPayment: "",
    // Step 6: First time buyer
    firstTimeBuyer: "",
    // Step 7: Military service
    militaryService: [] as string[],
    // Step 8: Bankruptcy/foreclosure
    bankruptcyForeclosure: "",
    // Step 9: Annual income
    annualIncome: "",
    // Step 10: Employment status
    employmentStatus: "",
    // Step 11: Co-borrower
    coBorrower: "",
    // Step 12: Location timing
    locationTiming: "",
    // Step 13: Agent
    hasAgent: "",
    // Step 14: Improve credit
    improveCredit: "",
    // Step 15: ZIP code
    zipCode: "",
    // Step 16: Home value
    homeValue: "",
    // Step 17: Mortgage balance
    mortgageBalance: "",
    // Step 18: Property condition
    propertyCondition: "",
    // Step 19: Stay in home
    stayInHome: "",
    // Step 20: Cash out amount
    cashOutAmount: "",
    // Step 21: Name
    firstName: "",
    lastName: "",
    // Step 22: Phone and verification
    phone: "",
    verificationMethod: ""
  });

  const totalSteps = 22;
  const progress = ((currentStep - 1) / totalSteps) * 100;

  const questions = [
    // Step 1: Property purpose
    {
      title: "What will you use this property for?",
      type: "single-choice",
      key: "propertyPurpose",
      options: ["Primary residence", "Investment property", "Second home"]
    },
    // Step 2: Property type
    {
      title: "What type of property are you looking for?",
      type: "single-choice",
      key: "propertyType",
      options: ["Single family home", "Townhouse", "Condo", "Multi-family home", "Manufactured home"]
    },
    // Step 3: Property use
    {
      title: "How will you use this property?",
      type: "single-choice",
      key: "propertyUse",
      options: ["Purchase", "Refinance", "Cash out refinance"]
    },
    // Step 4: Credit score
    {
      title: "What's your credit score?",
      type: "single-choice",
      key: "creditScore",
      options: ["Excellent (740+)", "Good (680-739)", "Fair (640-679)", "Poor (580-639)", "Very Poor (Below 580)", "I don't know"]
    },
    // Step 5: Down payment
    {
      title: "How much money do you plan to put down?",
      subtitle: "Don't include closing costs",
      type: "single-choice",
      key: "downPayment",
      options: ["0%", "3%", "5%", "10%", "15%", "20%", "25%+", "I'm not sure"]
    },
    // Step 6: First time buyer
    {
      title: "Are you a first-time home buyer?",
      type: "single-choice",
      key: "firstTimeBuyer",
      options: ["Yes", "No"]
    },
    // Step 7: Military service (multi-select)
    {
      title: "Have you or your spouse served in the military?",
      subtitle: "We may be able to get you access to VA loan benefits",
      type: "multi-choice",
      key: "militaryService",
      options: ["Currently serving", "Veteran", "Spouse of veteran", "None of the above"]
    },
    // Step 8: Bankruptcy/foreclosure
    {
      title: "Have you had a bankruptcy or foreclosure in the past 7 years?",
      type: "single-choice",
      key: "bankruptcyForeclosure",
      options: ["Yes", "No"]
    },
    // Step 9: Annual income
    {
      title: "What's your gross annual household income?",
      subtitle: "Include income from all household members",
      type: "single-choice",
      key: "annualIncome",
      options: ["Less than $50,000", "$50,000 - $75,000", "$75,000 - $100,000", "$100,000 - $150,000", "$150,000 - $200,000", "More than $200,000"]
    },
    // Step 10: Employment status
    {
      title: "What's your employment status?",
      type: "single-choice",
      key: "employmentStatus",
      options: ["Employed (W-2)", "Self-employed", "Retired", "Military", "Other"]
    },
    // Step 11: Co-borrower
    {
      title: "Will you have a co-borrower on this loan?",
      type: "single-choice",
      key: "coBorrower",
      options: ["Yes", "No", "Maybe"]
    },
    // Step 12: Location timing
    {
      title: "Have you found the area where you'd like to purchase?",
      type: "single-choice",
      key: "locationTiming",
      options: ["Yes, I know the area", "I have a few areas in mind", "No, I need help choosing"]
    },
    // Step 13: Agent
    {
      title: "Do you currently have a real estate agent?",
      type: "single-choice",
      key: "hasAgent",
      options: ["Yes", "No", "I need a referral"]
    },
    // Step 14: Improve credit
    {
      title: "Are you interested in improving your credit score before applying?",
      type: "single-choice",
      key: "improveCredit",
      options: ["Yes", "No", "I'm not sure"]
    },
    // Step 15: ZIP code
    {
      title: "What's the ZIP code where you'd like to buy?",
      type: "input",
      key: "zipCode",
      placeholder: "Enter ZIP code"
    },
    // Step 16: Home value
    {
      title: "What's the estimated value of your home?",
      type: "input",
      key: "homeValue",
      placeholder: "Enter estimated home value"
    },
    // Step 17: Mortgage balance
    {
      title: "What's your current mortgage balance?",
      type: "input",
      key: "mortgageBalance",
      placeholder: "Enter current mortgage balance"
    },
    // Step 18: Property condition
    {
      title: "What condition is your property in?",
      type: "single-choice",
      key: "propertyCondition",
      options: ["Excellent", "Good", "Fair", "Needs work"]
    },
    // Step 19: Stay in home
    {
      title: "Do you plan to stay in your home for the next 3+ years?",
      type: "single-choice",
      key: "stayInHome",
      options: ["Yes", "No", "I'm not sure"]
    },
    // Step 20: Cash out amount
    {
      title: "How much cash would you like to take out?",
      type: "single-choice",
      key: "cashOutAmount",
      options: ["$25,000 or less", "$25,001 - $50,000", "$50,001 - $100,000", "$100,001 - $200,000", "More than $200,000", "I'm not sure"]
    },
    // Step 21: Name
    {
      title: "What is your name?",
      type: "name-input",
      key: "name"
    },
    // Step 22: Phone and verification
    {
      title: "What's the best number to reach you?",
      subtitle: "Your selected lender will call you to discuss your options.",
      type: "phone-input",
      key: "contact"
    }
  ];

  const currentQuestion = questions[currentStep - 1];

  const handleOptionSelect = (value: string) => {
    if (currentQuestion.type === "multi-choice") {
      const currentValues = formData.militaryService;
      if (value === "None of the above") {
        setFormData(prev => ({ ...prev, militaryService: ["None of the above"] }));
      } else {
        const filteredValues = currentValues.filter(v => v !== "None of the above");
        if (currentValues.includes(value)) {
          setFormData(prev => ({ 
            ...prev, 
            militaryService: filteredValues.filter(v => v !== value)
          }));
        } else {
          setFormData(prev => ({ 
            ...prev, 
            militaryService: [...filteredValues, value]
          }));
        }
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [currentQuestion.key]: value
      }));
      // Auto-advance for single choice questions
      if (currentQuestion.type === "single-choice") {
        setTimeout(() => {
          if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
          }
        }, 300);
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit form
      console.log("Form submitted:", formData);
      alert("Application submitted successfully!");
      navigate('/');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const formatLoanType = (type: string) => {
    if (!type) return 'Mortgage';
    
    // Handle specific cases for proper capitalization
    const formatted = type.split('-').map(word => {
      if (word.toLowerCase() === 'va') return 'VA';
      if (word.toLowerCase() === 'fha') return 'FHA';
      if (word.toLowerCase() === 'usda') return 'USDA';
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    
    return formatted;
  };

  const isStepValid = () => {
    const question = currentQuestion;
    
    if (question.type === "single-choice") {
      return !!formData[question.key as keyof typeof formData];
    } else if (question.type === "multi-choice") {
      return formData.militaryService.length > 0;
    } else if (question.type === "input") {
      return !!formData[question.key as keyof typeof formData];
    } else if (question.type === "name-input") {
      return formData.firstName && formData.lastName;
    } else if (question.type === "phone-input") {
      return formData.phone && formData.verificationMethod;
    }
    
    return false;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/8 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 pt-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/mortgage-solutions')}
            className="text-white hover:text-accent mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Mortgage Solutions
          </Button>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
                {formatLoanType(loanType || '')} Application
              </h1>
              <p className="text-white/80 text-lg">
                Step {currentStep} of {totalSteps}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12">
              <div className="relative">
                <Progress 
                  value={progress} 
                  className="h-4 bg-white/20 border border-white/30 rounded-full overflow-hidden backdrop-blur-sm"
                />
                <div 
                  className="absolute top-6 text-sm text-accent font-medium transition-all duration-300"
                  style={{ left: `${Math.max(0, Math.min(95, progress - 2.5))}%` }}
                >
                  {Math.round(progress)}%
                </div>
              </div>
            </div>

            {/* Question Content */}
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
                {currentQuestion.title}
              </h2>
              {currentQuestion.subtitle && (
                <p className="text-white/70 text-lg mb-6">
                  {currentQuestion.subtitle}
                </p>
              )}
            </div>

            {/* Question Input/Options */}
            <div className="mb-8">
              {currentQuestion.type === "single-choice" && (
                <div className="space-y-4">
                  {currentQuestion.options?.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full py-6 px-6 text-left text-lg rounded-xl border-2 transition-all duration-300 ${
                        formData[currentQuestion.key as keyof typeof formData] === option
                          ? 'bg-accent text-primary border-accent font-bold'
                          : 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/30'
                      }`}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}

              {currentQuestion.type === "multi-choice" && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    {currentQuestion.options?.map((option) => (
                      <div key={option} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id={option}
                          checked={formData.militaryService.includes(option)}
                          onChange={() => handleOptionSelect(option)}
                          className="w-5 h-5 text-accent bg-white/10 border-white/30 rounded focus:ring-accent focus:ring-2"
                        />
                        <label htmlFor={option} className="text-white text-lg">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="w-full bg-accent hover:bg-accent-light text-primary py-6 px-6 text-lg font-bold rounded-xl"
                  >
                    NEXT
                  </Button>
                </div>
              )}

              {currentQuestion.type === "input" && (
                <div className="space-y-6">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder={currentQuestion.placeholder}
                      value={formData[currentQuestion.key as keyof typeof formData] as string}
                      onChange={(e) => handleInputChange(currentQuestion.key, e.target.value)}
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 rounded-xl focus:bg-white/15 focus:border-accent transition-all duration-300"
                      autoFocus
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-accent text-sm font-medium">
                      <Shield className="w-4 h-4 mr-1" />
                      SECURE
                    </div>
                  </div>
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="w-full bg-accent hover:bg-accent-light text-primary py-6 px-6 text-lg font-bold rounded-xl"
                  >
                    NEXT
                  </Button>
                </div>
              )}

              {currentQuestion.type === "name-input" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="First"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 rounded-xl focus:bg-white/15 focus:border-accent transition-all duration-300"
                        autoFocus
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-accent text-sm font-medium">
                        <Shield className="w-4 h-4 mr-1" />
                        SECURE
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Last"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 rounded-xl focus:bg-white/15 focus:border-accent transition-all duration-300"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-accent text-sm font-medium">
                        <Shield className="w-4 h-4 mr-1" />
                        SECURE
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="w-full bg-accent hover:bg-accent-light text-primary py-6 px-6 text-lg font-bold rounded-xl"
                  >
                    NEXT
                  </Button>
                </div>
              )}

              {currentQuestion.type === "phone-input" && (
                <div className="space-y-6">
                  <div className="relative">
                    <Input
                      type="tel"
                      placeholder="( ) - "
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 rounded-xl focus:bg-white/15 focus:border-accent transition-all duration-300"
                      autoFocus
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-accent text-sm font-medium">
                      <Shield className="w-4 h-4 mr-1" />
                      SECURE
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="text"
                        name="verification"
                        value="text"
                        checked={formData.verificationMethod === "text"}
                        onChange={(e) => handleInputChange("verificationMethod", e.target.value)}
                        className="w-4 h-4 text-accent bg-white/10 border-white/30 focus:ring-accent focus:ring-2"
                      />
                      <label htmlFor="text" className="text-white text-lg">
                        Send a text message verification code
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="call"
                        name="verification"
                        value="call"
                        checked={formData.verificationMethod === "call"}
                        onChange={(e) => handleInputChange("verificationMethod", e.target.value)}
                        className="w-4 h-4 text-accent bg-white/10 border-white/30 focus:ring-accent focus:ring-2"
                      />
                      <label htmlFor="call" className="text-white text-lg">
                        Call me with a verification code
                      </label>
                    </div>
                  </div>

                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="w-full bg-accent hover:bg-accent-light text-primary py-6 px-6 text-lg font-bold rounded-xl"
                  >
                    Get My Lender! <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <div className="text-xs text-white/60 text-center leading-relaxed">
                    By submitting, I am providing my electronic signature and I agree my information 
                    may be shared and that I may be contacted at this number (including through emails, 
                    and/or autodialed or pre-recorded calls or texts or generative AI, carrier rates may 
                    apply) by the company I may select in the next part of this form, or their designated 
                    agent, for marketing purposes and for receiving lending or homebuying assistance or 
                    information, even if I am on a Do Not Call List. I agree to accept delivery of 
                    documents electronically; I agree to the privacy policy and terms. I may receive 
                    service without this consent by contacting Mortgage Research Center. I agree that 
                    my consent is not required or a condition of any purchase.
                  </div>
                </div>
              )}
            </div>

            {/* Back Button (for most questions) */}
            {currentQuestion.type !== "phone-input" && (
              <div className="text-center">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="text-white/80 hover:text-white py-3 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;