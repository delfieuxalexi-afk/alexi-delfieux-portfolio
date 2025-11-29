import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../mockData';
import { X, Mail } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const ArtworkModal = ({ artwork, isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  if (!artwork) return null;

  const handleInquiry = () => {
    onClose();
    // Store artwork info in sessionStorage so it can be used in contact form
    sessionStorage.setItem('inquiryArtwork', JSON.stringify({
      title: artwork.title,
      year: artwork.year,
      price: artwork.price
    }));
    navigate('/contact');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Image */}
          <div className="relative w-full aspect-square bg-gray-100">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
            {/* Availability Badge */}
            <div className="absolute top-4 left-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium uppercase shadow-lg ${
                  artwork.available
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                {artwork.available ? t(translations.gallery.available) : t(translations.gallery.sold)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Title and Year */}
            <div className="mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {artwork.title}
              </h2>
              <p className="text-lg text-gray-600">{artwork.year}</p>
            </div>

            {/* Inspiration/Description */}
            {(artwork.description_en || artwork.description_fr) && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(translations.gallery.inspiration)}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en' ? artwork.description_en : artwork.description_fr}
                </p>
              </div>
            )}

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {language === 'en' ? 'Technique' : 'Technique'}
                </p>
                <p className="font-medium text-gray-900">
                  {language === 'en' ? artwork.technique : artwork.techniqueFr}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {language === 'en' ? 'Dimensions' : 'Dimensions'}
                </p>
                <p className="font-medium text-gray-900">{artwork.format}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {language === 'en' ? 'Series' : 'Série'}
                </p>
                <p className="font-medium text-gray-900 capitalize">
                  {artwork.series.replace('-', ' ')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {language === 'en' ? 'Price' : 'Prix'}
                </p>
                <p className="text-2xl font-bold text-gray-900">€{artwork.price}</p>
              </div>
            </div>

            {/* Inquiry Button */}
            <button
              onClick={handleInquiry}
              disabled={!artwork.available}
              className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${
                artwork.available
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Mail size={20} />
              <span>{t(translations.gallery.inquiry)}</span>
            </button>

            {!artwork.available && (
              <p className="text-center text-sm text-gray-500 mt-3">
                {language === 'en' 
                  ? 'This artwork has been sold. Contact me for similar commissions.' 
                  : 'Cette œuvre a été vendue. Contactez-moi pour des commandes similaires.'}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkModal;
