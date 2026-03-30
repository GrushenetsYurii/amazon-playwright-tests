import { Page } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async dismissInternationalShippingAlert() {
      // Attempts to close the regional popup within 2s, silently ignores if not present
      try {
        await this.page.getByRole('button', { name: /dismiss/i }).first().click({ timeout: 2000 }); // Move it to page object, put into abstract page
      } catch {
      }
  }
  
  async navigate(path: string = '') {
    await this.page.goto(path);
  }
}