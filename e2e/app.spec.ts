import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://yuh0shin0.github.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/機能確認/);
});
