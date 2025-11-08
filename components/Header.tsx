import React from 'react';
import type { View } from '../App';
import { CoffeeCupIcon } from './Icons';

interface HeaderProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const NavLink: React.FC<{
  label: string;
  view: View;
  activeView: View;
  onClick: (view: View) => void;
}> = ({ label, view, activeView, onClick }) => {
  const isActive = activeView === view;
  return (
    <button
      onClick={() => onClick(view)}
      className={`px-3 py-2 rounded-md text-sm md:text-base font-semibold transition-all duration-300 ${
        isActive
          ? 'bg-amber-800 text-white shadow-md'
          : 'text-stone-700 hover:bg-stone-200'
      }`}
    >
      {label}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-amber-900">
            <CoffeeCupIcon className="w-8 h-8" />
            <span className="hidden sm:block">Kahve Rehberi</span>
          </a>
          <nav className="flex items-center gap-1 md:gap-2 p-1 bg-stone-100 rounded-lg flex-wrap">
            <NavLink label="Rehberler" view="guides" activeView={activeView} onClick={setActiveView} />
            <NavLink label="Hesaplayıcı" view="calculator" activeView={activeView} onClick={setActiveView} />
            <NavLink label="Bilgi Bankası" view="knowledge" activeView={activeView} onClick={setActiveView} />
            <NavLink label="Keyif İpuçları" view="tips" activeView={activeView} onClick={setActiveView} />
            <NavLink label="Blog" view="blog" activeView={activeView} onClick={setActiveView} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
