import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useLanguage } from './LenguageContext'; // Corrected import path
import LanguageSwitcher from './Ui/LanguageSwitcher'; // Corrected import path case

export default function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('nav_home'), href: '/Home' },
    { name: t('nav_about'), href: '/About' },
    { name: t('nav_donate'), href: '/Donate' },
    { name: t('nav_reports'), href: '/Reports' },
    { name: t('nav_contacts'), href: '/Contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/Home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold text-[#1e3a5f] hidden sm:inline">GRAVEO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1e3a5f] hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <Link
              to="/Donate"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 font-semibold rounded-lg transition-all hover:scale-105"
            >
              <Heart className="w-4 h-4" />
              <span>{t('hero_cta')}</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/Donate"
                onClick={() => setMobileMenuOpen(false)}
                className="sm:hidden mt-2 px-4 py-3 bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 font-semibold rounded-lg text-center transition-colors"
              >
                {t('hero_cta')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}