import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Sun, TrendingUp, Calendar, Zap, HelpCircle } from 'lucide-react';

const STORAGE_KEY = 'solar_calculator_values';

export default function SolarCalculator({ onGuidanceChange, onResultsChange }) {
  const [values, setValues] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      systemCost: 150000,
      deposit: 15000,
      interestRate: 13.5,
      term: 5,
      monthlyElectricitySaving: 2500,
    };
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (values.systemCost < 10000) newErrors.systemCost = 'System cost should be at least R 10,000';
    if (values.deposit > values.systemCost) newErrors.deposit = 'Deposit cannot exceed system cost';
    if (values.interestRate < 1 || values.interestRate > 30) newErrors.interestRate = 'Interest rate should be between 1% and 30%';
    if (values.term < 1 || values.term > 10) newErrors.term = 'Term should be between 1 and 10 years';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculate = () => {
    if (!validate()) {
      setResults(null);
      onResultsChange?.(false);
      return;
    }

    const principal = values.systemCost - values.deposit;
    const monthlyRate = values.interestRate / 100 / 12;
    const numberOfPayments = values.term * 12;

    if (monthlyRate === 0) {
      const monthlyPayment = principal / numberOfPayments;
      setResults({
        monthlyPayment,
        totalPayment: monthlyPayment * numberOfPayments,
        totalInterest: 0,
        loanAmount: principal,
        netMonthlyCost: monthlyPayment - values.monthlyElectricitySaving,
        yearsToPayback: values.systemCost / (values.monthlyElectricitySaving * 12),
      });
    } else {
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const totalPayment = monthlyPayment * numberOfPayments;
      
      setResults({
        monthlyPayment,
        totalPayment,
        totalInterest: totalPayment - principal,
        loanAmount: principal,
        netMonthlyCost: monthlyPayment - values.monthlyElectricitySaving,
        yearsToPayback: values.systemCost / (values.monthlyElectricitySaving * 12),
      });
    }
    onResultsChange?.(true);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    calculate();
  }, [values]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Solar & Backup Power Calculator</h2>
        <p className="text-slate-600">Calculate monthly payments for solar installations and compare against electricity savings to see the real cost.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs Column */}
        <div className="space-y-5">
          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              System Cost (including installation)
            </Label>
            <p className="text-xs text-slate-500 mb-2">Total cost including panels, inverter, batteries, and professional installation</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                type="number"
                value={values.systemCost}
                onChange={(e) => setValues({ ...values, systemCost: Number(e.target.value) })}
                className={`pl-8 bg-slate-50 border-slate-200 ${errors.systemCost ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.systemCost && (
              <p className="text-xs text-red-600 mt-1">{errors.systemCost}</p>
            )}
            <Slider
              value={[values.systemCost]}
              onValueChange={([v]) => setValues({ ...values, systemCost: v })}
              min={50000}
              max={500000}
              step={10000}
              className="mt-3"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>R 50k</span>
              <span>R 500k</span>
            </div>
          </div>

          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              Deposit
            </Label>
            <p className="text-xs text-slate-500 mb-2">Upfront payment (usually 10-20%). Some funders require a deposit for solar finance</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                type="number"
                value={values.deposit}
                onChange={(e) => setValues({ ...values, deposit: Number(e.target.value) })}
                className={`pl-8 bg-slate-50 border-slate-200 ${errors.deposit ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.deposit && (
              <p className="text-xs text-red-600 mt-1">{errors.deposit}</p>
            )}
          </div>

          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              Expected Monthly Electricity Saving
            </Label>
            <p className="text-xs text-slate-500 mb-2">Your estimated monthly saving from reduced electricity bills</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                type="number"
                value={values.monthlyElectricitySaving}
                onChange={(e) => setValues({ ...values, monthlyElectricitySaving: Number(e.target.value) })}
                className="pl-8 bg-slate-50 border-slate-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-slate-700 mb-1.5 block">
                Interest Rate (%)
              </Label>
              <p className="text-xs text-slate-500 mb-2">Typically 12-15%</p>
              <Input
                type="number"
                step="0.25"
                value={values.interestRate}
                onChange={(e) => setValues({ ...values, interestRate: Number(e.target.value) })}
                className={`bg-slate-50 border-slate-200 ${errors.interestRate ? 'border-red-500' : ''}`}
              />
              {errors.interestRate && (
                <p className="text-xs text-red-600 mt-1">{errors.interestRate}</p>
              )}
            </div>
            <div>
              <Label className="text-sm text-slate-700 mb-1.5 block">
                Term (years)
              </Label>
              <p className="text-xs text-slate-500 mb-2">Usually 5-7 years</p>
              <Input
                type="number"
                value={values.term}
                min={1}
                max={10}
                onChange={(e) => setValues({ ...values, term: Number(e.target.value) })}
                className={`bg-slate-50 border-slate-200 ${errors.term ? 'border-red-500' : ''}`}
              />
              {errors.term && (
                <p className="text-xs text-red-600 mt-1">{errors.term}</p>
              )}
            </div>
          </div>

          <Button onClick={calculate} className="w-full bg-amber-600 hover:bg-amber-700 h-12 text-base font-semibold">
            CALCULATE
          </Button>
        </div>

        {/* Results Column */}
        {results && (
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl">
            <div className="mb-6">
              <p className="text-amber-100 text-sm mb-2">Estimated Monthly Payment</p>
              <p className="text-5xl font-bold">{formatCurrency(results.monthlyPayment)}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6">
              <p className="text-amber-100 text-sm mb-1">Net Monthly Cost</p>
              <p className="text-xs text-amber-100 mb-2">(after electricity saving)</p>
              <p className="text-3xl font-bold">
                {results.netMonthlyCost > 0 
                  ? formatCurrency(results.netMonthlyCost)
                  : `${formatCurrency(Math.abs(results.netMonthlyCost))} saving`
                }
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-200" />
                  <span className="text-sm text-amber-100">Loan Amount</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-200" />
                  <span className="text-sm text-amber-100">Est. Payback</span>
                </div>
                <span className="font-semibold">{results.yearsToPayback.toFixed(1)} years</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-200" />
                  <span className="text-sm text-amber-100">Total Interest</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
              </div>
            </div>

            <p className="text-xs text-amber-100 mt-6 pt-4 border-t border-white/20">* Results are indicative only and not official quotes.</p>
          </div>
        )}
      </div>

      {/* FAQs Section */}
      <div className="pt-8 border-t border-slate-200">
        <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">Understanding Your Solar Finance</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">System Cost</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">Get quotes from at least 3 reputable installers. Ensure the quote includes all equipment, installation, and COC certification.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Electricity Savings</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">Be realistic with savings estimates. Your actual saving depends on system size, sun exposure, and your usage patterns.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Net Monthly Cost</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">This shows what you'll actually pay after subtracting electricity savings. A negative number means you're saving money each month.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Payback Period</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">How long until electricity savings equal the system cost. Shorter is better, but also consider load-shedding protection value.</p>
          </div>
        </div>
      </div>
    </div>
  );
}