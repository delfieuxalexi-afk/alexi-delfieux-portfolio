import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations, contactInfo } from '../mockData';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  // Check if there's artwork inquiry data
  const inquiryArtwork = sessionStorage.getItem('inquiryArtwork');
  const initialMessage = inquiryArtwork 
    ? (() => {
        const artwork = JSON.parse(inquiryArtwork);
        sessionStorage.removeItem('inquiryArtwork'); // Clear after reading
        return language === 'en'
          ? `Hello,\n\nI am interested in learning more about the artwork "${artwork.title}" (${artwork.year}, €${artwork.price}).\n\nBest regards`
          : `Bonjour,\n\nJe suis intéressé(e) par l'œuvre "${artwork.title}" (${artwork.year}, €${artwork.price}).\n\nCordialement`;
      })()
    : '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: initialMessage
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            {t(translations.contact.title)}
          </h1>
          <p className="text-gray-600 text-lg">
            {t(translations.contact.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t(translations.contact.formName)}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t(translations.contact.formEmail)}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t(translations.contact.formMessage)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-sm font-medium uppercase tracking-wider"
              >
                {t(translations.contact.formSubmit)}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t(translations.contact.title)}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t(translations.contact.email)}</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-900 hover:text-pink-600 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t(translations.contact.phone)}</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t(translations.contact.location)}</p>
                    <p className="text-gray-900">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t(translations.contact.social)}
              </h2>
              <div className="flex space-x-4">
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-md hover:shadow-lg"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all shadow-md hover:shadow-lg"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Commission Section - Moved to bottom */}
        <div className="mt-16 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {t(translations.contact.commissionTitle)}
          </h2>
          <p className="text-gray-700 text-base mb-6 leading-relaxed">
            {t(translations.contact.commissionText)}
          </p>

          {/* Commission Process */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {t(translations.contact.commissionProcess)}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-base text-gray-900 mb-2">
                {t(translations.contact.commissionStep1)}
              </h4>
              <p className="text-gray-600 text-sm">
                {t(translations.contact.commissionStep1Text)}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-base text-gray-900 mb-2">
                {t(translations.contact.commissionStep2)}
              </h4>
              <p className="text-gray-600 text-sm">
                {t(translations.contact.commissionStep2Text)}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-base text-gray-900 mb-2">
                {t(translations.contact.commissionStep3)}
              </h4>
              <p className="text-gray-600 text-sm">
                {t(translations.contact.commissionStep3Text)}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-bold text-base text-gray-900 mb-2">
                {t(translations.contact.commissionStep4)}
              </h4>
              <p className="text-gray-600 text-sm">
                {t(translations.contact.commissionStep4Text)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;