import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('#twotabsearchtextbox');
    this.searchButton = page.locator('#nav-search-submit-button');
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue shopping' });
  }

  async handleBotCheck() {
    if (await this.continueShoppingButton.isVisible()) {
      await this.continueShoppingButton.click();
    }
  }

  async searchFor(text: string) {
    await this.searchInput.fill(text);
    await this.searchButton.click();
  }
}