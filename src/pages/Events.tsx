import React from 'react';
import LandingPageTemplate from '@/components/LandingPageTemplate';
import UnifiedLeadForm from '@/components/UnifiedLeadForm';
import { GraduationCap, Users, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import teddyImage from '@/assets/teddy-carbone.jpg';

const Events = () => {
  const benefits = [
    {
      title: "Expert-Led Sessions",
      description: "Learn from industry professionals with years of mortgage and real estate experience.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Interactive Workshops",
      description: "Participate in hands-on activities and real-world scenarios to build your knowledge.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Networking Opportunities",
      description: "Connect with other homebuyers, real estate agents, and industry professionals.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Q&A Sessions",
      description: "Get your specific questions answered by mortgage experts during dedicated Q&A time.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Flexible Scheduling",
      description: "Choose from multiple event dates and times that fit your schedule.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Convenient Locations",
      description: "Events held at accessible locations throughout the area.",
      icon: <MapPin className="h-6 w-6" />,
    },
  ];

  const faqs = [
    {
      question: "Are these events free to attend?",
      answer: "Yes! All our educational events are completely free. We believe everyone deserves access to quality financial education.",
    },
    {
      question: "What topics are covered?",
      answer: "Our events cover a wide range of topics including first-time homebuying, mortgage options, credit improvement, down payment assistance programs, and more.",
    },
    {
      question: "Do I need to be ready to buy to attend?",
      answer: "Not at all! Our events are designed for anyone interested in learning about the home buying process, whether you're ready to buy now or planning for the future.",
    },
    {
      question: "Can I bring a friend or family member?",
      answer: "Absolutely! We encourage you to bring anyone who might benefit from the information we share.",
    },
  ];

  const speaker = {
    name: "Teddy Carbone",
    title: "Senior Mortgage Advisor | Previse Mortgage",
    image: teddyImage,
    bio: "Teddy is passionate about educating homebuyers and helping them understand the mortgage process. His workshops have helped hundreds of families achieve their homeownership goals.",
  };

  return (
    <LandingPageTemplate
      heroTitle="Free Educational Events for Homebuyers"
      heroSubtitle="Learn & Grow"
      heroDescription="Join our informative workshops and seminars designed to help you understand the home buying process, build your financial knowledge, and prepare for homeownership."
      formComponent={
        <UnifiedLeadForm
          campaignType="educational_event"
          eventName="Educational Event"
          submitButtonText="Register for Event"
          successRedirectPath="/events-thank-you"
        />
      }
      formTitle="Register for Upcoming Events"
      formDescription="Sign up to receive notifications about our upcoming educational events and workshops."
      benefits={benefits}
      benefitsTitle="What You'll Experience"
      speaker={speaker}
      faqs={faqs}
      ctaTitle="Start Your Education Journey Today"
      ctaDescription="Knowledge is power. Register now and take the first step toward confident homeownership."
      backLink="/"
      backLinkText="Back to Home"
    />
  );
};

export default Events;
