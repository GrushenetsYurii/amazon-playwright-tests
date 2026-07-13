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
    // Amazon may render an interstitial before the homepage search UI.
    await Promise.race([
      this.searchInput.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {}),
      this.continueShoppingButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {}),
    ]);

    if (await this.continueShoppingButton.isVisible()) {
      await this.continueShoppingButton.click();
    }

    await this.searchInput.waitFor({ state: 'visible', timeout: 15000 });
  }

  async searchFor(text: string) {
    await this.handleBotCheck();
    await this.searchInput.fill(text);
    await this.searchButton.click();
  }
}