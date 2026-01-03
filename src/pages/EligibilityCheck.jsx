import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  ArrowLeft, ArrowRight, CheckCircle, User, Building2, Tractor, HardHat, Sun,
  Home, Car, Briefcase, FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EligibilityCheck() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialPath = urlParams.get('path') || '';
  const initialSolution = urlParams.get('solution') || '';
  
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    applicantType: initialPath || '',
    financeType: initialSolution || '',
    name: '',
    email: '',
    phone: '',
    estimatedAmount: '',
    hasDeposit: '',
    employmentStatus: '',
    additionalInfo: '',
  });

  const applicantTypes = [
    { id: 'individual', label: 'Individual', description: 'Personal finance needs', icon: User },
    { id: 'business', label: 'Business', description: 'Business or company finance', icon: Building2 },
    { id: 'farmer', label: 'Farmer', description: 'Agricultural finance', icon: Tractor },
    { id: 'developer', label: 'Developer', description: 'Property development', icon: HardHat },
    { id: 'solar', label: 'Solar / Power', description: 'Energy solutions', icon: Sun },
  ];

  const financeTypes = [
    { id: 'residential', label: 'Residential Property', icon: Home },
    { id: 'commercial', label: 'Commercial Property', icon: Building2 },
    { id: 'vehicle', label: 'Vehicle / Asset', icon: Car },
    { id: 'business', label: 'Business Finance', icon: Briefcase },
    { id: 'solar', label: 'Solar / Backup Power', icon: Sun },
    { id: 'agricultural', label: 'Agricultural', icon: Tractor },
    { id: 'development', label: 'Property Development', icon: HardHat },
    { id: 'other', label: 'Other / Not Sure', icon: FileText },
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to the backend
    setSubmitted(true);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return !!formData.applicantType;
      case 2:
        return !!formData.financeType;
      case 3:
        return formData.name && formData.email;
      default:
        return true;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-lg text-center"
        >
          <div className="w-20 h-20 bg-[#0d9488]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#0d9488]" />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-4">
            Thank You!
          </h1>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We've received your eligibility check request. One of our consultants will 
            review your information and contact you within 1-2 business days to discuss 
            your options.
          </p>
          <div className="p-4 bg-slate-50 rounded-xl mb-6">
            <h3 className="font-medium text-[#1e3a5f] mb-2">What happens next?</h3>
            <ol className="text-sm text-slate-600 text-left space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-medium text-[#0d9488]">1.</span>
                We'll review your submission and assess initial eligibility
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-[#0d9488]">2.</span>
                A consultant will contact you to discuss your needs in detail
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium text-[#0d9488]">3.</span>
                We'll advise on suitable options and next steps
              </li>
            </ol>
          </div>
          <div className="flex gap-3 justify-center">
            <Button asChild variant="outline">
              <Link to={createPageUrl('Home')}>Return Home</Link>
            </Button>
            <Button asChild className="bg-[#0d9488] hover:bg-[#0f766e]">
              <Link to={createPageUrl('Calculators')}>Try Calculators</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#1e3a5f] py-8 lg:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Eligibility Check
          </h1>
          <p className="text-slate-300">
            Tell us about your needs and we'll help identify suitable options.
          </p>

          {/* Progress */}
          <div className="mt-6 flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    s < step
                      ? 'bg-[#0d9488] text-white'
                      : s === step
                      ? 'bg-white text-[#1e3a5f]'
                      : 'bg-white/20 text-white/60'
                  }`}
                >
                  {s < step ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                {s < 4 && (
                  <div className={`w-8 lg:w-12 h-0.5 ${s < step ? 'bg-[#0d9488]' : 'bg-white/20'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-8 lg:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Applicant Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                    What best describes you?
                  </h2>
                  <p className="text-slate-600 mb-6">
                    This helps us understand your context and tailor our guidance.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {applicantTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, applicantType: type.id })}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.applicantType === type.id
                            ? 'border-[#0d9488] bg-[#0d9488]/5'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            formData.applicantType === type.id
                              ? 'bg-[#0d9488] text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            <type.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium text-[#1e3a5f]">{type.label}</p>
                            <p className="text-sm text-slate-500">{type.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Finance Type */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                    What type of finance are you looking for?
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Select the category that best matches your needs.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {financeTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, financeType: type.id })}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.financeType === type.id
                            ? 'border-[#0d9488] bg-[#0d9488]/5'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            formData.financeType === type.id
                              ? 'bg-[#0d9488] text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            <type.icon className="w-5 h-5" />
                          </div>
                          <p className="font-medium text-[#1e3a5f]">{type.label}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                    Your contact details
                  </h2>
                  <p className="text-slate-600 mb-6">
                    So we can get in touch to discuss your options.
                  </p>

                  <div className="space-y-5">
                    <div>
                      <Label className="text-sm font-medium text-slate-700 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-slate-700 mb-2 block">
                          Email *
                        </Label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-slate-700 mb-2 block">
                          Phone
                        </Label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+27 00 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-slate-700 mb-2 block">
                        Estimated Amount Required
                      </Label>
                      <select
                        className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                        value={formData.estimatedAmount}
                        onChange={(e) => setFormData({ ...formData, estimatedAmount: e.target.value })}
                      >
                        <option value="">Select range (optional)</option>
                        <option value="under-500k">Under R 500,000</option>
                        <option value="500k-1m">R 500,000 - R 1,000,000</option>
                        <option value="1m-2m">R 1,000,000 - R 2,000,000</option>
                        <option value="2m-5m">R 2,000,000 - R 5,000,000</option>
                        <option value="over-5m">Over R 5,000,000</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Additional Info */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                    A bit more about your situation
                  </h2>
                  <p className="text-slate-600 mb-6">
                    This helps us prepare for our conversation with you.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium text-slate-700 mb-3 block">
                        Do you have a deposit available?
                      </Label>
                      <RadioGroup
                        value={formData.hasDeposit}
                        onValueChange={(value) => setFormData({ ...formData, hasDeposit: value })}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="deposit-yes" />
                          <Label htmlFor="deposit-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="deposit-no" />
                          <Label htmlFor="deposit-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="partial" id="deposit-partial" />
                          <Label htmlFor="deposit-partial">Partial</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-slate-700 mb-3 block">
                        Employment / Income Status
                      </Label>
                      <select
                        className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                        value={formData.employmentStatus}
                        onChange={(e) => setFormData({ ...formData, employmentStatus: e.target.value })}
                      >
                        <option value="">Select (optional)</option>
                        <option value="employed">Employed (full-time)</option>
                        <option value="self-employed">Self-employed / Business owner</option>
                        <option value="contract">Contract / Freelance</option>
                        <option value="retired">Retired</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-slate-700 mb-2 block">
                        Anything else we should know?
                      </Label>
                      <Textarea
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                        placeholder="Any specific circumstances or questions you'd like us to address..."
                        className="h-24"
                      />
                    </div>

                    <div className="p-4 bg-slate-50 rounded-xl">
                      <p className="text-xs text-slate-500">
                        <strong>Privacy:</strong> Your information is kept confidential and will only 
                        be used to assess your eligibility and contact you regarding your enquiry. 
                        We do not share your details with third parties without your consent.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className={step === 1 ? 'invisible' : ''}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              {step < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="bg-[#0d9488] hover:bg-[#0f766e]"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-[#0d9488] hover:bg-[#0f766e]"
                >
                  Submit Eligibility Check
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}