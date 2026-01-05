import React from 'react';
import { Shield, CheckCircle, Users, Calculator, BadgeCheck, Building2, FileCheck, Target, Users2, TrendingUp, Sun, ClipboardCheck, Network, FileText, Bell } from 'lucide-react';

export default function TrustLayer({ variant = 'default' }) {
  const isCompact = variant === 'compact';

  return (
    <div className={isCompact ? 'space-y-4' : 'space-y-6'}>
      {/* What to Expect Next - Module */}
      {!isCompact &&
      <div className="pb-6 border-b border-slate-200 text-center bg-slate-50 rounded-xl p-6">
          <div className="inline-block px-3 py-1 bg-[#0d9488]/10 mb-2" style={{ borderRadius: '4px' }}>
            <span className="text-base font-medium text-[#0d9488]">Why accept avoidable declines or delays when you're looking for finance?</span>
          </div>
          <p className="text-xs font-bold text-slate-600 mb-6">With 40+ years of combined banking experience, our finance specialists structure your application properly and guide you individually through the process.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6">
            <div className="flex flex-col items-center text-center gap-2 bg-white border border-slate-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <ClipboardCheck className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm mb-2">We listen, then structure</p>
                <div className="w-12 h-px bg-slate-200 mx-auto mb-2"></div>
                <p className="text-xs text-slate-600">When you're looking for finance, a <strong>scattergun approach</strong> wastes time and misses options. We start by <strong>understanding your story</strong> — your need, exposure and risk — then structure the <strong>most sensible route</strong>. Paperwork only starts once the <strong>route is clear and worth pursuing</strong>.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 bg-blue-50/30 border border-slate-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Network className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm mb-2">Matched to the right funders</p>
                <div className="w-12 h-px bg-slate-200 mx-auto mb-2"></div>
                <p className="text-xs text-slate-600">Most people go straight to their bank — but it <strong>may not be the best fit</strong> for your deal. <strong>Algorithmic, standard-case systems</strong> waste weeks before the substance is properly considered. We <strong>match your route</strong> to the funder <strong>most likely to consider</strong> your application first.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 bg-white border border-slate-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm mb-2">Funder-ready packaging</p>
                <div className="w-12 h-px bg-slate-200 mx-auto mb-2"></div>
                <p className="text-xs text-slate-600"><strong>Messy submissions</strong> get <strong>declined</strong> or trigger <strong>endless back-and-forth</strong> questions. We package your deal in a <strong>funder-ready format</strong> that's easy to assess — using only the documents that matter for your route. <strong>Less friction. Faster clarity.</strong></p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 bg-blue-50/30 border border-slate-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm mb-2">Driven follow-through</p>
                <div className="w-12 h-px bg-slate-200 mx-auto mb-2"></div>
                <p className="text-xs text-slate-600">Even good submissions <strong>can still stall</strong> if nobody drives the next step. We <strong>manage follow-ups</strong> and funder queries so your application <strong>stays active and visible</strong>. If any aspect is queried, we respond <strong>within 1 business day</strong> and keep the process moving.</p>
              </div>
            </div>
          </div>


        </div>
      }

      {/* Support Partners */}
      <div className={`${isCompact ? 'pt-6 pb-6' : 'pt-8 pb-8'} border-t border-slate-200 bg-slate-50/50 text-center`}>
        <div className="inline-block px-3 py-1 bg-[#0d9488]/10 mb-1 mx-auto" style={{ borderRadius: '4px' }}>
          <p className="text-sm font-medium text-[#0d9488] text-center">Specialist support when needed:</p>
        </div>
        <p className="text-xs text-slate-600 mb-4 text-center">Where specialist input is required, we bring in trusted partners so the application stays compliant and funder-ready.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calculator className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="text-[#1e3a5f] text-base font-semibold">Accounting</p>
              <p className="text-xs text-slate-500">TaxShop Stellenbosch</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <BadgeCheck className="w-4 h-4 text-[#0d9488]" />
            </div>
            <div className="text-left">
              <p className="text-[#1e3a5f] text-base font-semibold">Financial advice (when needed)</p>
              <p className="text-xs text-slate-500">Franschhoek Consulting — Authorised FSP 5815</p>
            </div>
          </div>
        </div>

        {/* Funder Panel */}
        <div className="pt-6 border-t border-slate-100 text-center">
          <div className="inline-block px-3 py-1 bg-[#0d9488]/10 mb-4 mx-auto" style={{ borderRadius: '4px' }}>
            <p className="text-sm font-medium text-[#0d9488] text-center">Working with multiple funders:</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
            {[
            { label: 'Banks', icon: Building2, color: 'text-blue-600' },
            { label: 'Registered financial credit providers', icon: FileCheck, color: 'text-green-600' },
            { label: 'Specialist lenders', icon: Target, color: 'text-purple-600' },
            { label: 'Private investors', icon: Users2, color: 'text-indigo-600' },
            { label: 'Asset finance houses', icon: TrendingUp, color: 'text-rose-600' },
            { label: 'Solar & equipment finance', icon: Sun, color: 'text-amber-600' }].
            map((item, i) =>
            <div
              key={i}
              className="flex flex-col items-center justify-center px-2 py-3">

                <item.icon className={`w-8 h-8 ${item.color} mb-2`} />
                <span className="text-xs text-slate-500 text-center leading-tight font-medium">{item.label}</span>
              </div>
            )}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed text-center">
            We work with banks and a network of registered credit providers and investors, matched to your route and risk profile. Options depend on fit and assessment by the relevant funder.
          </p>
        </div>
      </div>
    </div>);


}