import { BaseComponent } from "./BaseComponent";
import { expect } from '../../common/helpers/pw';

export class ArticleListItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articlePreview = page.locator('.article-preview');
  }

  async clickArticlePreview(articleTitle) {
    await this.step(`Click article with title '${articleTitle}'`, async () => {
      const article = this.articlePreview.filter({hasText: articleTitle});
      await article.click();
    });
  }

  async assertArticleIsVisible(articleTitle) {
    await this.step(`Assert article with title '${articleTitle}' is visible`, async () => {
      await expect(this.articlePreview.filter({hasText: articleTitle})).toBeVisible();
    });
  }
}