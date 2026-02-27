import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';

export function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pacesetter Personnel Services",
    "image": "https://pps.com/logo.png",
    "@id": "https://pps.com",
    "url": "https://pps.com",
    "telephone": "(555) 123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "postalCode": "75001",
      "addressCountry": "US"
    }
  };

  return (
    <>
      <SEO 
        title="Industrial Staffing in Dallas-Fort Worth" 
        description="Pacesetter Personnel Services provides reliable, safety-trained, and E-Verify compliant industrial staffing solutions across the DFW Metroplex."
        schema={schema}
      />
      <div className="flex flex-col min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 text-orange text-xs font-semibold tracking-widest uppercase mb-8">
            <ShieldCheck size={14} /> E-Verify Compliant & Safety First
          </div>
          <h1 className="text-6xl md:text-8xl font-medium text-navy mb-8 leading-[1.05] tracking-tight text-balance">
            The Standard in <br />
            <span className="text-gray-400">Industrial Staffing.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl leading-relaxed font-light text-balance">
            Elevating the workforce in Dallas-Fort Worth since 1994. We connect elite employers with dependable, safety-trained personnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/employers">
              <Button size="lg" className="w-full sm:w-auto px-8">
                Request Talent
              </Button>
            </Link>
            <Link to="/job-seekers">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8">
                Find Opportunities
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: '30+', label: 'Years Experience' },
              { number: '10k+', label: 'Workers Placed' },
              { number: '100%', label: 'E-Verify Compliant' },
              { number: '24/7', label: 'On-Call Support' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center justify-center"
              >
                <h3 className="text-5xl font-bold text-navy mb-3 tracking-tighter">{stat.number}</h3>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Industries We Serve</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">Specialized Staffing for DFW's Toughest Jobs</h3>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center text-navy font-semibold hover:text-orange transition-colors group">
              View All Services <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Construction & Trades',
                desc: 'Carpenters, electricians, welders, and general site labor ready to build.',
                img: 'https://picsum.photos/seed/premium-construction-2/800/1000'
              },
              {
                title: 'Warehouse & Logistics',
                desc: 'Forklift operators, pickers, packers, and inventory specialists.',
                img: 'https://picsum.photos/seed/premium-warehouse/800/1000'
              },
              {
                title: 'Manufacturing',
                desc: 'Assembly line workers, machine operators, and quality control staff.',
                img: 'https://picsum.photos/seed/premium-manufacturing/800/1000'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden mb-8">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                <h4 className="text-2xl font-bold text-navy mb-3 tracking-tight">{service.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PPS (Split Layout) */}
      <section className="py-32 bg-white">
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
                  src="https://picsum.photos/seed/premium-teamwork/1000/1200"
                  alt="Diverse team of workers"
                  className="rounded-3xl object-cover h-[700px] w-full"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">The PPS Advantage</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight text-balance">We Take the Risk Out of Hiring.</h3>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light text-balance">
                Staffing shouldn't be a gamble. Since 1994, we've built our reputation on rigorous vetting, unwavering safety standards, and lightning-fast fulfillment.
              </p>

              <ul className="space-y-8 mb-12">
                {[
                  { title: '100% E-Verify Compliant', desc: 'Every worker is legally authorized to work in the US.' },
                  { title: 'Comprehensive Safety Programs', desc: 'Pre-site safety training and ongoing compliance checks.' },
                  { title: 'Full Workers\' Compensation', desc: 'We carry the insurance so you don\'t carry the liability.' }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex items-start gap-6"
                  >
                    <div className="mt-1">
                      <CheckCircle2 className="text-orange" size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-xl mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <Link to="/why-pps">
                <Button size="lg" variant="outline">Discover the Difference</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-light border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">Trusted by DFW's Best</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "PPS has been our go-to staffing partner for over a decade. When we need 50 reliable workers for a new site, they deliver without fail.",
                author: "Michael T.",
                role: "Operations Director, Texas Builders Inc.",
                rating: 5
              },
              {
                quote: "The safety standards and E-Verify compliance give us complete peace of mind. We don't have to worry about liability when we use PPS.",
                author: "Sarah J.",
                role: "HR Manager, DFW Logistics",
                rating: 5
              },
              {
                quote: "I found my current full-time job through PPS. They placed me at a great company, paid me on time every week, and treated me with respect.",
                author: "David R.",
                role: "Placed Candidate, CNC Machinist",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="text-orange fill-orange" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed font-light text-lg mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-navy">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/premium-cta/1920/800" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter text-balance">Ready to Get to Work?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light text-balance">
            Whether you need a reliable crew for your next big project, or you're looking for your next great opportunity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/employers">
              <Button size="lg" className="w-full sm:w-auto px-12">
                I Need Workers
              </Button>
            </Link>
            <Link to="/job-seekers">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 border-white/30 text-white hover:bg-white hover:text-navy">
                I Need a Job
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
