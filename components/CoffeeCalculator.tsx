import React, { useState, useEffect } from 'react';
import { CalculatorIcon, WaterIcon, CoffeeBeanIcon } from './Icons';

const CoffeeCalculator: React.FC = () => {
  const [ratio, setRatio] = useState(16);
  const [coffee, setCoffee] = useState(20);
  const [water, setWater] = useState(320);
  const [lastChanged, setLastChanged] = useState<'coffee' | 'water'>('coffee');

  useEffect(() => {
    if (lastChanged === 'coffee') {
      const newWater = coffee * ratio;
      setWater(Math.round(newWater));
    }
  }, [coffee, ratio, lastChanged]);

  useEffect(() => {
    if (lastChanged === 'water') {
      const newCoffee = water / ratio;
      setCoffee(Math.round(newCoffee * 10) / 10);
    }
  }, [water, ratio, lastChanged]);

  const handleCoffeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastChanged('coffee');
    setCoffee(Number(e.target.value));
  };
  
  const handleWaterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastChanged('water');
    setWater(Number(e.target.value));
  };

  const handleRatioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRatio(Number(e.target.value));
    // Recalculate based on last changed input
    if (lastChanged === 'coffee') {
        const newWater = coffee * Number(e.target.value);
        setWater(Math.round(newWater));
    } else {
        const newCoffee = water / Number(e.target.value);
        setCoffee(Math.round(newCoffee * 10) / 10);
    }
  };


  return (
    <section className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
      <div className="flex items-center gap-4 mb-6">
        <CalculatorIcon className="w-8 h-8 text-amber-800" />
        <h2 className="text-3xl font-bold text-stone-900">İnteraktif Kahve Hesaplayıcı</h2>
      </div>
      <p className="text-stone-600 mb-8">İstediğiniz kahve veya su miktarını girerek ideal oranınızı bulun. Oran çubuğunu kaydırarak demlemenizi kişiselleştirin.</p>
      
      <div className="space-y-6">
        {/* Ratio Slider */}
        <div>
          <label htmlFor="ratio" className="block text-lg font-semibold mb-2">
            Demleme Oranı: <span className="font-bold text-amber-800">1:{ratio}</span>
          </label>
          <input
            type="range"
            id="ratio"
            min="12"
            max="20"
            step="1"
            value={ratio}
            onChange={handleRatioChange}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-800"
          />
          <div className="flex justify-between text-sm text-stone-500 mt-1">
            <span>Daha Güçlü</span>
            <span>Daha Hafif</span>
          </div>
        </div>
        
        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
            <label htmlFor="coffee" className="flex items-center text-lg font-semibold mb-2">
                <CoffeeBeanIcon className="w-5 h-5 mr-2 text-stone-600" />
                Kahve Miktarı (gram)
            </label>
            <input
                type="number"
                id="coffee"
                value={coffee}
                onChange={handleCoffeeChange}
                className="w-full p-4 border-2 border-stone-200 rounded-lg text-2xl font-bold focus:ring-2 focus:ring-amber-800 focus:border-amber-800 outline-none transition"
            />
            </div>
            <div>
            <label htmlFor="water" className="flex items-center text-lg font-semibold mb-2">
                <WaterIcon className="w-5 h-5 mr-2 text-stone-600" />
                Su Miktarı (ml)
            </label>
            <input
                type="number"
                id="water"
                value={water}
                onChange={handleWaterChange}
                className="w-full p-4 border-2 border-stone-200 rounded-lg text-2xl font-bold focus:ring-2 focus:ring-amber-800 focus:border-amber-800 outline-none transition"
            />
            </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeCalculator;