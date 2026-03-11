"use client";
'use client';

import { useState, useEffect } from 'react';
import { X, Gift, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    if (sessionStorage.getItem('exitIntentShown')) {
      return;
    }

    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseY = e.clientY;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse is at top of page and hasn't been shown yet
      if (e.clientY < 10 && !hasShown && mouseY < 100) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Only on desktop (not touch devices)
    if (window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsVisible(false)}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-background border border-border rounded-3xl p-8 max-w-md w-full shadow-2xl pointer-events-auto relative overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>

              {/* Decorative gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <Gift className="h-10 w-10 text-secondary" />
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  Wacht! Nog een exclusieve aanbieding
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Vraag nu een offerte aan en ontvang <strong className="text-secondary">gratis advies</strong> over 
                  premies die u kunt aanvragen. Tot €5.000 aan subsidies mogelijk!
                </p>

                <div className="space-y-3">
                  <a
                    href="/contact"
                    onClick={() => setIsVisible(false)}
                    className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
                  >
                    Vraag gratis offerte aan
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  
                  <button
                    onClick={() => setIsVisible(false)}
                    className="w-full py-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Nee, ik mis liever de korting
                  </button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  ⏰ Deze aanbieding is geldig bij aanvraag vandaag
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
