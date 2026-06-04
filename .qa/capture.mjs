import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { resolve } from "path";

const URL = process.env.QA_URL || "http://localhost:3000/";
const OUT = resolve(".qa/screens");
mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "desktop-1024", width: 1024, height: 768 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-414", width: 414, height: 896 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-360", width: 360, height: 740 },
];

const SECTIONS = [
  "overview",
  "problem",
  "services",
  "servicenow",
  "workflow",
  "process",
  "why",
  "contact",
];

const browser = await chromium.launch();
const consoleByVp = {};

for (const vp of VIEWPORTS) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  const messages = [];
  page.on("console", (msg) => {
    if (msg.type() === "error" || msg.type() === "warning") {
      messages.push({ type: msg.type(), text: msg.text() });
    }
  });
  page.on("pageerror", (err) => {
    messages.push({ type: "pageerror", text: err.message });
  });

  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(400);

  // Full-page screenshot
  await page.screenshot({
    path: `${OUT}/${vp.name}-full.png`,
    fullPage: true,
  });

  // First-viewport screenshot
  await page.screenshot({
    path: `${OUT}/${vp.name}-fold.png`,
    fullPage: false,
  });

  // Per-section screenshots (clipped to each section)
  for (const id of SECTIONS) {
    const handle = await page.$(`#${id}`);
    if (!handle) continue;
    try {
      await handle.scrollIntoViewIfNeeded();
      await page.waitForTimeout(150);
      const box = await handle.boundingBox();
      if (!box) continue;
      await page.screenshot({
        path: `${OUT}/${vp.name}-section-${id}.png`,
        clip: {
          x: 0,
          y: box.y,
          width: vp.width,
          height: Math.min(box.height, 2400),
        },
        fullPage: true,
      });
    } catch (e) {
      messages.push({ type: "screenshot-error", text: `${id}: ${e.message}` });
    }
  }

  consoleByVp[vp.name] = messages;
  await context.close();
}

await browser.close();

// Write console log summary
import { writeFileSync } from "fs";
writeFileSync(
  `${OUT}/console.json`,
  JSON.stringify(consoleByVp, null, 2),
  "utf8"
);

const totalErrors = Object.values(consoleByVp).reduce(
  (a, m) => a + m.length,
  0
);
console.log(
  `Captured ${VIEWPORTS.length} viewports x ${SECTIONS.length + 2} screenshots; ${totalErrors} console messages.`
);
