import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';

export default function Layout({ children }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}