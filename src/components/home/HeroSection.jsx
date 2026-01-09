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
            transition={{ duration: 0.6 }}>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your finance journey,{' '}
              <span className="text-[#0d9488]">made simple.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              From individuals to business owners—we connect you with the right funders and guide you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-6 text-lg">
                <Link to={createPageUrl('EligibilityCheck')} className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-6 text-lg">Start eligibility check


                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg">
                <Link to={createPageUrl('Calculators')} className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm hover:text-accent-foreground h-10 rounded-md bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm hover:text-accent-foreground h-10 rounded-md bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg">Calculate repayments


                </Link>
              </Button>
            </div>

            {/* What Happens Next */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 max-w-lg">
              <p className="text-white font-medium mb-3 text-sm">What happens next:</p>
              <ol className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-[#0d9488] rounded-full flex items-center justify-center text-white text-xs font-medium">1</span>
                  <span>Quick eligibility pre-check (5 minutes)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-[#0d9488] rounded-full flex items-center justify-center text-white text-xs font-medium">2</span>
                  <span>We review and contact you within 1-2 business days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-[#0d9488] rounded-full flex items-center justify-center text-white text-xs font-medium">3</span>
                  <span>If viable, we prepare and submit to suitable funders</span>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block">

            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0d9488]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">

                    <div className="w-12 h-12 bg-gradient-to-br from-[#0d9488] to-[#0f766e] rounded-xl flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Eligibility pre-check completed</p>
                      <p className="text-slate-300 text-sm">Multiple options available</p>
                    </div>
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="p-4 bg-white/5 rounded-xl border border-white/10">

                      <p className="text-slate-400 text-xs mb-1">Est. monthly</p>
                      <p className="text-2xl font-bold text-white">R 12,450</p>
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="p-4 bg-white/5 rounded-xl border border-white/10">

                      <p className="text-slate-400 text-xs mb-1">Term</p>
                      <p className="text-2xl font-bold text-white">20 years</p>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="p-4 bg-gradient-to-br from-[#0d9488]/30 to-[#0d9488]/20 rounded-xl border border-[#0d9488]/40">

                    <p className="text-[#5eead4] text-sm font-medium mb-1">🎉 Next step</p>
                    <p className="text-white font-medium">Documentation guidance ready</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}