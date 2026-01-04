import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Briefcase, Building2, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BusinessFlow({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    needType: '',
    amount: '',
    businessAge: '',
    name: '',
    email: '',
    phone: '',
    businessName: '',
    annualTurnover: '',
  });

  const needTypes = [
    { id: 'working-capital', label: 'Working capital', icon: TrendingUp, description: 'Cash flow / operational funding' },
    { id: 'equipment', label: 'Equipment / assets', icon: Briefcase, description: 'Business equipment purchase' },
    { id: 'property', label: 'Commercial property', icon: Building2, description: 'Own-use or investment property' },
    { id: 'expansion', label: 'Business expansion', icon: TrendingUp, description: 'Growth funding' },
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
        {/* Step 1 */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">What does your business need?</h2>
            <p className="text-sm text-slate-600 mb-6">Select the category that best fits</p>

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
                  <type.icon className={`w-8 h-8 mb-2 ${formData.needType === type.id ? 'text-[#0d9488]' : 'text-slate-400'}`} />
                  <p className="font-medium text-[#1e3a5f] mb-1">{type.label}</p>
                  <p className="text-xs text-slate-500">{type.description}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">Funding details</h2>
            <p className="text-sm text-slate-600 mb-6">Approximate figures are fine</p>

            <div className="space-y-5">
              <div>
                <Label className="text-sm font-medium mb-2 block">Amount required</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">R</span>
                  <Input
                    type="number"
                    required
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    placeholder="e.g. 500000"
                    className="pl-8"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">How long has the business been trading?</Label>
                <RadioGroup
                  value={formData.businessAge}
                  onValueChange={(value) => setFormData({ ...formData, businessAge: value })}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3plus" id="ba1" />
                    <Label htmlFor="ba1" className="font-normal">3+ years</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-3" id="ba2" />
                    <Label htmlFor="ba2" className="font-normal">1-3 years</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="under-1" id="ba3" />
                    <Label htmlFor="ba3" className="font-normal">Under 1 year</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="startup" id="ba4" />
                    <Label htmlFor="ba4" className="font-normal">Not yet trading (startup)</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button 
                type="button" 
                onClick={handleNext}
                disabled={!formData.amount || !formData.businessAge}
                className="bg-[#0d9488] hover:bg-[#0f766e] flex-1"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">Your details</h2>
            <p className="text-sm text-slate-600 mb-6">We'll use this to get in touch</p>

            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Business name *</Label>
                <Input
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="Your business name"
                />
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Your name *</Label>
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
                disabled={!formData.businessName || !formData.name || !formData.email || !formData.phone}
                className="bg-[#0d9488] hover:bg-[#0f766e] flex-1"
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">Business financials</h2>
            <p className="text-sm text-slate-600 mb-6">Approximate annual figures</p>

            <div className="space-y-5">
              <div>
                <Label className="text-sm font-medium mb-2 block">Annual turnover (approximate)</Label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-slate-200 text-sm"
                  value={formData.annualTurnover}
                  onChange={(e) => setFormData({ ...formData, annualTurnover: e.target.value })}
                  required
                >
                  <option value="">Select range</option>
                  <option value="under-1m">Under R 1 million</option>
                  <option value="1m-5m">R 1m - R 5m</option>
                  <option value="5m-20m">R 5m - R 20m</option>
                  <option value="20m-plus">R 20m+</option>
                </select>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900 font-medium mb-2">What happens next:</p>
              <ol className="text-xs text-blue-800 space-y-1">
                <li>1. We'll review your business eligibility pre-check (1-2 business days)</li>
                <li>2. A consultant will discuss your guided route and options</li>
                <li>3. If we proceed, we'll guide you on documentation needed</li>
              </ol>
            </div>

            <div className="flex gap-3 mt-6">
              <Button type="button" variant="outline" onClick={handleBack}>Back</Button>
              <Button 
                type="submit"
                disabled={!formData.annualTurnover}
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