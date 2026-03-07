import fs from 'fs';
import path from 'path';

export interface ProjectPhoto {
  filename: string;
  path: string;
  url: string;
}

export function getProjectPhotos(): ProjectPhoto[] {
  const photosDirectory = path.join(process.cwd(), 'public', 'fotos');
  
  try {
    const filenames = fs.readdirSync(photosDirectory);
    
    // Filter alleen afbeeldingen
    const imageFiles = filenames.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    
    return imageFiles.map(filename => ({
      filename,
      path: path.join(photosDirectory, filename),
      url: `/fotos/${filename}`
    }));
  } catch (error) {
    console.error('Error reading photos directory:', error);
    return [];
  }
}
