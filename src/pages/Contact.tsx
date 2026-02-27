import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { PageTransition } from '../components/PageTransition';
import { toast } from 'sonner';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Message sent successfully! We will get back to you soon.');
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Pacesetter Personnel Services for your industrial staffing needs in Dallas-Fort Worth."
      />
      <div className="bg-light min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-medium text-navy mb-8 tracking-tight text-balance"
          >
            Get in <br />
            <span className="text-gray-400">Touch.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-12 font-light text-balance">
            Whether you need to hire a crew for tomorrow or are looking for your next job opportunity, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <div>
              <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Reach Out</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-navy mb-12 tracking-tight text-balance">We're Here to Help</h3>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="bg-light p-4 rounded-2xl shrink-0 border border-gray-100">
                    <MapPin className="text-orange" size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-2xl mb-3 tracking-tight">Corporate Headquarters</h4>
                    <p className="text-gray-500 leading-relaxed font-light text-lg">
                      1234 Staffing Blvd, Suite 100<br />
                      Dallas, TX 75201
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-light p-4 rounded-2xl shrink-0 border border-gray-100">
                    <Phone className="text-orange" size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-2xl mb-3 tracking-tight">Phone</h4>
                    <p className="text-gray-500 leading-relaxed font-light text-lg">
                      Toll-Free: (800) 555-1234<br />
                      Local: (214) 555-0100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-light p-4 rounded-2xl shrink-0 border border-gray-100">
                    <Mail className="text-orange" size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-2xl mb-3 tracking-tight">Email</h4>
                    <p className="text-gray-500 leading-relaxed font-light text-lg break-all">
                      General: info@pacesetterpersonnel.com<br />
                      Sales: sales@pacesetterpersonnel.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-light p-10 md:p-12 rounded-3xl border border-gray-100">
              <h3 className="text-3xl font-bold text-navy mb-8 tracking-tight">Send Us a Message</h3>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-3">First Name</label>
                    <input type="text" id="firstName" className="w-full px-5 py-4 rounded-2xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy shadow-sm transition-shadow" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-3">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-5 py-4 rounded-2xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy shadow-sm transition-shadow" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">Email Address</label>
                  <input type="email" id="email" className="w-full px-5 py-4 rounded-2xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy shadow-sm transition-shadow" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-3">I am a...</label>
                  <div className="relative">
                    <select id="inquiryType" className="w-full px-5 py-4 rounded-2xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy appearance-none shadow-sm transition-shadow">
                      <option value="employer">Employer looking for staff</option>
                      <option value="jobseeker">Job seeker looking for work</option>
                      <option value="other">Other inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">Message</label>
                  <textarea id="message" rows={5} className="w-full px-5 py-4 rounded-2xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy resize-none shadow-sm transition-shadow" placeholder="How can we help you?"></textarea>
                </div>
                
                <Button size="lg" className="w-full flex items-center justify-center gap-3 py-4 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={20} />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
