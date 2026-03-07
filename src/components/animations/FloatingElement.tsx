"use client";

import { motion } from "framer-motion";

interface FloatingElementProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export const FloatingElement = ({ 
    children, 
    delay = 0, 
    duration = 3,
    className 
}: FloatingElementProps) => {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ 
                y: [-10, 10, -10],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
