import React from 'react';
import { Shield, CheckCircle, Users, Calculator, BadgeCheck, Building2, FileCheck, Target, Users2, TrendingUp, Sun, ClipboardCheck, Network, FileText, Bell } from 'lucide-react';

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

      {/* What to Expect Next - Module */}
      {!isCompact && (
        <div className="pb-6 border-b border-slate-200 text-center bg-slate-50 rounded-xl p-6">
          <div className="inline-block px-3 py-1 bg-[#0d9488]/10 rounded-full mb-2">
            <span className="text-xs font-medium text-[#0d9488]">Don't waste weeks — start with a protected 4-step route</span>
          </div>
          <p className="text-xs text-slate-600 mb-6">You can apply to multiple banks and hope — or we match you to the funder most likely to consider your application.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <ClipboardCheck className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm">Pre-check first</p>
                <p className="text-xs text-slate-600">We confirm fit before paperwork.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Network className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm">Matched to suitable options</p>
                <p className="text-xs text-slate-600">Commercial banks + our network of registered financial credit providers or investors.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm">Structured packaging</p>
                <p className="text-xs text-slate-600">Documents only when you choose to proceed.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm">Clear updates</p>
                <p className="text-xs text-slate-600">We keep you informed at each step.</p>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 leading-relaxed space-y-1">
            <p>Safety rail: If anything gets stuck during the assessment process, we'll unblock the next step within 1 business day.</p>
            <p>Packaging cover: If a funder queries a submission due to how we packaged the information, we'll correct it and resubmit within 1 business day.</p>
          </div>
        </div>
      )}

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
              <p className="text-xs font-medium text-[#1e3a5f]">Financial advice (when needed)</p>
              <p className="text-xs text-slate-500">Franschhoek Consulting — Authorised FSP 5815</p>
            </div>
          </div>
        </div>
      </div>

      {/* Funder Panel */}
      <div className={`${isCompact ? 'pt-4' : 'pt-6'} border-t border-slate-200`}>
        <p className="text-xs font-medium text-slate-700 mb-3 text-center">Working with multiple funders:</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
          {[
            { label: 'Commercial banks', icon: Building2, color: 'text-blue-600' },
            { label: 'Registered financial credit providers', icon: FileCheck, color: 'text-green-600' },
            { label: 'Specialist lenders', icon: Target, color: 'text-purple-600' },
            { label: 'Private investors', icon: Users2, color: 'text-indigo-600' },
            { label: 'Asset finance houses', icon: TrendingUp, color: 'text-rose-600' },
            { label: 'Solar & equipment finance', icon: Sun, color: 'text-amber-600' }
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center px-2 py-3"
            >
              <item.icon className={`w-8 h-8 ${item.color} mb-2`} />
              <span className="text-xs text-slate-500 text-center leading-tight font-medium">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 leading-relaxed text-center">
          We work with commercial banks and our network of registered financial credit providers or investors. Options depend on fit and assessment.
        </p>
      </div>
    </div>
  );
}