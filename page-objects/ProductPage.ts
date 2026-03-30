import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  readonly addToCartBtn: Locator;
  readonly seeAllOptionsBtn: Locator;
  readonly sidePanelAddToCartBtn: Locator;

  constructor(page: Page) {
    super(page);
    // Locators for different "Add to Cart" UI variations
    this.addToCartBtn = page.locator('#ppd, #gc-buy-box-atc').getByRole('button', { name: 'Add to Cart' }).first();
    this.seeAllOptionsBtn = page.locator('#buybox-see-all-buying-options-announcement');
    this.sidePanelAddToCartBtn = page.locator('#aod-offer-list').getByRole('button', { name: 'Add to Cart' }).first();
  }

  // Standard flow: clicks the main Add to Cart button
  async addToCart() {
    await this.addToCartBtn.click();
  }

  // Fallback flow: opens the side panel and adds to cart from there
  async handleBuyingOptions() {
    await this.seeAllOptionsBtn.click();
    await this.sidePanelAddToCartBtn.click();
  }
  
// Returns the success message locator. Designed to be used with expect().toBeVisible() for auto-waiting
  get successMessage() {
    return this.page.getByText('Added to Cart').first();
  }
}