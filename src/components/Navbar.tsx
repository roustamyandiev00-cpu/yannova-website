"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/lib/company";

const navigation: Array<{
  name: string;
  href: string;
  children?: Array<{ name: string; href: string; description: string }>;
}> = [
  {
    name: "Diensten",
    href: "/diensten",
    children: [
      { name: "Ramen & Deuren", href: "/diensten/ramen-deuren", description: "PVC & aluminium" },
      { name: "Gevelrenovatie", href: "/diensten/gevelrenovatie", description: "Isolatie + afwerking" },
      { name: "Isolatie", href: "/diensten/isolatie", description: "Dak, gevel en vloer" },
      { name: "Renovatie", href: "/diensten/renovatie", description: "Totaalrenovatie" },
    ],
  },
  { name: "Projecten", href: "/projecten" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesMenuId = "services-menu";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled 
          ? "glass backdrop-blur-xl border-b border-white/10 py-3 shadow-elegant-lg" 
          : "bg-transparent border-b border-transparent py-5",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8" aria-label="Hoofdmenu">
        <div className="flex lg:flex-1">
          <Link href="/" className="group -m-1.5 p-1.5 text-2xl font-bold tracking-tight transition-all duration-300">
            <span className="text-white group-hover:text-secondary transition-colors duration-300">Yannova</span>
            <span className="text-secondary group-hover:scale-125 inline-block transition-transform duration-300">.</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open het menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="relative" ref={servicesRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group flex items-center gap-1",
                    pathname.startsWith(item.href) ? "text-secondary" : "text-gray-300 hover:text-white",
                  )}
                  aria-expanded={servicesOpen}
                  aria-controls={servicesMenuId}
                  aria-haspopup="menu"
                  type="button"
                >
                  {item.name}
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
                      pathname.startsWith(item.href) ? "w-full" : "",
                    )}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      id={servicesMenuId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-[#1a1d24] border border-white/10 shadow-xl overflow-hidden"
                      role="menu"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-3 hover:bg-white/5 transition-colors"
                            role="menuitem"
                          >
                            <div className="text-sm font-medium text-white">{child.name}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{child.description}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  pathname === item.href ? "text-secondary" : "text-gray-300 hover:text-white",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
                    pathname === item.href ? "w-full" : "",
                  )}
                />
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-3">
          <a href={company.phoneHref} className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors">
            <Phone className="h-4 w-4" />
            <span>{company.phoneDisplay}</span>
          </a>
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-[#25D366] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
          <Link
            href="/vraag-ai"
            className="flex items-center gap-1.5 text-sm font-medium text-white glass px-4 py-2.5 rounded-xl glass-hover shadow-elegant group"
          >
            <Sparkles className="h-4 w-4 text-secondary group-hover:rotate-12 transition-transform duration-300" />
            Vraag Yannova AI
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-secondary to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-elegant glow-hover transition-all duration-300 hover:scale-105"
          >
            Gratis offerte
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass backdrop-blur-xl border-t border-white/10 overflow-hidden shadow-elegant-lg"
          >
            <div className="space-y-1 px-4 pb-6 pt-4">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.name}</div>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 pl-6 text-base font-medium transition-colors",
                          pathname === child.href ? "bg-secondary/10 text-secondary" : "text-gray-300 hover:bg-white/5 hover:text-white",
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
                      pathname === item.href ? "bg-secondary/10 text-secondary" : "text-gray-300 hover:bg-white/5 hover:text-white",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}

              <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                <a href={company.phoneHref} className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white">
                  <Phone className="h-4 w-4" />
                  {company.phoneDisplay}
                </a>
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-[#25D366]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <Link
                href="/vraag-ai"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl glass px-4 py-3.5 text-base font-medium text-white glass-hover shadow-elegant"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4 text-secondary" />
                Vraag Yannova AI
              </Link>
              <Link
                href="/contact"
                className="mt-3 block w-full text-center rounded-xl bg-linear-to-r from-secondary to-orange-600 px-4 py-3.5 text-base font-semibold text-white shadow-elegant"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gratis offerte aanvragen
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
