import React from 'react';
import { MessageSquare, Route, FileCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Tell us what you need',
      description: 'Share your requirements and we\'ll understand your situation to identify suitable options.',
    },
    {
      number: '02',
      icon: Route,
      title: 'We confirm the right route',
      description: 'Based on your profile, we identify the most appropriate funders and finance pathways.',
    },
    {
      number: '03',
      icon: FileCheck,
      title: 'We prepare and submit',
      description: 'When viable, we help package your application properly and submit to selected funders.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
            How it works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A clear, guided process from initial enquiry to application submission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#0d9488]/10 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#0d9488]" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-12 -translate-x-1/2">
                  <ArrowRight className="w-6 h-6 text-slate-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}