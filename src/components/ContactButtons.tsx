"use client";
'use client';

import { trackWhatsAppClick, trackPhoneClick, trackEmailClick } from '@/lib/analytics';
import { gtmTrackPhone, gtmTrackWhatsApp, gtmTrackEmail } from '@/components/GoogleTagManager';

interface ContactButtonsProps {
  phone?: string;
  whatsapp?: string;
  email?: string;
  whatsappMessage?: string;
  className?: string;
}

export function ContactButtons({
  phone = '+32123456789',
  whatsapp = '32123456789',
  email = 'info@yannova.be',
  whatsappMessage = 'Hallo Yannova, ik wil graag een offerte aanvragen',
  className = '',
}: ContactButtonsProps) {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('contact_buttons');
    gtmTrackWhatsApp();
  };

  const handlePhoneClick = () => {
    trackPhoneClick('contact_buttons');
    gtmTrackPhone();
  };

  const handleEmailClick = () => {
    trackEmailClick('contact_buttons');
    gtmTrackEmail();
  };

  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {/* Telefoon */}
      <a
        href={`tel:${phone}`}
        onClick={handlePhoneClick}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
      >
        📞 Bel Direct
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-center"
      >
        💬 WhatsApp
      </a>

      {/* Email */}
      <a
        href={`mailto:${email}`}
        onClick={handleEmailClick}
        className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition text-center"
      >
        ✉️ Email
      </a>
    </div>
  );
}
