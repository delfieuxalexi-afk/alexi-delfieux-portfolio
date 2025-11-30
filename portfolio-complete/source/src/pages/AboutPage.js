import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../mockData';

const AboutPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-12 text-center">
          {t(translations.about.title)}
        </h1>

        {/* Artist Statement */}
        <div className="mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {language === 'en' ? translations.about.bio_en : translations.about.bio_fr}
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t(translations.about.processTitle)}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {language === 'en' ? translations.about.process_en : translations.about.process_fr}
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600',
            'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600',
            'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
            'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600',
            'https://images.unsplash.com/photo-1549887534-1541e9326642?w=600',
            'https://images.unsplash.com/photo-1555448248-2571daf6344b?w=600'
          ].map((img, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={img}
                alt={`Process ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;