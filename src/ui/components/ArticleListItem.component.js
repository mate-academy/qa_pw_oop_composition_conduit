import { BaseComponent } from './BaseComponent.js';
import { expect } from '../../common/helpers/pw.js';

export class ArticleListItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  async assertArticleTitleIsVisible(title) {
    await this.step(`Assert article title '${title}' is visible`, async () => {
      const articleTitle = this.page.locator('h1').filter({
        hasText: title,
        visible: true,
      });
      await expect(articleTitle).toContainText(title);
    });
  }

  async clickOnArticleTitle(title) {
    await this.step(`Click on article title '${title}'`, async () => {
      const articleTitle = this.page.locator('h1').filter({
        hasText: title,
        visible: true,
      });
      await articleTitle.click();
    });
  }
}
