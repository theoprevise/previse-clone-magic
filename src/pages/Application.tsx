import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const Application = () => {
  const navigate = useNavigate();
  const { loanType } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    income: "",
    employmentStatus: "",
    propertyValue: "",
    downPayment: "",
    creditScore: "",
    debtToIncome: ""
  });

  const totalSteps = 10;
  const progress = ((currentStep - 1) / totalSteps) * 100;

  const steps = [
    { key: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name" },
    { key: "lastName", label: "Last Name", type: "text", placeholder: "Enter your last name" },
    { key: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
    { key: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
    { key: "income", label: "Annual Income", type: "number", placeholder: "Enter your annual income" },
    { key: "employmentStatus", label: "Employment Status", type: "text", placeholder: "e.g., Full-time, Self-employed" },
    { key: "propertyValue", label: "Property Value", type: "number", placeholder: "Enter estimated property value" },
    { key: "downPayment", label: "Down Payment", type: "number", placeholder: "Enter down payment amount" },
    { key: "creditScore", label: "Credit Score", type: "number", placeholder: "Enter your credit score" },
    { key: "debtToIncome", label: "Debt-to-Income Ratio", type: "number", placeholder: "Enter percentage (e.g., 30)" }
  ];

  const currentStepData = steps[currentStep - 1];

  const handleInputChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      [currentStepData.key]: value
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
    return type?.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ') || 'Mortgage';
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

            {/* Form Step */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8">
              <div className="space-y-6">
                <div>
                  <Label 
                    htmlFor={currentStepData.key}
                    className="text-white text-xl font-semibold mb-4 block"
                  >
                    {currentStepData.label}
                  </Label>
                  <Input
                    id={currentStepData.key}
                    type={currentStepData.type}
                    placeholder={currentStepData.placeholder}
                    value={formData[currentStepData.key as keyof typeof formData]}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-lg py-6 px-4 rounded-xl focus:bg-white/15 focus:border-accent transition-all duration-300"
                    autoFocus
                  />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:text-white px-8 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
              >
                <ArrowLeft className="mr-2" size={20} />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={!formData[currentStepData.key as keyof typeof formData]}
                className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary px-8 py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
              >
                {currentStep === totalSteps ? 'Submit' : 'Next'}
                {currentStep !== totalSteps && <ArrowRight className="ml-2" size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;