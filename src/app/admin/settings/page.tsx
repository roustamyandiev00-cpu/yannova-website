import { Save, Globe, Mail, Share2, Search } from 'lucide-react';
import { updateSettings } from '@/lib/actions';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function SettingsPage() {
    // Get all settings from Prisma
    const settings = await prisma.siteSetting.findMany({
        orderBy: { category: 'asc' },
    });

    // Helper to get setting value
    const getSetting = (key: string) => {
        return settings.find((s) => s.key === key)?.value || '';
    };

    return (
        <main>
            <h1 className="mb-8 text-2xl font-bold text-foreground">Instellingen</h1>

            <form action={updateSettings} className="space-y-6">
                {/* General Settings */}
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <div className="flex items-center gap-2 mb-4">
                        <Globe className="h-5 w-5 text-secondary" />
                        <h2 className="text-lg font-semibold text-foreground">Algemene Instellingen</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="site_name" className="block text-sm font-medium text-gray-300 mb-1">
                                Website Naam
                            </label>
                            <input
                                type="text"
                                id="site_name"
                                name="site_name"
                                defaultValue={getSetting('site_name')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="Yannova"
                            />
                        </div>

                        <div>
                            <label htmlFor="site_description" className="block text-sm font-medium text-gray-300 mb-1">
                                Website Beschrijving
                            </label>
                            <textarea
                                id="site_description"
                                name="site_description"
                                rows={3}
                                defaultValue={getSetting('site_description')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="Uw partner voor renovaties en verbouwingen"
                            />
                        </div>

                        <div>
                            <label htmlFor="site_url" className="block text-sm font-medium text-gray-300 mb-1">
                                Website URL
                            </label>
                            <input
                                type="url"
                                id="site_url"
                                name="site_url"
                                defaultValue={getSetting('site_url')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="https://yannova.be"
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Settings */}
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <div className="flex items-center gap-2 mb-4">
                        <Mail className="h-5 w-5 text-secondary" />
                        <h2 className="text-lg font-semibold text-foreground">Contact Informatie</h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label htmlFor="contact_email" className="block text-sm font-medium text-gray-300 mb-1">
                                Contact Email
                            </label>
                            <input
                                type="email"
                                id="contact_email"
                                name="contact_email"
                                defaultValue={getSetting('contact_email')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="info@yannova.be"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-300 mb-1">
                                Telefoonnummer
                            </label>
                            <input
                                type="tel"
                                id="contact_phone"
                                name="contact_phone"
                                defaultValue={getSetting('contact_phone')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="+32 123 45 67 89"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="contact_address" className="block text-sm font-medium text-gray-300 mb-1">
                                Adres
                            </label>
                            <input
                                type="text"
                                id="contact_address"
                                name="contact_address"
                                defaultValue={getSetting('contact_address')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="Straat 123, 1000 Brussel"
                            />
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <div className="flex items-center gap-2 mb-4">
                        <Share2 className="h-5 w-5 text-secondary" />
                        <h2 className="text-lg font-semibold text-foreground">Social Media</h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label htmlFor="social_facebook" className="block text-sm font-medium text-gray-300 mb-1">
                                Facebook
                            </label>
                            <input
                                type="url"
                                id="social_facebook"
                                name="social_facebook"
                                defaultValue={getSetting('social_facebook')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="https://facebook.com/yannova"
                            />
                        </div>

                        <div>
                            <label htmlFor="social_instagram" className="block text-sm font-medium text-gray-300 mb-1">
                                Instagram
                            </label>
                            <input
                                type="url"
                                id="social_instagram"
                                name="social_instagram"
                                defaultValue={getSetting('social_instagram')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="https://instagram.com/yannova"
                            />
                        </div>

                        <div>
                            <label htmlFor="social_linkedin" className="block text-sm font-medium text-gray-300 mb-1">
                                LinkedIn
                            </label>
                            <input
                                type="url"
                                id="social_linkedin"
                                name="social_linkedin"
                                defaultValue={getSetting('social_linkedin')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="https://linkedin.com/company/yannova"
                            />
                        </div>

                        <div>
                            <label htmlFor="social_twitter" className="block text-sm font-medium text-gray-300 mb-1">
                                Twitter / X
                            </label>
                            <input
                                type="url"
                                id="social_twitter"
                                name="social_twitter"
                                defaultValue={getSetting('social_twitter')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="https://twitter.com/yannova"
                            />
                        </div>
                    </div>
                </div>

                {/* SEO Settings */}
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <div className="flex items-center gap-2 mb-4">
                        <Search className="h-5 w-5 text-secondary" />
                        <h2 className="text-lg font-semibold text-foreground">SEO Instellingen</h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="seo_title" className="block text-sm font-medium text-gray-300 mb-1">
                                Default Meta Title
                            </label>
                            <input
                                type="text"
                                id="seo_title"
                                name="seo_title"
                                defaultValue={getSetting('seo_title')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="Yannova - Renovaties & Verbouwingen"
                            />
                        </div>

                        <div>
                            <label htmlFor="seo_description" className="block text-sm font-medium text-gray-300 mb-1">
                                Default Meta Description
                            </label>
                            <textarea
                                id="seo_description"
                                name="seo_description"
                                rows={2}
                                defaultValue={getSetting('seo_description')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="Professionele renovaties en verbouwingen door Yannova"
                            />
                        </div>

                        <div>
                            <label htmlFor="seo_keywords" className="block text-sm font-medium text-gray-300 mb-1">
                                Keywords (komma gescheiden)
                            </label>
                            <input
                                type="text"
                                id="seo_keywords"
                                name="seo_keywords"
                                defaultValue={getSetting('seo_keywords')}
                                className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                placeholder="renovatie, verbouwing, ramen, deuren, gevel"
                            />
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary/80"
                    >
                        <Save className="h-4 w-4" />
                        Instellingen Opslaan
                    </button>
                </div>
            </form>
        </main>
    );
}
