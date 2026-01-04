import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { 
  Users, Target, Shield, Handshake, ArrowRight, CheckCircle,
  Building2, Award, Clock, Heart
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We provide honest, realistic guidance. If something won\'t work, we\'ll tell you upfront.',
    },
    {
      icon: Target,
      title: 'Thoroughness',
      description: 'We prepare applications properly, ensuring all details are in order before submission.',
    },
    {
      icon: Handshake,
      title: 'Personalised Service',
      description: 'Every situation is different. We take time to understand your specific circumstances.',
    },
    {
      icon: Heart,
      title: 'Client Focus',
      description: 'Your interests come first. We guide you toward solutions that genuinely fit your needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-[#1e3a5f] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Finance guidance you can trust
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                LookingForFinance helps individuals and organisations navigate the finance landscape. 
                We facilitate introductions and structured submissions to suitable funders.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#0d9488] rounded-full" />
                <span className="text-white">
                  In association with <strong>@360 Finance Stellenbosch</strong>
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Award className="w-8 h-8 text-[#0d9488] mb-3" />
                  <p className="text-3xl font-bold text-white mb-1">15+</p>
                  <p className="text-slate-300 text-sm">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Users className="w-8 h-8 text-[#0d9488] mb-3" />
                  <p className="text-3xl font-bold text-white mb-1">500+</p>
                  <p className="text-slate-300 text-sm">Clients Assisted</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Building2 className="w-8 h-8 text-[#0d9488] mb-3" />
                  <p className="text-3xl font-bold text-white mb-1">20+</p>
                  <p className="text-slate-300 text-sm">Funder Relationships</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Clock className="w-8 h-8 text-[#0d9488] mb-3" />
                  <p className="text-3xl font-bold text-white mb-1">48hr</p>
                  <p className="text-slate-300 text-sm">Response Time</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              What we do
            </h2>
            <p className="text-lg text-slate-600">
              We act as your guide through the finance process, from initial enquiry to successful application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#0d9488]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#0d9488]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Assess & Advise</h3>
              <p className="text-slate-600">
                We evaluate your situation honestly, identify suitable options, and explain what's realistically achievable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#0d9488]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-[#0d9488]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Match & Connect</h3>
              <p className="text-slate-600">
                We leverage our funder relationships to find the right match for your specific needs and circumstances.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#0d9488]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#0d9488]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Prepare & Submit</h3>
              <p className="text-slate-600">
                We help package your application properly, ensuring all information is complete and presented correctly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Our values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide how we work with every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <h3 className="font-semibold text-[#1e3a5f] mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Association */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
            @360 Finance Stellenbosch
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            LookingForFinance operates in association with @360 Finance Stellenbosch, 
            an established financial intermediary with deep experience in the South African 
            finance landscape. This partnership brings you access to extensive funder networks 
            and proven expertise in structuring successful applications.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="w-5 h-5 text-[#0d9488]" />
              <span>Registered financial services provider</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="w-5 h-5 text-[#0d9488]" />
              <span>Established funder relationships</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="w-5 h-5 text-[#0d9488]" />
              <span>Local expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#0f4c5c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to explore your options?
          </h2>
          <p className="text-slate-300 mb-8">
            Start with an eligibility pre-check. Outcomes are subject to assessment and final approval by the relevant funder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#0d9488] hover:bg-[#0f766e] text-white">
              <Link to={createPageUrl('EligibilityCheck')}>
                Start Eligibility Check
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link to={createPageUrl('Contact')}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}