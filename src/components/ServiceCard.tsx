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
            className="flex flex-col h-full rounded-2xl border border-white/5 bg-[#1a1d24] p-6 shadow-sm hover:border-white/10 transition-all duration-300 group"
        >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-bold leading-7 text-white group-hover:text-secondary transition-colors">
                {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400 flex-1 group-hover:text-gray-300 transition-colors">
                {description}
            </p>
            <div className="pt-4 mt-auto">
                <Link href={link} className="inline-flex items-center text-sm font-semibold text-secondary hover:text-white transition-colors group/link">
                    Meer info <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}
