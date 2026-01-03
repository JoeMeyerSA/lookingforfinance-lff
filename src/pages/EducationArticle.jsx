import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EducationArticle() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug') || 'start-here';

  const articles = {
    'start-here': {
      title: 'Start Here: Understanding Finance',
      category: 'Getting Started',
      readTime: '5 min',
      intro: 'If you\'re new to finance or feeling overwhelmed by options, this guide will help you understand the basics and feel more confident about your next steps.',
      sections: [
        {
          title: 'What is finance, really?',
          content: 'Finance simply means borrowing money to pay for something now, then repaying it over time with interest. Whether it\'s a property, vehicle, or business equipment, the principle is the same: you get access to the asset immediately while spreading the cost.',
        },
        {
          title: 'Key terms you\'ll encounter',
          content: null,
          bullets: [
            '<strong>Principal:</strong> The amount you borrow',
            '<strong>Interest:</strong> The cost of borrowing, expressed as a percentage',
            '<strong>Term:</strong> How long you have to repay the loan',
            '<strong>Deposit:</strong> An upfront payment that reduces how much you need to borrow',
          ],
        },
        {
          title: 'How do funders decide?',
          content: 'Funders (banks and other lenders) assess whether you can afford to repay what you\'re asking to borrow. They look at your income, expenses, existing debts, and credit history. They also consider the value of what you\'re financing.',
        },
        {
          title: 'Why use an intermediary like LFF?',
          content: 'We help you understand your options, prepare your application properly, and submit to funders most likely to approve you. This can save time, reduce stress, and often leads to better outcomes than applying directly without guidance.',
        },
      ],
      nextSteps: [
        { label: 'Learn how eligibility works', href: createPageUrl('EducationArticle') + '?slug=eligibility' },
        { label: 'Try our calculators', href: createPageUrl('Calculators') },
        { label: 'Start an eligibility check', href: createPageUrl('EligibilityCheck') },
      ],
    },
    'eligibility': {
      title: 'How Eligibility Works',
      category: 'Getting Started',
      readTime: '4 min',
      intro: 'Understanding what funders look for helps you prepare better and set realistic expectations. Here\'s what you need to know about the eligibility assessment process.',
      sections: [
        {
          title: 'The affordability test',
          content: 'Funders must ensure you can afford the monthly repayments. They look at your income after tax and deduct existing financial commitments. The remaining amount determines what you can afford to repay each month.',
        },
        {
          title: 'Your credit record',
          content: 'Your credit score summarises your history of managing debt. Late payments, defaults, or judgements lower your score. A higher score typically means better interest rates and more options.',
        },
        {
          title: 'What funders assess',
          content: null,
          bullets: [
            'Stable, verifiable income',
            'Reasonable debt-to-income ratio',
            'Clean or acceptable credit history',
            'Value and quality of the asset being financed',
            'Deposit or equity available',
          ],
        },
        {
          title: 'Pre-qualification vs approval',
          content: 'A pre-qualification or eligibility check gives an indication of whether you\'re likely to be approved. Final approval only comes after full assessment of your documents and the specific asset.',
        },
      ],
      nextSteps: [
        { label: 'Understand rates and terms', href: createPageUrl('EducationArticle') + '?slug=rates-terms' },
        { label: 'Learn about credit scores', href: createPageUrl('EducationArticle') + '?slug=credit-score' },
        { label: 'Check your eligibility', href: createPageUrl('EligibilityCheck') },
      ],
    },
    'rates-terms': {
      title: 'Understanding Rates, Terms & Deposits',
      category: 'Key Concepts',
      readTime: '6 min',
      intro: 'Interest rates, loan terms, and deposits significantly affect how much you pay. Understanding these concepts helps you make better decisions and compare options effectively.',
      sections: [
        {
          title: 'Interest rates explained',
          content: 'Interest is the cost of borrowing money. In South Africa, rates are often expressed relative to the prime rate (e.g., prime + 1%). A lower rate means you pay less over the life of the loan.',
        },
        {
          title: 'Fixed vs variable rates',
          content: null,
          bullets: [
            '<strong>Variable (linked):</strong> Your rate moves with the prime rate – it can go up or down',
            '<strong>Fixed:</strong> Your rate stays the same for a set period, providing payment certainty',
          ],
        },
        {
          title: 'How loan term affects payments',
          content: 'A longer term means lower monthly payments but more total interest paid. A shorter term means higher monthly payments but less total interest. The right choice depends on your cash flow and goals.',
        },
        {
          title: 'The power of a deposit',
          content: 'A larger deposit reduces how much you need to borrow, which means lower monthly payments and less interest. It also shows funders you\'re committed and reduces their risk, often leading to better rates.',
        },
      ],
      nextSteps: [
        { label: 'Try our calculators', href: createPageUrl('Calculators') },
        { label: 'Learn about credit scores', href: createPageUrl('EducationArticle') + '?slug=credit-score' },
        { label: 'Check your eligibility', href: createPageUrl('EligibilityCheck') },
      ],
    },
    'credit-score': {
      title: 'Your Credit Score Explained',
      category: 'Key Concepts',
      readTime: '4 min',
      intro: 'Your credit score is one of the most important factors in finance applications. Understanding what it means and how to improve it can significantly affect your options.',
      sections: [
        {
          title: 'What is a credit score?',
          content: 'A credit score is a number (typically between 0 and 999 in South Africa) that represents your creditworthiness. It\'s calculated from your credit history – how you\'ve managed accounts, loans, and payments over time.',
        },
        {
          title: 'Score ranges',
          content: null,
          bullets: [
            '<strong>Excellent (760+):</strong> Best rates and terms available',
            '<strong>Good (680-759):</strong> Good options with competitive rates',
            '<strong>Average (580-679):</strong> May face higher rates or stricter terms',
            '<strong>Poor (below 580):</strong> Limited options, higher rates, may need alternative funders',
          ],
        },
        {
          title: 'What affects your score',
          content: null,
          bullets: [
            'Payment history (most important)',
            'Amount of debt vs credit available',
            'Length of credit history',
            'Types of credit used',
            'Recent credit applications',
          ],
        },
        {
          title: 'Improving your score',
          content: 'Pay all accounts on time, reduce debt levels, don\'t apply for too much credit at once, and check your report for errors. Improvement takes time but is worth the effort.',
        },
      ],
      nextSteps: [
        { label: 'Understand eligibility', href: createPageUrl('EducationArticle') + '?slug=eligibility' },
        { label: 'Check your eligibility', href: createPageUrl('EligibilityCheck') },
      ],
    },
    'calculators-guide': {
      title: 'How to Use Our Calculators Responsibly',
      category: 'Tools',
      readTime: '3 min',
      intro: 'Our calculators are useful planning tools, but they have limitations. Here\'s how to get the most value from them while understanding what they can and cannot tell you.',
      sections: [
        {
          title: 'What calculators can do',
          content: null,
          bullets: [
            'Estimate monthly payments based on assumed rates',
            'Help you compare different scenarios (term lengths, deposits)',
            'Give you a ballpark figure for budgeting',
            'Help you prepare questions for your consultation',
          ],
        },
        {
          title: 'What calculators cannot do',
          content: null,
          bullets: [
            'Guarantee actual rates or terms you\'ll receive',
            'Account for your specific circumstances',
            'Include all fees and charges',
            'Replace a proper eligibility assessment',
          ],
        },
        {
          title: 'Tips for using calculators',
          content: 'Use realistic figures for your situation. Try different scenarios to understand how changes affect payments. Remember that the actual rate you receive depends on your credit profile, deposit, and the funder\'s assessment.',
        },
      ],
      nextSteps: [
        { label: 'Try our calculators', href: createPageUrl('Calculators') },
        { label: 'Start an eligibility check', href: createPageUrl('EligibilityCheck') },
      ],
    },
    'documents': {
      title: 'Documents You May Need',
      category: 'Preparation',
      readTime: '5 min',
      intro: 'Knowing what documents might be required helps you prepare. While exact requirements vary, here\'s a general overview of typical documentation for finance applications.',
      sections: [
        {
          title: 'Identity and residence',
          content: null,
          bullets: [
            'Valid South African ID or passport',
            'Proof of current address (utility bill, bank statement)',
          ],
        },
        {
          title: 'For employed individuals',
          content: null,
          bullets: [
            'Latest 3 months\' payslips',
            'Latest 3-6 months\' bank statements',
            'Letter of employment',
          ],
        },
        {
          title: 'For self-employed / business owners',
          content: null,
          bullets: [
            '2-3 years\' financial statements',
            'Tax returns and clearance',
            'Company registration documents (if applicable)',
            'Business bank statements',
          ],
        },
        {
          title: 'Property-specific documents',
          content: null,
          bullets: [
            'Offer to purchase',
            'Title deed (for refinancing)',
            'Property valuation',
          ],
        },
        {
          title: 'Don\'t prepare everything now',
          content: 'We\'ll tell you exactly what\'s needed based on your specific application. This list is for general awareness – you don\'t need to gather everything before talking to us.',
        },
      ],
      nextSteps: [
        { label: 'Start an eligibility check', href: createPageUrl('EligibilityCheck') },
        { label: 'Contact us with questions', href: createPageUrl('Contact') },
      ],
    },
  };

  const article = articles[slug] || articles['start-here'];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#1e3a5f] py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to={createPageUrl('Education')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Education Hub
            </Link>
            
            <div className="flex items-center gap-3 text-sm text-white/70 mb-4">
              <span className="px-2 py-1 bg-white/10 rounded-full">{article.category}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime} read
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-white">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm"
          >
            {/* Intro */}
            <p className="text-lg text-slate-700 leading-relaxed mb-8 pb-8 border-b border-slate-100">
              {article.intro}
            </p>

            {/* Sections */}
            <div className="space-y-8">
              {article.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  {section.bullets && (
                    <ul className="space-y-2 mt-3">
                      {section.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full mt-2 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: bullet }} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Next Steps */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <h3 className="font-semibold text-[#1e3a5f] mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#0d9488]" />
                Next Steps
              </h3>
              <div className="space-y-2">
                {article.nextSteps.map((step, index) => (
                  <Link
                    key={index}
                    to={step.href}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-[#0d9488]/10 transition-colors group"
                  >
                    <span className="text-slate-700 group-hover:text-[#1e3a5f]">{step.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0d9488] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}