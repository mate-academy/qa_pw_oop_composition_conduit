import { BaseComponent } from './BaseComponent';
import { ArticleFeedItem } from './ArticleFeedItem';
import { expect } from '../../common/helpers/pw';

export class TagFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
    this.tabsRow = page.locator('.feed-toggle');
  }

  async assertTagTabIsSelected(tagName) {
    await this.step(`The '${tagName}' tab is active`, async () => {
      const tagTab = this.tabsRow.locator('a', { hasText: tagName });
      await expect(tagTab).toBeVisible();
      await expect(tagTab).toHaveClass(/active/);
    });
  }
}
