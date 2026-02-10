'use client'

import { Loader2 } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitResult(null);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Er is iets misgegaan.");
            }

            setSubmitResult({ success: true, message: result.message || "Bericht succesvol verzonden!" });
            event.currentTarget.reset();
        } catch (error: unknown) {
            let errorMessage = "Er is een fout opgetreden.";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            setSubmitResult({ success: false, message: errorMessage });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={onSubmit} className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">Naam</label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            autoComplete="name"
                            className="block w-full rounded-lg border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-secondary text-base sm:text-sm sm:leading-6 bg-white/5 focus:bg-white/10 transition-all"
                            placeholder="Uw naam"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">Email</label>
                    <div className="mt-2.5">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-lg border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-secondary text-base sm:text-sm sm:leading-6 bg-white/5 focus:bg-white/10 transition-all"
                            placeholder="uw@email.com"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-foreground">Telefoon (optioneel)</label>
                    <div className="mt-2.5">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className="block w-full rounded-lg border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-secondary text-base sm:text-sm sm:leading-6 bg-white/5 focus:bg-white/10 transition-all"
                            placeholder="+32 ..."
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">Bericht</label>
                    <div className="mt-2.5">
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows={4}
                            className="block w-full rounded-lg border-0 px-3.5 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-secondary text-base sm:text-sm sm:leading-6 bg-white/5 focus:bg-white/10 transition-all"
                            placeholder="Waarmee kunnen we u helpen?"
                        ></textarea>
                    </div>
                </div>
            </div>

            {submitResult && (
                <div className={`mt-4 p-4 rounded-lg bg-white/10 border ${submitResult.success ? 'border-green-500/50 text-green-400' : 'border-red-500/50 text-red-400'} backdrop-blur-sm`}>
                    {submitResult.message}
                </div>
            )}

            <div className="mt-8">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-full bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-lg hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Verzenden...
                        </>
                    ) : (
                        'Verstuur Bericht'
                    )}
                </button>
            </div>
        </form>
    );
}
