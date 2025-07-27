import { Button } from "@/components/ui/button";
import { Check, Award, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/db4b2cd8-b7e7-45fa-a676-5be234dd4750.png" 
                alt="Professional mortgage broker"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 z-0"></div>
          </div>
          
          <div>
            <div className="mb-6">
              <span className="text-accent font-semibold text-lg">About Me</span>
              <h2 className="text-4xl font-bold text-primary mt-2 mb-6">
                Your Trusted Mortgage Professional
              </h2>
            </div>
            
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p className="mb-4">
                With over 15 years of experience in the mortgage industry, I've helped thousands of families 
                achieve their dream of homeownership. My commitment goes beyond just securing a loan – I'm here 
                to guide you through every step of the process with transparency, expertise, and personalized service.
              </p>
              <p className="mb-6">
                Whether you're a first-time homebuyer, looking to refinance, or purchasing an investment property, 
                I have the knowledge and resources to find the right mortgage solution for your unique situation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-soft">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                  <Users className="text-primary" size={24} />
                </div>
                <div className="text-2xl font-bold text-primary">2500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-soft">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                  <TrendingUp className="text-accent" size={24} />
                </div>
                <div className="text-2xl font-bold text-primary">$500M+</div>
                <div className="text-sm text-muted-foreground">Loans Funded</div>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="text-success bg-success/10 rounded-full p-1" size={20} />
                <span className="text-foreground">NMLS Licensed Professional</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-success bg-success/10 rounded-full p-1" size={20} />
                <span className="text-foreground">15+ Years Industry Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-success bg-success/10 rounded-full p-1" size={20} />
                <span className="text-foreground">Top 1% Loan Officer Nationwide</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-success bg-success/10 rounded-full p-1" size={20} />
                <span className="text-foreground">Bilingual Services Available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Testimonials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;