import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Home, TrendingUp, Calendar, HelpCircle } from 'lucide-react';

const STORAGE_KEY = 'bond_repayment_calculator_values';

export default function BondRepaymentCalculator({ onGuidanceChange, onResultsChange }) {
  const [values, setValues] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      propertyPrice: 1500000,
      deposit: 150000,
      interestRate: 11.75,
      term: 20,
    };
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (values.propertyPrice < 100000) newErrors.propertyPrice = 'Property price should be at least R 100,000';
    if (values.deposit > values.propertyPrice) newErrors.deposit = 'Deposit cannot exceed property price';
    if (values.interestRate < 1 || values.interestRate > 30) newErrors.interestRate = 'Interest rate should be between 1% and 30%';
    if (values.term < 1 || values.term > 30) newErrors.term = 'Term should be between 1 and 30 years';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculate = () => {
    if (!validate()) {
      setResults(null);
      onResultsChange?.(false);
      return;
    }

    const principal = values.propertyPrice - values.deposit;
    const monthlyRate = values.interestRate / 100 / 12;
    const numberOfPayments = values.term * 12;

    if (monthlyRate === 0) {
      const monthlyPayment = principal / numberOfPayments;
      setResults({
        monthlyPayment,
        totalPayment: monthlyPayment * numberOfPayments,
        totalInterest: 0,
        loanAmount: principal,
      });
    } else {
      const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const totalPayment = monthlyPayment * numberOfPayments;
      
      setResults({
        monthlyPayment,
        totalPayment,
        totalInterest: totalPayment - principal,
        loanAmount: principal,
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

  const depositPercent = ((values.deposit / values.propertyPrice) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Bond Repayment Calculator</h2>
        <p className="text-slate-600">Calculate your estimated monthly bond repayment based on property price, deposit, and loan terms.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs Column */}
        <div className="space-y-5">
          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              Property Price
            </Label>
            <p className="text-xs text-slate-500 mb-2">The total purchase price or current value of the property</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                type="number"
                value={values.propertyPrice}
                onChange={(e) => setValues({ ...values, propertyPrice: Number(e.target.value) })}
                className={`pl-8 bg-slate-50 border-slate-200 ${errors.propertyPrice ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.propertyPrice && (
              <p className="text-xs text-red-600 mt-1">{errors.propertyPrice}</p>
            )}
            <Slider
              value={[values.propertyPrice]}
              onValueChange={([v]) => setValues({ ...values, propertyPrice: v })}
              min={200000}
              max={10000000}
              step={50000}
              className="mt-3"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>R 200k</span>
              <span>R 10M</span>
            </div>
          </div>

          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              Deposit ({depositPercent}%)
            </Label>
            <p className="text-xs text-slate-500 mb-2">Your upfront payment (typically 10-20%). Larger deposits mean better rates</p>
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
            <Slider
              value={[values.deposit]}
              onValueChange={([v]) => setValues({ ...values, deposit: v })}
              min={0}
              max={values.propertyPrice * 0.5}
              step={10000}
              className="mt-3"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-slate-700 mb-1.5 block">
                Interest Rate (%)
              </Label>
              <p className="text-xs text-slate-500 mb-2">Current prime is ~11.75%</p>
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
              <p className="text-xs text-slate-500 mb-2">Typically 20-30 years</p>
              <Input
                type="number"
                value={values.term}
                onChange={(e) => setValues({ ...values, term: Number(e.target.value) })}
                className={`bg-slate-50 border-slate-200 ${errors.term ? 'border-red-500' : ''}`}
              />
              {errors.term && (
                <p className="text-xs text-red-600 mt-1">{errors.term}</p>
              )}
            </div>
          </div>

          <Button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold">
            CALCULATE
          </Button>
        </div>

        {/* Results Column */}
        {results && (
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
            <div className="mb-8">
              <p className="text-blue-100 text-sm mb-2">Estimated Monthly Payment</p>
              <p className="text-5xl font-bold">{formatCurrency(results.monthlyPayment)}</p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-blue-200" />
                  <span className="text-sm text-blue-100">Loan Amount</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-200" />
                  <span className="text-sm text-blue-100">Total Interest</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span className="text-sm text-blue-100">Total Cost</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.totalPayment)}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FAQs Section */}
      <div className="pt-8 border-t border-slate-200">
        <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">Understanding Your Results</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Monthly Payment</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">This is your estimated monthly bond repayment. Your actual payment depends on the funder's assessment and your credit profile.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Total Interest</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">The total amount of interest you'll pay over the full loan term. Shorter terms or larger deposits reduce this significantly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}