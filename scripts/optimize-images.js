import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDirs = [
  path.join(__dirname, '..', 'src', 'assets', 'projects'),
  path.join(__dirname, '..', 'src', 'assets', 'images')
];

async function convertToWebp() {
  for (const dir of targetDirs) {
    try {
      const files = await fs.readdir(dir);
      
      for (const file of files) {
        if (file.match(/\.(png|jpe?g)$/i)) {
          const filePath = path.join(dir, file);
          const ext = path.extname(file);
          const baseName = path.basename(file, ext);
          const webpPath = path.join(dir, `${baseName}.webp`);
          
          console.log(`Converting ${file} to webp...`);
          
          // Convert image
          await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(webpPath);
            
          console.log(`Successfully converted. Deleting original ${file}...`);
          
          // Delete original
          await fs.unlink(filePath);
        }
      }
    } catch (err) {
      console.error(`Error processing directory ${dir}:`, err);
    }
  }
  console.log('Conversion complete!');
}

convertToWebp();
