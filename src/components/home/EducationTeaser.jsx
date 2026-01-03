import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, HelpCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EducationTeaser() {
  const resources = [
    {
      icon: GraduationCap,
      title: 'Start Here Guide',
      description: 'New to finance? Begin with the basics.',
      href: createPageUrl('EducationArticle') + '?slug=start-here',
    },
    {
      icon: FileText,
      title: 'Documents Overview',
      description: 'What documents might be needed.',
      href: createPageUrl('EducationArticle') + '?slug=documents',
    },
    {
      icon: HelpCircle,
      title: 'FAQs',
      description: 'Answers to common questions.',
      href: createPageUrl('Education') + '?section=faqs',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e3a5f]/10 rounded-full text-[#1e3a5f] text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Learn
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Financial education hub
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Understand how finance works, what to expect, and how to prepare. 
              Knowledge helps you make better decisions.
            </p>
            <Button asChild variant="outline" size="lg" className="border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white">
              <Link to={createPageUrl('Education')}>
                Browse All Resources
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Resource Cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={resource.href}
                  className="group block h-full p-6 bg-slate-50 rounded-2xl hover:bg-[#1e3a5f] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                    <resource.icon className="w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#1e3a5f] group-hover:text-white mb-2 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-slate-600 group-hover:text-slate-300 transition-colors">
                    {resource.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}