import React from 'react';
import { BREWING_METHODS } from '../constants';
import type { BrewingMethod, Equipment } from '../types';

const EquipmentCard: React.FC<{ equipment: Equipment }> = ({ equipment }) => (
  <div className="text-center bg-stone-50 p-4 rounded-lg border border-stone-200">
    <h5 className="font-semibold text-sm">{equipment.name}</h5>
    <a href={equipment.link} className="text-xs text-amber-700 hover:underline">Satın Al</a>
  </div>
);

const BrewingGuideCard: React.FC<{ method: BrewingMethod }> = ({ method }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-stone-900 mb-2">{method.name}</h3>
        <p className="text-stone-600 mb-6">{method.description}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-stone-100 p-3 rounded-lg">
            <p className="font-bold text-amber-800">Oran</p>
            <p className="text-sm">{method.ratio}</p>
          </div>
          <div className="bg-stone-100 p-3 rounded-lg">
            <p className="font-bold text-amber-800">Öğütme</p>
            <p className="text-sm">{method.grindSize}</p>
          </div>
          <div className="bg-stone-100 p-3 rounded-lg">
            <p className="font-bold text-amber-800">Süre</p>
            <p className="text-sm">{method.brewTime}</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold border-b-2 border-amber-800/50 pb-2 mb-4">Demleme Adımları</h4>
          <ol className="list-decimal list-inside space-y-2 text-stone-700">
            {method.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div>
          <h4 className="text-lg font-semibold border-b-2 border-amber-800/50 pb-2 mb-4">Önerilen Ekipmanlar</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {method.equipment.map(e => <EquipmentCard key={e.name} equipment={e} />)}
          </div>
        </div>
      </div>
    </article>
  );
};


const BrewingGuides: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Popüler Demleme Rehberleri</h2>
      <div className="space-y-12">
        {BREWING_METHODS.map((method) => (
          <BrewingGuideCard key={method.id} method={method} />
        ))}
      </div>
    </section>
  );
};

export default BrewingGuides;