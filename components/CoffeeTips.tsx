import React from 'react';
import { COFFEE_TIPS } from '../constants';
import type { CoffeeTip } from '../types';
import { SpiceIcon, SyrupIcon, CreamIcon, ChocolateIcon, SaltIcon, CitrusIcon, CoffeeCupIcon } from './Icons';

const iconMap: { [key in CoffeeTip['icon']]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    Spice: SpiceIcon,
    Syrup: SyrupIcon,
    Cream: CreamIcon,
    Chocolate: ChocolateIcon,
    Salt: SaltIcon,
    Citrus: CitrusIcon,
};

const TipCard: React.FC<{ tip: CoffeeTip }> = ({ tip }) => {
  const IconComponent = iconMap[tip.icon];
  
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-amber-100 p-3 rounded-full">
            <IconComponent className="w-8 h-8 text-amber-800" />
          </div>
          <h3 className="text-2xl font-bold text-stone-900">{tip.title}</h3>
        </div>
        
        <p className="text-stone-600 mb-5">{tip.description}</p>
        
        <div className="bg-stone-50 p-4 rounded-lg space-y-3">
            <div>
                <h4 className="font-semibold text-stone-800">Örnekler:</h4>
                <ul className="list-disc list-inside text-sm text-stone-700 space-y-1 mt-1">
                    {tip.examples.map((example, index) => <li key={index}>{example}</li>)}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-stone-800">Kimler İçin İdeal?</h4>
                <p className="text-sm text-stone-700 mt-1">{tip.idealFor}</p>
            </div>
        </div>
      </div>
    </article>
  );
};

const CoffeeTips: React.FC = () => {
  return (
    <section>
      <div className="flex items-center justify-center gap-4 mb-8 text-center">
        <CoffeeCupIcon className="w-8 h-8 text-amber-800" />
        <h2 className="text-3xl font-bold">Kahve Keyfi İpuçları</h2>
      </div>
      <p className="text-lg text-stone-600 max-w-2xl mx-auto text-center mb-12">
        Günlük kahvenizi küçük dokunuşlarla bir sanat eserine dönüştürün. İster 3'ü 1 arada, ister taze demlenmiş olsun, bu basit ipuçlarıyla lezzeti bir üst seviyeye taşıyın.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {COFFEE_TIPS.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </section>
  );
};

export default CoffeeTips;
