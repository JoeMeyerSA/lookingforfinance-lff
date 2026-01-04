import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { AlertCircle, Info, Lightbulb, ArrowRight, TrendingUp } from 'lucide-react';

export default function CalculatorGuidance({ type, guidanceState = 'default', hasResults = false }) {
  const guidance = {
    mortgage: {
      default: {
        title: 'Mortgage Calculator',
        content: 'This calculator helps you estimate monthly payments for residential property finance. Use it to explore different scenarios and plan your budget.',
      },
      input: {
        title: 'Understanding the inputs',
        items: [
          { label: 'Property Price', text: 'The total purchase price or current value of the property' },
          { label: 'Deposit', text: 'Your upfront payment (typically 10-20% of the price). Larger deposits usually mean better rates' },
          { label: 'Interest Rate', text: 'Currently around prime (11.75%) for good credit. Your actual rate depends on your credit profile' },
          { label: 'Term', text: 'Loan duration in years (typically 20-30 years). Longer terms = lower monthly payments but more total interest' },
        ],
      },
      results: {
        title: 'What your results mean',
        content: 'The monthly payment shown is an estimate based on standard amortization. Your actual payment will depend on the funder\'s assessment and your credit profile. The total interest shows how much extra you\'ll pay over the loan term.',
      },
      next: {
        title: 'Ready for the next step?',
        content: 'Once you have a realistic budget in mind, check your eligibility to understand what\'s actually achievable for your situation.',
        link: createPageUrl('EligibilityCheck') + '?path=individual',
        linkText: 'Check eligibility for residential finance',
      },
    },
    solar: {
      default: {
        title: 'Solar & Backup Power Calculator',
        content: 'Calculate monthly payments for solar and backup power installations. Compare the payment against your electricity savings to see the real cost.',
      },
      input: {
        title: 'Understanding the inputs',
        items: [
          { label: 'System Cost', text: 'Total cost including panels, inverter, batteries, and installation' },
          { label: 'Deposit', text: 'Upfront payment (usually 10-20%). Some funders require a deposit for solar finance' },
          { label: 'Electricity Saving', text: 'Your estimated monthly saving from reduced electricity bills' },
          { label: 'Interest Rate', text: 'Solar finance rates are typically 12-15% (higher than home loans)' },
          { label: 'Term', text: 'Usually 5-7 years for solar finance (shorter than property loans)' },
        ],
      },
      results: {
        title: 'What your results mean',
        content: 'Compare the monthly payment to your current electricity bill. The "net monthly cost" shows what you\'ll actually pay after considering savings. The payback period shows how long until the system has paid for itself.',
      },
      next: {
        title: 'Ready for the next step?',
        content: 'Get quotes from reputable installers first, then check eligibility for solar finance based on your actual system cost.',
        link: createPageUrl('EligibilityCheck') + '?path=solar',
        linkText: 'Check eligibility for solar finance',
      },
    },
    vehicle: {
      default: {
        title: 'Vehicle & Asset Calculator',
        content: 'Estimate monthly payments for vehicle finance. You can include a balloon payment to reduce monthly costs (but remember the lump sum at the end).',
      },
      input: {
        title: 'Understanding the inputs',
        items: [
          { label: 'Vehicle Price', text: 'The purchase price of the vehicle or asset' },
          { label: 'Deposit', text: 'Your upfront payment (10-20% typical). Larger deposits improve approval chances' },
          { label: 'Interest Rate', text: 'Typically 11-14% for vehicles, depending on age and your credit profile' },
          { label: 'Term', text: 'Usually 5-7 years for vehicles (shorter for older vehicles)' },
          { label: 'Balloon Payment', text: 'Optional lump sum at the end (typically 20-30%). Reduces monthly payments but requires planning' },
        ],
      },
      results: {
        title: 'What your results mean',
        content: 'The monthly payment is your regular instalment. If you included a balloon, remember you\'ll need to pay that lump sum at the end (either in cash, by refinancing, or by selling the vehicle). Insurance is required and adds to your monthly cost.',
      },
      next: {
        title: 'Ready for the next step?',
        content: 'Once you\'ve settled on a budget and vehicle, check your eligibility to understand approval likelihood.',
        link: createPageUrl('EligibilityCheck') + '?path=individual',
        linkText: 'Check eligibility for vehicle finance',
      },
    },
    business: {
      default: {
        title: 'Business Loan Calculator',
        content: 'Estimate repayments for business finance. Remember: business loan rates vary widely based on risk profile and trading history.',
      },
      input: {
        title: 'Understanding the inputs',
        items: [
          { label: 'Loan Amount', text: 'How much your business needs to borrow' },
          { label: 'Interest Rate', text: 'Varies significantly (8-25%+) based on business profile, security, and trading history' },
          { label: 'Term', text: 'Depends on purpose: 1-3 years for working capital, up to 7 years for equipment' },
        ],
      },
      results: {
        title: 'What your results mean',
        content: 'The monthly repayment must be affordable from your business cash flow. Funders will assess whether your business can service the debt. The actual rate you receive depends heavily on your business financials and security offered.',
      },
      next: {
        title: 'Ready for the next step?',
        content: 'Business finance depends on trading history and cash flow. Check eligibility to understand what\'s realistic for your business.',
        link: createPageUrl('EligibilityCheck') + '?path=business',
        linkText: 'Check eligibility for business finance',
      },
    },
  };

  const config = guidance[type] || guidance.mortgage;

  return (
    <div className="space-y-5">
      {/* Default State */}
      {guidanceState === 'default' && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-[#0d9488]" />
            <h3 className="font-semibold text-[#1e3a5f] text-sm">{config.default.title}</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{config.default.content}</p>
        </div>
      )}

      {/* Input Help State */}
      {guidanceState === 'input' && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <h3 className="font-semibold text-[#1e3a5f] text-sm">{config.input.title}</h3>
          </div>
          <div className="space-y-3">
            {config.input.items.map((item, idx) => (
              <div key={idx} className="text-sm">
                <p className="font-medium text-slate-700">{item.label}</p>
                <p className="text-slate-600 text-xs leading-relaxed mt-0.5">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results Interpretation State */}
      {guidanceState === 'results' && hasResults && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-[#0d9488]" />
            <h3 className="font-semibold text-[#1e3a5f] text-sm">{config.results.title}</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{config.results.content}</p>
        </div>
      )}

      {/* Next Step State */}
      {guidanceState === 'next' && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ArrowRight className="w-4 h-4 text-[#0d9488]" />
            <h3 className="font-semibold text-[#1e3a5f] text-sm">{config.next.title}</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">{config.next.content}</p>
          <Link 
            to={config.next.link}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0d9488] hover:text-[#0f766e] transition-colors"
          >
            {config.next.linkText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Disclaimer - Always visible */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg">
          <AlertCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong>Please note:</strong> These are estimates only. Actual rates, terms, and monthly payments depend on your specific circumstances and funder assessment.
          </p>
        </div>
      </div>
    </div>
  );
}