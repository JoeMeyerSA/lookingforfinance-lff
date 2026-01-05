import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Home, TrendingUp, Calendar, HelpCircle } from 'lucide-react';

const STORAGE_KEY = 'bond_affordability_calculator_values';

export default function BondAffordabilityCalculator({ onGuidanceChange, onResultsChange }) {
  const [values, setValues] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      grossMonthlyIncome: 100000,
      netMonthlyIncome: 80000,
      totalMonthlyExpenses: 60000,
      deposit: 0,
      yearsToRepay: 20,
      interestRate: 11.75,
    };
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (values.grossMonthlyIncome <= 0) newErrors.grossMonthlyIncome = 'Gross income must be positive';
    if (values.netMonthlyIncome <= 0) newErrors.netMonthlyIncome = 'Net income must be positive';
    if (values.netMonthlyIncome > values.grossMonthlyIncome) newErrors.netMonthlyIncome = 'Net income cannot exceed gross income';
    if (values.totalMonthlyExpenses < 0) newErrors.totalMonthlyExpenses = 'Expenses cannot be negative';
    if (values.deposit < 0) newErrors.deposit = 'Deposit cannot be negative';
    if (values.yearsToRepay < 1 || values.yearsToRepay > 30) newErrors.yearsToRepay = 'Years to repay should be between 1 and 30';
    if (values.interestRate < 1 || values.interestRate > 30) newErrors.interestRate = 'Interest rate should be between 1% and 30%';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculate = () => {
    if (!validate()) {
      setResults(null);
      onResultsChange?.(false);
      return;
    }

    const maxRepaymentBasedOnGross = 0.3 * values.grossMonthlyIncome;
    const netSurplusIncome = values.netMonthlyIncome - values.totalMonthlyExpenses;
    const maxAffordableMonthlyRepayment = Math.min(maxRepaymentBasedOnGross, netSurplusIncome);

    if (maxAffordableMonthlyRepayment <= 0) {
      setResults({
        amountQualifyFor: values.deposit,
        monthlyRepaymentAmount: 0,
      });
      onResultsChange?.(true);
      return;
    }

    const monthlyRate = values.interestRate / 100 / 12;
    const numberOfPayments = values.yearsToRepay * 12;

    let loanPrincipal = 0;
    if (monthlyRate === 0) {
      loanPrincipal = maxAffordableMonthlyRepayment * numberOfPayments;
    } else {
      loanPrincipal = maxAffordableMonthlyRepayment * (Math.pow(1 + monthlyRate, numberOfPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
    }
    
    const amountQualifyFor = loanPrincipal + values.deposit;
    const totalPayment = maxAffordableMonthlyRepayment * numberOfPayments;
    const totalInterest = totalPayment - loanPrincipal;

    setResults({
      amountQualifyFor,
      monthlyRepaymentAmount: maxAffordableMonthlyRepayment,
      loanAmount: loanPrincipal,
      totalPayment,
      totalInterest,
    });
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

  const netSurplusIncome = values.netMonthlyIncome - values.totalMonthlyExpenses;

  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Bond Affordability Calculator</h2>
        <p className="text-slate-600">Calculate the home loan you qualify for and how much you can expect to pay monthly on your bond repayments.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs Column */}
        <div className="space-y-5">
          <div>
            <Label htmlFor="grossMonthlyIncome" className="text-sm text-slate-700 mb-1.5 block">
              Gross monthly income <span className="text-slate-400">(See FAQs below)</span>
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                id="grossMonthlyIncome"
                type="number"
                value={values.grossMonthlyIncome}
                onChange={(e) => setValues({ ...values, grossMonthlyIncome: Number(e.target.value) })}
                className={`pl-8 bg-slate-50 border-slate-200 ${errors.grossMonthlyIncome ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.grossMonthlyIncome && (
              <p className="text-xs text-red-600 mt-1">{errors.grossMonthlyIncome}</p>
            )}
          </div>

          <div>
            <Label htmlFor="netMonthlyIncome" className="text-sm text-slate-700 mb-1.5 block">
              Net monthly income <span className="text-slate-400">(See FAQs below)</span>
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                id="netMonthlyIncome"
                type="number"
                value={values.netMonthlyIncome}
                onChange={(e) => setValues({ ...values, netMonthlyIncome: Number(e.target.value) })}
                className={`pl-8 bg-slate-50 border-slate-200 ${errors.netMonthlyIncome ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.netMonthlyIncome && (
              <p className="text-xs text-red-600 mt-1">{errors.netMonthlyIncome}</p>
            )}
          </div>

          <div>
            <Label htmlFor="totalMonthlyExpenses" className="text-sm text-slate-700 mb-1.5 block">
              Total monthly expenses
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                id="totalMonthlyExpenses"
                type="number"
                value={values.totalMonthlyExpenses}
                onChange={(e) => setValues({ ...values, totalMonthlyExpenses: Number(e.target.value) })}
                className={`pl-8 bg-slate-50 border-slate-200 ${errors.totalMonthlyExpenses ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.totalMonthlyExpenses && (
              <p className="text-xs text-red-600 mt-1">{errors.totalMonthlyExpenses}</p>
            )}
          </div>

          <div>
            <Label className="text-sm text-slate-700 mb-1.5 block">
              Net surplus income
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                type="text"
                value={netSurplusIncome.toLocaleString()}
                readOnly
                className="pl-8 bg-slate-100 text-slate-600 border-slate-200"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="deposit" className="text-sm text-slate-700 mb-1.5 block">
              Deposit (in Rands)
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">R</span>
              <Input
                id="deposit"
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="yearsToRepay" className="text-sm text-slate-700 mb-1.5 block">
                Years to repay
              </Label>
              <Input
                id="yearsToRepay"
                type="number"
                value={values.yearsToRepay}
                onChange={(e) => setValues({ ...values, yearsToRepay: Number(e.target.value) })}
                className={`bg-slate-50 border-slate-200 ${errors.yearsToRepay ? 'border-red-500' : ''}`}
              />
              {errors.yearsToRepay && (
                <p className="text-xs text-red-600 mt-1">{errors.yearsToRepay}</p>
              )}
            </div>
            <div>
              <Label htmlFor="interestRate" className="text-sm text-slate-700 mb-1.5 block">
                Interest Rate (%)
              </Label>
              <Input
                id="interestRate"
                type="number"
                step="0.01"
                value={values.interestRate}
                onChange={(e) => setValues({ ...values, interestRate: Number(e.target.value) })}
                className={`bg-slate-50 border-slate-200 ${errors.interestRate ? 'border-red-500' : ''}`}
              />
              {errors.interestRate && (
                <p className="text-xs text-red-600 mt-1">{errors.interestRate}</p>
              )}
            </div>
          </div>

          <Button onClick={calculate} className="w-full bg-rose-600 hover:bg-rose-700 h-12 text-base font-semibold">
            CALCULATE
          </Button>
        </div>

        {/* Results Column */}
        {results && (
          <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-8 text-white shadow-xl">
            <div className="mb-8">
              <p className="text-rose-100 text-sm mb-2">Amount you qualify for</p>
              <p className="text-5xl font-bold">{formatCurrency(results.amountQualifyFor)}</p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/20">
              <div className="flex items-center justify-between">
                <span className="text-sm text-rose-100">Monthly repayment amount</span>
                <span className="font-semibold text-xl">{formatCurrency(results.monthlyRepaymentAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-rose-200" />
                  <span className="text-sm text-rose-100">Loan Amount</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.loanAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-rose-200" />
                  <span className="text-sm text-rose-100">Total Interest</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.totalInterest)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-rose-200" />
                  <span className="text-sm text-rose-100">Total Cost</span>
                </div>
                <span className="font-semibold">{formatCurrency(results.totalPayment)}</span>
              </div>
            </div>

            <p className="text-xs text-rose-100 mt-6 pt-4 border-t border-white/20">* Results are indicative only and not official quotes.</p>
          </div>
        )}
      </div>

      {/* Info Note */}
      <div className="pt-6 border-t border-slate-200">
        <p className="text-sm text-slate-600 leading-relaxed">
          <strong>Please Note:</strong> The interest rate displayed here is the current, national, prime interest rate, as set by the South African Reserve Bank. The interest rate offered by your bank when applying for a loan may vary.
        </p>
      </div>

      {/* FAQs Section */}
      <div className="pt-8">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Bond Affordability Calculator FAQs</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-xl p-5">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h3 className="font-semibold text-[#1e3a5f]">What is my gross income?</h3>
            </div>
            <p className="text-sm text-slate-600 pl-8">Your gross monthly income is your total income before tax and deductions.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-5">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h3 className="font-semibold text-[#1e3a5f]">What is my net income?</h3>
            </div>
            <p className="text-sm text-slate-600 pl-8">Your net monthly income is your total income after tax and deductions.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-5">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h3 className="font-semibold text-[#1e3a5f]">How is the home loan amount calculated?</h3>
            </div>
            <p className="text-sm text-slate-600 pl-8">Your repayment cannot be more than 30% of your gross monthly income and cannot exceed your net surplus income.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-5">
            <div className="flex items-start gap-3 mb-2">
              <HelpCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
              <h3 className="font-semibold text-[#1e3a5f]">How accurate is the bond calculator?</h3>
            </div>
            <p className="text-sm text-slate-600 pl-8">The bond calculator is a guideline. It does not include a credit check or full affordability assessment which the bank will require.</p>
          </div>
        </div>
      </div>
    </div>
  );
}