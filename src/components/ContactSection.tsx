import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-lg">Get In Touch</span>
          <h2 className="text-4xl font-bold text-primary mt-2 mb-6">
            Let's Discuss Your Home Loan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take the next step? I'm here to answer your questions and help you 
            navigate the mortgage process. Reach out today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Phone className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Call Me Direct</h3>
              <p className="text-muted-foreground mb-4">Speak with me personally about your mortgage needs</p>
              <div className="text-2xl font-bold text-primary mb-4">(555) 123-4567</div>
              <Button variant="outline" className="w-full">Call Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Mail className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Email Me</h3>
              <p className="text-muted-foreground mb-4">Send me your questions anytime</p>
              <div className="text-lg font-semibold text-primary mb-4">info@previsemortgage.com</div>
              <Button variant="outline" className="w-full">Send Email</Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-6">
                <Calendar className="text-success" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Schedule Meeting</h3>
              <p className="text-muted-foreground mb-4">Book a convenient time for a consultation</p>
              <div className="text-lg font-semibold text-primary mb-4">15-30 min slots available</div>
              <Button variant="success" className="w-full">Book Now</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input type="text" className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input type="text" className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input type="email" className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input type="tel" className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">How can I help you?</label>
                <select className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Purchase a home</option>
                  <option>Refinance my current mortgage</option>
                  <option>Investment property financing</option>
                  <option>Construction loan</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea rows={4} className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Tell me about your home financing goals..."></textarea>
              </div>
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Office Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    123 Main Street, Suite 400<br />
                    Your City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                  <Clock className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 7:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full">
                  <MessageSquare className="text-success" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                  <p className="text-muted-foreground">
                    I typically respond to messages within 2 hours during business hours 
                    and within 24 hours on weekends.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
              <h4 className="font-bold text-primary mb-2">NMLS Compliance</h4>
              <p className="text-sm text-muted-foreground">
                Licensed Mortgage Loan Originator<br />
                NMLS ID: 123456<br />
                Equal Housing Opportunity Lender
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;