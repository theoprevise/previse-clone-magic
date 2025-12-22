import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const POPUP_DELAY_MS = 15000; // 15 seconds
const STORAGE_KEY = "lead_popup_dismissed";

const LeadCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Check if popup was already dismissed
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.first_name || !formData.last_name || !formData.email) {
      toast({
        title: "Required Fields",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        source: "popup",
      });

      if (error) throw error;

      toast({
        title: "Thank You!",
        description: "We'll be in touch with you soon.",
      });

      handleClose();
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-sm bg-background rounded-xl shadow-2xl border border-border overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-primary px-4 py-3 text-primary-foreground">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-bold">Get Your Free Consultation</h2>
          <p className="text-xs opacity-90">
            Let us help you find the perfect mortgage solution.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="first_name" className="text-sm">First Name *</Label>
              <Input
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="John"
                required
                className="h-9"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="last_name" className="text-sm">Last Name *</Label>
              <Input
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Doe"
                required
                className="h-9"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="h-9"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-sm">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className="h-9"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get My Free Consultation"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to be contacted about mortgage services.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadCapturePopup;
