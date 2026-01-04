import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, Building2, Briefcase, Tractor, HardHat, Car, Sun,
  ArrowRight, ArrowLeft, CheckCircle, AlertCircle, FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function SolutionDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type') || 'residential';

  const solutions = {
    residential: {
      icon: Home,
      title: 'Residential Property Finance',
      subtitle: 'Finance for homes and residential properties',
      color: 'from-blue-500 to-blue-600',
      overview: 'Whether you\'re buying your first home, upgrading, or accessing equity in your existing property, we facilitate introductions and structured submissions to suitable funders. We work with multiple funders to identify options that suit your circumstances.',
      suitableFor: [
        'First-time buyers looking to purchase a home',
        'Existing homeowners wanting to refinance',
        'Property owners seeking to access equity',
        'Those purchasing additional residential properties',
      ],
      process: [
        'Initial eligibility assessment based on your profile',
        'Exploration of suitable funder options',
        'Guidance on documentation requirements',
        'Preparation and submission of application',
        'Support through the approval process',
      ],
      considerations: [
        'Finance approval depends on affordability assessment',
        'Deposit requirements vary by funder and property type',
        'Interest rates depend on credit profile and market conditions',
        'Property valuations are required by funders',
      ],
    },
    commercial: {
      icon: Building2,
      title: 'Commercial & Industrial Property Finance',
      subtitle: 'Finance for commercial and industrial properties',
      color: 'from-slate-600 to-slate-700',
      overview: 'Commercial and industrial property acquisitions require specialised finance solutions. We connect you with funders experienced in this sector and help structure applications appropriately.',
      suitableFor: [
        'Businesses acquiring own-use commercial premises',
        'Investors purchasing commercial properties',
        'Industrial property acquisitions',
        'Retail and office space purchases',
      ],
      process: [
        'Assessment of property and business viability',
        'Identification of suitable commercial funders',
        'Financial packaging and documentation',
        'Application submission and negotiation',
        'Transaction support to completion',
      ],
      considerations: [
        'Higher deposit requirements typical for commercial properties',
        'Business financials and property income considered',
        'Longer assessment timelines than residential',
        'Specialised valuations required',
      ],
    },
    business: {
      icon: Briefcase,
      title: 'Business Finance',
      subtitle: 'Working capital and business funding solutions',
      color: 'from-purple-500 to-purple-600',
      overview: 'From working capital to equipment finance, we help businesses find appropriate funding solutions. Our approach focuses on understanding your business needs and matching them with suitable funders.',
      suitableFor: [
        'Businesses needing working capital',
        'Equipment and machinery purchases',
        'Business expansion funding',
        'Invoice or debtor finance requirements',
      ],
      process: [
        'Business needs assessment',
        'Review of financial health and track record',
        'Identification of suitable funding options',
        'Application preparation and submission',
        'Ongoing relationship management',
      ],
      considerations: [
        'Business trading history affects options available',
        'Security or guarantees may be required',
        'Cash flow assessment is central to approval',
        'Different products suit different needs',
      ],
    },
    agricultural: {
      icon: Tractor,
      title: 'Agricultural Finance',
      subtitle: 'Tailored finance for farming operations',
      color: 'from-green-500 to-green-600',
      overview: 'Agricultural finance requires an understanding of farming cycles, land values, and operational needs. We work with funders experienced in the agricultural sector to find appropriate solutions.',
      suitableFor: [
        'Farmland acquisition or expansion',
        'Agricultural equipment purchases',
        'Working capital for farming operations',
        'Infrastructure development on farms',
      ],
      process: [
        'Assessment of farming operation and needs',
        'Review of land values and production capacity',
        'Matching with agricultural-focused funders',
        'Structured application preparation',
        'Support through seasonal considerations',
      ],
      considerations: [
        'Agricultural cycles affect cash flow timing',
        'Land valuations require specialised assessors',
        'Production history and projections are considered',
        'Environmental and water rights may be relevant',
      ],
    },
    development: {
      icon: HardHat,
      title: 'Property Development Finance',
      subtitle: 'Finance for property development projects',
      color: 'from-orange-500 to-orange-600',
      overview: 'Property development finance is complex and requires careful structuring. We help developers navigate funding options from land acquisition through construction to project completion.',
      suitableFor: [
        'Residential development projects',
        'Commercial development initiatives',
        'Land acquisition for development',
        'Construction and refurbishment projects',
      ],
      process: [
        'Project viability assessment',
        'Development finance structuring',
        'Funder identification and approach',
        'Drawdown scheduling and monitoring',
        'Exit strategy planning',
      ],
      considerations: [
        'Developer track record is important',
        'Pre-sales or pre-lets may be required',
        'Phased drawdowns tied to construction progress',
        'Higher interest rates reflect development risk',
      ],
    },
    vehicle: {
      icon: Car,
      title: 'Vehicle & Asset Finance',
      subtitle: 'Finance for vehicles and movable assets',
      color: 'from-rose-500 to-rose-600',
      overview: 'Whether for personal vehicles or business fleet and equipment, we help you find competitive asset finance solutions that match your needs and budget.',
      suitableFor: [
        'Personal vehicle purchases',
        'Business vehicle fleets',
        'Equipment and machinery',
        'Commercial vehicles and trucks',
      ],
      process: [
        'Assessment of asset and finance needs',
        'Comparison of finance options and rates',
        'Application preparation and submission',
        'Finance approval and documentation',
        'Asset delivery coordination',
      ],
      considerations: [
        'New vs used assets affect available options',
        'Residual value options for certain products',
        'Insurance requirements apply',
        'Asset age limits may apply',
      ],
    },
    solar: {
      icon: Sun,
      title: 'Solar & Backup Power Finance',
      subtitle: 'Finance for energy solutions',
      color: 'from-amber-500 to-amber-600',
      overview: 'With load shedding and rising electricity costs, solar and backup power systems are increasingly important. We help you find finance solutions that make these investments accessible.',
      suitableFor: [
        'Residential solar PV installations',
        'Commercial solar systems',
        'Battery storage solutions',
        'Backup generator systems',
      ],
      process: [
        'System size and cost assessment',
        'Finance option comparison',
        'Application and approval',
        'Coordination with installation',
        'System commissioning support',
      ],
      considerations: [
        'System size affects available finance',
        'Property ownership typically required',
        'Installation quality and warranties important',
        'Savings projections should be realistic',
      ],
    },
  };

  const solution = solutions[type] || solutions.residential;
  const Icon = solution.icon;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className={`bg-gradient-to-br ${solution.color} py-16 lg:py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to={createPageUrl('Solutions')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>
            
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {solution.title}
                </h1>
                <p className="text-xl text-white/80">
                  {solution.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-[#1e3a5f] mb-4">Overview</h2>
                <p className="text-slate-600 leading-relaxed">
                  {solution.overview}
                </p>
              </div>

              {/* Suitable For */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-[#1e3a5f] mb-4">This may be suitable for</h2>
                <ul className="space-y-3">
                  {solution.suitableFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-[#1e3a5f] mb-4">Our process</h2>
                <ol className="space-y-4">
                  {solution.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-slate-600 pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Considerations */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 lg:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <h2 className="text-xl font-semibold text-amber-900">Key considerations</h2>
                </div>
                <ul className="space-y-2">
                  {solution.considerations.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-amber-800">
                      <span className="text-amber-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-[#1e3a5f] rounded-2xl p-6 lg:p-8 text-white sticky top-24">
                <h3 className="text-xl font-semibold mb-3">Ready to explore?</h3>
                <p className="text-slate-300 mb-6">
                  Start with an eligibility pre-check. Outcomes are subject to assessment and final approval by the relevant funder.
                </p>
                <Button asChild size="lg" className="w-full bg-[#0d9488] hover:bg-[#0f766e]">
                  <Link to={createPageUrl('EligibilityCheck') + `?solution=${type}`}>
                    Start Eligibility Check
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <FileText className="w-4 h-4" />
                    <span>No obligation • Takes 5 minutes</span>
                  </div>
                </div>
              </div>

              {/* Calculator Link */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#1e3a5f] mb-2">Use our calculators</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Get an estimate of potential monthly payments.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={createPageUrl('Calculators')}>
                    Open Calculators
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