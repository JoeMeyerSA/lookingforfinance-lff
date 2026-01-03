import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Shield, Home, Car, Heart, Briefcase, Umbrella, Users,
  ArrowRight, CheckCircle, Phone, Mail
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
      description: 'Buildings, contents, and landlord insurance for residential and commercial properties.',
    },
    {
      icon: Car,
      title: 'Vehicle Insurance',
      description: 'Comprehensive and third-party cover for personal and commercial vehicles.',
    },
    {
      icon: Heart,
      title: 'Life & Disability',
      description: 'Life cover, disability, and income protection for you and your family.',
    },
    {
      icon: Briefcase,
      title: 'Business Insurance',
      description: 'Public liability, professional indemnity, and business interruption cover.',
    },
    {
      icon: Users,
      title: 'Medical Aid',
      description: 'Medical aid schemes and gap cover options for individuals and families.',
    },
    {
      icon: Umbrella,
      title: 'Short-term Insurance',
      description: 'General short-term insurance for assets and personal belongings.',
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
              Protect Your Wealth
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Insurance is an essential part of financial planning. We help you review your 
              coverage and connect with suitable insurance providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Insurance Categories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We can help review your needs across various insurance types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0d9488]/10 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-[#0d9488]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">
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
                Not sure if you have the right coverage? Request a review and we'll help 
                you understand your options and connect you with suitable providers.
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
                <p className="text-xs text-slate-500">
                  <strong>Disclaimer:</strong> Insurance advice and quotes are subject to 
                  assessment and provider terms. We facilitate introductions to suitable 
                  insurance providers and do not guarantee specific outcomes or premiums.
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
                    Request Received
                  </h3>
                  <p className="text-slate-600">
                    Thank you for your request. We'll be in touch shortly to discuss your insurance needs.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+27 00 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Insurance Type of Interest
                    </label>
                    <select
                      className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                      value={formData.insuranceType}
                      onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                    >
                      <option value="">Select type (optional)</option>
                      <option value="property">Property Insurance</option>
                      <option value="vehicle">Vehicle Insurance</option>
                      <option value="life">Life & Disability</option>
                      <option value="business">Business Insurance</option>
                      <option value="medical">Medical Aid</option>
                      <option value="short-term">Short-term Insurance</option>
                      <option value="comprehensive">Comprehensive Review</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Tell us about your needs
                    </label>
                    <Textarea
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