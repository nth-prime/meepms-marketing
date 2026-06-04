import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";

const BASE = process.env.QA_URL || "http://localhost:3001";
const OUT = resolve(".qa/routes");
mkdirSync(OUT, { recursive: true });

const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/systems-review",
  "/servicenow",
  "/servicenow/implementations",
  "/servicenow/support",
  "/transportation-logistics",
  "/transportation-logistics/tmw-suite-consulting",
  "/transportation-logistics/tmw-suite-support",
  "/fractional-fte",
  "/managed-infrastructure",
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch();
const consoleByRoute = {};

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();
  for (const route of ROUTES) {
    const messages = [];
    const onConsole = (msg) => {
      if (msg.type() === "error" || msg.type() === "warning") {
        messages.push({ type: msg.type(), text: msg.text() });
      }
    };
    const onPageError = (err) => messages.push({ type: "pageerror", text: err.message });
    page.on("console", onConsole);
    page.on("pageerror", onPageError);

    await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(250);
    const safe = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "_");
    await page.screenshot({
      path: `${OUT}/${vp.name}-${safe}-fold.png`,
      fullPage: false,
    });
    await page.screenshot({
      path: `${OUT}/${vp.name}-${safe}-full.png`,
      fullPage: true,
    });

    page.off("console", onConsole);
    page.off("pageerror", onPageError);
    consoleByRoute[`${vp.name} ${route}`] = messages;
  }
  await ctx.close();
}

await browser.close();
writeFileSync(`${OUT}/console.json`, JSON.stringify(consoleByRoute, null, 2), "utf8");

const total = Object.values(consoleByRoute).reduce((a, m) => a + m.length, 0);
console.log(`Captured ${ROUTES.length} routes x ${VIEWPORTS.length} viewports x 2 (fold/full) = ${ROUTES.length * VIEWPORTS.length * 2} screenshots; ${total} console messages.`);
