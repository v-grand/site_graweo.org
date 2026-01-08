import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { LanguageProvider } from './LenguageContext'; // Corrected import path

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