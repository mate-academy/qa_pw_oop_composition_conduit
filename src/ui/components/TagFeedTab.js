import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
  }

  tabLink(tag) {
    return this.page.locator('.feed-toggle .nav-link').filter({ hasText: tag });
  }

  async assertTabLinkVisible(tag) {
    await this.step(`Assert '#${tag}' tab is visible`, async () => {
      await expect(this.tabLink(tag)).toBeVisible();
    });
  }
}
