import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import TrustLayer from '@/components/shared/TrustLayer';
import { 
  Home, Building2, Briefcase, Tractor, HardHat, Car, Sun,
  ArrowRight, CheckCircle
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      id: 'residential',
      icon: Home,
      title: 'Residential Property Finance',
      description: 'Finance for purchasing, refinancing, or accessing equity in residential properties.',
      features: ['Purchase finance', 'Refinancing options', 'Equity access'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'commercial',
      icon: Building2,
      title: 'Commercial & Industrial Property Finance',
      description: 'Finance solutions for commercial, industrial, and retail property acquisitions.',
      features: ['Commercial purchases', 'Industrial properties', 'Retail spaces'],
      color: 'from-slate-600 to-slate-700',
    },
    {
      id: 'business',
      icon: Briefcase,
      title: 'Business Finance',
      description: 'Working capital, business loans, and finance solutions for growing businesses.',
      features: ['Working capital', 'Equipment finance', 'Expansion loans'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'agricultural',
      icon: Tractor,
      title: 'Agricultural Finance',
      description: 'Tailored finance for farming operations, land acquisition, and equipment.',
      features: ['Land acquisition', 'Equipment finance', 'Operational capital'],
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'development',
      icon: HardHat,
      title: 'Property Development Finance',
      description: 'Finance for property development projects from land acquisition to completion.',
      features: ['Development funding', 'Construction finance', 'Bridge finance'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 'vehicle',
      icon: Car,
      title: 'Vehicle & Asset Finance',
      description: 'Finance for vehicles, equipment, and other movable assets.',
      features: ['Vehicle finance', 'Equipment leasing', 'Asset-backed loans'],
      color: 'from-rose-500 to-rose-600',
    },
    {
      id: 'solar',
      icon: Sun,
      title: 'Solar & Backup Power Finance',
      description: 'Finance for solar installations, batteries, and backup power systems.',
      features: ['Solar PV systems', 'Battery storage', 'Backup generators'],
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-[#1e3a5f] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Finance Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Explore our range of finance pathways. We help you find the right route 
              and guide you through the process.
            </p>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              In association with{' '}
              <span className="font-semibold text-white">@360 Finance Stellenbosch</span>
            </p>
          </div>
        </div>
      </section>

      {/* Trust Layer */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustLayer />
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:border-[#0d9488]/30 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#0d9488] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0d9488] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2 mt-auto">
                    <Button asChild size="sm" className="w-full bg-[#0d9488] hover:bg-[#0f766e] text-sm">
                      <Link to={createPageUrl('EligibilityCheck') + `?solution=${solution.id}`}>
                        Check Eligibility
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="w-full text-sm hover:bg-slate-50">
                      <Link to={createPageUrl('SolutionDetail') + `?type=${solution.id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-4">
            Not sure which solution fits?
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Start an eligibility pre-check and we'll help identify the right pathway for your situation.
          </p>
          <Button asChild size="lg" className="bg-[#0d9488] hover:bg-[#0f766e]">
            <Link to={createPageUrl('EligibilityCheck')}>
              Start General Eligibility Check
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}