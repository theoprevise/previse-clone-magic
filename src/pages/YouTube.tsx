import React from 'react';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import UnifiedLeadForm from '@/components/UnifiedLeadForm';
import { Card } from '@/components/ui/card';
import { Play, Bell, FileText, Video, TrendingUp, Gift } from 'lucide-react';
import teddyImage from '@/assets/teddy-carbone.jpg';

const YouTube = () => {
  const benefits = [
    {
      title: "Weekly Video Content",
      description: "New educational videos every week covering mortgage tips, market updates, and homebuying strategies.",
      icon: <Video className="h-6 w-6" />,
    },
    {
      title: "Market Updates",
      description: "Stay informed with the latest mortgage rate trends and housing market analysis.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Step-by-Step Guides",
      description: "Easy-to-follow tutorials on navigating the mortgage and homebuying process.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Early Access",
      description: "Get notified about new videos before anyone else and access exclusive subscriber content.",
      icon: <Bell className="h-6 w-6" />,
    },
    {
      title: "Free Resources",
      description: "Download free guides, checklists, and calculators to help with your homebuying journey.",
      icon: <Gift className="h-6 w-6" />,
    },
    {
      title: "Live Q&A Sessions",
      description: "Join our live streams and get your mortgage questions answered in real-time.",
      icon: <Play className="h-6 w-6" />,
    },
  ];

  const faqs = [
    {
      question: "How often do you post new videos?",
      answer: "We post new educational content every week, including market updates, tips, and in-depth guides on mortgage topics.",
    },
    {
      question: "What kind of content can I expect?",
      answer: "Our videos cover everything from first-time homebuyer tips to advanced mortgage strategies, rate analysis, and real client success stories.",
    },
    {
      question: "Are there any exclusive resources for subscribers?",
      answer: "Yes! Subscribers get access to free downloadable guides, checklists, and early notifications about new content and events.",
    },
    {
      question: "Can I request specific topics?",
      answer: "Absolutely! We love hearing from our community. Submit your questions and topic suggestions, and we may feature them in future videos.",
    },
  ];

  const speaker = {
    name: "Teddy Carbone",
    title: "Senior Mortgage Advisor & Content Creator",
    image: teddyImage,
    bio: "Teddy creates educational content to help demystify the mortgage process. His straightforward approach and practical tips have helped thousands of viewers prepare for homeownership.",
  };

  // Featured video section
  const FeaturedVideo = () => (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="heading-section text-center text-foreground mb-8">
          Featured Video
        </h2>
        <Card className="max-w-4xl mx-auto overflow-hidden bg-card border-border">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <Play className="h-16 w-16 text-accent mx-auto mb-4" />
              <p className="text-muted-foreground">
                Subscribe below to get access to our latest video content and exclusive resources.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );

  return (
    <LandingPageTemplate
      heroTitle="Get Expert Mortgage Tips & Market Insights"
      heroSubtitle="YouTube Channel"
      heroDescription="Subscribe to our channel and get weekly videos with mortgage tips, market updates, and homebuying strategies delivered straight to your inbox."
      formComponent={
        <UnifiedLeadForm
          campaignType="youtube"
          eventName="YouTube Subscriber"
          submitButtonText="Get Free Resources"
          successRedirectPath="/youtube-thank-you"
        />
      }
      formTitle="Subscribe for Free Resources"
      formDescription="Enter your info to get notified about new videos and download our free homebuyer guides."
      benefits={benefits}
      benefitsTitle="What You'll Get"
      speaker={speaker}
      faqs={faqs}
      ctaTitle="Never Miss a Video"
      ctaDescription="Join our growing community of informed homebuyers and stay ahead of the market."
      backLink="/"
      backLinkText="Back to Home"
      additionalSections={<FeaturedVideo />}
    />
  );
};

export default YouTube;
