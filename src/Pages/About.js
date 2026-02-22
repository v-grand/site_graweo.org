import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Eye, Scale, MapPin, Building2 } from 'lucide-react';
import Card from '../components/ui/Card';

export default function About() {
  const { t } = useLanguage();

  const goals = [
    t('goal1'),
    t('goal2'),
    t('goal3'),
    t('goal4'),
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('nav_about')}
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              {t('about_description')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1e3a5f] px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">{t('mission_title')}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('mission_title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('mission_text')}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center">
                <Eye className="w-32 h-32 text-[#1e3a5f] opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('goals_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-xl flex items-center justify-center text-gray-900 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-2">
                    {goal}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('legal_title')}
          </h2>
          
          <Card className="p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-[#1e3a5f] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{t('legal_name')}</div>
                  <div className="text-gray-600">{t('legal_name_value')}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Scale className="w-6 h-6 text-[#1e3a5f] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{t('legal_registration')}</div>
                  <div className="text-gray-600">Foundation Registration Number (Example)</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#1e3a5f] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{t('legal_country')}</div>
                  <div className="text-gray-600">European Union</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#1e3a5f] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{t('legal_address')}</div>
                  <div className="text-gray-600">
                    <div>Head Office: European Union (Example Address)</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
}
