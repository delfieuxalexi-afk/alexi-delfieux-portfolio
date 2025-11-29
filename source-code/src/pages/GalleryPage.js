import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { artworks, seriesInfo, translations } from '../mockData';
import { Filter } from 'lucide-react';
import ArtworkModal from '../components/ArtworkModal';

const GalleryPage = () => {
  const { language, t } = useLanguage();
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredArtworks = useMemo(() => {
    if (selectedSeries === 'all') return artworks;
    return artworks.filter(art => art.series === selectedSeries);
  }, [selectedSeries]);

  const seriesButtons = Object.keys(seriesInfo);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArtwork(null), 300);
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 text-center">
            {t(translations.gallery.title)}
          </h1>
          <p className="text-center text-gray-600 text-lg">
            {filteredArtworks.length} {language === 'en' ? 'artworks' : 'œuvres'}
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <Filter size={20} />
              <span>{t(translations.gallery.filter)}</span>
            </button>
          </div>

          {/* Filter Buttons */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:flex flex-wrap justify-center gap-3`}>
            {seriesButtons.map((series) => (
              <button
                key={series}
                onClick={() => {
                  setSelectedSeries(series);
                  setShowFilters(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide transition-all ${
                  selectedSeries === series
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {seriesInfo[series][language]}
              </button>
            ))}
          </div>
        </div>

        {/* Series Description */}
        {selectedSeries !== 'all' && seriesInfo[selectedSeries][`description_${language}`] && (
          <div className="mb-8 text-center">
            <p className="text-gray-600 text-lg italic">
              {seriesInfo[selectedSeries][`description_${language}`]}
            </p>
          </div>
        )}

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              onClick={() => handleArtworkClick(artwork)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Availability Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${
                      artwork.available
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {artwork.available ? t(translations.gallery.available) : t(translations.gallery.sold)}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black px-4 py-2 rounded-full">
                    {t(translations.gallery.viewDetails)}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  {language === 'en' ? artwork.technique : artwork.techniqueFr}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {artwork.format} • {artwork.year}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  €{artwork.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {language === 'en' ? 'No artworks found in this series.' : 'Aucune œuvre trouvée dans cette série.'}
            </p>
          </div>
        )}
      </div>

      {/* Artwork Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default GalleryPage;
