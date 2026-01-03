import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Car, TrendingUp, Calendar, AlertCircle } from 'lucide-react';

export default function VehicleCalculator() {
  const [values, setValues] = useState({
    vehiclePrice: 450000,
    deposit: 45000,
    interestRate: 12.5,
    term: 5,
    includeBalloon: false,
    balloonPercent: 20,
  });

  const [results, setResults] = useState(null);

  const calculate = () => {
    const principal = values.vehiclePrice - values.deposit;
    const monthlyRate = values.interestRate / 100 / 12;
    const numberOfPayments = values.term * 12;
    const balloonAmount = values.includeBalloon ? (values.vehiclePrice * values.balloonPercent / 100) : 0;
    const financedAmount = principal - (balloonAmount / Math.pow(1 + monthlyRate, numberOfPayments));

    if (monthlyRate === 0) {
      const monthlyPayment = (principal - balloonAmount) / numberOfPayments;
      setResults({
        monthlyPayment,
        totalPayment: monthlyPayment * numberOfPayments + balloonAmount,
        totalInterest: 0,
        loanAmount: principal,
        balloonAmount,
      });
    } else {
      // Standard amortisation with balloon
      const monthlyPayment = financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const totalPayment = monthlyPayment * numberOfPayments + balloonAmount;
      
      setResults({
        monthlyPayment,
        totalPayment,
        totalInterest: totalPayment - principal,
        loanAmount: principal,
        balloonAmount,
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

  const depositPercent = ((values.deposit / values.vehiclePrice) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-slate-700 mb-2 block">
            Vehicle Price
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">R</span>
            <Input
              type="number"
              value={values.vehiclePrice}
              onChange={(e) => setValues({ ...values, vehiclePrice: Number(e.target.value) })}
              className="pl-8"
            />
          </div>
          <Slider
            value={[values.vehiclePrice]}
            onValueChange={([v]) => setValues({ ...values, vehiclePrice: v })}
            min={50000}
            max={2000000}
            step={10000}
            className="mt-3"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>R 50,000</span>
            <span>R 2,000,000</span>
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
              className="pl-8"
            />
          </div>
          <Slider
            value={[values.deposit]}
            onValueChange={([v]) => setValues({ ...values, deposit: v })}
            min={0}
            max={values.vehiclePrice * 0.5}
            step={5000}
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
              max={7}
            />
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <Label className="text-sm font-medium text-slate-700">
              Include Balloon Payment
            </Label>
            <Switch
              checked={values.includeBalloon}
              onCheckedChange={(checked) => setValues({ ...values, includeBalloon: checked })}
            />
          </div>
          {values.includeBalloon && (
            <div>
              <Label className="text-sm text-slate-600 mb-2 block">
                Balloon ({values.balloonPercent}% = {formatCurrency(values.vehiclePrice * values.balloonPercent / 100)})
              </Label>
              <Slider
                value={[values.balloonPercent]}
                onValueChange={([v]) => setValues({ ...values, balloonPercent: v })}
                min={10}
                max={40}
                step={5}
              />
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="border-t border-slate-200 pt-6">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-6 mb-4">
            <p className="text-white/80 text-sm mb-1">Estimated Monthly Payment</p>
            <p className="text-4xl font-bold">{formatCurrency(results.monthlyPayment)}</p>
            {results.balloonAmount > 0 && (
              <p className="text-white/80 text-sm mt-2">
                + {formatCurrency(results.balloonAmount)} balloon at end of term
              </p>
            )}
          </div>

          {results.balloonAmount > 0 && (
            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-4">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                A balloon payment reduces monthly costs but requires a lump sum at the end. 
                Plan ahead for how you'll cover this.
              </p>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                <Car className="w-4 h-4" />
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