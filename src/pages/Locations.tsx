import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { PageTransition } from '../components/PageTransition';

export function Locations() {
  return (
    <>
      <SEO 
        title="Our Locations in DFW" 
        description="Find a Pacesetter Personnel Services branch near you in Dallas, Fort Worth, Irving, Grand Prairie, or Arlington."
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
            Serving the <br />
            <span className="text-gray-400">Metroplex.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-12 font-light text-balance">
            With multiple locations across Dallas-Fort Worth, we are perfectly positioned to serve your staffing needs quickly and efficiently.
          </p>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: 'Dallas (HQ)',
                address: '1234 Staffing Blvd, Suite 100, Dallas, TX 75201',
                phone: '(214) 555-0100',
                email: 'dallas@pacesetterpersonnel.com',
                hours: 'Mon-Fri: 5:00 AM - 6:00 PM'
              },
              {
                city: 'Fort Worth',
                address: '5678 Industrial Way, Fort Worth, TX 76102',
                phone: '(817) 555-0200',
                email: 'ftworth@pacesetterpersonnel.com',
                hours: 'Mon-Fri: 5:00 AM - 6:00 PM'
              },
              {
                city: 'Irving',
                address: '9101 Corporate Dr, Irving, TX 75038',
                phone: '(972) 555-0300',
                email: 'irving@pacesetterpersonnel.com',
                hours: 'Mon-Fri: 5:00 AM - 6:00 PM'
              },
              {
                city: 'Grand Prairie',
                address: '1122 Logistics Pkwy, Grand Prairie, TX 75050',
                phone: '(972) 555-0400',
                email: 'grandprairie@pacesetterpersonnel.com',
                hours: 'Mon-Fri: 5:00 AM - 6:00 PM'
              },
              {
                city: 'Arlington',
                address: '3344 Stadium Dr, Arlington, TX 76011',
                phone: '(817) 555-0500',
                email: 'arlington@pacesetterpersonnel.com',
                hours: 'Mon-Fri: 5:00 AM - 6:00 PM'
              }
            ].map((loc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-light p-10 rounded-3xl border border-gray-100 flex flex-col h-full"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange/10 mb-8">
                  <MapPin className="text-orange" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-navy mb-8 tracking-tight">{loc.city}</h3>
                
                <div className="space-y-6 text-gray-500 font-light flex-grow">
                  <p className="flex items-start gap-4">
                    <MapPin className="text-orange/50 shrink-0 mt-1" size={20} strokeWidth={1.5} />
                    <span>{loc.address}</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <Phone className="text-orange/50 shrink-0" size={20} strokeWidth={1.5} />
                    <span>{loc.phone}</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <Mail className="text-orange/50 shrink-0" size={20} strokeWidth={1.5} />
                    <span className="break-all">{loc.email}</span>
                  </p>
                  <p className="flex items-center gap-4">
                    <Clock className="text-orange/50 shrink-0" size={20} strokeWidth={1.5} />
                    <span>{loc.hours}</span>
                  </p>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <Button variant="outline" className="w-full">Get Directions</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
