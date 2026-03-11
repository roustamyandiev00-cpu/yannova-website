"use client";
'use client';

import { useState, useCallback } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface UploadMediaModalProps {
  onClose: () => void;
  onUpload: (files: File[]) => Promise<void>;
}

export function UploadMediaModal({ onClose, onUpload }: UploadMediaModalProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
    
    // Create preview URLs for images
    const newPreviews = acceptedFiles.map((file) => {
      if (file.type.startsWith('image/')) {
        return URL.createObjectURL(file);
      }
      return null;
    });
    setPreviewUrls((prev) => [...prev, ...newPreviews.filter(Boolean) as string[]]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
      'application/pdf': ['.pdf'],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (previewUrls[index]) {
      URL.revokeObjectURL(previewUrls[index]);
      setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    
    setUploading(true);
    try {
      await onUpload(files);
      onClose();
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-card shadow-2xl ring-1 ring-white/10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h2 className="text-lg font-semibold text-white">Media Uploaden</h2>
          <button
            onClick={onClose}
            className="rounded-md p-1 hover:bg-white/10 text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Dropzone */}
        <div className="p-6">
          <div
            {...getRootProps()}
            className={`rounded-xl border-2 border-dashed p-8 text-center transition-colors cursor-pointer ${
              isDragActive
                ? 'border-secondary bg-secondary/5'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
            <p className="text-sm text-gray-300">
              {isDragActive
                ? 'Laat de bestanden hier los...'
                : 'Sleep bestanden hierheen of klik om te selecteren'}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Ondersteund: JPG, PNG, GIF, WebP, PDF (max 10MB)
            </p>
          </div>

          {/* File Previews */}
          {files.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-300 mb-3">
                Geselecteerde bestanden ({files.length})
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg bg-white/5 p-2 group"
                  >
                    {/* Preview */}
                    <div className="aspect-square rounded-md bg-black/20 overflow-hidden mb-2">
                      {previewUrls[index] ? (
                        <img
                          src={previewUrls[index]}
                          alt={file.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center">
                          <span className="text-2xl text-gray-400">
                            {file.type === 'application/pdf' ? '📄' : '📁'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* File Info */}
                    <p className="text-xs text-gray-300 truncate" title={file.name}>
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-1 right-1 rounded-full bg-red-500/20 p-1 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-white/10 p-4">
          <button
            onClick={onClose}
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
          >
            Annuleren
          </button>
          <button
            onClick={handleUpload}
            disabled={files.length === 0 || uploading}
            className="flex items-center gap-2 rounded-md bg-secondary px-6 py-2 text-sm font-medium text-white hover:bg-secondary/80 disabled:opacity-50"
          >
            {uploading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Uploaden...
              </>
            ) : (
              <>
                <Upload className="h-4 w-4" />
                Uploaden ({files.length})
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
