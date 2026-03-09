 "use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { company } from "@/lib/company";
import { motion, AnimatePresence } from "framer-motion";
import { gtmTrackPhone, gtmTrackWhatsApp } from "@/components/GoogleTagManager";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    try {
      return typeof window !== 'undefined' && sessionStorage.getItem('stickyCTADismissed') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDismissed) {
      return;
    }

    // Show after scrolling down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('stickyCTADismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 sm:hidden"
        >
          <div className="bg-linear-to-r from-secondary to-orange-600 p-3 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 flex items-center gap-3">
                <a 
                  href={company.phoneHref}
                  onClick={() => gtmTrackPhone()} 
                  className="flex-1 flex items-center justify-center gap-2 bg-white text-secondary font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-sm">Bel nu</span>
                </a>
                <a 
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => gtmTrackWhatsApp()}
                  className="flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
              <button
                onClick={handleDismiss}
                className="p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Sluiten"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
