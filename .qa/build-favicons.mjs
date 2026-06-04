// Generate favicon and apple-icon from the Meep brand logo source.
// Crops the source (which is a square lockup of icon + wordmark) to just the icon
// portion (top ~60%), then center-squares it and resizes for App Router favicon convention.

import sharp from "sharp";
import { resolve } from "path";

const SRC = resolve(
  "../marketing-archive/source-materials/site/examples/images/meep-image-kit/logo/meep-logo-transparent.png"
);
const ICON_OUT = resolve("app/icon.png");
const APPLE_OUT = resolve("app/apple-icon.png");

const ICON_TOP_FRACTION = 0.6; // top portion of source containing the sunburst icon (approx)
const ICON_SIZES = { icon: 192, apple: 180 };
const APPLE_BG = { r: 252, g: 253, b: 249, alpha: 1 }; // --color-paper

const meta = await sharp(SRC).metadata();
if (!meta.width || !meta.height) {
  throw new Error("Source image has no dimensions");
}

const cropHeight = Math.round(meta.height * ICON_TOP_FRACTION);
const cropSide = Math.min(meta.width, cropHeight); // largest centered square that fits inside the top fraction
const cropLeft = Math.round((meta.width - cropSide) / 2);
const cropTop = Math.round((cropHeight - cropSide) / 2);

const baseExtract = sharp(SRC).extract({
  left: cropLeft,
  top: cropTop,
  width: cropSide,
  height: cropSide,
});

// Browser favicon — transparent background, lets browser UI surface show through
await baseExtract
  .clone()
  .resize(ICON_SIZES.icon, ICON_SIZES.icon, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9 })
  .toFile(ICON_OUT);

// Apple touch icon — Apple ignores transparency and adds its own background, so flatten to paper.
await baseExtract
  .clone()
  .resize(ICON_SIZES.apple - 24, ICON_SIZES.apple - 24, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .extend({
    top: 12,
    bottom: 12,
    left: 12,
    right: 12,
    background: APPLE_BG,
  })
  .flatten({ background: APPLE_BG })
  .png({ compressionLevel: 9 })
  .toFile(APPLE_OUT);

console.log(
  `Source: ${meta.width}x${meta.height}, cropped ${cropSide}x${cropSide} from top ${cropTop},${cropLeft}`
);
console.log(`Wrote ${ICON_OUT} (${ICON_SIZES.icon}x${ICON_SIZES.icon}, transparent)`);
console.log(`Wrote ${APPLE_OUT} (${ICON_SIZES.apple}x${ICON_SIZES.apple}, paper bg, 12px padding)`);
