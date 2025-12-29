import React from 'react';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import UnifiedLeadForm from '@/components/UnifiedLeadForm';
import { Home, Calendar, MapPin, DollarSign, Users, Clock } from 'lucide-react';
import teddyImage from '@/assets/teddy-carbone.jpg';

const OpenHouse = () => {
  const benefits = [
    {
      title: "Exclusive Property Access",
      description: "Get early access to view properties before they hit the open market.",
      icon: <Home className="h-6 w-6" />,
    },
    {
      title: "Expert Guidance",
      description: "Walk through with a mortgage specialist who can answer all your financing questions.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Pre-Approval On-Site",
      description: "Learn about your financing options and get pre-approved right at the event.",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "Neighborhood Insights",
      description: "Discover local amenities, schools, and community features in the area.",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: "Flexible Scheduling",
      description: "Choose a time that works for you with our convenient open house hours.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "No Obligation",
      description: "Explore freely with no pressure - we're here to help when you're ready.",
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  const faqs = [
    {
      question: "Do I need to be pre-approved to attend?",
      answer: "No pre-approval is required to attend our open houses. However, we can help you get pre-approved on-site if you find a property you love!",
    },
    {
      question: "What should I bring to the open house?",
      answer: "Just bring yourself and any questions you have! If you're seriously considering buying, having a recent pay stub and bank statement can help speed up the pre-approval process.",
    },
    {
      question: "Can I bring my family?",
      answer: "Absolutely! We encourage you to bring anyone who will be part of the home-buying decision.",
    },
    {
      question: "How long does a typical open house last?",
      answer: "Most open houses run for 2-3 hours, but you can stay as long as you need to thoroughly explore the property.",
    },
  ];

  const speaker = {
    name: "Teddy Carbone",
    title: "Senior Mortgage Advisor | Previse Mortgage",
    image: teddyImage,
    bio: "With years of experience in mortgage lending, Teddy helps families navigate the home buying process with personalized guidance and expert advice.",
  };

  return (
    <LandingPageTemplate
      heroTitle="Find Your Dream Home at Our Open House"
      heroSubtitle="Exclusive Event"
      heroDescription="Join us for an exclusive opportunity to tour beautiful homes and meet with mortgage experts who can help make your homeownership dreams a reality."
      formComponent={
        <UnifiedLeadForm
          campaignType="open_house"
          eventName="Open House Event"
          showAddressField={true}
          submitButtonText="Reserve My Spot"
          successRedirectPath="/thank-you"
        />
      }
      formTitle="Reserve Your Spot"
      formDescription="RSVP now to secure your place at our upcoming open house event."
      benefits={benefits}
      benefitsTitle="Why Attend Our Open House"
      speaker={speaker}
      faqs={faqs}
      ctaTitle="Ready to Find Your Dream Home?"
      ctaDescription="Don't miss this opportunity to explore beautiful properties and get expert mortgage advice all in one place."
      backLink="/"
      backLinkText="Back to Home"
    />
  );
};

export default OpenHouse;
