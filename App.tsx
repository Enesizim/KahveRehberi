import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BrewingGuides from './components/BrewingGuides';
import CoffeeCalculator from './components/CoffeeCalculator';
import BlogSection from './components/BlogSection';
import AdBanner from './components/AdBanner';
import KnowledgeBase from './components/KnowledgeBase';
import CoffeeTips from './components/CoffeeTips';
import { CoffeeBeanIcon } from './components/Icons';

export type View = 'guides' | 'calculator' | 'knowledge' | 'blog' | 'tips';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('guides');

  const renderContent = () => {
    switch (activeView) {
      case 'guides':
        return <BrewingGuides />;
      case 'calculator':
        return <CoffeeCalculator />;
      case 'knowledge':
        return <KnowledgeBase />;
      case 'blog':
        return <BlogSection />;
      case 'tips':
        return <CoffeeTips />;
      default:
        return <BrewingGuides />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header activeView={activeView} setActiveView={setActiveView} />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <section className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            <CoffeeBeanIcon className="w-10 h-10 text-amber-800" />
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900">Mükemmel Kahveye Giden Yol</h1>
            <CoffeeBeanIcon className="w-10 h-10 text-amber-800" />
          </div>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
            Her demlemede tutarlı ve lezzetli sonuçlar elde etmek için demleme oranlarını, tekniklerini ve sırlarını keşfedin.
          </p>
        </section>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            {renderContent()}
          </div>
          <aside className="col-span-12 lg:col-span-3 space-y-8">
            <AdBanner />
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Genel İpuçları</h3>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-start">
                  <span className="text-amber-800 mr-2 mt-1">✓</span>
                  <span><strong>Su Sıcaklığı:</strong> Genellikle 90-96°C arası idealdir.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-800 mr-2 mt-1">✓</span>
                  <span><strong>Taze Öğütme:</strong> Kahveyi demlemeden hemen önce öğütün.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-800 mr-2 mt-1">✓</span>
                  <span><strong>Kaliteli Su:</strong> Mümkünse filtrelenmiş veya kaynak suyu kullanın.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-800 mr-2 mt-1">✓</span>
                  <span><strong>Tartı Kullanımı:</strong> Tutarlılık için mutlaka bir mutfak tartısı kullanın.</span>
                </li>
              </ul>
            </div>
            <AdBanner />
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;