import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Briefcase, TrendingUp, Wallet, HelpCircle } from 'lucide-react';

const STORAGE_KEY = 'business_calculator_values';

export default function BusinessCalculator({ onGuidanceChange, onResultsChange }) {
  const [values, setValues] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      loanAmount: 500000,
      interestRate: 14,
      term: 3,
    };
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (values.loanAmount < 10000) newErrors.loanAmount = 'Loan amount should be at least R 10,000';
    if (values.interestRate < 1 || values.interestRate > 35) newErrors.interestRate = 'Interest rate should be between 1% and 35%';
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

    const principal = values.loanAmount;
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

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Business Loan Calculator</h2>
        <p className="text-slate-600">Estimate repayments for business finance. Note: rates vary widely based on risk profile and trading history.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs Column */}
        <div className="space-y-5">
          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              Loan Amount Required
            </Label>
            <p className="text-xs text-slate-500 mb-2">How much your business needs to borrow</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                type="number"
                value={values.loanAmount}
                onChange={(e) => setValues({ ...values, loanAmount: Number(e.target.value) })}
                className={`pl-8 bg-slate-50 border-slate-200 ${errors.loanAmount ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.loanAmount && (
              <p className="text-xs text-red-600 mt-1">{errors.loanAmount}</p>
            )}
            <Slider
              value={[values.loanAmount]}
              onValueChange={([v]) => setValues({ ...values, loanAmount: v })}
              min={50000}
              max={5000000}
              step={50000}
              className="mt-3"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>R 50k</span>
              <span>R 5M</span>
            </div>
          </div>

          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              Interest Rate (%)
            </Label>
            <p className="text-xs text-slate-500 mb-2">Varies significantly (8-25%+) based on business profile, security, and trading history</p>
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
            <Slider
              value={[values.interestRate]}
              onValueChange={([v]) => setValues({ ...values, interestRate: v })}
              min={8}
              max={25}
              step={0.5}
              className="mt-3"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>8%</span>
              <span>25%</span>
            </div>
          </div>

          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              Term: {values.term} {values.term === 1 ? 'year' : 'years'}
            </Label>
            <p className="text-xs text-slate-500 mb-2">Depends on purpose: 1-3 years for working capital, up to 7 years for equipment</p>
            <Slider
              value={[values.term]}
              onValueChange={([v]) => setValues({ ...values, term: v })}
              min={1}
              max={7}
              step={1}
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>1 year</span>
              <span>7 years</span>
            </div>
          </div>

          <Button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700 h-12 text-base font-semibold">
            CALCULATE
          </Button>
        </div>

        {/* Results Column */}
        {results && (
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-xl">
            <div className="mb-8">
              <p className="text-green-100 text-sm mb-2">Estimated Monthly Repayment</p>
              <p className="text-5xl font-bold">{formatCurrency(results.monthlyPayment)}</p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-green-200" />
                  <span className="text-sm text-green-100">Loan Amount</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-200" />
                  <span className="text-sm text-green-100">Total Interest</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-green-200" />
                  <span className="text-sm text-green-100">Total Repayment</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.totalPayment)}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-green-100 leading-relaxed mb-4">
                <strong>Important:</strong> The monthly repayment must be affordable from your business cash flow. Funders will assess debt serviceability.
              </p>
              <p className="text-xs text-green-100">* Results are indicative only and not official quotes.</p>
            </div>
          </div>
        )}
      </div>

      {/* FAQs Section */}
      <div className="pt-8 border-t border-slate-200">
        <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">Understanding Business Finance</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Interest Rates</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">Rates vary significantly based on trading history, profitability, security offered, and industry risk. Expect 12-18% typically.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Cash Flow Assessment</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">Funders assess whether your business can service the debt from operating cash flow. Strong financials improve approval chances.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Security & Guarantees</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">Most business loans require security (assets, property) or personal guarantees from directors, especially for newer businesses.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Loan Purpose</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">Different purposes suit different terms: working capital (1-3 years), equipment finance (3-7 years), expansion loans (3-5 years).</p>
          </div>
        </div>
      </div>
    </div>
  );
}