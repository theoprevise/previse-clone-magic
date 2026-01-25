import { ArrowRight, Clock, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ValuePropsSection = () => {
  const navigate = useNavigate();

  const valueProps = [
    {
      title: "Fast, Transparent Closings",
      subtitle: "Close with Confidence",
      description: "We anticipate challenges before they happen. That's the Previse difference — proactive service means fewer surprises and faster closings.",
      icon: Clock,
      image: "/lovable-uploads/81c3d0e2-fc9d-4271-9810-968ae126ecde.png",
      cta: { label: "See Our Process", path: "/mortgage-process-explained" },
      reverse: false,
    },
    {
      title: "Investment Property Specialists",
      subtitle: "Build Your Portfolio",
      description: "DSCR loans that qualify on property income, not your W-2s. Finance unlimited properties with competitive rates designed for serious investors.",
      icon: TrendingUp,
      image: "/lovable-uploads/98d44b60-643c-4309-9e3e-b32fb08c8a1e.png",
      cta: { label: "Explore DSCR Loans", path: "/investors" },
      reverse: true,
    },
    {
      title: "Your Loan, Your Way",
      subtitle: "Personalized Guidance",
      description: "From first-time buyers to seasoned investors, we match you with the right loan program. FHA, VA, Conventional, Jumbo — we've got options.",
      icon: Users,
      image: "/lovable-uploads/d7d9e1d7-4741-4705-97a2-a94043e38964.png",
      cta: { label: "View All Programs", path: "/mortgage-programs" },
      reverse: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary-dark to-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        {valueProps.map((prop, index) => (
          <div 
            key={index}
            className={`flex flex-col ${prop.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 mb-24 last:mb-0`}
          >
            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <img 
                  src={prop.image}
                  alt={prop.title}
                  className="relative rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover border border-white/10"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center">
                  <prop.icon className="text-accent" size={22} />
                </div>
                <span className="text-accent text-sm font-bold uppercase tracking-wider">
                  {prop.subtitle}
                </span>
              </div>
              
              <h2 className="heading-section text-white mb-6">
                {prop.title}
              </h2>
              
              <p className="text-body text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
                {prop.description}
              </p>
              
              <Button
                size="lg"
                className="group bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary font-bold rounded-full px-8"
                onClick={() => {
                  navigate(prop.cta.path);
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                }}
              >
                {prop.cta.label}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuePropsSection;
