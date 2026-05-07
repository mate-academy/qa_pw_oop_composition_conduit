import { expect } from 'allure-playwright';
import { BaseViewArticlePage } from './BaseViewArticlePage.js';

export class ExternalViewArticlePage extends BaseViewArticlePage {
  articleId;

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitleHeader = page.getByRole('heading');
  }

    async assertArticleTitleContainText(name) {
      await this.step(`Assert first article have ${name} title`, async () => {
        await expect(this.articleTitleHeader).toHaveText(name);
      });
    }
}