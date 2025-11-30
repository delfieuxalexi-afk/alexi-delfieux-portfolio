import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { exhibitions, translations } from '../mockData';
import { Calendar, MapPin } from 'lucide-react';

const ExhibitionsPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 text-center">
          {t(translations.exhibitions.title)}
        </h1>

        {/* Seeking Notice */}
        <div className="mb-12 p-6 bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl">
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            {t(translations.exhibitions.seeking)}
          </p>
        </div>

        {/* Exhibitions Timeline */}
        <div className="space-y-8">
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-pink-300 last:border-0 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] bg-pink-500 rounded-full border-4 border-white shadow"></div>

              {/* Content */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-2 text-pink-600 font-bold text-sm mb-2">
                  <Calendar size={16} />
                  <span>{exhibition.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {exhibition.title}
                </h3>
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <MapPin size={16} />
                  <span>{exhibition.location}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en' ? exhibition.description_en : exhibition.description_fr}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Education' : 'Formation'}
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-2 text-gray-600 font-bold text-sm mb-2">
                <Calendar size={16} />
                <span>2021</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {language === 'en' ? 'Bachelor Web Marketing & Sales Manager' : 'Bachelor Web Marketing & Responsable Commercial'}
              </h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-2 text-gray-600 font-bold text-sm mb-2">
                <Calendar size={16} />
                <span>2013</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'en' ? 'Bachelor Graphic Design' : 'Bachelor Design Graphique'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' ? 'University of Technical Arts - Paris, France' : 'Université des Arts Techniques - Paris, France'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionsPage;