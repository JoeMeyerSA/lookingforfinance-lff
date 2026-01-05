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
                <p className="text-xs text-slate-600">When you're looking for finance, a scattergun approach wastes time and misses options. We start by understanding your story — your need, exposure and risk — then structure the most sensible route. Paperwork only starts once the route is clear and worth pursuing.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 bg-blue-50/30 border border-slate-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Network className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm mb-2">Matched to the right funders</p>
                <div className="w-12 h-px bg-slate-200 mx-auto mb-2"></div>
                <p className="text-xs text-slate-600">Most people go straight to their bank — but it may not be the best fit for your deal. Algorithmic, standard-case systems waste weeks before the substance is properly considered. We match your route to the funder most likely to consider your application first.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 bg-white border border-slate-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm mb-2">Funder-ready packaging</p>
                <div className="w-12 h-px bg-slate-200 mx-auto mb-2"></div>
                <p className="text-xs text-slate-600">Messy submissions get declined or trigger endless back-and-forth questions. We package your deal in a funder-ready format that's easy to assess — using only the documents that matter for your route. Less friction. Faster clarity.</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 bg-blue-50/30 border border-slate-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-[#0d9488]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-[#0d9488]" />
              </div>
              <div>
                <p className="font-medium text-[#1e3a5f] text-sm mb-2">Driven follow-through</p>
                <div className="w-12 h-px bg-slate-200 mx-auto mb-2"></div>
                <p className="text-xs text-slate-600">Even good submissions can stall if nobody drives the next step. We manage follow-ups and funder queries so your application stays active and visible. If any aspect is queried, we respond within 1 business day and keep the process moving.</p>
              </div>
            </div>
          </div>


        </div>
      }

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
        <p className="text-xs text-slate-500 leading-relaxed text-center">
          We work with commercial banks and our network of registered financial credit providers or investors. Options depend on fit and assessment.
        </p>
      </div>
    </div>);

}