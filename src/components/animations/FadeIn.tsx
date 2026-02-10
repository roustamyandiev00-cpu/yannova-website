"use client";

import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string; // Allow passing standard className
}

export const FadeIn = ({ children, delay = 0, duration = 0.5, direction = "up", className }: FadeInProps) => {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className} // Pass it here if needed
        >
            {children}
        </motion.div>
    );
};
