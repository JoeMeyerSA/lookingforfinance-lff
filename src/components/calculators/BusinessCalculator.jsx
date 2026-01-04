import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Briefcase, TrendingUp, Calendar, Wallet } from 'lucide-react';

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
      {/* Guidance Triggers */}
      <div className="flex gap-2 mb-4">
        <button onClick={() => onGuidanceChange?.('default')} className="text-xs px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
          About this calculator
        </button>
        <button onClick={() => onGuidanceChange?.('input')} className="text-xs px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
          Input help
        </button>
        {results && (
          <>
            <button onClick={() => onGuidanceChange?.('results')} className="text-xs px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
              Understand results
            </button>
            <button onClick={() => onGuidanceChange?.('next')} className="text-xs px-3 py-1 rounded-full bg-[#0d9488]/10 hover:bg-[#0d9488]/20 text-[#0d9488] transition-colors">
              Next step
            </button>
          </>
        )}
      </div>

      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-slate-700 mb-2 block">
            Loan Amount Required
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R</span>
            <Input
              type="number"
              value={values.loanAmount}
              onChange={(e) => setValues({ ...values, loanAmount: Number(e.target.value) })}
              className={`pl-8 ${errors.loanAmount ? 'border-red-500' : ''}`}
            />
            {errors.loanAmount && (
              <p className="text-xs text-red-600 mt-1">{errors.loanAmount}</p>
            )}
          </div>
          <Slider
            value={[values.loanAmount]}
            onValueChange={([v]) => setValues({ ...values, loanAmount: v })}
            min={50000}
            max={5000000}
            step={50000}
            className="mt-3"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>R 50,000</span>
            <span>R 5,000,000</span>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700 mb-2 block">
            Interest Rate (%)
          </Label>
          <Input
            type="number"
            step="0.25"
            value={values.interestRate}
            onChange={(e) => setValues({ ...values, interestRate: Number(e.target.value) })}
            className={errors.interestRate ? 'border-red-500' : ''}
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
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>8%</span>
            <span>25%</span>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700 mb-2 block">
            Term: {values.term} {values.term === 1 ? 'year' : 'years'}
          </Label>
          <Slider
            value={[values.term]}
            onValueChange={([v]) => setValues({ ...values, term: v })}
            min={1}
            max={7}
            step={1}
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>1 year</span>
            <span>7 years</span>
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="border-t border-slate-200 pt-6">
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-6 mb-4">
            <p className="text-white/80 text-sm mb-1">Estimated Monthly Repayment</p>
            <p className="text-4xl font-bold">{formatCurrency(results.monthlyPayment)}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                <Briefcase className="w-4 h-4" />
                Loan Amount
              </div>
              <p className="font-semibold text-[#1e3a5f]">{formatCurrency(results.loanAmount)}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                <TrendingUp className="w-4 h-4" />
                Total Interest
              </div>
              <p className="font-semibold text-[#1e3a5f]">{formatCurrency(results.totalInterest)}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                <Wallet className="w-4 h-4" />
                Total Repayment
              </div>
              <p className="font-semibold text-[#1e3a5f]">{formatCurrency(results.totalPayment)}</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-slate-50 rounded-xl">
            <p className="text-sm text-slate-600">
              <strong>Business loan considerations:</strong> Rates depend heavily on your business profile, 
              trading history, and security offered. Use this as a starting point for planning.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}