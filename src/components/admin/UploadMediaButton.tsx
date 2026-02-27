'use client';

import { useState } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { uploadMediaFile } from '@/lib/actions';

export default function UploadMediaButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(formData: FormData) {
        setIsUploading(true);
        setMessage('');

        try {
            const result = await uploadMediaFile(null, formData);
            if (result?.success) {
                setIsOpen(false);
                // Refresh is automatic with server actions typically, 
                // but we might need router.refresh() if it doesn't auto-update
                // createMediaFile usually calls revalidatePath
                window.location.reload();
            } else {
                setMessage(result?.message || 'Upload mislukt');
            }
        } catch (error) {
            setMessage('Er is een fout opgetreden');
            console.error(error);
        } finally {
            setIsUploading(false);
        }
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary/80"
            >
                <Upload className="h-4 w-4" /> Upload Bestand
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="w-full max-w-md rounded-xl bg-card border border-white/10 shadow-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-foreground">Bestand Uploaden</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form action={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Kies bestand
                                </label>
                                <input
                                    type="file"
                                    name="file"
                                    required
                                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-secondary/20 file:text-secondary hover:file:bg-secondary/30"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Map (optioneel)
                                </label>
                                <select
                                    name="folder"
                                    className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary"
                                >
                                    <option value="uploads">Uploads (Standaard)</option>
                                    <option value="projecten">Projecten</option>
                                    <option value="testimonials">Testimonials</option>
                                    <option value="team">Team</option>
                                    <option value="documenten">Documenten</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Alt Tekst (optioneel)
                                </label>
                                <input
                                    type="text"
                                    name="alt"
                                    placeholder="Beschrijving van de afbeelding"
                                    className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground placeholder:text-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary"
                                />
                            </div>

                            {message && (
                                <div className="p-3 rounded-md bg-red-500/10 text-red-400 text-xs">
                                    {message}
                                </div>
                            )}

                            <div className="flex justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
                                >
                                    Annuleren
                                </button>
                                <button
                                    type="submit"
                                    disabled={isUploading}
                                    className="flex items-center gap-2 rounded-md bg-secondary px-6 py-2 text-sm font-medium text-white hover:bg-secondary/80 disabled:opacity-50"
                                >
                                    {isUploading && <Loader2 className="h-4 w-4 animate-spin" />}
                                    {isUploading ? 'Uploaden...' : 'Uploaden'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
