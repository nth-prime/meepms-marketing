// Build app/favicon.ico from the meep brand icon source.
//
// The Next.js App Router serves app/favicon.ico at /favicon.ico, which is the
// legacy path most third-party UIs (Vercel dashboard, GitHub, Slack, etc.)
// request and cache before they even look at <link rel="icon"> tags. Without
// this file the path 404s and those surfaces fall back to whatever stale
// favicon they had cached for the domain (in our case, the Canva "C" served
// by the previous site at the same domain).
//
// Embeds a 32x32 PNG bitmap inside an ICO container (post-Vista format).

import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const SRC = resolve(
  "../marketing-archive/source-materials/site/examples/images/meep-image-kit/logo/meep-logo-transparent.png"
);
const OUT = resolve("app/favicon.ico");
const SIZE = 32;
const ICON_TOP_FRACTION = 0.6;

const meta = await sharp(SRC).metadata();
const cropHeight = Math.round(meta.height * ICON_TOP_FRACTION);
const cropSide = Math.min(meta.width, cropHeight);
const cropLeft = Math.round((meta.width - cropSide) / 2);
const cropTop = Math.round((cropHeight - cropSide) / 2);

const pngBuf = await sharp(SRC)
  .extract({ left: cropLeft, top: cropTop, width: cropSide, height: cropSide })
  .resize(SIZE, SIZE, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

// ICO container: 6-byte ICONDIR header + 16-byte ICONDIRENTRY + embedded PNG.
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);  // reserved
header.writeUInt16LE(1, 2);  // type 1 = icon
header.writeUInt16LE(1, 4);  // image count

const dirEntry = Buffer.alloc(16);
dirEntry.writeUInt8(SIZE === 256 ? 0 : SIZE, 0);  // width (0 means 256)
dirEntry.writeUInt8(SIZE === 256 ? 0 : SIZE, 1);  // height
dirEntry.writeUInt8(0, 2);                         // palette colors (none)
dirEntry.writeUInt8(0, 3);                         // reserved
dirEntry.writeUInt16LE(1, 4);                      // color planes
dirEntry.writeUInt16LE(32, 6);                     // bits per pixel
dirEntry.writeUInt32LE(pngBuf.length, 8);          // bytes in resource
dirEntry.writeUInt32LE(6 + 16, 12);                // offset to image data

await writeFile(OUT, Buffer.concat([header, dirEntry, pngBuf]));
console.log(`Wrote ${OUT} (${6 + 16 + pngBuf.length} bytes, embedding ${SIZE}x${SIZE} PNG of ${pngBuf.length} bytes).`);
