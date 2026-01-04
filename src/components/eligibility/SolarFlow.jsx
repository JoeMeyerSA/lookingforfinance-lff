import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Sun, Battery, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SolarFlow({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    systemType: '',
    propertyType: '',
    systemCost: '',
    name: '',
    email: '',
    phone: '',
    hasQuote: '',
    electricityBill: '',
  });

  const systemTypes = [
    { id: 'solar-battery', label: 'Solar + battery', icon: Sun, description: 'Full PV system with storage' },
    { id: 'solar-only', label: 'Solar only', icon: Sun, description: 'PV panels without battery' },
    { id: 'battery-only', label: 'Battery backup', icon: Battery, description: 'Battery system only' },
    { id: 'generator', label: 'Generator backup', icon: Zap, description: 'Diesel / gas generator' },
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">What type of system?</h2>
            <p className="text-sm text-slate-600 mb-6">Select the energy solution you need</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {systemTypes.map((type) => (
                <button key={type.id} type="button" onClick={() => { setFormData({ ...formData, systemType: type.id }); setTimeout(handleNext, 200); }}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${formData.systemType === type.id ? 'border-[#0d9488] bg-[#0d9488]/5' : 'border-slate-200 hover:border-slate-300'}`}>
                  <type.icon className={`w-8 h-8 mb-2 ${formData.systemType === type.id ? 'text-[#0d9488]' : 'text-slate-400'}`} />
                  <p className="font-medium text-[#1e3a5f] mb-1">{type.label}</p>
                  <p className="text-xs text-slate-500">{type.description}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">System details</h2>
            <p className="text-sm text-slate-600 mb-6">Tell us about the installation</p>

            <div className="space-y-5">
              <div>
                <Label className="text-sm font-medium mb-2 block">Property type</Label>
                <RadioGroup value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })} className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="residential-own" id="pt1" />
                    <Label htmlFor="pt1" className="font-normal">Residential (I own it)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="residential-bond" id="pt2" />
                    <Label htmlFor="pt2" className="font-normal">Residential (bonded property)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="commercial" id="pt3" />
                    <Label htmlFor="pt3" className="font-normal">Commercial / business property</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Estimated system cost</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">R</span>
                  <Input type="number" required value={formData.systemCost} onChange={(e) => setFormData({ ...formData, systemCost: e.target.value })} placeholder="e.g. 150000" className="pl-8" />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Do you have a quote from an installer?</Label>
                <RadioGroup value={formData.hasQuote} onValueChange={(value) => setFormData({ ...formData, hasQuote: value })} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="q1" />
                    <Label htmlFor="q1" className="font-normal">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="q2" />
                    <Label htmlFor="q2" className="font-normal">No, not yet</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button type="button" onClick={handleNext} disabled={!formData.propertyType || !formData.systemCost || !formData.hasQuote} className="bg-[#0d9488] hover:bg-[#0f766e] flex-1">
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">Your details</h2>
            <p className="text-sm text-slate-600 mb-6">So we can contact you</p>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Your name *</Label>
                <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Email *</Label>
                  <Input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" />
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Phone *</Label>
                  <Input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+27 00 000 0000" />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Current monthly electricity bill (optional)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">R</span>
                  <Input type="number" value={formData.electricityBill} onChange={(e) => setFormData({ ...formData, electricityBill: e.target.value })} placeholder="e.g. 2500" className="pl-8" />
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900 font-medium mb-2">What happens next:</p>
              <ol className="text-xs text-blue-800 space-y-1">
                <li>1. We'll review your solar finance eligibility (1-2 business days)</li>
                <li>2. A consultant will discuss your options and guided route</li>
                <li>3. We can help connect you with installers if needed</li>
              </ol>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button type="submit" disabled={!formData.name || !formData.email || !formData.phone} className="bg-[#0d9488] hover:bg-[#0f766e] flex-1">
                Submit Pre-Check <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}