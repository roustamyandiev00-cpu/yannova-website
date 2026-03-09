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
    // Check if directory exists
    if (!fs.existsSync(photosDirectory)) {
      console.warn(`Photos directory does not exist: ${photosDirectory}`);
      return [];
    }

    const filenames = fs.readdirSync(photosDirectory);
    
    // Filter alleen afbeeldingen (case-insensitive)
    const imageFiles = filenames.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    
    // Sorteer alfabetisch
    imageFiles.sort();
    
    console.log(`Found ${imageFiles.length} project photos in ${photosDirectory}`);
    
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
