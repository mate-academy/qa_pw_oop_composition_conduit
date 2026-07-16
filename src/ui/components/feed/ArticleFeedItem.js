import { BaseComponent } from '../BaseComponent';
import { expect } from 'playwright/test';

export class ArticleFeedItem extends BaseComponent {
  #articlePreview;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#articlePreview = this.page.locator('.article-preview');
  }

  articleByTitle(title) {
    return this.#articlePreview.filter({ hasText: title });
  }

  async assertArticleIsVisible(title) {
    await this.step(`Assert article '${title}' 
    is visible in feed`, async () => {
      await expect(this.articleByTitle(title)).toBeVisible();
    });
  }

  async clickArticle(title) {
    await this.step(`Click article '${title}' in feed`, async () => {
      await this.articleByTitle(title).locator('a.preview-link').click();
    });
  }
}
