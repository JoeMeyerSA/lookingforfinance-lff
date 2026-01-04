import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: Shield,
      title: '15+ Years',
      text: 'Registered financial intermediary',
    },
    {
      icon: Users,
      title: '500+ Clients',
      text: 'Individuals & businesses helped',
    },
    {
      icon: Award,
      title: 'No Upfront Fees',
      text: 'Initial consultation is free',
    },
    {
      icon: Clock,
      title: '48hr Response',
      text: 'We get back to you quickly',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Association Badge - Prominent */}
        <div className="flex items-center justify-center gap-3 mb-6 pb-6 border-b border-slate-100">
          <Shield className="w-5 h-5 text-[#0d9488]" />
          <span className="text-sm text-slate-700">
            In association with <strong className="text-[#1e3a5f] text-base">@360 Finance Stellenbosch</strong>
          </span>
          <span className="px-2 py-1 bg-[#0d9488]/10 text-[#0d9488] text-xs font-medium rounded-full">
            FSP Registered
          </span>
        </div>

        {/* Trust Points - Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d9488]/20 to-[#0d9488]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-[#0d9488]" />
              </div>
              <p className="font-bold text-[#1e3a5f] text-sm mb-1">{item.title}</p>
              <p className="text-xs text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}