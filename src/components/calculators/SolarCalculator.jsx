import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Sun, TrendingUp, Calendar, Zap } from 'lucide-react';

export default function SolarCalculator() {
  const [values, setValues] = useState({
    systemCost: 150000,
    deposit: 15000,
    interestRate: 13.5,
    term: 5,
    monthlyElectricitySaving: 2500,
  });

  const [results, setResults] = useState(null);

  const calculate = () => {
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
  };

  useEffect(() => {
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
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-slate-700 mb-2 block">
            System Cost (including installation)
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R</span>
            <Input
              type="number"
              value={values.systemCost}
              onChange={(e) => setValues({ ...values, systemCost: Number(e.target.value) })}
              className="pl-8"
            />
          </div>
          <Slider
            value={[values.systemCost]}
            onValueChange={([v]) => setValues({ ...values, systemCost: v })}
            min={50000}
            max={500000}
            step={10000}
            className="mt-3"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>R 50,000</span>
            <span>R 500,000</span>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700 mb-2 block">
            Deposit
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R</span>
            <Input
              type="number"
              value={values.deposit}
              onChange={(e) => setValues({ ...values, deposit: Number(e.target.value) })}
              className="pl-8"
            />
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-slate-700 mb-2 block">
            Expected Monthly Electricity Saving
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R</span>
            <Input
              type="number"
              value={values.monthlyElectricitySaving}
              onChange={(e) => setValues({ ...values, monthlyElectricitySaving: Number(e.target.value) })}
              className="pl-8"
            />
          </div>
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
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-slate-700 mb-2 block">
              Term (years)
            </Label>
            <Input
              type="number"
              value={values.term}
              onChange={(e) => setValues({ ...values, term: Number(e.target.value) })}
              min={1}
              max={10}
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="border-t border-slate-200 pt-6">
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-6 mb-4">
            <p className="text-white/80 text-sm mb-1">Estimated Monthly Payment</p>
            <p className="text-4xl font-bold">{formatCurrency(results.monthlyPayment)}</p>
            <div className="mt-3 pt-3 border-t border-white/20">
              <p className="text-white/80 text-sm">
                Net Monthly Cost (after electricity saving)
              </p>
              <p className="text-2xl font-semibold">
                {results.netMonthlyCost > 0 
                  ? formatCurrency(results.netMonthlyCost)
                  : `${formatCurrency(Math.abs(results.netMonthlyCost))} saving`
                }
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                <Sun className="w-4 h-4" />
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
                <Zap className="w-4 h-4" />
                Est. Payback
              </div>
              <p className="font-semibold text-[#1e3a5f]">{results.yearsToPayback.toFixed(1)} years</p>
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