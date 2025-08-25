const { expect, test } = require('@playwright/test');

test('BStackDemo Offers -> login flow with Mumbai location', async ({ browser }) => {
  const context = await browser.newContext({
    permissions: ['geolocation'],
    geolocation: { latitude: 19.0760, longitude: 72.8777 }, // Mumbai
  });

  const page = await context.newPage();
  await page.goto('https://bstackdemo.com/');

  // Offers flow
  await page.locator('a#offers').click();
  await page.waitForTimeout(500);

  await page.locator("#username svg").click();
  await page.locator("#react-select-2-option-0-0").click();
  await page.locator("#password svg").click();
  await page.locator("#react-select-3-option-0-0").click();

  await page.click('#login-btn');
  await page.waitForTimeout(5000);

  // (Optional) Verify location preference
  console.log('Geolocation enforced: Mumbai');
});
