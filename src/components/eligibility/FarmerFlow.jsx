import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tractor, MapPin, Sprout, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FarmerFlow({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    needType: '',
    amount: '',
    farmType: '',
    name: '',
    email: '',
    phone: '',
    farmLocation: '',
    farmSize: '',
  });

  const needTypes = [
    { id: 'land', label: 'Land purchase / expansion', icon: MapPin, description: 'Farmland acquisition' },
    { id: 'equipment', label: 'Equipment / machinery', icon: Tractor, description: 'Agricultural equipment' },
    { id: 'operations', label: 'Operational capital', icon: Sprout, description: 'Working capital for farming' },
    { id: 'infrastructure', label: 'Infrastructure', icon: MapPin, description: 'Buildings, irrigation, etc.' },
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
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">What do you need finance for?</h2>
            <p className="text-sm text-slate-600 mb-6">Select your primary need</p>

            <div className="grid sm:grid-cols-2 gap-3">
              {needTypes.map((type) => (
                <button key={type.id} type="button" onClick={() => { setFormData({ ...formData, needType: type.id }); setTimeout(handleNext, 200); }}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${formData.needType === type.id ? 'border-[#0d9488] bg-[#0d9488]/5' : 'border-slate-200 hover:border-slate-300'}`}>
                  <type.icon className={`w-8 h-8 mb-2 ${formData.needType === type.id ? 'text-[#0d9488]' : 'text-slate-400'}`} />
                  <p className="font-medium text-[#1e3a5f] mb-1">{type.label}</p>
                  <p className="text-xs text-slate-500">{type.description}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">About your farm</h2>
            <p className="text-sm text-slate-600 mb-6">Tell us about your farming operation</p>

            <div className="space-y-5">
              <div>
                <Label className="text-sm font-medium mb-2 block">Type of farming</Label>
                <select className="w-full h-10 px-3 rounded-md border border-slate-200 text-sm" value={formData.farmType} onChange={(e) => setFormData({ ...formData, farmType: e.target.value })} required>
                  <option value="">Select type</option>
                  <option value="livestock">Livestock</option>
                  <option value="crops">Crops</option>
                  <option value="mixed">Mixed farming</option>
                  <option value="viticulture">Viticulture (grapes/wine)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Amount required</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">R</span>
                  <Input type="number" required value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} placeholder="e.g. 2000000" className="pl-8" />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Farm size (hectares, approximate)</Label>
                <Input type="number" required value={formData.farmSize} onChange={(e) => setFormData({ ...formData, farmSize: e.target.value })} placeholder="e.g. 150" />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button type="button" onClick={handleNext} disabled={!formData.farmType || !formData.amount || !formData.farmSize} className="bg-[#0d9488] hover:bg-[#0f766e] flex-1">
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
                <Label className="text-sm font-medium mb-2 block">Farm location (town/region) *</Label>
                <Input required value={formData.farmLocation} onChange={(e) => setFormData({ ...formData, farmLocation: e.target.value })} placeholder="e.g. Stellenbosch, Western Cape" />
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900 font-medium mb-2">What happens next:</p>
              <ol className="text-xs text-blue-800 space-y-1">
                <li>1. We'll assess your agricultural finance eligibility (1-2 business days)</li>
                <li>2. A consultant will contact you to discuss your guided route</li>
                <li>3. We'll explain the documentation typically needed for agricultural finance</li>
              </ol>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button type="submit" disabled={!formData.name || !formData.email || !formData.phone || !formData.farmLocation} className="bg-[#0d9488] hover:bg-[#0f766e] flex-1">
                Submit Pre-Check <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}