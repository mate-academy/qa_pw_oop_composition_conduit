import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  articleItem(title) {
    return this.page.locator('.article-preview').filter({ hasText: title });
  }

  async assertArticleIsVisible(title) {
    await this.step(`Assert article '${title}' is visible in feed`, async () => {
      await expect(this.articleItem(title)).toBeVisible();
    });
  }

  async clickArticle(title) {
    await this.step(`Click article '${title}' in feed`, async () => {
      await this.articleItem(title).locator('.preview-link').click();
    });
  }
}
