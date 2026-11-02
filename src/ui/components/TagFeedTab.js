import { expect } from '../../common/helpers/pw';
import { BaseComponent } from './BaseComponent';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);

    this.articleFeedItem = new ArticleFeedItem(page, userId);
    this.tagFeedTab = page.locator('.feed-toggle .nav-link.active');
  }

  async assertTabVisible(tagName) {
    await this.step(`Assert '${tagName}' tag feed is visible`, async () => {
      await expect(this.tagFeedTab).toContainText(tagName);
    });
  }

  async assertArticleIsVisible(title) {
    await this.articleFeedItem.assertArticleIsVisible(title);
  }

  async openArticle(title) {
    await this.articleFeedItem.clickArticle(title);
  }
}
