"use client";

import { useEffect, useState } from "react";

const stats = [
    { id: 1, name: "Jaar Ervaring", value: 15, suffix: "+" },
    { id: 2, name: "Tevreden Klanten", value: 500, suffix: "+" },
    { id: 3, name: "Projecten Opgeleverd", value: 850, suffix: "+" },
    { id: 4, name: "Garantie Jaren", value: 10, suffix: "" },
];

export function Stats() {
    return (
        <div className="relative isolate overflow-hidden bg-background py-16 sm:py-20">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Cijfers die voor zich spreken
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-muted-foreground">
                            Bij Yannova Bouw streven we naar perfectie in elk detail.
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-[#1a1d24] p-8 rounded-2xl transition-all hover:bg-[#1e2128]">
                                <dt className="text-sm font-semibold leading-6 text-gray-400">{stat.name}</dt>
                                <dd className="order-first text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Simple counter animation
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16); // 60fps

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
    }, [value]);

    return (
        <span>
            {count}{suffix}
        </span>
    );
}
