import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Home, Sun, Car, Briefcase, Calculator, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import CalculatorGuidance from '@/components/calculators/CalculatorGuidance';
import BondAffordabilityCalculator from '@/components/calculators/BondAffordabilityCalculator';
import BondRepaymentCalculator from '@/components/calculators/BondRepaymentCalculator';
import SolarCalculator from '@/components/calculators/SolarCalculator';
import VehicleCalculator from '@/components/calculators/VehicleCalculator';
import BusinessCalculator from '@/components/calculators/BusinessCalculator';

export default function Calculators() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialTab = urlParams.get('tab') || 'affordability';
  
  const [activeTab, setActiveTab] = useState(initialTab);
  const [guidanceState, setGuidanceState] = useState('default');
  const [hasResults, setHasResults] = useState(false);

  const tabs = [
    { id: 'affordability', label: 'Bond Affordability', icon: Home, color: 'bg-rose-500' },
    { id: 'repayment', label: 'Bond Repayment', icon: Home, color: 'bg-blue-600' },
    { id: 'solar', label: 'Solar', icon: Sun, color: 'bg-amber-500' },
    { id: 'vehicle', label: 'Vehicle', icon: Car, color: 'bg-purple-500' },
    { id: 'business', label: 'Business', icon: Briefcase, color: 'bg-green-500' },
  ];

  const renderCalculator = () => {
    const sharedProps = {
      onGuidanceChange: setGuidanceState,
      onResultsChange: setHasResults,
    };
    
    switch (activeTab) {
      case 'affordability':
        return <BondAffordabilityCalculator key="affordability" {...sharedProps} />;
      case 'repayment':
        return <BondRepaymentCalculator key="repayment" {...sharedProps} />;
      case 'solar':
        return <SolarCalculator key="solar" {...sharedProps} />;
      case 'vehicle':
        return <VehicleCalculator key="vehicle" {...sharedProps} />;
      case 'business':
        return <BusinessCalculator key="business" {...sharedProps} />;
      default:
        return <BondAffordabilityCalculator key="affordability" {...sharedProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-[#1e3a5f] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-[#0d9488]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-[#0d9488]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Finance Calculators
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Estimate monthly payments and explore different scenarios. 
              Use these tools to help plan your finance needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="border-b border-slate-200 bg-white sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? `${tab.color} text-white shadow-lg`
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Content */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Guidance Panel - Desktop */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-40">
                <CalculatorGuidance 
                  type={activeTab} 
                  guidanceState={guidanceState}
                  hasResults={hasResults}
                />
              </div>
            </div>

            {/* Calculator */}
            <div className="lg:col-span-2">
              {/* Guidance Panel - Mobile (Collapsible) */}
              <div className="lg:hidden mb-6">
                <details className="bg-white rounded-2xl shadow-sm">
                  <summary className="p-4 cursor-pointer font-medium text-[#1e3a5f] flex items-center justify-between">
                    <span>Calculator Tips & Guidance</span>
                    <span className="text-slate-400 text-sm">Tap to expand</span>
                  </summary>
                  <div className="px-4 pb-4">
                    <CalculatorGuidance 
                      type={activeTab}
                      guidanceState={guidanceState}
                      hasResults={hasResults}
                    />
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                {renderCalculator()}
              </div>

              {/* CTA */}
              <div className="mt-6 bg-gradient-to-br from-[#1e3a5f] to-[#0f4c5c] rounded-2xl p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ready to check your eligibility?
                </h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Get a personalised assessment. Outcomes are subject to assessment and final approval by the relevant funder.
                </p>
                <Button asChild size="lg" className="bg-[#0d9488] hover:bg-[#0f766e] text-white">
                  <Link to={createPageUrl('EligibilityCheck')}>
                    Start eligibility check
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}