import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../Components/LanguageContext';
import { FileText, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../Components/Ui/Card'; // Updated import path
import Button from '../Components/Ui/Button'; // Updated import path

export default function Reports() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 9;

  const mockReports = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    date: `2024-01-${String(24 - i).padStart(2, '0')}`,
    title: `Report ${i + 1}: ${['Humanitarian Aid Distribution', 'Small Business Support', 'Housing Assistance', 'Medical Supplies Delivery'][i % 4]}`,
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: ['humanitarian', 'business', 'idps', 'humanitarian'][i % 4],
  }));

  const totalPages = Math.ceil(mockReports.length / reportsPerPage);
  const startIndex = (currentPage - 1) * reportsPerPage;
  const currentReports = mockReports.slice(startIndex, startIndex + reportsPerPage);

  const categoryColors = {
    humanitarian: 'bg-red-100 text-red-700',
    business: 'bg-green-100 text-green-700',
    idps: 'bg-blue-100 text-blue-700',
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-[#fbbf24]" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('reports_title')}
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            {t('reports_subtitle')}
          </p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentReports.map((report) => (
              <Card key={report.id} hover className="p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{report.date}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[report.category]}`}>
                    {report.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                  {report.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                  {report.excerpt}
                </p>
                
                <Link to={`/ReportDetail?id=${report.id}`}>
                  <Button variant="ghost" size="sm" className="text-[#1e3a5f]">
                    {t('read_more')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className="min-w-[40px]"
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
