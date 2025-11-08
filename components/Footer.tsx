
import React from 'react';
import { TwitterIcon, InstagramIcon, FacebookIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-bold text-lg text-white">Kahve Demleme Rehberi</p>
            <p>&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-stone-300 hover:text-white transition-colors duration-300" aria-label="Twitter">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-stone-300 hover:text-white transition-colors duration-300" aria-label="Instagram">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-stone-300 hover:text-white transition-colors duration-300" aria-label="Facebook">
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
