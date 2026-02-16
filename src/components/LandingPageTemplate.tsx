import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQStructuredData from '@/components/FAQStructuredData';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface LandingPageTemplateProps {
  // Hero section
  heroTitle: string;
  heroSubtitle?: string;
  heroDescription?: string;
  heroBackgroundClass?: string;
  
  // Form section
  formComponent: ReactNode;
  formTitle?: string;
  formDescription?: string;
  
  // Benefits section
  benefits?: {
    title: string;
    description: string;
    icon?: ReactNode;
  }[];
  benefitsTitle?: string;
  
  // Speaker/Host section
  speaker?: {
    name: string;
    title: string;
    image?: string;
    bio?: string;
  };
  
  // FAQ section
  faqs?: {
    question: string;
    answer: string;
  }[];
  faqsTitle?: string;
  
  // CTA section
  ctaTitle?: string;
  ctaDescription?: string;
  showBottomCTA?: boolean;
  
  // Back link
  backLink?: string;
  backLinkText?: string;
  
  // Optional countdown
  countdownComponent?: ReactNode;
  
  // Additional content sections
  additionalSections?: ReactNode;
  
  children?: ReactNode;
}

export const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroBackgroundClass = "bg-gradient-to-br from-background via-primary/20 to-background",
  formComponent,
  formTitle = "Register Now",
  formDescription,
  benefits,
  benefitsTitle = "What You'll Learn",
  speaker,
  faqs,
  faqsTitle = "Frequently Asked Questions",
  ctaTitle,
  ctaDescription,
  showBottomCTA = true,
  backLink = "/",
  backLinkText = "Back to Home",
  countdownComponent,
  additionalSections,
  children,
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Link */}
      <div className="container mx-auto px-4 pt-24 pb-4">
        <Link to={backLink}>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backLinkText}
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className={`py-12 md:py-20 ${heroBackgroundClass}`}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {heroSubtitle && (
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {heroSubtitle}
                </span>
              )}
              <h1 className="heading-hero text-foreground">
                {heroTitle}
              </h1>
              {heroDescription && (
                <p className="text-body-lg text-muted-foreground">
                  {heroDescription}
                </p>
              )}
              {countdownComponent}
            </div>

            {/* Right Column - Form */}
            <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-sm border-border">
              {formTitle && (
                <h2 className="heading-card text-foreground mb-2">{formTitle}</h2>
              )}
              {formDescription && (
                <p className="text-muted-foreground mb-6">{formDescription}</p>
              )}
              {formComponent}
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="heading-section text-center text-foreground mb-12">
              {benefitsTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-accent">
                      {benefit.icon || <CheckCircle className="h-6 w-6" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Speaker Section */}
      {speaker && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="heading-section text-center text-foreground mb-12">
              Meet Your Host
            </h2>
            <Card className="max-w-2xl mx-auto p-6 md:p-8 bg-card border-border">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {speaker.image && (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full object-cover border-2 border-accent"
                  />
                )}
                <div className="text-center md:text-left">
                  <h3 className="heading-card text-foreground">{speaker.name}</h3>
                  <p className="text-accent font-medium">{speaker.title}</p>
                  {speaker.bio && (
                    <p className="text-muted-foreground mt-4">{speaker.bio}</p>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Additional Sections */}
      {additionalSections}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <>
        <FAQStructuredData faqs={faqs} />
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="heading-section text-center text-foreground mb-12">
              {faqsTitle}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 bg-card border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
        </>
      )}

      {/* Bottom CTA Section */}
      {showBottomCTA && (ctaTitle || ctaDescription) && (
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20">
          <div className="container mx-auto px-4 text-center">
            {ctaTitle && (
              <h2 className="heading-section text-foreground mb-4">{ctaTitle}</h2>
            )}
            {ctaDescription && (
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                {ctaDescription}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Children for additional custom content */}
      {children}

      <Footer />
    </div>
  );
};

export default LandingPageTemplate;
