import { expect } from '../../common/helpers/pw';
import { BaseComponent } from './BaseComponent';
import { ArticleFeedItem } from './article/ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.feedToggle = this.page.locator('.feed-toggle');
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
  }

  async assertTagNameIsInFeedToggle(tagName) {
    await this.step(
      `Assert tag ${tagName} is visible in feed toggle`,
      async () => {
        await expect(this.feedToggle.getByText(tagName)).toBeVisible();
      },
    );
  }
}
