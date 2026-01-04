import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { User, Building2, Tractor, HardHat, Sun, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PathCards() {
  const paths = [
    {
      icon: User,
      title: 'Individual',
      description: 'Personal finance solutions for homeowners and individuals',
      color: 'from-blue-500 to-blue-600',
      href: createPageUrl('EligibilityCheck') + '?path=individual',
    },
    {
      icon: Building2,
      title: 'Business',
      description: 'Working capital, equipment, and commercial property finance',
      color: 'from-purple-500 to-purple-600',
      href: createPageUrl('EligibilityCheck') + '?path=business',
    },
    {
      icon: Tractor,
      title: 'Farmer',
      description: 'Agricultural finance for land, equipment, and operations',
      color: 'from-green-500 to-green-600',
      href: createPageUrl('EligibilityCheck') + '?path=farmer',
    },
    {
      icon: HardHat,
      title: 'Developer',
      description: 'Property development and construction finance',
      color: 'from-orange-500 to-orange-600',
      href: createPageUrl('EligibilityCheck') + '?path=developer',
    },
    {
      icon: Sun,
      title: 'Solar / Backup Power',
      description: 'Finance for solar installations and backup power systems',
      color: 'from-amber-500 to-amber-600',
      href: createPageUrl('EligibilityCheck') + '?path=solar',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-3">
            Choose your path
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Select your category to start a tailored eligibility check
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            <p className="text-sm text-blue-800">Takes 5 minutes • No documents needed yet • Free consultation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                to={path.href}
                className="group block h-full bg-white rounded-xl p-5 shadow-sm border-2 border-slate-100 hover:border-[#0d9488] hover:shadow-md transition-all duration-200"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${path.color} flex items-center justify-center mb-3`}>
                  <path.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-[#1e3a5f] mb-1.5">
                  {path.title}
                </h3>
                <p className="text-xs text-slate-600 mb-3 leading-snug">
                  {path.description}
                </p>
                <div className="flex items-center text-[#0d9488] text-xs font-semibold pt-2 border-t border-slate-100">
                  Start check
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}