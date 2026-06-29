import { test, expect } from '@playwright/test';

test('shows the dashboard home', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      name: 'One polished surface for every shared component.',
    }),
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'Open board' }),
  ).toBeVisible();
  await expect(page.getByText('Workspace pulse')).toBeVisible();
});
