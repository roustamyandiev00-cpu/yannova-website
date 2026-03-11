"use client";
'use client';

import { useState } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import { UploadMediaModal } from './UploadMediaModal';
import { saveMediaFiles } from '@/lib/actions';

export function MediaUploadButton() {
  const [showModal, setShowModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (files: File[]) => {
    setIsUploading(true);
    try {
      // Convert files to base64 for server action
      const fileDataPromises = files.map(async (file) => {
        return new Promise<{ name: string; type: string; size: number; data: string }>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve({
              name: file.name,
              type: file.type,
              size: file.size,
              data: reader.result as string,
            });
          };
          reader.readAsDataURL(file);
        });
      });

      const fileData = await Promise.all(fileDataPromises);
      
      // Upload via server action
      for (const file of fileData) {
        const formData = new FormData();
        formData.append('file', file.data);
        formData.append('filename', file.name);
        formData.append('mimeType', file.type);
        formData.append('size', file.size.toString());
        
        await saveMediaFiles(formData);
      }
      
      // Refresh page to show new files
      window.location.reload();
    } catch (error) {
      console.error('Upload error:', error);
      alert('Er ging iets mis bij het uploaden');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        disabled={isUploading}
        className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-secondary/80 disabled:opacity-50 transition-colors"
      >
        {isUploading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Uploaden...
          </>
        ) : (
          <>
            <Plus className="h-4 w-4" />
            Upload
          </>
        )}
      </button>

      {showModal && (
        <UploadMediaModal
          onClose={() => setShowModal(false)}
          onUpload={handleUpload}
        />
      )}
    </>
  );
}
