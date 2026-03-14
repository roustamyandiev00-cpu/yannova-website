"use client";

import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { trackContactFormSubmission } from "@/lib/google-ads";
import { gtmTrackFormSubmit } from "@/components/GoogleTagManager";

export function ContactForm() {
    const searchParams = useSearchParams();
    const productName = searchParams.get('product');
    const productSku = searchParams.get('sku');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (productName) {
            setMessage(`Ik wil graag het volgende product aanvragen:\n\nProduct: ${productName}${productSku ? `\nSKU: ${productSku}` : ''}\n\nKunt u mij meer informatie geven over beschikbaarheid en levering?`);
        }
    }, [productName, productSku]);

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

            let result;
            try {
                result = await response.json();
            } catch (parseError) {
                console.error("JSON parse error:", parseError);
                throw new Error("Er is een fout opgetreden bij het verwerken van de response. Probeer het opnieuw.");
            }

            if (!response.ok) {
                throw new Error(result.error || "Er is iets misgegaan.");
            }

            setSubmitResult({ success: true, message: result.message || "Bericht succesvol verzonden! We nemen zo snel mogelijk contact met u op." });
            
            // Track Google Ads conversion + GTM event
            trackContactFormSubmission();
            gtmTrackFormSubmit();
            
            event.currentTarget.reset();
        } catch (error: unknown) {
            let errorMessage = "Er is een fout opgetreden. Probeer het opnieuw of neem telefonisch contact op.";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            setSubmitResult({ success: false, message: errorMessage });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="editorial-pane pr-2">
            <div className="mb-6">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Stuur ons een bericht</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    Vul het formulier in en we nemen binnen 24 uur contact met u op.
                </p>
            </div>

            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-6">

                    {/* Productbanner als er een product is meegegeven */}
                    {productName && (
                        <div className="flex items-center gap-3 rounded-lg border border-orange-500/30 bg-orange-500/10 px-4 py-3">
                            <span className="text-xl">📦</span>
                            <div>
                                <p className="text-sm font-semibold text-orange-300">Product aanvraag</p>
                                <p className="text-sm text-orange-200">{productName}{productSku && ` — SKU: ${productSku}`}</p>
                            </div>
                        </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground mb-2">
                                Naam <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                autoComplete="name"
                                minLength={2}
                                maxLength={100}
                                pattern="[A-Za-zÀ-ÿ\s'-]{2,}"
                                title="Voer een geldige naam in (minimaal 2 karakters)"
                                className="block w-full rounded-lg border-0 px-4 py-3 text-foreground shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-secondary text-base sm:text-sm sm:leading-6 bg-white/5 focus:bg-white/10 transition-all"
                                placeholder="Jan Janssens"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground mb-2">
                                Email <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-lg border-0 px-4 py-3 text-foreground shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-secondary text-base sm:text-sm sm:leading-6 bg-white/5 focus:bg-white/10 transition-all"
                                placeholder="jan@voorbeeld.be"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-foreground mb-2">
                            Telefoon
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            pattern="[\+]?[0-9\s\-\(\)]{9,20}"
                            title="Voer een geldig telefoonnummer in"
                            className="block w-full rounded-lg border-0 px-4 py-3 text-foreground shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-secondary text-base sm:text-sm sm:leading-6 bg-white/5 focus:bg-white/10 transition-all"
                            placeholder="+32 489 96 00 01"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-foreground mb-2">
                            Onderwerp
                        </label>
                        <select
                            name="subject"
                            id="subject"
                            defaultValue={productName ? 'product-aanvraag' : 'algemeen'}
                            className="block w-full rounded-lg border-0 px-4 py-3 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary text-base sm:text-sm sm:leading-6 bg-white/5 focus:bg-white/10 transition-all"
                        >
                            <option value="algemeen">Algemene vraag</option>
                            <option value="offerte">Offerte aanvraag</option>
                            <option value="product-aanvraag">Product aanvraag</option>
                            <option value="gevelrenovatie">Gevelrenovatie</option>
                            <option value="ramen-deuren">Ramen & Deuren</option>
                            <option value="isolatie">Isolatie</option>
                            <option value="renovatie">Volledige renovatie</option>
                            <option value="andere">Andere</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground mb-2">
                            Bericht <span className="text-red-400">*</span>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows={5}
                            minLength={10}
                            maxLength={2000}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="block w-full rounded-lg border-0 px-4 py-3 text-foreground shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-secondary text-base sm:text-sm sm:leading-6 bg-white/5 focus:bg-white/10 transition-all resize-none"
                            placeholder="Beschrijf uw project of vraag in detail..."
                        ></textarea>
                        <p className="mt-2 text-xs text-muted-foreground">
                            Hoe meer details u geeft, hoe beter we u kunnen helpen.
                        </p>
                    </div>
                </div>

                {submitResult && (
                    <div 
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                        className={`mt-6 p-4 rounded-lg border backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300 ${
                            submitResult.success 
                                ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                                : 'bg-red-500/10 border-red-500/30 text-red-400'
                        }`}
                    >
                        <div className="flex items-start gap-3">
                            {submitResult.success && <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />}
                            <p className="text-sm">{submitResult.message}</p>
                        </div>
                    </div>
                )}

                <div className="mt-8">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-center text-base font-semibold text-white shadow-lg hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="h-5 w-5 animate-spin" />
                                <span>Verzenden...</span>
                            </>
                        ) : (
                            <>
                                <Send className="h-5 w-5" />
                                <span>Verstuur Bericht</span>
                            </>
                        )}
                    </button>
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                        Door dit formulier te verzenden gaat u akkoord met onze privacyvoorwaarden
                    </p>
                </div>
            </form>
        </div>
    );
}
