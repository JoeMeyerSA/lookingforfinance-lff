import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Home, TrendingUp, Calendar, Percent } from 'lucide-react';

const STORAGE_KEY = 'mortgage_calculator_values';

export default function MortgageCalculator({ onGuidanceChange, onResultsChange }) {
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
            Property Price
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R</span>
            <Input
              type="number"
              value={values.propertyPrice}
              onChange={(e) => setValues({ ...values, propertyPrice: Number(e.target.value) })}
              className={`pl-8 ${errors.propertyPrice ? 'border-red-500' : ''}`}
            />
            {errors.propertyPrice && (
              <p className="text-xs text-red-600 mt-1">{errors.propertyPrice}</p>
            )}
          </div>
          <Slider
            value={[values.propertyPrice]}
            onValueChange={([v]) => setValues({ ...values, propertyPrice: v })}
            min={200000}
            max={10000000}
            step={50000}
            className="mt-3"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>R 200,000</span>
            <span>R 10,000,000</span>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700 mb-2 block">
            Deposit ({depositPercent}%)
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R</span>
            <Input
              type="number"
              value={values.deposit}
              onChange={(e) => setValues({ ...values, deposit: Number(e.target.value) })}
              className={`pl-8 ${errors.deposit ? 'border-red-500' : ''}`}
            />
            {errors.deposit && (
              <p className="text-xs text-red-600 mt-1">{errors.deposit}</p>
            )}
          </div>
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
          </div>
          <div>
            <Label className="text-sm font-medium text-slate-700 mb-2 block">
              Term (years)
            </Label>
            <Input
              type="number"
              value={values.term}
              onChange={(e) => setValues({ ...values, term: Number(e.target.value) })}
              className={errors.term ? 'border-red-500' : ''}
            />
            {errors.term && (
              <p className="text-xs text-red-600 mt-1">{errors.term}</p>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="border-t border-slate-200 pt-6">
          <div className="bg-[#1e3a5f] text-white rounded-2xl p-6 mb-4">
            <p className="text-slate-300 text-sm mb-1">Estimated Monthly Payment</p>
            <p className="text-4xl font-bold">{formatCurrency(results.monthlyPayment)}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                <Home className="w-4 h-4" />
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
                <Calendar className="w-4 h-4" />
                Total Cost
              </div>
              <p className="font-semibold text-[#1e3a5f]">{formatCurrency(results.totalPayment)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}