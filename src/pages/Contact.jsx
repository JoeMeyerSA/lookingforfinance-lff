import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have questions or ready to discuss your finance needs? 
              We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0d9488]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#0d9488]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1e3a5f] mb-1">Phone</h3>
                    <a href="tel:+27000000000" className="text-slate-600 hover:text-[#0d9488] transition-colors">
                      +27 (0) 00 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0d9488]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0d9488]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1e3a5f] mb-1">Email</h3>
                    <a href="mailto:info@lookingforfinance.co.za" className="text-slate-600 hover:text-[#0d9488] transition-colors">
                      info@lookingforfinance.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0d9488]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#0d9488]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1e3a5f] mb-1">Location</h3>
                    <p className="text-slate-600">
                      Stellenbosch, Western Cape<br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0d9488]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#0d9488]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1e3a5f] mb-1">Office Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 08:00 - 17:00<br />
                      Saturday: 09:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action */}
              <div className="mt-8 p-6 bg-[#1e3a5f] rounded-2xl text-white">
                <h3 className="font-semibold mb-2">Looking for finance?</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Start with our eligibility check for a structured approach to finding the right solution.
                </p>
                <Button asChild size="sm" className="w-full bg-[#0d9488] hover:bg-[#0f766e]">
                  <Link to={createPageUrl('EligibilityCheck')}>
                    Start Eligibility Check
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-[#0d9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#0d9488]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">
                      Message Sent
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                      Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
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
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
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
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Subject
                          </label>
                          <select
                            className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Enquiry</option>
                            <option value="finance">Finance Enquiry</option>
                            <option value="insurance">Insurance Enquiry</option>
                            <option value="partnership">Partnership Opportunity</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we help you?"
                          className="h-32"
                        />
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                        <input type="checkbox" required className="mt-1" />
                        <p className="text-sm text-slate-600">
                          I consent to LookingForFinance contacting me regarding my enquiry and 
                          understand my information will be handled according to the privacy policy.
                        </p>
                      </div>

                      <Button type="submit" className="w-full sm:w-auto bg-[#0d9488] hover:bg-[#0f766e]">
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}