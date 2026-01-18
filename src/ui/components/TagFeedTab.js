import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
  }

  tagFeedLink(tagName) {
    return this.page.locator('.feed-toggle').getByText(tagName);
  }

  async assertTabLinkVisible(tagName) {
    await this.step(`Assert '${tagName}' tag feed link is visible`, async () => {
      await expect(this.tagFeedLink(tagName)).toBeVisible();
    });
  }
}
