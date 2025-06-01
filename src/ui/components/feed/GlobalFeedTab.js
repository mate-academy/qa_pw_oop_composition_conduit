import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class GlobalFeedTab extends BaseComponent {
  #globalFeedLink;
  articleFeedItem;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#globalFeedLink = this.page.locator('.nav-item', {
      hasText: 'Global Feed',
    });
    this.articleFeedItem = new ArticleFeedItem(page);
  }

  async clickGlobalFeedTab() {
    await this.step(`Open 'Global Feed' tab`, async () => {
      await this.#globalFeedLink.click();
    });
  }

  async assertTabLinkVisible() {
    await this.step(`Assert 'Global Feed' link is visible`, async () => {
      await expect(this.#globalFeedLink).toBeVisible();
    });
  }
}
