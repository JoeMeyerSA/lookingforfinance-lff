import React from 'react';
import { AlertCircle, Info, Lightbulb } from 'lucide-react';

export default function CalculatorGuidance({ type }) {
  const guidance = {
    mortgage: {
      title: 'Mortgage Calculator',
      description: 'Estimate your monthly repayments for residential property finance.',
      tips: [
        'Use a realistic interest rate – currently prime is around 11.75%',
        'Consider a 20-year term as standard, though terms up to 30 years are possible',
        'A larger deposit typically means better rates and lower monthly payments',
        'Remember to budget for additional costs like transfer duties and legal fees',
      ],
    },
    solar: {
      title: 'Solar & Backup Power Calculator',
      description: 'Estimate finance costs for solar PV and backup power installations.',
      tips: [
        'System costs vary widely – get quotes before using precise figures',
        'Solar finance terms are typically shorter (5-7 years)',
        'Consider the savings on electricity against the monthly payment',
        'Some funders offer specific solar finance products',
      ],
    },
    vehicle: {
      title: 'Vehicle & Asset Calculator',
      description: 'Estimate monthly payments for vehicle and equipment finance.',
      tips: [
        'Vehicle finance rates depend on the age and type of vehicle',
        'Consider balloon payments to reduce monthly costs (but remember the final lump sum)',
        'Insurance is typically required and should be budgeted separately',
        'New vehicles often qualify for better rates than used',
      ],
    },
    business: {
      title: 'Business Loan Calculator',
      description: 'Estimate repayments for business finance and working capital.',
      tips: [
        'Business loan rates vary widely based on risk profile',
        'Shorter terms are common for working capital',
        'Consider whether the investment will generate returns to cover repayments',
        'Your business trading history affects available rates',
      ],
    },
  };

  const g = guidance[type] || guidance.mortgage;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">{g.title}</h3>
        <p className="text-slate-600 text-sm">{g.description}</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium text-[#1e3a5f]">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          Tips for this calculator
        </div>
        <ul className="space-y-2">
          {g.tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full mt-1.5 flex-shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <div className="text-sm text-amber-800">
            <p className="font-medium mb-1">Estimates only</p>
            <p>
              These calculations are for illustration purposes. Actual rates, terms, and 
              payments depend on your specific circumstances and funder assessment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}