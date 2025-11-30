import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../mockData';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ALEXI aka MOZER</h3>
            <p className="text-gray-400 text-sm">
              {t(translations.hero.subtitle)}
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {t(translations.hero.location)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                {t(translations.nav.about)}
              </Link>
              <Link to="/gallery" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                {t(translations.nav.gallery)}
              </Link>
              <Link to="/exhibitions" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                {t(translations.nav.exhibitions)}
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                {t(translations.nav.contact)}
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t(translations.contact.social)}</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/alexidelfieux"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/alexidelfieux"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/alexidelfieux"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Alexi Delfieux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;