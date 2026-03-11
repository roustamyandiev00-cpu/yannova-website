"use client";
'use client';

import { useState } from 'react';
import { UserPlus, X, Loader2 } from 'lucide-react';
import { createUser } from '@/lib/actions';

export default function CreateUserButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(formData: FormData) {
        setIsSaving(true);
        setMessage('');

        try {
            const result = await createUser(null, formData);
            if (result?.success) {
                setIsOpen(false);
                window.location.reload();
            } else {
                setMessage(result?.message || 'Aanmaken mislukt');
            }
        } catch (error) {
            setMessage('Er is een fout opgetreden');
            console.error(error);
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary/80"
            >
                <UserPlus className="h-4 w-4" /> Nieuwe Gebruiker
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="w-full max-w-md rounded-xl bg-card border border-white/10 shadow-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-foreground">Nieuwe Gebruiker</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form action={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Naam
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    placeholder="Jan Jansen"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    placeholder="jan@yannova.be"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Wachtwoord
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    minLength={8}
                                    className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary"
                                    placeholder="Minimaal 8 tekens"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Rol
                                </label>
                                <select
                                    name="role"
                                    className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-foreground focus:border-secondary focus:ring-1 focus:ring-secondary"
                                >
                                    <option value="user">Gebruiker</option>
                                    <option value="editor">Editor</option>
                                    <option value="admin">Admin</option>
                                    <option value="super_admin">Super Admin</option>
                                </select>
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
                                    disabled={isSaving}
                                    className="flex items-center gap-2 rounded-md bg-secondary px-6 py-2 text-sm font-medium text-white hover:bg-secondary/80 disabled:opacity-50"
                                >
                                    {isSaving && <Loader2 className="h-4 w-4 animate-spin" />}
                                    {isSaving ? 'Opslaan...' : 'Aanmaken'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
