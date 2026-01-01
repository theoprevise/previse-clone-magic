import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Calculator, 
  DollarSign, 
  CreditCard, 
  Briefcase, 
  Home,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface PreQualData {
  annualIncome: string;
  monthlyDebts: string;
  creditScore: string;
  downPayment: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const PreQualificationCalculator = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    maxLoan: number;
    monthlyPayment: number;
    dti: number;
    score: number;
    status: 'excellent' | 'good' | 'fair' | 'needs_work';
  } | null>(null);
  
  const [formData, setFormData] = useState<PreQualData>({
    annualIncome: '',
    monthlyDebts: '',
    creditScore: '700',
    downPayment: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consent: false
  });

  const { toast } = useToast();

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const calculatePreQual = () => {
    const income = parseFloat(formData.annualIncome) || 0;
    const debts = parseFloat(formData.monthlyDebts) || 0;
    const credit = parseInt(formData.creditScore) || 700;
    const downPayment = parseFloat(formData.downPayment) || 0;

    const monthlyIncome = income / 12;
    const maxMonthlyPayment = monthlyIncome * 0.28; // 28% front-end ratio
    const maxTotalDebt = monthlyIncome * 0.43; // 43% back-end ratio
    const availableForMortgage = maxTotalDebt - debts;

    // Estimate max loan amount (simplified calculation)
    const interestRate = credit >= 740 ? 0.065 : credit >= 700 ? 0.070 : credit >= 660 ? 0.075 : 0.085;
    const monthlyRate = interestRate / 12;
    const termMonths = 360; // 30 years

    const maxLoanAmount = availableForMortgage > 0 
      ? (availableForMortgage * (Math.pow(1 + monthlyRate, termMonths) - 1)) / 
        (monthlyRate * Math.pow(1 + monthlyRate, termMonths))
      : 0;

    const maxHomePrice = maxLoanAmount + downPayment;
    const dti = ((debts + availableForMortgage) / monthlyIncome) * 100;

    // Score calculation
    let score = 50;
    if (credit >= 740) score += 25;
    else if (credit >= 700) score += 20;
    else if (credit >= 660) score += 10;
    
    if (dti <= 36) score += 25;
    else if (dti <= 43) score += 15;
    
    if (downPayment >= maxHomePrice * 0.20) score += 10;
    else if (downPayment >= maxHomePrice * 0.10) score += 5;

    const status = score >= 80 ? 'excellent' : score >= 60 ? 'good' : score >= 40 ? 'fair' : 'needs_work';

    setResult({
      maxLoan: Math.max(0, maxHomePrice),
      monthlyPayment: Math.max(0, availableForMortgage),
      dti: Math.min(100, Math.max(0, dti)),
      score,
      status
    });
  };

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.consent) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your contact information and agree to receive communications.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const leadData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        source: 'prequal_calculator',
        campaign_type: 'prequal_calculator',
        event_name: `PreQual: Income $${formData.annualIncome}, Credit ${formData.creditScore}`,
        sms_opt_in: formData.consent,
      };

      const { error } = await supabase.functions.invoke('send-to-zapier', {
        body: leadData,
      });

      if (error) throw error;

      calculatePreQual();
      setStep(5); // Show results

      toast({
        title: "Pre-qualification complete!",
        description: "A mortgage specialist will contact you soon.",
      });
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Income Information</h3>
              <p className="text-muted-foreground text-sm">Tell us about your annual income</p>
            </div>
            <div>
              <Label htmlFor="annualIncome">Annual Gross Income</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="annualIncome"
                  name="annualIncome"
                  type="number"
                  placeholder="75,000"
                  value={formData.annualIncome}
                  onChange={handleChange}
                  className="pl-8"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Debt & Credit</h3>
              <p className="text-muted-foreground text-sm">Monthly debts and credit score</p>
            </div>
            <div>
              <Label htmlFor="monthlyDebts">Monthly Debt Payments</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="monthlyDebts"
                  name="monthlyDebts"
                  type="number"
                  placeholder="500"
                  value={formData.monthlyDebts}
                  onChange={handleChange}
                  className="pl-8"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Car payments, credit cards, student loans, etc.</p>
            </div>
            <div>
              <Label htmlFor="creditScore">Estimated Credit Score</Label>
              <select
                id="creditScore"
                name="creditScore"
                value={formData.creditScore}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
              >
                <option value="760">Excellent (760+)</option>
                <option value="720">Very Good (720-759)</option>
                <option value="700">Good (700-719)</option>
                <option value="680">Fair (680-699)</option>
                <option value="660">Below Average (660-679)</option>
                <option value="620">Poor (620-659)</option>
                <option value="580">Very Poor (Below 620)</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Down Payment</h3>
              <p className="text-muted-foreground text-sm">How much can you put down?</p>
            </div>
            <div>
              <Label htmlFor="downPayment">Available Down Payment</Label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="downPayment"
                  name="downPayment"
                  type="number"
                  placeholder="20,000"
                  value={formData.downPayment}
                  onChange={handleChange}
                  className="pl-8"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
              <p className="text-muted-foreground text-sm">Get your personalized results</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-start gap-2 pt-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                className="mt-0.5"
                required
              />
              <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                I consent to receive calls, emails, and SMS/text messages from Previse Mortgage. *
              </label>
            </div>
          </div>
        );

      case 5:
        if (!result) return null;
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                result.status === 'excellent' ? 'bg-green-100' :
                result.status === 'good' ? 'bg-blue-100' :
                result.status === 'fair' ? 'bg-yellow-100' : 'bg-red-100'
              }`}>
                {result.status === 'excellent' || result.status === 'good' ? (
                  <CheckCircle className={`w-8 h-8 ${
                    result.status === 'excellent' ? 'text-green-600' : 'text-blue-600'
                  }`} />
                ) : (
                  <AlertCircle className={`w-8 h-8 ${
                    result.status === 'fair' ? 'text-yellow-600' : 'text-red-600'
                  }`} />
                )}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {result.status === 'excellent' ? 'Excellent!' :
                 result.status === 'good' ? 'Looking Good!' :
                 result.status === 'fair' ? 'Getting There' : 'Let\'s Work Together'}
              </h3>
              <p className="text-muted-foreground">
                Based on the information provided
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-muted/50">
                <p className="text-sm text-muted-foreground">Est. Home Budget</p>
                <p className="text-2xl font-bold text-foreground">
                  ${result.maxLoan.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
              </Card>
              <Card className="p-4 bg-muted/50">
                <p className="text-sm text-muted-foreground">Est. Monthly Payment</p>
                <p className="text-2xl font-bold text-foreground">
                  ${result.monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
              </Card>
            </div>

            <div className="bg-accent/10 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Pre-Qualification Score</span>
                <span className="text-lg font-bold text-accent">{result.score}/100</span>
              </div>
              <Progress value={result.score} className="h-2" />
            </div>

            <p className="text-sm text-muted-foreground text-center">
              A mortgage specialist from Previse Mortgage will contact you within 24 hours 
              to discuss your personalized options.
            </p>

            <Button 
              className="w-full"
              onClick={() => window.location.href = '/schedule'}
            >
              Schedule a Call Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="p-6 md:p-8 bg-card border-border max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-accent" />
        <h2 className="text-xl font-bold text-foreground">Pre-Qualification Calculator</h2>
      </div>

      {step <= 4 && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}

      {renderStep()}

      {step <= 4 && (
        <div className="flex gap-3 mt-6">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="flex-1"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}
          {step < 4 ? (
            <Button
              onClick={() => setStep(step + 1)}
              className="flex-1"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-accent hover:bg-accent-light text-primary"
            >
              {isSubmitting ? 'Calculating...' : 'See My Results'}
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};

export default PreQualificationCalculator;
