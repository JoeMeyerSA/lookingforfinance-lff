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
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
            Choose your path
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select the category that best describes your situation to get started with a tailored eligibility check.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
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
                className="group block h-full bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#0d9488]/30 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <path.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#0d9488] transition-colors">
                  {path.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {path.description}
                </p>
                <div className="flex items-center text-[#0d9488] text-sm font-medium">
                  Get started
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}