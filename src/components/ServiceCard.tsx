"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
    index?: number; // Added index for staggered animation
}

export function ServiceCard({ title, description, link, icon, index = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col h-full rounded-2xl glass p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 overflow-hidden"
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-secondary/20 to-secondary/5 text-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                    {icon}
                </div>
                <h3 className="text-xl font-bold leading-7 text-white group-hover:text-secondary transition-colors duration-300 mb-3">
                    {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300 flex-1 group-hover:text-gray-200 transition-colors duration-300">
                    {description}
                </p>
                <div className="pt-6 mt-auto">
                    <Link 
                        href={link} 
                        className="inline-flex items-center text-sm font-semibold text-secondary hover:text-white transition-all duration-300 group/link"
                    >
                        Meer info 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-2" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
