import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustLayer from '@/components/shared/TrustLayer';
import PathCards from '@/components/home/PathCards';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CalculatorTeaser from '@/components/home/CalculatorTeaser';
import EducationTeaser from '@/components/home/EducationTeaser';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustLayer />
        </div>
      </section>
      <PathCards />
      <HowItWorks />
      <Testimonials />
      <CalculatorTeaser />
      <EducationTeaser />
    </div>
  );
}