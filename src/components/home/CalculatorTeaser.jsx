import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Calculator, Home, Sun, Car, Briefcase, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CalculatorTeaser() {
  const calculators = [
    { icon: Home, label: 'Mortgage', color: 'bg-blue-100 text-blue-600' },
    { icon: Sun, label: 'Solar', color: 'bg-amber-100 text-amber-600' },
    { icon: Car, label: 'Vehicle', color: 'bg-purple-100 text-purple-600' },
    { icon: Briefcase, label: 'Business', color: 'bg-green-100 text-green-600' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0d9488]/10 rounded-full text-[#0d9488] text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              Planning Tools
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Explore scenarios with our calculators
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Use our calculators to estimate monthly payments and explore different scenarios. 
              These tools help you plan and understand what might be possible.
            </p>

            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                <strong>Estimates only:</strong> Calculator results are for planning purposes and do not represent actual finance offers. 
                Final terms depend on assessment and approval.
              </p>
            </div>

            <Button asChild size="lg" className="bg-[#0d9488] hover:bg-[#0f766e] text-white">
              <Link to={createPageUrl('Calculators')}>
                Open Calculators
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Calculator Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {calculators.map((calc, index) => (
                <Link
                  key={calc.label}
                  to={createPageUrl('Calculators') + `?tab=${calc.label.toLowerCase()}`}
                  className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#0d9488]/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${calc.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <calc.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-[#1e3a5f] group-hover:text-[#0d9488] transition-colors">
                    {calc.label} Calculator
                  </h3>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}