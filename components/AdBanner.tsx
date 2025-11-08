import React from 'react';

const AdBanner: React.FC = () => {
  return (
    <div className="bg-stone-200 rounded-lg shadow-md p-8 text-center text-stone-600 border border-stone-300">
      <h4 className="font-bold text-lg mb-2 text-stone-700">Reklam Alanı</h4>
      <p className="text-sm">Burada reklamınız yer alabilir.</p>
    </div>
  );
};

export default AdBanner;