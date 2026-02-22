import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function ReportDetail() {
  const { t } = useLanguage();
  const urlParams = new URLSearchParams(window.location.search);
  const reportId = urlParams.get('id') || '1';

  const mockReport = {
    id: reportId,
    date: '2024-01-15',
    title: 'Humanitarian Aid Distribution in Kharkiv Region',
    content: `
      <p>On January 15, 2024, our team successfully delivered essential humanitarian aid to 150 families in the Kharkiv region. The operation was conducted in collaboration with local authorities and volunteer organizations.</p>
      
      <h3>Aid Delivered:</h3>
      <ul>
        <li>Food packages containing essential items for one month</li>
        <li>Hygiene products and cleaning supplies</li>
        <li>Winter clothing and blankets</li>
        <li>Medical supplies and first aid kits</li>
      </ul>
      
      <h3>Impact:</h3>
      <p>This distribution reached families who were most affected by recent events, including elderly residents, families with children, and those who lost their homes. Each package was carefully prepared to meet the specific needs of the recipients.</p>
      
      <h3>Volunteer Contribution:</h3>
      <p>Over 20 volunteers participated in this operation, dedicating their time to sorting, packing, and delivering aid packages. Their dedication and hard work made this distribution possible.</p>
      
      <h3>Next Steps:</h3>
      <p>We plan to continue our support in this region with monthly distributions and are working to establish a more permanent support system for affected families.</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600',
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <section className="bg-gray-50 py-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/Reports">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('back_to_reports')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Report Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Calendar className="w-4 h-4" />
              <span>{mockReport.date}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              {mockReport.title}
            </h1>
          </div>

          {/* Content */}
          <Card className="p-8 sm:p-12 mb-12">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: mockReport.content
                  .split('\n')
                  .map((line) => line.trim())
                  .filter((line) => line)
                  .map((line) => {
                    if (line.startsWith('<h3>'))
                      return `<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">${line.slice(4, -5)}</h3>`;
                    if (line.startsWith('<ul>'))
                      return '<ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">';
                    if (line.startsWith('<li>'))
                      return `<li class="leading-relaxed">${line.slice(4, -5)}</li>`;
                    if (line.startsWith('<p>'))
                      return `<p class="text-gray-700 leading-relaxed mb-6">${line.slice(3, -4)}</p>`;
                    return line;
                  })
                  .join(''),
              }}
            />
          </Card>

          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <ImageIcon className="w-8 h-8 text-[#1e3a5f]" />
              {t('gallery_title')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mockReport.images.map((image, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <img
                      src={image}
                      alt={`Report ${index + 1}`} // Corrected alt text
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="p-8 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              {t('donate_title')}
            </h3>
            <p className="text-gray-100 mb-6">
              {t('donate_subtitle')}
            </p>
            <Link to="/Donate">
              <Button size="lg">
                {t('hero_cta')}
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}