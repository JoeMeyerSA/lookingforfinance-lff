import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Shield, Home, Car, Heart, Briefcase, Umbrella, Users, Building2, Banknote,
  ArrowRight, CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Insurance() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    {
      icon: Home,
      title: 'Property Insurance',
      description: 'Buildings, contents, and landlord cover for residential and commercial properties.',
    },
    {
      icon: Car,
      title: 'Vehicle Insurance',
      description: 'Comprehensive and third-party cover for personal and commercial vehicles.',
    },
    {
      icon: Heart,
      title: 'Life & Disability',
      description: 'Life cover, disability, and income protection for individuals and families.',
    },
    {
      icon: Users,
      title: 'Medical Aid & Gap Cover',
      description: 'Medical aid schemes and gap cover options for comprehensive healthcare.',
    },
    {
      icon: Briefcase,
      title: 'Business Insurance',
      description: 'Public liability, professional indemnity, and business interruption cover.',
    },
    {
      icon: Building2,
      title: 'Commercial Property',
      description: 'Specialised cover for commercial buildings and business premises.',
    },
    {
      icon: Umbrella,
      title: 'Personal Liability',
      description: 'Liability cover for personal risks and unexpected claims.',
    },
    {
      icon: Banknote,
      title: 'Credit & Payment Protection',
      description: 'Protection for loan repayments in case of unforeseen circumstances.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to the backend
    setSubmitted(true);
  };

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
            <div className="w-16 h-16 bg-[#0d9488]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#0d9488]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Insurance & Risk Protection
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Protecting your wealth and reducing risk is as important as building it. 
              We help review your coverage and connect you with suitable insurance providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 text-center">
            Why Insurance Matters
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <p className="mb-4">
              Insurance is a fundamental part of financial planning. It protects what you've worked to build 
              and reduces the impact of unexpected events on your financial position.
            </p>
            <p className="mb-4">
              Whether it's safeguarding your property, protecting your income, or ensuring your family's 
              security, the right insurance cover provides peace of mind and financial resilience.
            </p>
            <p>
              We don't sell insurance directly. Instead, we help you understand your needs, review your 
              current coverage, and connect you with suitable insurance providers who can offer appropriate solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Insurance Categories We Review</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We can help assess your needs across various insurance types and connect you with providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-[#0d9488]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0d9488]/10 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-[#0d9488]" />
                </div>
                <h3 className="text-base font-semibold text-[#1e3a5f] mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Review Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
                Request an Insurance Review
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Not sure if you have adequate coverage? Request a no-obligation review. 
                We'll assess your needs and connect you with suitable insurance providers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1e3a5f]">No obligation review</p>
                    <p className="text-sm text-slate-600">We assess your needs without pressure</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1e3a5f]">Multiple provider access</p>
                    <p className="text-sm text-slate-600">Compare options from different insurers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#1e3a5f]">Expert guidance</p>
                    <p className="text-sm text-slate-600">Understand what coverage you actually need</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>Important:</strong> All insurance recommendations are subject to provider 
                  assessment and terms. Premiums and cover depend on individual circumstances, risk profile, 
                  and underwriting criteria. We facilitate connections to suitable providers but do not 
                  guarantee specific outcomes, coverage, or premium amounts.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-[#0d9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#0d9488]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                    Review Request Received
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for your request. We'll contact you within 1-2 business days to discuss 
                    your insurance needs and connect you with suitable providers.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-xl mb-4">
                    <h4 className="font-medium text-[#1e3a5f] mb-2 text-sm">What happens next:</h4>
                    <ol className="text-left text-sm text-slate-600 space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="font-medium text-[#0d9488]">1.</span>
                        We'll review your request and assess which insurance types are most relevant
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium text-[#0d9488]">2.</span>
                        A consultant will contact you to understand your needs in detail
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium text-[#0d9488]">3.</span>
                        We'll connect you with suitable providers who can offer quotes and cover options
                      </li>
                    </ol>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild variant="outline" onClick={() => setSubmitted(false)}>
                      <Link to={createPageUrl('Home')}>Return Home</Link>
                    </Button>
                    <Button asChild className="bg-[#0d9488] hover:bg-[#0f766e]">
                      <Link to={createPageUrl('Contact')}>Contact Us</Link>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="insurance-name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="insurance-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name"
                      aria-required="true"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="insurance-email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="insurance-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label htmlFor="insurance-phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone
                      </label>
                      <Input
                        id="insurance-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+27 00 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="insurance-type" className="block text-sm font-medium text-slate-700 mb-2">
                      Insurance Type of Interest
                    </label>
                    <select
                      id="insurance-type"
                      className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                      value={formData.insuranceType}
                      onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                    >
                      <option value="">Select type (optional)</option>
                      <option value="property">Property Insurance</option>
                      <option value="vehicle">Vehicle Insurance</option>
                      <option value="life">Life & Disability</option>
                      <option value="medical">Medical Aid & Gap Cover</option>
                      <option value="business">Business Insurance</option>
                      <option value="commercial">Commercial Property</option>
                      <option value="liability">Personal Liability</option>
                      <option value="credit">Credit & Payment Protection</option>
                      <option value="comprehensive">Comprehensive Review (All Types)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="insurance-message" className="block text-sm font-medium text-slate-700 mb-2">
                      Tell us about your needs
                    </label>
                    <Textarea
                      id="insurance-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your current situation and what you're looking to achieve..."
                      className="h-24"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#0d9488] hover:bg-[#0f766e]">
                    Request Insurance Review
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}