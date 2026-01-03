import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#0f4c5c] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0d9488] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Financial solutions,{' '}
              <span className="text-[#0d9488]">clearly explained.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Check eligibility, explore scenarios, and get guided to the right finance pathway. 
              We help you understand your options before taking the next step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-6 text-lg">
                <Link to={createPageUrl('EligibilityCheck')}>
                  Start Eligibility Check
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link to={createPageUrl('Calculators')}>
                  <Calculator className="w-5 h-5 mr-2" />
                  Try a Calculator
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0d9488]" />
                No obligation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0d9488]" />
                Clear guidance
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0d9488]" />
                Expert support
              </span>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-[#0d9488] rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Eligibility confirmed</p>
                      <p className="text-slate-400 text-sm">Multiple options available</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-slate-400 text-sm">Est. monthly</p>
                      <p className="text-2xl font-bold text-white">R 12,450</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl">
                      <p className="text-slate-400 text-sm">Term</p>
                      <p className="text-2xl font-bold text-white">20 years</p>
                    </div>
                  </div>
                  <div className="p-4 bg-[#0d9488]/20 rounded-xl border border-[#0d9488]/30">
                    <p className="text-[#5eead4] text-sm">Next step</p>
                    <p className="text-white font-medium">Documentation guidance ready</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}