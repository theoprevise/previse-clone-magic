import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Shield } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Application = () => {
  const navigate = useNavigate();
  const { loanType } = useParams();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Homebuying journey
    homebuyingJourney: "",
    // Step 2: Home budget
    homeBudget: "",
    // Step 3: First time buyer
    firstTimeBuyer: "",
    // Step 4: Purchase timing
    purchaseTiming: "",
    // Step 5: Military service
    militaryService: [] as string[],
    // Step 6: Savings amount
    savingsAmount: "",
    // Step 7: Employment status
    employmentStatus: "",
    // Step 8: Annual income
    annualIncome: "",
    // Step 9: Bankruptcy
    bankruptcy: "",
    // Step 10: Credit score
    creditScore: "",
    // Step 11: Credit services
    creditServices: "",
    // Step 12: Real estate agent
    realEstateAgent: "",
    // Step 13: Location
    location: "",
    // Step 14: ZIP code
    zipCode: "",
    // Step 15: Email
    email: "",
    // Step 16: Name
    firstName: "",
    lastName: "",
    // Step 17: Phone
    phone: ""
  });

  const totalSteps = 17;
  const progress = ((currentStep - 1) / totalSteps) * 100;

  const questions = [
    // Step 1: Homebuying journey
    {
      title: "Where are you at in the homebuying journey?",
      type: "single-choice",
      key: "homebuyingJourney",
      options: ["Just starting to research", "Looking at homes online", "Actively shopping", "Ready to make an offer", "Under contract"]
    },
    // Step 2: Home budget
    {
      title: "How much do you plan to spend on your new home?",
      type: "single-choice",
      key: "homeBudget",
      options: ["Less than $200,000", "$200,000 - $300,000", "$300,000 - $400,000", "$400,000 - $500,000", "$500,000 - $700,000", "More than $700,000"]
    },
    // Step 3: First time buyer
    {
      title: "Is this your first time purchasing a home?",
      type: "single-choice",
      key: "firstTimeBuyer",
      options: ["Yes", "No"]
    },
    // Step 4: Purchase timing
    {
      title: "When are you planning to make your home purchase?",
      type: "single-choice",
      key: "purchaseTiming",
      options: ["Immediately", "Within 30 days", "2-3 months", "3-6 months", "6+ months", "Just exploring options"]
    },
    // Step 5: Military service (multi-select)
    {
      title: "Have you or your spouse ever served in the military?",
      subtitle: "We may be able to get you access to VA loan benefits",
      type: "multi-choice",
      key: "militaryService",
      options: ["Currently serving", "Veteran", "Spouse of veteran", "None of the above"]
    },
    // Step 6: Savings amount
    {
      title: "How much do you currently have saved for a home purchase?",
      type: "single-choice",
      key: "savingsAmount",
      options: ["Less than $5,000", "$5,000 - $15,000", "$15,000 - $25,000", "$25,000 - $50,000", "$50,000 - $100,000", "More than $100,000"]
    },
    // Step 7: Employment status
    {
      title: "What is your current employment status?",
      type: "single-choice",
      key: "employmentStatus",
      options: ["Employed (W-2)", "Self-employed", "Retired", "Military", "Contract/1099", "Unemployed", "Other"]
    },
    // Step 8: Annual income
    {
      title: "What is your household gross (before taxes) annual income?",
      subtitle: "Include income from all household members",
      type: "single-choice",
      key: "annualIncome",
      options: ["Less than $50,000", "$50,000 - $75,000", "$75,000 - $100,000", "$100,000 - $150,000", "$150,000 - $200,000", "More than $200,000"]
    },
    // Step 9: Bankruptcy
    {
      title: "Have you declared bankruptcy in the last 3 years?",
      type: "single-choice",
      key: "bankruptcy",
      options: ["Yes", "No"]
    },
    // Step 10: Credit score
    {
      title: "What is your current credit score?",
      type: "single-choice",
      key: "creditScore",
      options: ["Excellent (740+)", "Good (680-739)", "Fair (640-679)", "Poor (580-639)", "Very Poor (Below 580)", "I don't know"]
    },
    // Step 11: Credit services
    {
      title: "Are you interested in other credit services?",
      type: "single-choice",
      key: "creditServices",
      options: ["Credit monitoring", "Credit repair", "Debt consolidation", "Personal loans", "Credit cards", "None of the above"]
    },
    // Step 12: Real estate agent
    {
      title: "Are you working with a real estate agent?",
      type: "single-choice",
      key: "realEstateAgent",
      options: ["Yes", "No", "I need a referral"]
    },
    // Step 13: Location
    {
      title: "Where are you looking to buy?",
      type: "input",
      key: "location",
      placeholder: "Enter city, state"
    },
    // Step 14: ZIP code
    {
      title: "What's your current ZIP code?",
      type: "input",
      key: "zipCode",
      placeholder: "Enter ZIP code"
    },
    // Step 15: Email
    {
      title: "What is your email address?",
      subtitle: "Your information is secure. Continuing here means you agree to our privacy policy and to receive information from Previse Mortgage about your loan options.",
      type: "input",
      key: "email",
      placeholder: "Enter email address"
    },
    // Step 16: Name
    {
      title: "What is your name?",
      type: "name-input",
      key: "name"
    },
    // Step 17: Phone
    {
      title: "What's the best number to reach you?",
      type: "phone-input",
      key: "phone"
    }
  ];

  const currentQuestion = questions[currentStep - 1];

  const handleOptionSelect = (value: string) => {
    if (currentQuestion.type === "multi-choice") {
      const currentKey = currentQuestion.key as "militaryService";
      const currentValues = formData[currentKey];
      
      if (value === "None of the above") {
        setFormData(prev => ({ ...prev, [currentKey]: ["None of the above"] }));
      } else {
        const filteredValues = currentValues.filter(v => v !== "None of the above");
        if (currentValues.includes(value)) {
          setFormData(prev => ({ 
            ...prev, 
            [currentKey]: filteredValues.filter(v => v !== value)
          }));
        } else {
          setFormData(prev => ({ 
            ...prev, 
            [currentKey]: [...filteredValues, value]
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
        if (currentStep < totalSteps) {
          setCurrentStep(prev => prev + 1);
        }
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = async () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit form to Supabase
      setIsSubmitting(true);
      console.log('Raw formData:', formData);
      
      try {
        const applicationData = {
          loan_type: loanType,
          homebuying_journey: formData.homebuyingJourney,
          home_budget: formData.homeBudget,
          first_time_buyer: formData.firstTimeBuyer,
          purchase_timing: formData.purchaseTiming,
          military_service: Array.isArray(formData.militaryService) && formData.militaryService.length > 0 ? formData.militaryService : null,
          savings_amount: formData.savingsAmount,
          employment_status: formData.employmentStatus,
          annual_income: formData.annualIncome,
          bankruptcy: formData.bankruptcy,
          credit_score: formData.creditScore,
          credit_services: formData.creditServices,
          real_estate_agent: formData.realEstateAgent,
          location: formData.location,
          zip_code: formData.zipCode,
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone
        };
        
        console.log('About to insert application data:', JSON.stringify(applicationData, null, 2));
        console.log('Military service array:', formData.militaryService);
        
        // Insert without trying to select the result since RLS prevents public reads
        const { error } = await supabase
          .from('mortgage_applications')
          .insert(applicationData);

        if (error) {
          console.error('Error submitting application:', error);
          throw error;
        }

        toast({
          title: "Success!",
          description: "Your application has been submitted successfully.",
        });
        navigate('/thank-you');
      } catch (error) {
        console.error('Error submitting application:', error);
        toast({
          title: "Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
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
      const currentKey = question.key as "militaryService";
      return formData[currentKey].length > 0;
    } else if (question.type === "input") {
      return !!formData[question.key as keyof typeof formData];
    } else if (question.type === "name-input") {
      return formData.firstName && formData.lastName;
    } else if (question.type === "phone-input") {
      return !!formData.phone;
    }
    
    return false;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">

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
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                {formatLoanType(loanType || '')} Application
              </h1>
            </div>

            {/* Progress Bar */}
            <div className="mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-3 shadow-medium border border-white/20">
                <Progress 
                  value={progress} 
                  className="h-6 bg-gradient-to-r from-primary-dark to-primary rounded-full overflow-hidden shadow-inner"
                />
                <div 
                  className="absolute top-10 text-sm text-accent font-bold transition-all duration-500 bg-accent/10 backdrop-blur-sm px-3 py-1 rounded-full border border-accent/20"
                  style={{ left: `${Math.max(0, Math.min(92, progress - 2.5))}%` }}
                >
                  {Math.round(progress)}%
                </div>
              </div>
            </div>

            {/* Question Content */}
            <div className="text-center mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {currentQuestion.title}
              </h2>
              {currentQuestion.subtitle && (
                <p className="text-white/70 text-lg mb-6 bg-white/5 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/10 shadow-soft">
                  {currentQuestion.subtitle}
                </p>
              )}
            </div>

            {/* Question Input/Options */}
            <div className="mb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
              {currentQuestion.type === "single-choice" && (
                <div className="space-y-4">
                  {currentQuestion.options?.map((option, index) => (
                    <Button
                      key={option}
                      variant="outline"
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full py-6 px-6 text-left text-lg rounded-xl border-2 transition-all duration-300 transform hover:scale-105 shadow-medium backdrop-blur-sm ${
                        formData[currentQuestion.key as keyof typeof formData] === option
                          ? 'bg-accent text-primary border-accent font-bold shadow-accent scale-105'
                          : 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-accent/30 hover:shadow-glow'
                      }`}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}

              {currentQuestion.type === "multi-choice" && (
                <div className="space-y-6">
                  <div className="space-y-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-medium">
                    {currentQuestion.options?.map((option, index) => {
                      const currentKey = currentQuestion.key as "militaryService";
                      return (
                        <div key={option} className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                          <input
                            type="checkbox"
                            id={option}
                            checked={formData[currentKey].includes(option)}
                            onChange={() => handleOptionSelect(option)}
                            className="w-6 h-6 text-accent bg-white/10 border-white/30 rounded-md focus:ring-accent focus:ring-2 accent-accent"
                          />
                          <label htmlFor={option} className="text-white text-lg cursor-pointer flex-1">
                            {option}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="w-full bg-accent hover:bg-accent-light text-primary py-6 px-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-accent disabled:opacity-50 disabled:hover:scale-100"
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
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 rounded-xl focus:bg-white/15 focus:border-accent transition-all duration-300 shadow-medium backdrop-blur-sm hover:shadow-glow focus:shadow-accent"
                      autoFocus
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-accent text-sm font-medium bg-accent/10 backdrop-blur-sm px-2 py-1 rounded-md">
                      <Shield className="w-4 h-4 mr-1 animate-pulse" />
                      SECURE
                    </div>
                  </div>
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="w-full bg-accent hover:bg-accent-light text-primary py-6 px-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-accent disabled:opacity-50 disabled:hover:scale-100"
                  >
                    NEXT
                  </Button>
                </div>
              )}

              {currentQuestion.type === "name-input" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative animate-slide-up" style={{animationDelay: '0.8s'}}>
                      <Input
                        type="text"
                        placeholder="First"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 rounded-xl focus:bg-white/15 focus:border-accent transition-all duration-300 shadow-medium backdrop-blur-sm hover:shadow-glow focus:shadow-accent"
                        autoFocus
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-accent text-sm font-medium bg-accent/10 backdrop-blur-sm px-2 py-1 rounded-md">
                        <Shield className="w-4 h-4 mr-1 animate-pulse" />
                        SECURE
                      </div>
                    </div>
                    <div className="relative animate-slide-up" style={{animationDelay: '1.0s'}}>
                      <Input
                        type="text"
                        placeholder="Last"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 rounded-xl focus:bg-white/15 focus:border-accent transition-all duration-300 shadow-medium backdrop-blur-sm hover:shadow-glow focus:shadow-accent"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-accent text-sm font-medium bg-accent/10 backdrop-blur-sm px-2 py-1 rounded-md">
                        <Shield className="w-4 h-4 mr-1 animate-pulse" />
                        SECURE
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="w-full bg-accent hover:bg-accent-light text-primary py-6 px-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-accent disabled:opacity-50 disabled:hover:scale-100"
                  >
                    NEXT
                  </Button>
                </div>
              )}

              {currentQuestion.type === "phone-input" && (
                <div className="space-y-6">
                  <div className="relative animate-slide-up" style={{animationDelay: '0.8s'}}>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 rounded-xl focus:bg-white/15 focus:border-accent transition-all duration-300 shadow-medium backdrop-blur-sm hover:shadow-glow focus:shadow-accent"
                      autoFocus
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-accent text-sm font-medium bg-accent/10 backdrop-blur-sm px-2 py-1 rounded-md">
                      <Shield className="w-4 h-4 mr-1 animate-pulse" />
                      SECURE
                    </div>
                  </div>

                  <Button
                    onClick={handleNext}
                    disabled={!isStepValid() || isSubmitting}
                    className="w-full bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary py-6 px-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-accent disabled:opacity-50 disabled:hover:scale-100 animate-shimmer bg-[length:200%_100%]"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"} 
                    {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 animate-bounce-soft" />}
                  </Button>

                  <div className="text-xs text-white/60 text-center leading-relaxed bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-soft">
                    By submitting, I am providing my electronic signature and I agree my information may be shared and that I may be contacted at this number (including through emails, and/or autodialed or pre-recorded calls or texts or generative AI, carrier rates may apply) by the company I may select in the next part of this form, or their designated agent, for marketing purposes and for receiving lending or homebuying assistance or information, even if I am on a Do Not Call List. I agree to accept delivery of documents electronically; I agree to the privacy policy and terms. I may receive service without this consent by contacting Previse Mortgage LLC. I agree that my consent is not required or a condition of any purchase.
                  </div>
                </div>
              )}
            </div>

            {/* Back Button (for most questions) */}
            {currentQuestion.type !== "phone-input" && (
              <div className="text-center animate-slide-up" style={{animationDelay: '1.2s'}}>
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="text-white/80 hover:text-white py-3 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20"
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