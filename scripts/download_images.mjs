import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lees images.json
const imagesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'images.json'), 'utf-8'));
const images = imagesData.images;

const downloadDir = path.join(__dirname, 'public', 'images', 'projects');

// Maak directory aan
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

const downloadImage = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
};

async function main() {
    console.log(`Start downloading ${images.length} images...`);
    
    const downloadedImages = [];

    for (const url of images) {
        try {
            // Maak een veilige bestandsnaam
            const fileName = path.basename(url).split('?')[0]; // Verwijder query params
            // Vervang %20 en andere rare tekens, en maak uniek indien nodig
            const safeName = decodeURIComponent(fileName).replace(/[^a-zA-Z0-9.-]/g, '_');
            
            const destPath = path.join(downloadDir, safeName);
            
            console.log(`Downloading: ${url} -> ${safeName}`);
            await downloadImage(url, destPath);
            downloadedImages.push(`/images/projects/${safeName}`);
            
        } catch (error) {
            console.error(`Error downloading ${url}:`, error.message);
        }
    }

    // Schrijf nieuwe JSON met lokale paden
    fs.writeFileSync(
        path.join(__dirname, 'src', 'data', 'projects.json'), 
        JSON.stringify(downloadedImages, null, 2)
    );
    console.log('Done! Created src/data/projects.json');
}

main();
