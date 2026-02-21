import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav_home'), href: '/Home.js' },
    { name: t('nav_about'), href: '/About.js' },
    { name: t('nav_donate'), href: '/Donate' },
    { name: t('nav_reports'), href: '/Reports.js' },
    { name: t('nav_contacts'), href: '/Contacts' },
  ];

  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#fbbf24] rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#1e3a5f]" fill="currentColor" />
              </div>
              <span className="text-xl font-bold">GRAVEO</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer_tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer_links')}</h3>
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer_contact')}</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@graveo.org"
                className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@graveo.org</span>
              </a>
              <a
                href="https://t.me/graveo_foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>@graveo_foundation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} GRAVEO. {t('footer_rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}