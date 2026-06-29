import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toContainText('Shared UI is ready');
  await expect(page.getByRole('button', { name: 'Shared Button' })).toBeVisible();
});
