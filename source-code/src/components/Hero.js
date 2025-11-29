import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations, artworks } from '../mockData';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const featuredArtworks = artworks.filter(art => art.featured);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-4 leading-tight">
              ALEXI<br />DELFIEUX
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-6">
              {t(translations.hero.subtitle)}
            </p>
            <p className="text-base sm:text-lg text-gray-500 mb-8">
              {t(translations.hero.location)}
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-sm font-medium uppercase tracking-wider group"
            >
              <span>{t(translations.hero.cta)}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Artworks Grid */}
          <div className="grid grid-cols-2 gap-4">
            {featuredArtworks.slice(0, 4).map((artwork, index) => (
              <div
                key={artwork.id}
                className="relative aspect-square overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="font-bold text-sm">{artwork.title}</p>
                    <p className="text-xs opacity-90">{artwork.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;