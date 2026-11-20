import { test, expect } from '@playwright/test';

test('affiche le portfolio', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('app-root')).toBeVisible();
});