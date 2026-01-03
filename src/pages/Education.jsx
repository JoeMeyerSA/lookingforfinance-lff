import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, Search, GraduationCap, FileText, HelpCircle, BookMarked,
  ArrowRight, ChevronDown, ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Education() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialSection = urlParams.get('section') || 'guides';
  
  const [activeTab, setActiveTab] = useState(initialSection);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    { id: 'guides', label: 'Guides', icon: GraduationCap },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'glossary', label: 'Glossary', icon: BookMarked },
  ];

  const guides = [
    {
      slug: 'start-here',
      title: 'Start Here: Understanding Finance',
      description: 'New to finance? This guide covers the basics you need to know before applying.',
      category: 'Getting Started',
      readTime: '5 min',
    },
    {
      slug: 'eligibility',
      title: 'How Eligibility Works',
      description: 'Learn what funders look for and how eligibility is assessed.',
      category: 'Getting Started',
      readTime: '4 min',
    },
    {
      slug: 'rates-terms',
      title: 'Understanding Rates, Terms & Deposits',
      description: 'A clear explanation of interest rates, loan terms, and deposit requirements.',
      category: 'Key Concepts',
      readTime: '6 min',
    },
    {
      slug: 'credit-score',
      title: 'Your Credit Score Explained',
      description: 'What your credit score means and how it affects your finance options.',
      category: 'Key Concepts',
      readTime: '4 min',
    },
    {
      slug: 'calculators-guide',
      title: 'How to Use Our Calculators Responsibly',
      description: 'Get the most out of our calculators while understanding their limitations.',
      category: 'Tools',
      readTime: '3 min',
    },
    {
      slug: 'documents',
      title: 'Documents You May Need',
      description: 'An overview of typical documentation requirements for finance applications.',
      category: 'Preparation',
      readTime: '5 min',
    },
  ];

  const faqs = [
    {
      question: 'What does LookingForFinance do?',
      answer: 'We help individuals and organisations find the right finance pathway. We assess your situation, identify suitable funders, and help prepare and submit applications. We are not a lender – we facilitate the process between you and appropriate funders.',
    },
    {
      question: 'Is there a cost to use your services?',
      answer: 'Our initial eligibility check and consultation is free. Fees, if any, depend on the type of finance and complexity of the application. We\'ll always be upfront about any costs before you commit.',
    },
    {
      question: 'How long does the process take?',
      answer: 'Timelines vary by finance type and funder. A simple vehicle finance application might take a few days, while property development finance could take several weeks. We\'ll give you realistic expectations for your specific situation.',
    },
    {
      question: 'Do you guarantee approval?',
      answer: 'No. We cannot guarantee approval as all decisions rest with the funders. However, we only submit applications where we believe there\'s a reasonable chance of success, and we work to present your application as strongly as possible.',
    },
    {
      question: 'What information do I need to provide?',
      answer: 'This depends on the type of finance. Generally, you\'ll need proof of identity, income documentation, and details about what you\'re financing. We\'ll guide you through exactly what\'s needed for your specific situation.',
    },
    {
      question: 'Can you help if I have a poor credit record?',
      answer: 'We can assess your situation and advise honestly on your options. Some funders specialise in clients with credit challenges, though terms may differ. We won\'t waste your time if options are truly limited.',
    },
    {
      question: 'Are the calculator results accurate?',
      answer: 'Our calculators provide estimates only. Actual rates, terms, and monthly payments depend on your specific circumstances and the funder\'s assessment. Use calculators for planning, not as guaranteed figures.',
    },
  ];

  const glossary = [
    { term: 'Amortisation', definition: 'The process of spreading loan repayments over time, with each payment covering both principal and interest.' },
    { term: 'Balloon Payment', definition: 'A larger final payment at the end of a loan term, reducing monthly payments during the loan period.' },
    { term: 'Capital', definition: 'The principal amount borrowed, excluding interest and fees.' },
    { term: 'Collateral', definition: 'An asset pledged as security for a loan, which the lender can claim if you default.' },
    { term: 'Credit Score', definition: 'A numerical rating representing your creditworthiness based on your credit history.' },
    { term: 'Deposit', definition: 'An upfront payment made towards a purchase, reducing the amount needed to finance.' },
    { term: 'Equity', definition: 'The difference between an asset\'s value and any debt secured against it.' },
    { term: 'Fixed Rate', definition: 'An interest rate that remains constant throughout the loan term.' },
    { term: 'LTV (Loan-to-Value)', definition: 'The ratio of the loan amount to the value of the asset being financed.' },
    { term: 'Prime Rate', definition: 'The benchmark interest rate used by banks, upon which other rates are based.' },
    { term: 'Principal', definition: 'The original amount borrowed, before interest is added.' },
    { term: 'Refinancing', definition: 'Replacing an existing loan with a new one, often to get better terms.' },
    { term: 'Term', definition: 'The length of time over which a loan is repaid.' },
    { term: 'Variable Rate', definition: 'An interest rate that can change during the loan term, usually linked to the prime rate.' },
  ];

  const filteredGuides = guides.filter(guide => 
    guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guide.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGlossary = glossary.filter(item =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-[#1e3a5f] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Financial Education Hub
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Understand how finance works, what to expect, and how to prepare. 
              Knowledge helps you make better decisions.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search guides, FAQs, glossary..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-white border-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-slate-200 bg-white sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === cat.id
                    ? 'bg-[#0d9488] text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {/* Guides */}
            {activeTab === 'guides' && (
              <motion.div
                key="guides"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGuides.map((guide) => (
                    <Link
                      key={guide.slug}
                      to={createPageUrl('EducationArticle') + `?slug=${guide.slug}`}
                      className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#0d9488]/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 text-xs text-[#0d9488] font-medium mb-3">
                        <span className="px-2 py-1 bg-[#0d9488]/10 rounded-full">
                          {guide.category}
                        </span>
                        <span className="text-slate-400">{guide.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#0d9488] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {guide.description}
                      </p>
                      <div className="flex items-center text-[#0d9488] text-sm font-medium">
                        Read guide
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
                {filteredGuides.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No guides found matching your search.</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Documents */}
            {activeTab === 'documents' && (
              <motion.div
                key="documents"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                    Documents You May Need
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Documentation requirements vary by finance type and funder. Below is a general 
                    overview of what might be required. We'll guide you on specifics for your situation.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-3">Personal Identification</h3>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
                          Valid South African ID or passport
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
                          Proof of residence (utility bill or bank statement)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-3">Income & Employment</h3>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
                          Latest payslips (typically 3 months)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
                          Bank statements (typically 3-6 months)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
                          Employment letter or contract
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#1e3a5f] mb-3">Self-Employed / Business</h3>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
                          Financial statements (2-3 years)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
                          Tax returns and clearance
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
                          Company registration documents
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
                          Business bank statements
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> This is a general guide. Specific requirements will 
                      be confirmed based on your application type. We'll tell you exactly what's 
                      needed before you need to prepare anything.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* FAQs */}
            {activeTab === 'faqs' && (
              <motion.div
                key="faqs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                <div className="space-y-3">
                  {filteredFaqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className="font-medium text-[#1e3a5f] pr-4">{faq.question}</span>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
                {filteredFaqs.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No FAQs found matching your search.</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Glossary */}
            {activeTab === 'glossary' && (
              <motion.div
                key="glossary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  {filteredGlossary.map((item, index) => (
                    <div
                      key={item.term}
                      className={`p-5 ${index !== filteredGlossary.length - 1 ? 'border-b border-slate-100' : ''}`}
                    >
                      <dt className="font-semibold text-[#1e3a5f] mb-1">{item.term}</dt>
                      <dd className="text-slate-600 text-sm">{item.definition}</dd>
                    </div>
                  ))}
                </div>
                {filteredGlossary.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No glossary terms found matching your search.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}