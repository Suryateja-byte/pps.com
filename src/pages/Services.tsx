import React from 'react';
import { motion } from 'motion/react';
import { HardHat, Users, Clock, Truck, Wrench, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageTransition } from '../components/PageTransition';

export function Services() {
  return (
    <>
      <SEO 
        title="Staffing Services" 
        description="Explore our staffing solutions for construction, warehouse, manufacturing, and skilled trades in Dallas-Fort Worth."
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
            Specialized Staffing <br />
            <span className="text-gray-400">Solutions.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-12 font-light text-balance">
            We provide elite, safety-trained personnel across construction, manufacturing, and logistics.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {[
              {
                title: 'Construction & Trades',
                desc: 'We provide the muscle and the expertise to keep your projects on schedule. Our workers arrive safety-trained and ready to build.',
                icon: <HardHat size={48} className="text-orange" strokeWidth={1.5} />,
                img: 'https://picsum.photos/seed/premium-construction-service/1000/1000',
                roles: ['General Laborers', 'Carpenters', 'Electricians', 'Plumbers', 'Welders', 'Heavy Equipment Operators']
              },
              {
                title: 'Warehouse & Logistics',
                desc: 'Keep your supply chain moving with reliable warehouse personnel. We handle seasonal spikes and long-term staffing needs.',
                icon: <Truck size={48} className="text-orange" strokeWidth={1.5} />,
                img: 'https://picsum.photos/seed/premium-warehouse-service/1000/1000',
                roles: ['Forklift Operators', 'Pickers & Packers', 'Shipping/Receiving', 'Inventory Clerks', 'Loaders/Unloaders', 'Assembly Workers']
              },
              {
                title: 'Manufacturing & Industrial',
                desc: 'Skilled operators and reliable line workers to ensure your production never stops. We understand the demands of modern manufacturing.',
                icon: <Wrench size={48} className="text-orange" strokeWidth={1.5} />,
                img: 'https://picsum.photos/seed/premium-manufacturing-service/1000/1000',
                roles: ['Machine Operators', 'Quality Control', 'Maintenance Technicians', 'Assembly Line Workers', 'Production Supervisors', 'CNC Machinists']
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="rounded-3xl object-cover h-[700px] w-full"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-orange/10 mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight text-balance">{service.title}</h3>
                  <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light text-balance">{service.desc}</p>
                  
                  <h4 className="font-bold text-navy text-xl mb-6 tracking-tight">Common Roles We Fill:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {service.roles.map((role, j) => (
                      <li key={j} className="flex items-center gap-4 text-gray-500 font-light">
                        <CheckCircle2 className="text-orange shrink-0" size={20} strokeWidth={1.5} />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/employers">
                    <Button size="lg" variant="outline">Request Staffing</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/premium-cta-services/1920/800" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter text-balance">Don't See Your Industry?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light text-balance">
            We have a vast database of candidates across many sectors. Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto px-12">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
