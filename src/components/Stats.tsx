"use client";

import { useEffect, useState, useRef } from "react";
import { FadeIn } from "./animations/FadeIn";
import { Award, Users, Briefcase, Shield } from "lucide-react";

const stats = [
    { id: 1, name: "Jaar Ervaring", value: 15, suffix: "+", icon: Award, color: "text-blue-400" },
    { id: 2, name: "Tevreden Klanten", value: 500, suffix: "+", icon: Users, color: "text-green-400" },
    { id: 3, name: "Projecten Opgeleverd", value: 850, suffix: "+", icon: Briefcase, color: "text-secondary" },
    { id: 4, name: "Garantie Jaren", value: 10, suffix: "", icon: Shield, color: "text-purple-400" },
];

export function Stats() {
    return (
        <div className="relative isolate overflow-hidden bg-background py-16 sm:py-20">
            {/* Background decoration */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(ellipse at center, rgba(255, 107, 0, 0.08), transparent 60%)",
                }}
            />
            
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
                                Onze Prestaties
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-3">
                                Cijfers die voor zich spreken
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                                Meer dan 15 jaar ervaring in ramen, deuren en renovatie in Antwerpen en omgeving.
                            </p>
                        </div>
                    </FadeIn>
                    
                    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, idx) => (
                            <FadeIn key={stat.id} delay={idx * 0.1}>
                                <div className="group relative flex flex-col bg-card border border-border p-8 rounded-2xl transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                    </div>
                                    
                                    {/* Value */}
                                    <dd className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-2">
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </dd>
                                    
                                    {/* Label */}
                                    <dt className="text-sm font-medium leading-6 text-muted-foreground">
                                        {stat.name}
                                    </dt>
                                </div>
                            </FadeIn>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value, isVisible]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}
