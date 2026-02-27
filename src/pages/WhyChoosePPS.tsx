import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, FileCheck, HardHat, Building2, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageTransition } from '../components/PageTransition';

export function WhyChoosePPS() {
  return (
    <>
      <SEO 
        title="Why Choose PPS" 
        description="Discover why Pacesetter Personnel Services is the trusted staffing partner for DFW's top construction and logistics companies."
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
            The PPS <br />
            <span className="text-gray-400">Difference.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-12 font-light text-balance">
            Since 1994, we've built our reputation on unwavering compliance, rigorous safety standards, and a commitment to the DFW community.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Our Core Pillars</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">Built on a Foundation of Trust</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {[
              {
                icon: <FileCheck size={48} className="text-orange" strokeWidth={1.5} />,
                title: '100% E-Verify',
                desc: 'We utilize the federal E-Verify system for every single hire. We guarantee that every worker we dispatch is legally authorized to work in the United States, protecting you from I-9 audits and compliance fines.'
              },
              {
                icon: <HardHat size={48} className="text-orange" strokeWidth={1.5} />,
                title: 'Safety First Culture',
                desc: 'Safety isn\'t just a checklist; it\'s our culture. We conduct comprehensive pre-site safety orientations, provide necessary PPE, and perform regular on-site safety audits to protect our workers and your job site.'
              },
              {
                icon: <Building2 size={48} className="text-orange" strokeWidth={1.5} />,
                title: 'Full Insurance Coverage',
                desc: 'We carry robust Workers\' Compensation and General Liability insurance. When you partner with PPS, you transfer the risk. We handle the claims, the paperwork, and the liability.'
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-light p-8 lg:p-10 rounded-3xl border border-gray-100 flex flex-col items-start"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-sm mb-8 shrink-0">
                  {pillar.icon}
                </div>
                <h4 className="text-xl lg:text-2xl font-bold text-navy mb-4 tracking-tight break-words w-full">{pillar.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light text-sm lg:text-base">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vetting Process */}
      <section className="py-32 bg-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Our Process</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight text-balance">Rigorous Vetting. Reliable Results.</h3>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light text-balance">
                We don't just send warm bodies. Our multi-step screening process ensures you get workers who are qualified, safe, and ready to work hard.
              </p>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                {[
                  { step: '01', title: 'In-Person Interview', desc: 'Every candidate is interviewed face-to-face by our experienced recruiters to assess skills, attitude, and reliability.' },
                  { step: '02', title: 'Background & E-Verify', desc: 'Comprehensive background checks and mandatory E-Verify processing for legal work authorization.' },
                  { step: '03', title: 'Skills Assessment', desc: 'Verification of certifications (e.g., OSHA, forklift) and practical skills testing where applicable.' },
                  { step: '04', title: 'Safety Orientation', desc: 'Mandatory safety training covering general site safety, hazard recognition, and proper PPE usage.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-light bg-orange text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-navy text-xl mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative hidden lg:block">
               <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="https://picsum.photos/seed/premium-vetting/1000/1200" 
                  alt="Interview process" 
                  className="rounded-3xl object-cover h-[800px] w-full"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/premium-cta-why/1920/800" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter text-balance">Experience the Difference.</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light text-balance">
            Partner with a staffing agency that puts compliance, safety, and reliability first.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/employers">
              <Button size="lg" className="w-full sm:w-auto px-12">
                Request Talent
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 border-white/30 text-white hover:bg-white hover:text-navy">
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
