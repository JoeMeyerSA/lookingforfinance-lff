import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import PathCards from '@/components/home/PathCards';
import HowItWorks from '@/components/home/HowItWorks';
import CalculatorTeaser from '@/components/home/CalculatorTeaser';
import EducationTeaser from '@/components/home/EducationTeaser';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustStrip />
      <PathCards />
      <HowItWorks />
      <CalculatorTeaser />
      <EducationTeaser />
    </div>
  );
}