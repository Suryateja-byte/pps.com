import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, Award } from 'lucide-react';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Pacesetter Personnel Services, our history, and our commitment to safety and reliability in DFW."
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
            Building DFW's Workforce <br />
            <span className="text-gray-400">Since 1994.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-12 font-light text-balance">
            For over three decades, Pacesetter Personnel Services has been the trusted bridge between hardworking individuals and the companies that build Texas.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight text-balance">Deep Roots in the Metroplex</h3>
              <div className="space-y-8 text-gray-500 text-xl leading-relaxed font-light">
                <p>
                  Founded in 1994, PPS started with a simple mission: to provide reliable, safe, and hardworking personnel to the growing industries of Dallas-Fort Worth.
                </p>
                <p>
                  We understood early on that staffing isn't just about filling quotas; it's about mitigating risk for employers and providing stable opportunities for workers. That's why we pioneered rigorous safety protocols, comprehensive Workers' Compensation coverage, and strict E-Verify compliance long before they became industry standards.
                </p>
                <p>
                  Today, we are proud to be a cornerstone of the DFW labor market, serving construction, manufacturing, and logistics companies with the same dedication we had on day one.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="https://picsum.photos/seed/premium-founder/1000/1200" 
                  alt="PPS Team" 
                  className="rounded-3xl object-cover h-[800px] w-full"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">What Drives Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">Our Core Values</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield size={40} className="text-orange" strokeWidth={1.5} />, title: "Safety First", desc: "We never compromise on the well-being of our workforce. Comprehensive training and strict compliance are non-negotiable." },
              { icon: <Target size={40} className="text-orange" strokeWidth={1.5} />, title: "Reliability", desc: "When we say we'll deliver a crew of 50 by 6 AM, they're there. We build trust through consistent execution." },
              { icon: <Users size={40} className="text-orange" strokeWidth={1.5} />, title: "Community", desc: "We are deeply invested in the DFW community, helping local businesses grow and local families thrive." },
              { icon: <Award size={40} className="text-orange" strokeWidth={1.5} />, title: "Integrity", desc: "100% E-Verify compliance, full insurance coverage, and transparent communication in everything we do." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-start"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-orange/10 mb-8">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-navy mb-4 tracking-tight">{value.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
