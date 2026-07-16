import { BaseComponent } from '../BaseComponent';
import { expect } from 'playwright/test';
import { ArticleFeedItem } from './ArticleFeedItem';

export class GlobalFeedTab extends BaseComponent {
  #globalFeedLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#globalFeedLink = this.page.getByText('Global Feed');
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
  }

  async open() {
    await this.step(`Open 'Global Feed' tab`, async () => {
      await this.#globalFeedLink.click();
    });
  }

  async assertTabLinkVisible() {
    await this.step(`Assert 'Global Feed' link is visible`, async () => {
      await expect(this.#globalFeedLink).toBeVisible();
    });
  }

  async assertArticleIsVisible(title) {
    await this.step(`Assert article '${title}' is visible`, async () => {
      await this.articleFeedItem.assertArticleIsVisible(title);
    });
  }
}
