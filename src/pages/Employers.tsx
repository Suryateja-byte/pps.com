import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Clock, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageTransition } from '../components/PageTransition';
import { Accordion } from '../components/ui/Accordion';
import { Modal } from '../components/ui/Modal';
import { toast } from 'sonner';

export function Employers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Talent request submitted! Our team will contact you shortly.');
    setIsSubmitting(false);
    setIsModalOpen(false);
  };

  const faqs = [
    {
      question: "How quickly can you provide staff?",
      answer: "Depending on the specific requirements and volume, we can often provide qualified personnel within 24 to 48 hours. For immediate, short-term needs, we can sometimes dispatch workers the same day."
    },
    {
      question: "Do you handle payroll and taxes?",
      answer: "Yes. All temporary and temp-to-hire workers are employees of Pacesetter Personnel Services. We handle all payroll processing, tax withholdings, W-2s, and unemployment insurance."
    },
    {
      question: "What happens if a worker gets injured on the job?",
      answer: "Because they are our employees, we carry the Workers' Compensation insurance. If an injury occurs, we handle the claim process, mitigating your liability."
    },
    {
      question: "What is your screening process?",
      answer: "Our rigorous process includes E-Verify compliance, background checks, drug screening (upon request), skills assessments, and comprehensive safety orientations before they ever step foot on your site."
    }
  ];

  return (
    <>
      <SEO 
        title="Hire Reliable Staff in DFW" 
        description="Partner with PPS for fully vetted, safety-trained, and reliable personnel for construction, manufacturing, and logistics in Dallas-Fort Worth."
      />
      <div className="bg-light min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 text-orange text-xs font-semibold tracking-widest uppercase mb-8">
              <ShieldCheck size={14} /> 100% E-Verify & Fully Insured
            </div>
            <h1 className="text-6xl md:text-8xl font-medium text-navy mb-8 tracking-tight text-balance leading-[1.05]">
              Stop Worrying About <br />
              <span className="text-gray-400">Your Workforce.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-12 font-light text-balance">
              We provide fully vetted, safety-trained, and reliable personnel for DFW's most demanding industries. You focus on the project; we'll handle the people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-12" onClick={() => setIsModalOpen(true)}>Request Talent Now</Button>
              <Button variant="outline" size="lg" className="px-12">
                View Our Process
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The PPS Advantage */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Why Partner With Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy mb-6 tracking-tight text-balance">Built on Trust and Compliance</h3>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              We don't just fill orders; we mitigate your risk. Our rigorous standards ensure you get a workforce you can depend on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: <ShieldCheck size={40} className="text-orange" strokeWidth={1.5} />,
                title: 'Strict Compliance',
                desc: '100% E-Verify compliance and comprehensive background checks. We never cut corners on legal authorization.'
              },
              {
                icon: <Building2 size={40} className="text-orange" strokeWidth={1.5} />,
                title: "Comprehensive Workers' Comp",
                desc: "We carry full Workers' Compensation insurance. When you use PPS, you transfer the liability of workplace injuries to us."
              },
              {
                icon: <CheckCircle2 size={40} className="text-orange" strokeWidth={1.5} />,
                title: 'Safety First',
                desc: 'Every worker undergoes pre-site safety orientation. We maintain rigorous ongoing safety protocols.'
              },
              {
                icon: <Clock size={40} className="text-orange" strokeWidth={1.5} />,
                title: 'Rapid Deployment',
                desc: 'Need a crew tomorrow? Our extensive local database allows us to fulfill large orders quickly and accurately.'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-light p-10 rounded-3xl border border-gray-100 flex flex-col items-start"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-8">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-navy mb-4 tracking-tight">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staffing Solutions */}
      <section className="py-32 bg-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative">
               <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="https://picsum.photos/seed/premium-solutions/1000/1200" 
                  alt="Staffing solutions" 
                  className="rounded-3xl object-cover h-[700px] w-full"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Flexible Solutions</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight text-balance">Staffing Tailored to Your Needs</h3>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light text-balance">
                Whether you need a temporary crew for a short-term project or are looking to hire full-time employees, we have a solution.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: 'Temporary Staffing', desc: 'Flexible labor for seasonal peaks, special projects, or covering absences.' },
                  { title: 'Temp-to-Hire', desc: 'Evaluate a worker on the job before making a permanent hiring decision.' },
                  { title: 'Direct Hire', desc: 'Let us handle the recruiting, vetting, and interviewing for your permanent roles.' },
                  { title: 'On-Site Management', desc: 'For large volume accounts, we provide an on-site manager to handle all personnel logistics.' }
                ].map((solution, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex items-start gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <div className="mt-1">
                      <Users className="text-orange" size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-xl mb-2 tracking-tight">{solution.title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed">{solution.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Common Questions</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">Employer FAQs</h3>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/premium-cta-employer/1920/800" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter text-balance">Ready to Build Your Team?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light text-balance">
            Contact us today to discuss your staffing needs and discover how PPS can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto px-12" onClick={() => setIsModalOpen(true)}>
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Request Talent Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Request Talent">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy" placeholder="Your Company" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy" placeholder="John Doe" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy" placeholder="(555) 123-4567" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy bg-white">
              <option>Construction</option>
              <option>Manufacturing</option>
              <option>Warehouse & Logistics</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Workers Needed</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy bg-white">
              <option>1-5</option>
              <option>6-20</option>
              <option>21-50</option>
              <option>50+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy resize-none" placeholder="Tell us about the roles, timeline, and any specific requirements..."></textarea>
          </div>
          <Button size="lg" className="w-full py-4 text-lg" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </form>
      </Modal>
    </div>
    </>
  );
}
