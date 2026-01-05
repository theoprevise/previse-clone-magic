const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-0.5 bg-accent mb-16"></div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name*" 
                    required
                    className="w-full p-4 bg-transparent border-2 border-border rounded-lg text-white placeholder-white/60 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email*" 
                    required
                    className="w-full p-4 bg-transparent border-2 border-border rounded-lg text-white placeholder-white/60 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone*" 
                    required
                    className="w-full p-4 bg-transparent border-2 border-border rounded-lg text-white placeholder-white/60 focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    rows={6} 
                    placeholder="Message" 
                    className="w-full p-4 bg-transparent border-2 border-border rounded-lg text-white placeholder-white/60 focus:border-accent focus:outline-none resize-none"
                  ></textarea>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <span>📎</span>
                  <span>Attach Files</span>
                  <span className="ml-auto">Attachments (0)</span>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white text-primary py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">+1 (717)-819-5196</h3>
                <p className="text-white/80">
                  <a href="mailto:teddy@previsemortgage.com" className="hover:text-accent transition-colors">
                    teddy@previsemortgage.com
                  </a>
                </p>
                <p className="text-white/80 mt-4">
                  Spring Grove, PA 17362
                </p>
                <p className="text-white/80">
                  7178195196
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-4">Hours</h4>
                <div className="space-y-2 text-white/80">
                  <div className="flex justify-between">
                    <span>Mon</span>
                    <span>09:00 am – 05:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tue</span>
                    <span>09:00 am – 05:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wed</span>
                    <span>09:00 am – 05:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thu</span>
                    <span>09:00 am – 05:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fri</span>
                    <span>09:00 am – 05:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sat</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sun</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;