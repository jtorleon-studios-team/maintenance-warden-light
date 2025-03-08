
/**
 * ## Resize Images 
 * 
 * ### Feature :
 * 
 * - resize images with sharp
 * - batch resizes
 * 
 * ### Intro :
 *  
 * ```ts
 * import * as ResizeImageTasks from "maintenance-warden-light/tasks/resize-img-2mib.task"
 * 
 * ResizeImageTasks
 *   .Run({ directory: "../my_images" })
 *   .then(()=> console.log("success"))
 *   .catch((e) => console.error(e));
 * ```
 *  
 * #### Call to Action :
 * 
 *  Have questions? Need help? Join us on Discord or visit our GitHub 
 *  to get involved with the community and contribute! 
 * 
 * @packageDocumentation
 */

import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

/**
 * Run Task 
 * @param config 
 * @returns 
 */
export async function run(config: Config) {
  const images = await getImagesInDirectory(config.directory);

  if (images.length === 0) {
    console.log("Aucune image à optimiser.");
    return;
  }

  for (const image of images) {
    await optimizeImage(image);
  }

  console.log("Optimisation terminée !");
}

/**
 * ## Run Task
 * @param options 
 */
export type Config = {
  /**
   * directory target
   */
  directory: string
}

const MAX_SIZE = 2 * 1024 * 1024; // 2 MiB
const QUALITY_STEPS = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50]; // Qualité décroissante
const RESIZE_STEPS = [100, 95, 90, 85, 80, 75, 70, 65, 60]; // Réduction progressive de la taille

async function getImagesInDirectory(directory: string): Promise<string[]> {
  const files = await fs.readdir(directory);
  return files
    .map(file => path.join(directory, file))
    .filter(file => /\.(jpe?g|png)$/i.test(file));
}

async function optimizeImage(imagePath: string, maxSize = MAX_SIZE) {
  let { size } = await fs.stat(imagePath);
  if (size <= maxSize) return; // Déjà optimisé

  console.log(`Compression de : ${imagePath} (Taille actuelle : ${(size / 1024).toFixed(2)} KB)`);

  const metadata = await sharp(imagePath).metadata();
  let buffer = await fs.readFile(imagePath);
  let format = metadata.format;

  // Étape 1 : Essayer d'abord avec différents niveaux de qualité
  for (const quality of QUALITY_STEPS) {
    buffer = await sharp(imagePath)
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();

    if (buffer.length <= maxSize * 0.98) break; // On s'arrête dès qu'on est proche de la limite
  }

  // Étape 2 : Si l'image est encore trop grande, réduire la résolution
  for (const scale of RESIZE_STEPS) {
    if (buffer.length <= maxSize) break;

    buffer = await sharp(imagePath)
      .resize({ width: Math.round((scale / 100) * metadata.width!) })
      .jpeg({ quality: 85, mozjpeg: true }) // Qualité ajustée pour garder un bon rendu
      .toBuffer();
  }

  // Étape 3 : Dernier recours, convertir en WebP si PNG trop lourd
  if (buffer.length > maxSize && format === "png") {
    buffer = await sharp(imagePath).toFormat("webp").toBuffer();
  }

  // Vérification finale : si on dépasse encore 2 MiB, dernière compression
  if (buffer.length > maxSize) {
    buffer = await sharp(buffer).jpeg({ quality: 50 }).toBuffer();
  }

  await fs.writeFile(imagePath, buffer);
  console.log(`Nouvelle taille : ${(buffer.length / 1024).toFixed(2)} KB`);
}
