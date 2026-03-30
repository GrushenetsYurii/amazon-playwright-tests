import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {
  readonly resultItems: Locator;

  constructor(page: Page) {
    super(page);
    this.resultItems = page.locator('[data-component-type="s-search-result"]');
  }

  // Filters out ads and opens the first organic product
  async openFirstResult() {
    const organicResults = this.resultItems.filter({ hasNotText: 'Sponsored' });
    // force: true ignores overlapping elements like badges
    await organicResults.first().getByRole('heading').click({ force: true });
  }
}