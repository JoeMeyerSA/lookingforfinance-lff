import React from 'react';
import { Shield, CheckCircle, Users } from 'lucide-react';

export default function TrustLayer({ variant = 'default' }) {
  const isCompact = variant === 'compact';

  return (
    <div className={isCompact ? 'space-y-4' : 'space-y-6'}>
      {/* Association */}
      <div className={`${isCompact ? 'pb-4' : 'pb-6'} border-b border-slate-200`}>
        <p className="text-sm text-slate-600">
          In association with{' '}
          <span className="font-semibold text-[#1e3a5f]">@360 Finance Stellenbosch</span>
        </p>
      </div>

      {/* Proof Points */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-4 h-4 text-[#0d9488]" />
          </div>
          <div>
            <p className="font-medium text-[#1e3a5f] text-sm">15+ years experience</p>
            <p className="text-xs text-slate-600">Facilitating finance across multiple sectors</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-4 h-4 text-[#0d9488]" />
          </div>
          <div>
            <p className="font-medium text-[#1e3a5f] text-sm">Disciplined process</p>
            <p className="text-xs text-slate-600">Proper assessment and documentation</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Users className="w-4 h-4 text-[#0d9488]" />
          </div>
          <div>
            <p className="font-medium text-[#1e3a5f] text-sm">Responsible guidance</p>
            <p className="text-xs text-slate-600">We won't push unsuitable finance</p>
          </div>
        </div>
      </div>

      {/* Funder Panel */}
      <div className={`${isCompact ? 'pt-4' : 'pt-6'} border-t border-slate-200`}>
        <p className="text-xs font-medium text-slate-700 mb-3">Working with multiple funders:</p>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200"
            >
              <span className="text-xs text-slate-400">Funder</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          We work with a network of funders. Available options depend on fit and assessment.
        </p>
      </div>
    </div>
  );
}