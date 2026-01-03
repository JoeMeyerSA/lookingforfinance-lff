import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: createPageUrl('Solutions') },
    { label: 'Insurance', href: createPageUrl('Insurance') },
    { label: 'Financial Education', href: createPageUrl('Education') },
    { label: 'Calculators', href: createPageUrl('Calculators') },
  ];

  const secondaryItems = [
    { label: 'About', href: createPageUrl('About') },
    { label: 'Contact', href: createPageUrl('Contact') },
  ];

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#0d9488] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LFF</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[#1e3a5f] font-semibold text-lg">LookingForFinance</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-4 py-2 text-slate-600 hover:text-[#1e3a5f] font-medium transition-colors rounded-lg hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 text-slate-600 hover:text-[#1e3a5f] font-medium transition-colors rounded-lg hover:bg-slate-50 flex items-center gap-1">
                More <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {secondaryItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.href} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-[#0d9488] hover:bg-[#0f766e] text-white px-6">
              <Link to={createPageUrl('EligibilityCheck')}>Start Eligibility Check</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-[#1e3a5f]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-600 hover:text-[#1e3a5f] font-medium hover:bg-slate-50 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
              {secondaryItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-500 hover:text-[#1e3a5f] font-medium hover:bg-slate-50 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button asChild className="w-full bg-[#0d9488] hover:bg-[#0f766e] text-white">
                  <Link to={createPageUrl('EligibilityCheck')} onClick={() => setMobileMenuOpen(false)}>
                    Start Eligibility Check
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}