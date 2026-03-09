const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = './public/images';

function optimizeImages(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Could not list the directory: ${dir}`, err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file.name);

      if (file.isDirectory()) {
        optimizeImages(filePath); // Recursively call for subdirectories
      } else {
        const fileExt = path.extname(filePath).toLowerCase();

        if (['.jpg', '.jpeg', '.png', '.gif'].includes(fileExt)) {
          const newFilePath = `${filePath.substring(0, filePath.lastIndexOf('.'))}.webp`;

          sharp(filePath)
            .webp({ quality: 80 })
            .toFile(newFilePath, (err, info) => {
              if (err) {
                console.error(`Error converting ${file.name} to webp`, err);
              } else {
                console.log(`Successfully converted ${file.name} to webp`);
              }
            });
        }
      }
    });
  });
}

optimizeImages(directory);

