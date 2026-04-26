import { test, expect } from '@playwright/test';

test('TC09 - walidacja formularza', async ({ page }) => {

  // otwarcie lokalnego pliku
  await page.goto('file://' + __dirname + '/../index.html');

  // klik bez wypełnienia
  await page.click('button');

  // sprawdzenie błędów
  await expect(page.locator('#emailError')).toHaveText('Niepoprawny email');
  await expect(page.locator('#nameError')).toHaveText('Imię wymagane');
  await expect(page.locator('#quantityError')).toHaveText('Podaj ilość > 0');
  await expect(page.locator('#productError')).toHaveText('Wybierz produkt');

});