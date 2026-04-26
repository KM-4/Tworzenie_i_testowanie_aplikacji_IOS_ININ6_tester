import { test, expect } from '@playwright/test';

test('Poprawne wysłanie formularza', async ({ page }) => {

  await page.goto('file://' + __dirname + '/../index.html');

  await page.fill('#email', 'test@test.com');
  await page.fill('#name', 'Jan');
  await page.fill('#quantity', '2');
  await page.selectOption('#product', 'tv');

  await page.click('button');

  await expect(page.locator('#result')).toHaveText('Zamówienie przyjęte!');
});