import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { SearchResultsPage } from '../page-objects/SearchResultsPage';
import { ProductPage } from '../page-objects/ProductPage';

test('should search for WWE 2K26 Digital Code and add to cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const productPage = new ProductPage(page);

  await test.step('Navigate to Amazon.com', async () => {
    await homePage.navigate('/');
    await homePage.handleBotCheck();
  });

  await test.step('Handle International Shipping Alert', async () => {
    // Attempts to close the regional popup within 2s, silently ignores if not present
    try {
      await page.getByRole('button', { name: /dismiss/i }).first().click({ timeout: 2000 });
    } catch {
    }
  });

  await test.step('Search for the product', async () => {
    await homePage.searchFor('WWE 2K26 Digital Code');
  });

  await test.step('Open the first organic search result', async () => {
    await searchResultsPage.openFirstResult();
  });

  await test.step('Add the product to the shopping cart', async () => {
    await productPage.addToCart();
  });

  await test.step('Verify success', async () => {
    await expect(productPage.successMessage).toBeVisible();
  });
});