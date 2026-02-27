import { prisma } from '@/lib/prisma';
import { Upload, Trash2, Download, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import { deleteMediaFile } from '@/lib/actions';
import { MediaUploadButton } from '@/components/admin/MediaUploadButton';

export const dynamic = 'force-dynamic';

export default async function MediaPage() {
    const mediaFiles = await prisma.mediaFile.findMany({
        orderBy: { createdAt: 'desc' },
    });

    // Group by folder
    const folders = [...new Set(mediaFiles.map(f => f.folder))];

    // Calculate total size
    const totalSize = mediaFiles.reduce((acc, file) => acc + file.size, 0);
    const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    return (
        <main>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-foreground">Media Bibliotheek</h1>
            <div className="flex items-center gap-3">
                    <MediaUploadButton />
                </div>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <p className="text-sm font-medium text-gray-400">Totaal Bestanden</p>
                    <p className="text-3xl font-bold text-white">{mediaFiles.length}</p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <p className="text-sm font-medium text-gray-400">Totale Grootte</p>
                    <p className="text-3xl font-bold text-white">{totalSizeMB} MB</p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <p className="text-sm font-medium text-gray-400">Mappen</p>
                    <p className="text-3xl font-bold text-white">{folders.length}</p>
                </div>
            </div>

            {/* Folders */}
            {folders.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-foreground mb-3">Mappen</h2>
                    <div className="flex flex-wrap gap-2">
                        {folders.map((folder) => {
                            const folderFiles = mediaFiles.filter(f => f.folder === folder);
                            return (
                                <button
                                    key={folder}
                                    className="flex items-center gap-2 rounded-lg bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-white/5 ring-1 ring-white/10"
                                >
                                    <FolderOpen className="h-4 w-4 text-secondary" />
                                    {folder}
                                    <span className="text-xs text-gray-400">({folderFiles.length})</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Media Grid */}
            <div className="bg-card shadow-sm ring-1 ring-white/10 rounded-xl p-6">
                {mediaFiles.length === 0 ? (
                    <div className="py-12 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-semibold text-foreground">Geen bestanden</h3>
                        <p className="mt-1 text-sm text-gray-400">Upload je eerste bestand om te beginnen.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {mediaFiles.map((file) => {
                            const isImage = file.mimeType.startsWith('image/');

                            return (
                                <div
                                    key={file.id}
                                    className="group relative rounded-lg bg-white/5 p-2 hover:bg-white/10 transition-colors"
                                >
                                    {/* Preview */}
                                    <div className="aspect-square rounded-md bg-black/20 overflow-hidden mb-2">
                                        {isImage ? (
                                            <Image
                                                src={file.url}
                                                alt={file.alt || file.filename}
                                                width={200}
                                                height={200}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="h-full w-full flex items-center justify-center">
                                                <span className="text-4xl text-gray-400">📄</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* File Info */}
                                    <div className="px-1">
                                        <p className="text-xs font-medium text-foreground truncate" title={file.filename}>
                                            {file.filename}
                                        </p>
                                        <p className="text-xs text-gray-400">{formatFileSize(file.size)}</p>
                                    </div>

                                    {/* Actions (shown on hover) */}
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                        <a
                                            href={file.url}
                                            download={file.filename}
                                            className="rounded-md bg-black/50 p-1.5 text-white hover:bg-black/70"
                                            title="Download"
                                        >
                                            <Download className="h-4 w-4" />
                                        </a>
                                        <form action={deleteMediaFile.bind(null, file.id)}>
                                            <button
                                                type="submit"
                                                className="rounded-md bg-black/50 p-1.5 text-red-400 hover:bg-red-500/20"
                                                title="Verwijderen"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </form>
                                    </div>

                                    {/* Folder badge */}
                                    {file.folder !== 'uploads' && (
                                        <div className="absolute bottom-2 left-2">
                                            <span className="inline-flex items-center rounded-full bg-secondary/20 px-2 py-0.5 text-xs font-medium text-secondary">
                                                {file.folder}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Upload Instructions */}
            <div className="mt-6 rounded-xl bg-blue-500/10 p-4 ring-1 ring-blue-500/20">
                <h3 className="text-sm font-semibold text-blue-400 mb-2">💡 Upload Tips</h3>
                <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Ondersteunde formaten: JPG, PNG, GIF, WebP, PDF</li>
                    <li>• Maximale bestandsgrootte: 10MB</li>
                    <li>• Gebruik beschrijvende bestandsnamen voor betere SEO</li>
                    <li>• Optimaliseer afbeeldingen voor snellere laadtijden</li>
                </ul>
            </div>
        </main>
    );
}
