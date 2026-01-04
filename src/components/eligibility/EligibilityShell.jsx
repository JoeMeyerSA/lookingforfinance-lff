import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Shield, ChevronDown, ChevronUp } from 'lucide-react';

export default function EligibilityShell({ 
  title, 
  subtitle,
  guidanceTitle,
  guidanceContent,
  trustPoints,
  feeDisclaimer,
  children 
}) {
  const [guidanceOpen, setGuidanceOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-[#1e3a5f] py-4 px-4">
        <Link 
          to={createPageUrl('Home')}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-3 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        {subtitle && <p className="text-slate-300 text-sm mt-1">{subtitle}</p>}
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:min-h-screen">
        {/* Left Panel - Guidance */}
        <div className="lg:col-span-4 bg-white border-r border-slate-200">
          <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
            {/* Desktop Header */}
            <div className="hidden lg:block p-8 border-b border-slate-100">
              <Link 
                to={createPageUrl('Home')}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-[#1e3a5f] mb-4 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>
              <h1 className="text-2xl font-bold text-[#1e3a5f] mb-2">{title}</h1>
              {subtitle && <p className="text-slate-600">{subtitle}</p>}
            </div>

            {/* Mobile Collapsible */}
            <div className="lg:hidden border-b border-slate-200">
              <button
                onClick={() => setGuidanceOpen(!guidanceOpen)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium text-[#1e3a5f]">Guidance & Information</span>
                {guidanceOpen ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
            </div>

            {/* Guidance Content */}
            <div className={`${guidanceOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="p-6 lg:p-8 space-y-6">
                {guidanceTitle && (
                  <div>
                    <h2 className="font-semibold text-[#1e3a5f] mb-3">{guidanceTitle}</h2>
                    <div className="text-sm text-slate-600 space-y-2">{guidanceContent}</div>
                  </div>
                )}

                {trustPoints && trustPoints.length > 0 && (
                  <div className="p-4 bg-[#0d9488]/5 rounded-xl border border-[#0d9488]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-[#0d9488]" />
                      <span className="font-medium text-[#1e3a5f] text-sm">Why choose us</span>
                    </div>
                    <ul className="space-y-2">
                      {trustPoints.map((point, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-[#0d9488] mt-0.5">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {feeDisclaimer && (
                  <div className="text-xs text-slate-500 leading-relaxed">
                    <strong className="text-slate-700">Fees & Disclaimer:</strong> {feeDisclaimer}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="lg:col-span-8 p-4 lg:p-8">
          <div className="max-w-2xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}