import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';
import { PageTransition } from '../components/PageTransition';

export function Blog() {
  return (
    <>
      <SEO 
        title="Resources & Insights" 
        description="Read the latest news, tips, and insights on industrial staffing, safety, and career development from Pacesetter Personnel Services."
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
            Resources & <br />
            <span className="text-gray-400">Insights.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-12 font-light text-balance">
            Latest news, safety tips, and industry trends from the staffing experts at PPS.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'The Importance of E-Verify in Construction Staffing',
                excerpt: 'Why relying on a staffing agency that uses E-Verify is crucial for protecting your business from audits and fines.',
                date: 'Oct 15, 2025',
                author: 'PPS Safety Team',
                img: 'https://picsum.photos/seed/premium-blog-everify/800/600'
              },
              {
                title: 'Top 5 Safety Protocols for Warehouse Workers',
                excerpt: 'Essential safety tips every warehouse manager should enforce to minimize injuries and maximize productivity.',
                date: 'Sep 28, 2025',
                author: 'PPS Operations',
                img: 'https://picsum.photos/seed/premium-blog-warehouse/800/600'
              },
              {
                title: 'How Temp-to-Hire Reduces Turnover',
                excerpt: 'Discover how the temp-to-hire model allows employers to evaluate cultural fit and skills before making a permanent commitment.',
                date: 'Sep 10, 2025',
                author: 'PPS HR Dept',
                img: 'https://picsum.photos/seed/premium-blog-hiring/800/600'
              },
              {
                title: 'Preparing Your Construction Site for Winter Weather',
                excerpt: 'Texas winters can be unpredictable. Here is how to ensure your crew stays safe and productive when temperatures drop.',
                date: 'Aug 22, 2025',
                author: 'PPS Safety Team',
                img: 'https://picsum.photos/seed/premium-blog-winter/800/600'
              }
            ].map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-light rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group cursor-pointer flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 font-light">
                    <span className="flex items-center gap-2"><Calendar size={16} className="text-orange" strokeWidth={1.5} /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={16} className="text-orange" strokeWidth={1.5} /> {post.author}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-navy mb-4 group-hover:text-orange transition-colors tracking-tight">{post.title}</h4>
                  <p className="text-gray-500 mb-8 leading-relaxed font-light flex-grow">{post.excerpt}</p>
                  <span className="inline-flex items-center text-orange font-semibold group-hover:text-orange-hover transition-colors">
                    Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <Button variant="outline" size="lg" className="px-12">Load More Articles</Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
