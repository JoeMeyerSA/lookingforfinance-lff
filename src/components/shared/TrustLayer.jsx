import React from 'react';
import { Shield, CheckCircle, Users, Calculator, BadgeCheck } from 'lucide-react';

export default function TrustLayer({ variant = 'default' }) {
  const isCompact = variant === 'compact';

  return (
    <div className={isCompact ? 'space-y-4' : 'space-y-6'}>
      {/* Association */}
      <div className={`${isCompact ? 'pb-4' : 'pb-6'} border-b border-slate-200 text-center`}>
        <p className="text-sm text-slate-600">
          In association with{' '}
          <span className="font-semibold text-[#1e3a5f]">@360 Finance Stellenbosch</span>
        </p>
      </div>

      {/* Proof Points */}
      <div className={isCompact ? 'space-y-3' : 'grid sm:grid-cols-3 gap-6 lg:gap-8'}>
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-[#0d9488]" />
          </div>
          <div>
            <p className="font-medium text-[#1e3a5f] text-sm">Decades of experience</p>
            <p className="text-xs text-slate-600">Facilitating finance across multiple sectors</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-[#0d9488]" />
          </div>
          <div>
            <p className="font-medium text-[#1e3a5f] text-sm">Disciplined process</p>
            <p className="text-xs text-slate-600">Proper assessment and documentation</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-5 h-5 text-[#0d9488]" />
          </div>
          <div>
            <p className="font-medium text-[#1e3a5f] text-sm">Responsible guidance</p>
            <p className="text-xs text-slate-600">We won't push unsuitable finance</p>
          </div>
        </div>
      </div>

      {/* Support Partners */}
      <div className={`${isCompact ? 'pt-3 pb-3' : 'pt-4 pb-4'} border-t border-slate-200`}>
        <p className="text-xs font-medium text-slate-700 mb-3 text-center">Specialist support when needed:</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calculator className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="text-xs font-medium text-[#1e3a5f]">Accounting</p>
              <p className="text-xs text-slate-500">TaxShop Stellenbosch</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <BadgeCheck className="w-4 h-4 text-[#0d9488]" />
            </div>
            <div className="text-left">
              <p className="text-xs font-medium text-[#1e3a5f]">FSP-registered advice</p>
              <p className="text-xs text-slate-500">Franschhoek Consulting — FSP 5815</p>
            </div>
          </div>
        </div>
      </div>

      {/* Funder Panel */}
      <div className={`${isCompact ? 'pt-4' : 'pt-6'} border-t border-slate-200`}>
        <p className="text-xs font-medium text-slate-700 mb-3 text-center">Working with multiple funders:</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
          {['Commercial banks', 'Registered credit providers', 'Specialist lenders', 'Private investors', 'Asset finance houses', 'Solar & equipment finance'].map((label, i) => (
            <div
              key={i}
              className="h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 px-2"
            >
              <span className="text-xs text-slate-400 text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 leading-relaxed text-center">
          We work with commercial banks plus a network of registered credit providers and investors. Options depend on fit and assessment.
        </p>
      </div>
    </div>
  );
}