import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Clock, DollarSign, ArrowRight, CheckCircle2, Upload } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { Accordion } from '../components/ui/Accordion';
import { Modal } from '../components/ui/Modal';
import { toast } from 'sonner';

const JOBS_DATA = [
  { title: 'Certified Forklift Operator', location: 'Grand Prairie, TX', pay: '$18 - $22/hr', type: 'Temp-to-Hire' },
  { title: 'Commercial Electrician', location: 'Dallas, TX', pay: '$25 - $35/hr', type: 'Contract' },
  { title: 'Warehouse Associate', location: 'Irving, TX', pay: '$16 - $18/hr', type: 'Immediate Start' },
  { title: 'Construction Laborer', location: 'Fort Worth, TX', pay: '$17 - $20/hr', type: 'Project Based' },
  { title: 'CNC Machinist', location: 'Arlington, TX', pay: '$22 - $28/hr', type: 'Temp-to-Hire' },
  { title: 'Welder (MIG/TIG)', location: 'Dallas, TX', pay: '$24 - $30/hr', type: 'Contract' },
];

export function JobSeekers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = locationFilter === '' || job.location.toLowerCase().includes(locationFilter.toLowerCase());
      return matchesSearch && matchesLocation;
    });
  }, [searchTerm, locationFilter]);

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsApplyModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success(`Application for ${selectedJob} submitted successfully!`);
    setIsSubmitting(false);
    setIsApplyModalOpen(false);
  };

  const faqs = [
    {
      question: "How often do I get paid?",
      answer: "We pay our employees weekly. You can choose to receive your pay via direct deposit to your bank account or through a paycard."
    },
    {
      question: "Do I need to pay a fee to get a job?",
      answer: "No. Our services are completely free for job seekers. We are paid by the employers who hire us to find great talent like you."
    },
    {
      question: "What kind of benefits do you offer?",
      answer: "We offer competitive pay, safety training, and the opportunity for temp-to-hire positions that can lead to permanent careers with full benefits at our partner companies."
    },
    {
      question: "What do I need to bring to apply?",
      answer: "Please bring two forms of ID for E-Verify purposes (such as a Driver's License and Social Security Card, or a Passport), and any relevant certifications or licenses for skilled trades."
    }
  ];

  return (
    <>
      <SEO 
        title="Find Industrial Jobs in DFW" 
        description="Search for immediate openings in construction, manufacturing, and warehouse jobs across Dallas-Fort Worth with Pacesetter Personnel Services."
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
            Find Your Next <br />
            <span className="text-gray-400">Great Opportunity.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-16 font-light text-balance">
            Immediate openings for general labor, skilled trades, and warehouse positions across the Dallas-Fort Worth Metroplex.
          </p>
          
          {/* Quick Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl bg-white p-4 md:p-2 rounded-3xl md:rounded-full border border-gray-200 flex flex-col md:flex-row gap-4 md:gap-2 shadow-sm"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Job title, keywords..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full bg-transparent border-none focus:outline-none focus:ring-0 text-navy placeholder:text-gray-400 text-lg"
              />
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200 self-center" />
            <div className="md:hidden h-px w-full bg-gray-200" />
            <div className="flex-1 relative">
              <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select 
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full bg-transparent border-none focus:outline-none focus:ring-0 text-navy appearance-none text-lg cursor-pointer"
              >
                <option value="" className="text-navy">All DFW Locations</option>
                <option value="dallas" className="text-navy">Dallas</option>
                <option value="fort worth" className="text-navy">Fort Worth</option>
                <option value="irving" className="text-navy">Irving</option>
                <option value="grand prairie" className="text-navy">Grand Prairie</option>
                <option value="arlington" className="text-navy">Arlington</option>
              </select>
            </div>
            <Button size="lg" className="md:w-auto w-full px-10 rounded-full h-14">Search</Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Hot Jobs</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">Immediate Openings</h3>
            </div>
            <Button variant="outline" className="hidden md:flex">View All Jobs</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group cursor-pointer flex flex-col h-full"
                >
                  <div className="flex-grow">
                    <h4 className="text-2xl font-bold text-navy mb-6 group-hover:text-orange transition-colors tracking-tight">{job.title}</h4>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-gray-500 font-light">
                        <MapPin size={18} className="mr-3 text-orange/80" strokeWidth={1.5} /> {job.location}
                      </div>
                      <div className="flex items-center text-gray-500 font-light">
                        <DollarSign size={18} className="mr-3 text-orange/80" strokeWidth={1.5} /> {job.pay}
                      </div>
                      <div className="flex items-center text-gray-500 font-light">
                        <Clock size={18} className="mr-3 text-orange/80" strokeWidth={1.5} /> {job.type}
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-300"
                    onClick={() => handleApply(job.title)}
                  >
                    Apply Now
                  </Button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500 font-light">No jobs found matching your criteria. Please try adjusting your search.</p>
              </div>
            )}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="w-full">View All Jobs</Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Benefits</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-navy mb-8 tracking-tight text-balance">Why Work With PPS?</h3>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light text-balance">
                We don't just find you a job; we find you the right job. We partner with top employers in DFW who value hard work and safety.
              </p>
              <ul className="space-y-8">
                {[
                  { title: 'Weekly Pay', desc: 'Get paid on time, every week. Direct deposit available.' },
                  { title: 'Safety Training', desc: 'We provide comprehensive safety training before you step on site.' },
                  { title: 'Temp-to-Hire Opportunities', desc: 'Many of our placements lead to permanent, full-time careers.' }
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
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="https://picsum.photos/seed/premium-welder/1000/1200" 
                  alt="Skilled worker" 
                  className="rounded-3xl object-cover h-[700px] w-full"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-32 bg-light border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-orange uppercase tracking-widest mb-4">Common Questions</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tight text-balance">Job Seeker FAQs</h3>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Apply Modal */}
      <Modal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} title="Apply for Position">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="bg-orange/10 p-4 rounded-xl mb-6">
            <p className="text-navy font-semibold">Applying for: <span className="text-orange">{selectedJob}</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy" placeholder="Doe" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy" placeholder="(555) 123-4567" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-orange/50 transition-colors cursor-pointer bg-white">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600 justify-center">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-orange hover:text-orange/80 focus-within:outline-none">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Brief Summary of Experience</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/50 text-navy resize-none" placeholder="Tell us briefly about your relevant experience..."></textarea>
          </div>
          <Button size="lg" className="w-full py-4 text-lg" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </Modal>
    </div>
    </>
  );
}
