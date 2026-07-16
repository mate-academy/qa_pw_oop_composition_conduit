import { BaseComponent } from '../BaseComponent';
import { expect } from 'playwright/test';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
  }
  async assertTagTabIsVisible(tagName) {
    await this.step(`Assert '${tagName}' feed tab is visible`, async () => {
      await expect(this.page.locator('.feed-toggle')
        .getByText(tagName)).toBeVisible();
    });
  }
}
