import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-[#0d9488] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LFF</span>
              </div>
              <span className="font-semibold text-lg">LookingForFinance</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              In association with @360 Finance Stellenbosch. Helping individuals and organisations find the right finance pathway.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <a href="tel:+27000000000" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +27 (0) 00 000 0000
              </a>
              <a href="mailto:info@lookingforfinance.co.za" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> info@lookingforfinance.co.za
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Stellenbosch, South Africa
              </span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to={createPageUrl('SolutionDetail') + '?type=residential'} className="hover:text-white transition-colors">Residential Property Finance</Link></li>
              <li><Link to={createPageUrl('SolutionDetail') + '?type=commercial'} className="hover:text-white transition-colors">Commercial Property Finance</Link></li>
              <li><Link to={createPageUrl('SolutionDetail') + '?type=business'} className="hover:text-white transition-colors">Business Finance</Link></li>
              <li><Link to={createPageUrl('SolutionDetail') + '?type=agricultural'} className="hover:text-white transition-colors">Agricultural Finance</Link></li>
              <li><Link to={createPageUrl('SolutionDetail') + '?type=vehicle'} className="hover:text-white transition-colors">Vehicle & Asset Finance</Link></li>
              <li><Link to={createPageUrl('SolutionDetail') + '?type=solar'} className="hover:text-white transition-colors">Solar & Backup Power</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to={createPageUrl('Calculators')} className="hover:text-white transition-colors">Calculators</Link></li>
              <li><Link to={createPageUrl('Education')} className="hover:text-white transition-colors">Financial Education</Link></li>
              <li><Link to={createPageUrl('Education') + '?section=faqs'} className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to={createPageUrl('Education') + '?section=glossary'} className="hover:text-white transition-colors">Glossary</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to={createPageUrl('About')} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to={createPageUrl('Contact')} className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to={createPageUrl('Insurance')} className="hover:text-white transition-colors">Insurance</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            <strong>Important:</strong> LookingForFinance facilitates introductions and structured submissions to suitable funders and lenders. 
            We are not a lender. All finance and insurance outcomes are subject to assessment, eligibility criteria, and final approval by the relevant funder or provider. 
            Calculator results are estimates only and do not constitute an offer or guarantee of finance terms.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} LookingForFinance. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}