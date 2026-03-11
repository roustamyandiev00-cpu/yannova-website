import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

const ArchitecturalAnimation: React.FC = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('visible');
    }, [controls]);

    // ---- VARIANTS ----
    const lineDraw: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    };

    const fadeIn: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1, ease: "easeOut", delay: 1 }
        }
    };

    const panelSlide: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut", delay: 1.2 }
        }
    };

    const lockAccent: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 15, delay: 2 }
        }
    };

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate={controls}
                className="w-full h-full max-w-5xl max-h-[90vh]"
                style={{ overflow: 'visible' }}
            >
                {/* 1. CONSTRUCTION GRID (Subtle Background) */}
                <motion.g variants={fadeIn}>
                    {[100, 200, 300, 400, 500, 600, 700].map((x) => (
                        <line key={`v-${x}`} x1={x} y1="100" x2={x} y2="550" stroke="#374151" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                    ))}
                    {[200, 300, 400, 500].map((y) => (
                        <line key={`h-${y}`} x1="50" y1={y} x2="750" y2={y} stroke="#374151" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                    ))}
                </motion.g>

                {/* 2. MAIN GROUND LINE */}
                <motion.line
                    x1="50" y1="500" x2="750" y2="500"
                    stroke="#9CA3AF" strokeWidth="2"
                    variants={lineDraw}
                />

                {/* 3. MAIN HOUSE BODY (Modern Flat Roof Volume) */}
                {/* Left Block: 2-Story */}
                <motion.path
                    d="M200 500 V200 H450 V500"
                    stroke="#E5E7EB" // gray-200
                    strokeWidth="2"
                    fill="url(#glass-gradient)"
                    variants={lineDraw}
                />
                {/* Right Block: 1-Story Extension/Garage */}
                <motion.path
                    d="M450 500 V320 H650 V500"
                    stroke="#D1D5DB" // gray-300
                    strokeWidth="2"
                    fill="url(#glass-gradient-dark)"
                    variants={lineDraw}
                    custom={{ delay: 0.5 }}
                />

                {/* 4. ROOF ACCENTS (Orange Highlight) */}
                <motion.line
                    x1="180" y1="180" x2="470" y2="180" // Left Roof Overhang
                    stroke="#EA580C" strokeWidth="3"
                    variants={panelSlide}
                />
                <motion.line
                    x1="450" y1="310" x2="670" y2="310" // Right Roof Overhang
                    stroke="#EA580C" strokeWidth="3"
                    variants={panelSlide}
                />

                {/* 5. WINDOWS (The "Locking" Panels) */}

                {/* Large Window Left */}
                <motion.g variants={panelSlide}>
                    <rect x="230" y="240" width="180" height="200" fill="rgba(234, 88, 12, 0.03)" stroke="#EA580C" strokeWidth="1" strokeOpacity="0.5" />
                    {/* Window Mullions */}
                    <line x1="320" y1="240" x2="320" y2="440" stroke="#EA580C" strokeWidth="0.5" />
                    <line x1="230" y1="340" x2="410" y2="340" stroke="#EA580C" strokeWidth="0.5" />
                    {/* Reflection hint */}
                    <path d="M240 430 L300 350" stroke="white" strokeWidth="1" strokeOpacity="0.1" />
                </motion.g>

                {/* Corner Window Right */}
                <motion.g variants={panelSlide}>
                    <rect x="480" y="350" width="140" height="100" fill="rgba(255, 255, 255, 0.03)" stroke="#9CA3AF" strokeWidth="1" />
                    {/* Window Mullions */}
                    <line x1="550" y1="350" x2="550" y2="450" stroke="#9CA3AF" strokeWidth="0.5" />
                </motion.g>

                {/* 6. EXTENSION LINES (Architectural Details) */}
                <motion.g variants={fadeIn}>
                    <line x1="180" y1="200" x2="180" y2="520" stroke="#4B5563" strokeWidth="0.5" /> {/* Left dim line */}
                    <circle cx="180" cy="500" r="2" fill="#4B5563" />
                    <circle cx="180" cy="200" r="2" fill="#4B5563" />

                    <line x1="670" y1="320" x2="670" y2="520" stroke="#4B5563" strokeWidth="0.5" /> {/* Right dim line */}
                    <circle cx="670" cy="500" r="2" fill="#4B5563" />
                    <circle cx="670" cy="320" r="2" fill="#4B5563" />
                </motion.g>

                {/* 7. "LOCK" ACCENTS (Intersection Points) */}
                <motion.circle cx="200" cy="200" r="4" fill="#EA580C" stroke="black" strokeWidth="1" variants={lockAccent} />
                <motion.circle cx="450" cy="200" r="4" fill="#EA580C" stroke="black" strokeWidth="1" variants={lockAccent} />
                <motion.circle cx="450" cy="320" r="4" fill="#EA580C" stroke="black" strokeWidth="1" variants={lockAccent} />
                <motion.circle cx="650" cy="320" r="4" fill="#EA580C" stroke="black" strokeWidth="1" variants={lockAccent} />


                {/* DEFINITIONS for Gradients */}
                <defs>
                    <linearGradient id="glass-gradient" x1="200" y1="200" x2="450" y2="500" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1E293B" stopOpacity="0.8" />
                        <stop offset="1" stopColor="#0F172A" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="glass-gradient-dark" x1="450" y1="320" x2="650" y2="500" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1E293B" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#0F172A" stopOpacity="0.3" />
                    </linearGradient>
                </defs>
            </motion.svg>
        </div>
    );
};

export default ArchitecturalAnimation;
