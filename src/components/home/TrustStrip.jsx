import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: Shield,
      text: 'Experienced intermediary',
    },
    {
      icon: Users,
      text: 'Personalised guidance',
    },
    {
      icon: Award,
      text: 'Thorough preparation',
    },
    {
      icon: Clock,
      text: 'Clear process',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Association Badge */}
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full">
            <div className="w-2 h-2 bg-[#0d9488] rounded-full" />
            <span className="text-sm text-slate-600">
              In association with <strong className="text-[#1e3a5f]">@360 Finance Stellenbosch</strong>
            </span>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {trustItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                <item.icon className="w-4 h-4 text-[#0d9488]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}