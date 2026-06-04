import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { resolve } from "path";

const URL = process.env.QA_URL || "http://localhost:3000/";
const OUT = resolve(".qa/zoom");
mkdirSync(OUT, { recursive: true });

const TARGETS = [
  { name: "header", viewport: { width: 1440, height: 200 }, selector: "header" },
  { name: "hero-desktop", viewport: { width: 1440, height: 900 }, selector: "#overview" },
  { name: "hero-mobile", viewport: { width: 390, height: 1100 }, selector: "#overview" },
  { name: "services-desktop", viewport: { width: 1440, height: 1700 }, selector: "#services" },
  { name: "services-tablet", viewport: { width: 768, height: 2400 }, selector: "#services" },
  { name: "services-mobile", viewport: { width: 390, height: 3000 }, selector: "#services" },
  { name: "servicenow-desktop", viewport: { width: 1440, height: 1100 }, selector: "#servicenow" },
  { name: "servicenow-mobile", viewport: { width: 390, height: 1500 }, selector: "#servicenow" },
  { name: "workflow-desktop", viewport: { width: 1440, height: 900 }, selector: "#workflow" },
  { name: "workflow-tablet", viewport: { width: 768, height: 900 }, selector: "#workflow" },
  { name: "workflow-mobile", viewport: { width: 390, height: 900 }, selector: "#workflow" },
  { name: "process-desktop", viewport: { width: 1440, height: 700 }, selector: "#process" },
  { name: "process-mobile", viewport: { width: 390, height: 1100 }, selector: "#process" },
  { name: "why-desktop", viewport: { width: 1440, height: 900 }, selector: "#why" },
  { name: "why-tablet", viewport: { width: 768, height: 1200 }, selector: "#why" },
  { name: "why-mobile", viewport: { width: 390, height: 2200 }, selector: "#why" },
  { name: "contact-desktop", viewport: { width: 1440, height: 600 }, selector: "#contact" },
  { name: "footer-desktop", viewport: { width: 1440, height: 400 }, selector: "footer" },
  { name: "footer-mobile", viewport: { width: 390, height: 600 }, selector: "footer" },
];

const browser = await chromium.launch();

for (const t of TARGETS) {
  const ctx = await browser.newContext({ viewport: t.viewport });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(300);
  const loc = page.locator(t.selector).first();
  await loc.scrollIntoViewIfNeeded();
  await page.waitForTimeout(150);
  try {
    await loc.screenshot({ path: `${OUT}/${t.name}.png` });
  } catch (e) {
    console.error(`${t.name}: ${e.message}`);
  }
  await ctx.close();
}

await browser.close();
console.log(`Captured ${TARGETS.length} element screenshots.`);
