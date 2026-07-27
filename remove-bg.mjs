import sharp from "sharp";
import fs from "fs";

async function run() {
  console.log("Reading public/Untitled.jpeg...");
  const { data, info } = await sharp("public/Untitled.jpeg")
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let replacedCount = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Check if the pixel is white or near-white background
    if (r > 220 && g > 220 && b > 220) {
      data[i + 3] = 0; // Transparent
      replacedCount++;
    } else if (r > 185 && g > 185 && b > 185) {
      // Smooth anti-aliased transition for edge pixels
      const avg = (r + g + b) / 3;
      const alpha = Math.max(0, Math.min(255, Math.round(255 * (1 - (avg - 185) / (220 - 185)))));
      data[i + 3] = Math.min(data[i + 3], alpha);
      if (alpha < 255) replacedCount++;
    }
  }

  console.log(`Processed ${data.length / 4} pixels. Removed background from ${replacedCount} pixels.`);

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .png()
  .toFile("public/logo.png");

  console.log("Successfully created public/logo.png with transparent background!");
}

run().catch((err) => {
  console.error("Error running background removal:", err);
  process.exit(1);
});
