import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Car, TrendingUp, Calendar, AlertCircle, HelpCircle } from 'lucide-react';

const STORAGE_KEY = 'vehicle_calculator_values';

export default function VehicleCalculator({ onGuidanceChange, onResultsChange }) {
  const [values, setValues] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      vehiclePrice: 450000,
      deposit: 45000,
      interestRate: 12.5,
      term: 5,
      includeBalloon: false,
      balloonPercent: 20,
    };
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (values.vehiclePrice < 10000) newErrors.vehiclePrice = 'Vehicle price should be at least R 10,000';
    if (values.deposit > values.vehiclePrice) newErrors.deposit = 'Deposit cannot exceed vehicle price';
    if (values.interestRate < 1 || values.interestRate > 30) newErrors.interestRate = 'Interest rate should be between 1% and 30%';
    if (values.term < 1 || values.term > 7) newErrors.term = 'Term should be between 1 and 7 years';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculate = () => {
    if (!validate()) {
      setResults(null);
      onResultsChange?.(false);
      return;
    }

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

  const depositPercent = ((values.deposit / values.vehiclePrice) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Vehicle & Asset Finance Calculator</h2>
        <p className="text-slate-600">Estimate monthly payments for vehicle finance with optional balloon payment to reduce monthly costs.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs Column */}
        <div className="space-y-5">
          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              Vehicle Price
            </Label>
            <p className="text-xs text-slate-500 mb-2">The purchase price of the vehicle or asset</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                type="number"
                value={values.vehiclePrice}
                onChange={(e) => setValues({ ...values, vehiclePrice: Number(e.target.value) })}
                className={`pl-8 bg-slate-50 border-slate-200 ${errors.vehiclePrice ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.vehiclePrice && (
              <p className="text-xs text-red-600 mt-1">{errors.vehiclePrice}</p>
            )}
            <Slider
              value={[values.vehiclePrice]}
              onValueChange={([v]) => setValues({ ...values, vehiclePrice: v })}
              min={50000}
              max={2000000}
              step={10000}
              className="mt-3"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>R 50k</span>
              <span>R 2M</span>
            </div>
          </div>

          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              Deposit ({depositPercent}%)
            </Label>
            <p className="text-xs text-slate-500 mb-2">Your upfront payment (10-20% typical). Larger deposits improve approval chances</p>
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
              max={values.vehiclePrice * 0.5}
              step={5000}
              className="mt-3"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm text-slate-700 mb-1.5 block">
                Interest Rate (%)
              </Label>
              <p className="text-xs text-slate-500 mb-2">Typically 11-14%</p>
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
                onChange={(e) => setValues({ ...values, term: Number(e.target.value) })}
                min={1}
                max={7}
                className={`bg-slate-50 border-slate-200 ${errors.term ? 'border-red-500' : ''}`}
              />
              {errors.term && (
                <p className="text-xs text-red-600 mt-1">{errors.term}</p>
              )}
            </div>
          </div>

          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <Label className="text-sm font-medium text-slate-700 block">
                  Include Balloon Payment
                </Label>
                <p className="text-xs text-slate-500 mt-1">Optional lump sum at end (typically 20-30%). Reduces monthly payments</p>
              </div>
              <Switch
                checked={values.includeBalloon}
                onCheckedChange={(checked) => setValues({ ...values, includeBalloon: checked })}
              />
            </div>
            {values.includeBalloon && (
              <div className="pt-3 border-t border-slate-200">
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

          <Button onClick={calculate} className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-base font-semibold">
            CALCULATE
          </Button>
        </div>

        {/* Results Column */}
        {results && (
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 text-white shadow-xl">
            <div className="mb-6">
              <p className="text-purple-100 text-sm mb-2">Estimated Monthly Payment</p>
              <p className="text-5xl font-bold">{formatCurrency(results.monthlyPayment)}</p>
              {results.balloonAmount > 0 && (
                <p className="text-purple-100 text-sm mt-3">
                  + {formatCurrency(results.balloonAmount)} balloon at end of term
                </p>
              )}
            </div>

            {results.balloonAmount > 0 && (
              <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl mb-6">
                <AlertCircle className="w-5 h-5 text-purple-200 flex-shrink-0" />
                <p className="text-sm text-purple-100">
                  Plan ahead for the balloon payment — you'll need the lump sum, to refinance, or sell the vehicle.
                </p>
              </div>
            )}

            <div className="space-y-4 pt-6 border-t border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-purple-200" />
                  <span className="text-sm text-purple-100">Loan Amount</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-200" />
                  <span className="text-sm text-purple-100">Total Interest</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-200" />
                  <span className="text-sm text-purple-100">Total Cost</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.totalPayment)}</span>
              </div>
            </div>

            <p className="text-xs text-purple-100 mt-6 pt-4 border-t border-white/20">* Results are indicative only and not official quotes.</p>
          </div>
        )}
      </div>

      {/* FAQs Section */}
      <div className="pt-8 border-t border-slate-200">
        <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">Understanding Vehicle Finance</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Deposit Amount</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">A larger deposit (20%+) improves approval chances and usually secures better interest rates from funders.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Balloon Payments</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">A balloon reduces monthly costs but requires a lump sum at the end. Plan how you'll cover it — cash, refinance, or trade-in.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">Insurance Requirements</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">Comprehensive insurance is required and adds to your monthly cost. Get quotes before committing to ensure affordability.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h4 className="font-medium text-[#1e3a5f] text-sm">New vs Used</h4>
            </div>
            <p className="text-xs text-slate-600 pl-7">New vehicles typically get better rates (11-12%) than used vehicles (13-14%). Older vehicles may have shorter maximum terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
}