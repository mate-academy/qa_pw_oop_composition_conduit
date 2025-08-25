import { expect } from 'allure-playwright';
import { BaseComponent } from './BaseComponent';

export class ArticleListItem extends BaseComponent {
  constructor(page) {
    super(page);
  }

  articleByTitle(title) {
    return this.page.locator('h1', { hasText: title });
  }

  async assertArticleIsVisible(title) {
    await this.step(
      `Assert article with title "${title}" is visible`,
      async () => {
        await expect(this.articleByTitle(title)).toBeVisible();
      },
    );
  }
}
