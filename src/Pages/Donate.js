import React, { useState } from 'react';
import { useLanguage } from '../Components/LenguageContext'; // Updated import path
import { Heart, Bitcoin, Banknote, CreditCard, Copy, CheckCircle2 } from 'lucide-react';
import Card from '../Components/Ui/Card'; // Updated import path
import Button from '../Components/Ui/Button'; // Updated import path

export default function Donate() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState('humanitarian');

  const cryptoAddresses = {
    bitcoin: 'bc1q... (Example BTC Address)',
    ethereum: '0x... (Example ETH Address)',
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {t('donate_title')}
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            {t('donate_subtitle')}
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cryptocurrency */}
            <Card className="p-8 text-center">
              <Bitcoin className="w-12 h-12 text-[#fbbf24] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('crypto_title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('crypto_subtitle')}
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Bitcoin (BTC)</p>
                  <div className="flex items-center justify-center bg-gray-100 rounded-lg p-3">
                    <span className="text-sm font-mono truncate">{cryptoAddresses.bitcoin}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(cryptoAddresses.bitcoin)}
                      className="ml-2 p-1"
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Ethereum (ETH)</p>
                  <div className="flex items-center justify-center bg-gray-100 rounded-lg p-3">
                    <span className="text-sm font-mono truncate">{cryptoAddresses.ethereum}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(cryptoAddresses.ethereum)}
                      className="ml-2 p-1"
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bank Transfer */}
            <Card className="p-8 text-center">
              <Banknote className="w-12 h-12 text-[#1e3a5f] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('bank_title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('requisites_title')}
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">{t('bank_ukraine')}</p>
                  <p className="text-sm text-gray-600">IBAN: UA000000000000000000000000000</p>
                  <p className="text-sm text-gray-600">SWIFT: EXAMPLEUA</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">{t('bank_poland')}</p>
                  <p className="text-sm text-gray-600">IBAN: PL00000000000000000000000000</p>
                  <p className="text-sm text-gray-600">SWIFT: EXAMPLEPL</p>
                </div>
              </div>
            </Card>

            {/* Card Payment */}
            <Card className="p-8 text-center">
              <CreditCard className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('card_title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('card_coming_soon')}
              </p>
              <Button variant="primary" disabled className="w-full">
                {t('card_button')}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Purpose of Donation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t('purpose_title')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedPurpose === 'humanitarian' ? 'secondary' : 'outline'}
              onClick={() => setSelectedPurpose('humanitarian')}
            >
              {t('purpose_humanitarian')}
            </Button>
            <Button
              variant={selectedPurpose === 'idps' ? 'secondary' : 'outline'}
              onClick={() => setSelectedPurpose('idps')}
            >
              {t('purpose_idps')}
            </Button>
            <Button
              variant={selectedPurpose === 'business' ? 'secondary' : 'outline'}
              onClick={() => setSelectedPurpose('business')}
            >
              {t('purpose_business')}
            </Button>
            <Button
              variant={selectedPurpose === 'other' ? 'secondary' : 'outline'}
              onClick={() => setSelectedPurpose('other')}
            >
              {t('purpose_other')}
            </Button>
          </div>
          <p className="mt-8 text-gray-600">
            {t('donate_subtitle')}
          </p>
        </div>
      </section>
    </div>
  );
}
