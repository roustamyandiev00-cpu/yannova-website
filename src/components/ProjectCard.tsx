"use client";


import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string; // URL string for now
    description: string;
    index: number;
}

export function ProjectCard({ title, category, image, description, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
        >
            <div className="aspect-[4/3] overflow-hidden relative">
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10" />

                {/* Placeholder image (using Unsplash for demo if no local image provided) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center rounded-full bg-secondary/90 px-3 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    <Link href={`/projecten`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {title}
                    </Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-secondary">
                    Bekijk project <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
            </div>
        </motion.div>
    );
}
