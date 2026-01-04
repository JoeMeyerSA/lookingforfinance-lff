import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { HardHat, Home, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DeveloperFlow({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    amount: '',
    stage: '',
    name: '',
    email: '',
    phone: '',
    trackRecord: '',
    equity: '',
  });

  const projectTypes = [
    { id: 'residential', label: 'Residential development', icon: Home, description: 'Housing / sectional title' },
    { id: 'commercial', label: 'Commercial development', icon: Building2, description: 'Retail / office / industrial' },
    { id: 'land', label: 'Land acquisition', icon: HardHat, description: 'Land purchase for development' },
    { id: 'refurb', label: 'Refurbishment', icon: Building2, description: 'Renovate / upgrade existing' },
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
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">What type of project?</h2>
            <p className="text-sm text-slate-600 mb-6">Select the development type</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <button key={type.id} type="button" onClick={() => { setFormData({ ...formData, projectType: type.id }); setTimeout(handleNext, 200); }}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${formData.projectType === type.id ? 'border-[#0d9488] bg-[#0d9488]/5' : 'border-slate-200 hover:border-slate-300'}`}>
                  <type.icon className={`w-8 h-8 mb-2 ${formData.projectType === type.id ? 'text-[#0d9488]' : 'text-slate-400'}`} />
                  <p className="font-medium text-[#1e3a5f] mb-1">{type.label}</p>
                  <p className="text-xs text-slate-500">{type.description}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">Project details</h2>
            <p className="text-sm text-slate-600 mb-6">Tell us about the development</p>

            <div className="space-y-5">
              <div>
                <Label className="text-sm font-medium mb-2 block">Total finance required</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">R</span>
                  <Input type="number" required value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} placeholder="e.g. 5000000" className="pl-8" />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Project stage</Label>
                <RadioGroup value={formData.stage} onValueChange={(value) => setFormData({ ...formData, stage: value })} className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="planning" id="s1" />
                    <Label htmlFor="s1" className="font-normal">Planning phase</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="approved" id="s2" />
                    <Label htmlFor="s2" className="font-normal">Approved, ready to start</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="construction" id="s3" />
                    <Label htmlFor="s3" className="font-normal">Under construction</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Your equity contribution</Label>
                <select className="w-full h-10 px-3 rounded-md border border-slate-200 text-sm" value={formData.equity} onChange={(e) => setFormData({ ...formData, equity: e.target.value })} required>
                  <option value="">Select percentage</option>
                  <option value="30plus">30% or more</option>
                  <option value="20-30">20-30%</option>
                  <option value="10-20">10-20%</option>
                  <option value="under-10">Under 10%</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button type="button" onClick={handleNext} disabled={!formData.amount || !formData.stage || !formData.equity} className="bg-[#0d9488] hover:bg-[#0f766e] flex-1">
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">Your details</h2>
            <p className="text-sm text-slate-600 mb-6">So we can discuss your project</p>

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
                <Label className="text-sm font-medium mb-2 block">Development track record</Label>
                <select className="w-full h-10 px-3 rounded-md border border-slate-200 text-sm" value={formData.trackRecord} onChange={(e) => setFormData({ ...formData, trackRecord: e.target.value })} required>
                  <option value="">Select experience</option>
                  <option value="multiple">Multiple completed projects</option>
                  <option value="few">1-2 completed projects</option>
                  <option value="first">This is my first development</option>
                </select>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900 font-medium mb-2">What happens next:</p>
              <ol className="text-xs text-blue-800 space-y-1">
                <li>1. We'll review your development finance pre-check (1-2 business days)</li>
                <li>2. A consultant will discuss your project and guided route</li>
                <li>3. We'll explain what's typically needed for development finance</li>
              </ol>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button type="submit" disabled={!formData.name || !formData.email || !formData.phone || !formData.trackRecord} className="bg-[#0d9488] hover:bg-[#0f766e] flex-1">
                Submit Pre-Check <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}