import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Home, Car, Sun, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IndividualFlow({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    needType: '',
    propertyValue: '',
    deposit: '',
    name: '',
    email: '',
    phone: '',
    employmentStatus: '',
    monthlyIncome: '',
  });

  const needTypes = [
    { id: 'home-purchase', label: 'Buy a home', icon: Home, description: 'Residential property purchase' },
    { id: 'home-refinance', label: 'Refinance my home', icon: Home, description: 'Better rates or access equity' },
    { id: 'vehicle', label: 'Finance a vehicle', icon: Car, description: 'Personal or family vehicle' },
    { id: 'solar', label: 'Solar / backup power', icon: Sun, description: 'Energy solution for my home' },
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
        {/* Step 1: What are you trying to do? */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">
              What are you trying to do?
            </h2>
            <p className="text-sm text-slate-600 mb-6">Select the option that best describes your need</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {needTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, needType: type.id });
                    setTimeout(handleNext, 200);
                  }}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.needType === type.id
                      ? 'border-[#0d9488] bg-[#0d9488]/5'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <type.icon className={`w-8 h-8 mb-2 ${
                    formData.needType === type.id ? 'text-[#0d9488]' : 'text-slate-400'
                  }`} />
                  <p className="font-medium text-[#1e3a5f] mb-1">{type.label}</p>
                  <p className="text-xs text-slate-500">{type.description}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Basic Details */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">
              Tell us about the property
            </h2>
            <p className="text-sm text-slate-600 mb-6">Approximate figures are fine for now</p>

            <div className="space-y-5">
              <div>
                <Label className="text-sm font-medium mb-2 block">Property value / purchase price</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">R</span>
                  <Input
                    type="number"
                    required
                    value={formData.propertyValue}
                    onChange={(e) => setFormData({ ...formData, propertyValue: e.target.value })}
                    placeholder="e.g. 1500000"
                    className="pl-8"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Do you have a deposit available?</Label>
                <RadioGroup
                  value={formData.deposit}
                  onValueChange={(value) => setFormData({ ...formData, deposit: value })}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-substantial" id="dep1" />
                    <Label htmlFor="dep1" className="font-normal">Yes, 20% or more</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-some" id="dep2" />
                    <Label htmlFor="dep2" className="font-normal">Yes, less than 20%</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="dep3" />
                    <Label htmlFor="dep3" className="font-normal">No deposit</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button 
                type="button" 
                onClick={handleNext}
                disabled={!formData.propertyValue || !formData.deposit}
                className="bg-[#0d9488] hover:bg-[#0f766e] flex-1"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Your Details */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">Your contact details</h2>
            <p className="text-sm text-slate-600 mb-6">So we can get back to you with guidance</p>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Full Name *</Label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Email *</Label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Phone *</Label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+27 00 000 0000"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button 
                type="button" 
                onClick={handleNext}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="bg-[#0d9488] hover:bg-[#0f766e] flex-1"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Income Details */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">Your income situation</h2>
            <p className="text-sm text-slate-600 mb-6">This helps us assess affordability</p>

            <div className="space-y-5">
              <div>
                <Label className="text-sm font-medium mb-2 block">Employment status</Label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-slate-200 text-sm"
                  value={formData.employmentStatus}
                  onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                  required
                >
                  <option value="">Select status</option>
                  <option value="employed">Employed (full-time)</option>
                  <option value="self-employed">Self-employed</option>
                  <option value="contract">Contract / Freelance</option>
                  <option value="retired">Retired</option>
                </select>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Gross monthly income (before tax)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">R</span>
                  <Input
                    type="number"
                    required
                    value={formData.monthlyIncome}
                    onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                    placeholder="e.g. 35000"
                    className="pl-8"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900 font-medium mb-2">What happens next:</p>
              <ol className="text-xs text-blue-800 space-y-1">
                <li>1. We'll review your eligibility pre-check (within 1-2 business days)</li>
                <li>2. A consultant will contact you to discuss your guided route</li>
                <li>3. If suitable, we'll help prepare your application properly</li>
              </ol>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button 
                type="submit"
                disabled={!formData.employmentStatus || !formData.monthlyIncome}
                className="bg-[#0d9488] hover:bg-[#0f766e] flex-1"
              >
                Submit Pre-Check <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}