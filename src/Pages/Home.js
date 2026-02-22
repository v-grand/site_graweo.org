import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Users, Briefcase, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Home() {
  const { t } = useLanguage();

  const directions = [
    {
      icon: Heart,
      title: t('direction_humanitarian'),
      description: t('direction_humanitarian_desc'),
      color: 'from-red-50 to-pink-50',
      iconColor: 'text-red-600',
    },
    {
      icon: Users,
      title: t('direction_idps'),
      description: t('direction_idps_desc'),
      color: 'from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Briefcase,
      title: t('direction_business'),
      description: t('direction_business_desc'),
      color: 'from-green-50 to-emerald-50',
      iconColor: 'text-green-600',
    },
  ];

  const steps = [
    {
      number: '01',
      title: t('howwework_step1'),
      description: t('howwework_step1_desc'),
    },
    {
      number: '02',
      title: t('howwework_step2'),
      description: t('howwework_step2_desc'),
    },
    {
      number: '03',
      title: t('howwework_step3'),
      description: t('howwework_step3_desc'),
    },
    {
      number: '04',
      title: t('howwework_step4'),
      description: t('howwework_step4_desc'),
    },
  ];

  const mockReports = [
    {
      id: 1,
      date: '2024-01-15',
      title: 'Humanitarian Aid Distribution in Kharkiv',
      excerpt: 'Delivered essential supplies to 150 families affected by recent events...',
    },
    {
      id: 2,
      date: '2024-01-08',
      title: 'Small Business Support Program Launch',
      excerpt: 'Provided grants and mentorship to 25 local entrepreneurs...',
    },
    {
      id: 3,
      date: '2024-01-02',
      title: 'Housing Support for Displaced Families',
      excerpt: 'Successfully relocated 40 families to safe temporary housing...',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8f] to-[#1e3a5f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" fill="currentColor" />
              <span className="text-sm font-medium">{t('hero_subtitle')}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero_title')}
            </h1>
            
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              {t('hero_description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/Donate">
                <Button size="lg" className="w-full sm:w-auto">
                  <Heart className="w-5 h-5 mr-2" />
                  {t('hero_cta')}
                </Button>
              </Link>
              
              <Link to="/About">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                  {t('nav_about')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {t('about_title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about_description')}
            </p>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('directions_title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directions.map((direction, index) => {
              const Icon = direction.icon;
              return (
                <Card key={index} hover className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${direction.color} flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${direction.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {direction.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {direction.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t('howwework_title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm">
                  <div className="text-5xl font-bold text-[#fbbf24] mb-4 opacity-20">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reports.js Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t('latest_reports')}
            </h2>
            <Link to="/Reports">
              <Button variant="ghost">
                {t('all_reports')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockReports.map((report) => (
              <Card key={report.id} hover className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FileText className="w-4 h-4" />
                  <span>{report.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {report.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {report.excerpt}
                </p>
                <Link to={`/ReportDetail?id=${report.id}`}>
                  <Button variant="ghost" size="sm" className="text-[#1e3a5f]">
                    {t('view_report')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-[#fbbf24]" fill="currentColor" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('donate_title')}
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            {t('donate_subtitle')}
          </p>
          <Link to="/Donate">
            <Button size="lg">
              {t('hero_cta')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
