import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'First-time homebuyer',
      content: 'The team made the process so much easier than I expected. They explained everything clearly and helped me get approved when my own bank said no.',
      rating: 5,
      initial: 'S',
    },
    {
      name: 'David K.',
      role: 'Business owner',
      content: 'Excellent service from start to finish. They understood my business needs and found funding that actually worked for my cash flow.',
      rating: 5,
      initial: 'D',
    },
    {
      name: 'Lerato P.',
      role: 'Solar installation',
      content: 'I wanted solar but couldn\'t afford the upfront cost. They arranged finance that made it affordable, and now my electricity bills are way down.',
      rating: 5,
      initial: 'L',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Client Reviews
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
            What our clients say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real experiences from people we've helped navigate their finance journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 relative"
            >
              <Quote className="w-8 h-8 text-[#0d9488]/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0d9488] to-[#0f766e] rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-[#1e3a5f]">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-slate-500">
            Join hundreds of satisfied clients who found their finance pathway with us
          </p>
        </motion.div>
      </div>
    </section>
  );
}