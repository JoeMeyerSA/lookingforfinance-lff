import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import EligibilityShell from '@/components/eligibility/EligibilityShell';
import IndividualFlow from '@/components/eligibility/IndividualFlow';
import BusinessFlow from '@/components/eligibility/BusinessFlow';
import FarmerFlow from '@/components/eligibility/FarmerFlow';
import DeveloperFlow from '@/components/eligibility/DeveloperFlow';
import SolarFlow from '@/components/eligibility/SolarFlow';

export default function EligibilityCheck() {
  const urlParams = new URLSearchParams(window.location.search);
  const pathType = urlParams.get('path') || 'individual';
  const [submitted, setSubmitted] = useState(false);

  const handleComplete = (formData) => {
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const flowConfig = {
    individual: {
      title: 'Individual Eligibility Pre-Check',
      subtitle: 'Personal finance guidance',
      guidanceTitle: 'Your guided route to finance',
      guidanceContent: (
        <>
          <p>This pre-check helps us understand your situation so we can provide realistic guidance on your options.</p>
          <p className="mt-2">We'll assess your eligibility and guide you through the best pathway for your circumstances.</p>
        </>
      ),
      trustPoints: [
        '15+ years helping individuals secure finance',
        'No obligation — just honest guidance',
        'We work with multiple funders to find the best fit',
        'Free initial consultation',
      ],
      feeDisclaimer: 'Initial eligibility pre-check is free. If we proceed to application, fees depend on the finance type and will be explained upfront. You only pay if we successfully help you.',
      component: IndividualFlow,
    },
    business: {
      title: 'Business Eligibility Pre-Check',
      subtitle: 'Business finance guidance',
      guidanceTitle: 'Your guided route to business finance',
      guidanceContent: (
        <>
          <p>Business finance eligibility depends on trading history, cash flow, and the purpose of funding.</p>
          <p className="mt-2">We'll assess your business situation and guide you on realistic funding options.</p>
        </>
      ),
      trustPoints: [
        'Experience with businesses of all sizes',
        'Access to mainstream and alternative funders',
        'Honest assessment of your options',
        'Help structuring your application properly',
      ],
      feeDisclaimer: 'Initial pre-check is free. Application fees vary by finance type and amount. We explain all costs before proceeding.',
      component: BusinessFlow,
    },
    farmer: {
      title: 'Agricultural Finance Pre-Check',
      subtitle: 'Farming finance guidance',
      guidanceTitle: 'Your guided route to agricultural finance',
      guidanceContent: (
        <>
          <p>Agricultural finance requires understanding of farming cycles, land values, and production capacity.</p>
          <p className="mt-2">We work with agricultural-focused funders who understand the farming sector.</p>
        </>
      ),
      trustPoints: [
        'Experience with agricultural finance',
        'Relationships with agricultural funders',
        'Understanding of seasonal cash flows',
        'Support through the application process',
      ],
      feeDisclaimer: 'Pre-check is free. Success fees apply if we help secure funding. All costs explained upfront.',
      component: FarmerFlow,
    },
    developer: {
      title: 'Development Finance Pre-Check',
      subtitle: 'Property development guidance',
      guidanceTitle: 'Your guided route to development finance',
      guidanceContent: (
        <>
          <p>Development finance is complex. Funders assess project viability, your track record, and equity contribution.</p>
          <p className="mt-2">We help structure applications to maximise approval chances.</p>
        </>
      ),
      trustPoints: [
        'Experience with development finance',
        'Access to specialist development funders',
        'Help structuring deals properly',
        'Guidance on phasing and drawdowns',
      ],
      feeDisclaimer: 'Pre-check is free. Development finance fees vary by project size and complexity. Transparent fee structure explained before proceeding.',
      component: DeveloperFlow,
    },
    solar: {
      title: 'Solar & Backup Power Finance Pre-Check',
      subtitle: 'Energy solution finance',
      guidanceTitle: 'Your guided route to solar finance',
      guidanceContent: (
        <>
          <p>Solar and backup power systems can be financed, typically over 5-7 years.</p>
          <p className="mt-2">We'll assess eligibility and help you understand monthly costs vs electricity savings.</p>
        </>
      ),
      trustPoints: [
        'Access to solar-specific finance options',
        'Help evaluating quotes and proposals',
        'Guidance on realistic payback periods',
        'Support from pre-check to installation',
      ],
      feeDisclaimer: 'Pre-check is free. Finance arrangement fees apply if successful. All fees explained clearly before commitment.',
      component: SolarFlow,
    },
  };

  const config = flowConfig[pathType] || flowConfig.individual;
  const FlowComponent = config.component;

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-lg text-center"
        >
          <div className="w-20 h-20 bg-[#0d9488]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#0d9488]" />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-4">
            Pre-Check Received
          </h1>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Thank you for submitting your eligibility pre-check. We'll review your information and contact you within 1-2 business days. Outcomes are subject to assessment and final approval by the relevant funder.
          </p>
          <div className="p-4 bg-slate-50 rounded-xl mb-6">
            <h3 className="font-medium text-[#1e3a5f] mb-2">What happens next:</h3>
            <ol className="text-sm text-slate-600 text-left space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-medium text-[#0d9488]">1.</span>
                We'll assess your eligibility based on the information provided
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-[#0d9488]">2.</span>
                A consultant will call you to discuss realistic options
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-[#0d9488]">3.</span>
                If suitable, we'll guide you on the next steps and documentation
              </li>
            </ol>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline">
              <Link to={createPageUrl('Home')}>Return Home</Link>
            </Button>
            <Button asChild className="bg-[#0d9488] hover:bg-[#0f766e]">
              <Link to={createPageUrl('Calculators')}>Try a Calculator</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <EligibilityShell
      title={config.title}
      subtitle={config.subtitle}
      guidanceTitle={config.guidanceTitle}
      guidanceContent={config.guidanceContent}
      trustPoints={config.trustPoints}
      feeDisclaimer={config.feeDisclaimer}
    >
      <FlowComponent onComplete={handleComplete} />
    </EligibilityShell>
  );
}