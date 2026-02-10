"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "/diensten" },
    { name: "Projecten", href: "/projecten" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Advies", href: "/advies" },
    { name: "Premie Gids", href: "/premie-gids" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    return (
        <motion.header
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-white/10 py-3 shadow-lg"
                    : "bg-transparent border-transparent py-5"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="container mx-auto flex items-center justify-between px-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="group -m-1.5 p-1.5 text-2xl font-bold tracking-tight text-white transition-colors">
                        Yannova<span className="text-secondary group-hover:text-glow transition-all duration-300">.</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-all duration-300 relative group",
                                pathname === item.href ? "text-secondary" : "text-gray-300 hover:text-white"
                            )}
                        >
                            {item.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
                                pathname === item.href ? "w-full" : ""
                            )} />
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/contact"
                        className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-secondary/90 hover:scale-105 active:scale-95"
                    >
                        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <Phone className="h-4 w-4" /> Offerte Aanvragen
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="space-y-1 px-4 pb-6 pt-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
                                        pathname === item.href
                                            ? "bg-secondary/10 text-secondary"
                                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="mt-6 block w-full text-center rounded-lg bg-secondary px-3 py-3 text-base font-semibold text-white shadow-md hover:bg-secondary/90"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Offerte Aanvragen
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
