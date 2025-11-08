import React from 'react';
import { COFFEE_VARIETIES, ROAST_LEVELS, WATER_QUALITY_TOPICS } from '../constants';
import type { CoffeeVariety, RoastLevel, WaterQualityTopic } from '../types';
import { CoffeeCupIcon, WaterDropIcon, MineralIcon, FilterIcon } from './Icons';

const VarietyCard: React.FC<{ variety: CoffeeVariety }> = ({ variety }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-stone-900 mb-2">{variety.name}</h3>
        <p className="text-stone-600 mb-4">{variety.description}</p>
        
        <div className="mt-auto pt-4 border-t border-stone-200 space-y-2">
            <div className="flex items-start">
                <p className="font-bold text-amber-800 w-32 shrink-0">Köken:</p>
                <p className="text-sm text-stone-700">{variety.origin}</p>
            </div>
            <div className="flex items-start">
                <p className="font-bold text-amber-800 w-32 shrink-0">Lezzet Profili:</p>
                <p className="text-sm text-stone-700">{variety.flavorProfile}</p>
            </div>
        </div>
      </div>
    </article>
  );
};

const RoastLevelCard: React.FC<{ level: RoastLevel }> = ({ level }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className={`w-6 h-6 rounded-full border border-stone-300 ${level.color}`} aria-label={`${level.name} renk kodu`}></span>
          <h4 className="text-xl font-bold text-stone-900">{level.name}</h4>
        </div>
        <p className="text-stone-600 mb-4">{level.description}</p>
        
        <div className="mt-auto pt-4 border-t border-stone-200">
            <p className="font-bold text-amber-800 mb-2">Belirgin Lezzet Notaları:</p>
            <div className="flex flex-wrap gap-2">
                {level.flavorNotes.map(note => (
                    <span key={note} className="bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full">{note}</span>
                ))}
            </div>
        </div>
      </div>
    </article>
  );
};


const iconMap: { [key in WaterQualityTopic['icon']]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    WaterDrop: WaterDropIcon,
    Mineral: MineralIcon,
    Filter: FilterIcon,
};

const WaterQualityInfoCard: React.FC<{ topic: WaterQualityTopic }> = ({ topic }) => {
    const IconComponent = iconMap[topic.icon];
    return (
        <div className="bg-stone-50 p-6 rounded-lg flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full mt-1">
                <IconComponent className="w-6 h-6 text-blue-700" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-stone-800">{topic.title}</h4>
                <p className="text-stone-600">{topic.content}</p>
            </div>
        </div>
    );
};


const KnowledgeBase: React.FC = () => {
  return (
    <section>
       <div className="flex items-center justify-center gap-4 mb-8">
        <CoffeeCupIcon className="w-8 h-8 text-amber-800" />
        <h2 className="text-3xl font-bold text-center">Kahve Bilgi Bankası</h2>
      </div>
      <div className="space-y-16">
        <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-stone-800 border-b-2 border-amber-700/50 pb-2">Kahve Çekirdeği Çeşitleri</h3>
            {COFFEE_VARIETIES.map((variety) => (
            <VarietyCard key={variety.id} variety={variety} />
            ))}
        </div>

        <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-stone-800 border-b-2 border-amber-700/50 pb-2">Kavrum Seviyeleri</h3>
            {ROAST_LEVELS.map((level) => (
              <RoastLevelCard key={level.id} level={level} />
            ))}
        </div>

        <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-stone-800 border-b-2 border-amber-700/50 pb-2">Su Kalitesinin Önemi</h3>
            <div className="grid grid-cols-1 gap-6">
                {WATER_QUALITY_TOPICS.map((topic) => (
                    <WaterQualityInfoCard key={topic.id} topic={topic} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;