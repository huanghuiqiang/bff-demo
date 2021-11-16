const playwright = require('playwright');

(async () => {
  for (const browserType of [playwright.chromium]) {
    const browser = await browserType.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:3000/books/list');
    await page.screenshot({ path: `report/example-${browserType.name()}.png` });
    await browser.close();
  }
})();
