import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
  }

  tagFeedLink(tagName) {
    return this.page
      .locator('.feed-toggle .nav-link')
      .filter({ hasText: new RegExp(`^\\s*${tagName}\\s*$`) });
  }

  async assertTabIsActive(tagName) {
    await this.step(`Assert '#${tagName}' tab is active`, async () => {
      await expect(this.tagFeedLink(tagName)).toHaveClass(/active/);
    });
  }
}
