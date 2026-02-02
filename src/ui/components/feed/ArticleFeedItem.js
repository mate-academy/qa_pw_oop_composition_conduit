import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw.js';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page);
    this.articleTitle = page.locator('.preview-link h1');
    this.articleAuthor = page.locator('a.author');
    this.articleTag = page.locator('.article-preview .tag-list');
  }

  articleTitleLocator(articleName) {
    return this.articleTitle.filter({ hasText: articleName });
  }

  async openArticlePage(articleName) {
    await this.step(
      `Open Article page with title '${articleName}'`,
      async () => {
        await this.articleTitleLocator(articleName).click();
      },
    );
  }

  async assertArticleTitleIsVisible(articleName) {
    await this.step(`Assert article has correct title`, async () => {
      await expect(this.articleTitleLocator(articleName)).toBeVisible();
    });
  }

  articleAuthorLocator(userName) {
    return this.articleAuthor.filter({ hasText: userName });
  }

  async assertArticleAuthorIsVisible(userName) {
    await this.step(`Assert article has correct author`, async () => {
      await expect(this.articleAuthorLocator(userName)).toBeVisible();
    });
  }

  articleTagLocator(tagName) {
    return this.articleTag.getByText(tagName, { exact: true }).first();
  }

  async assertArticleTagIsVisible(tagName) {
    await this.step(`Assert article has correct tag`, async () => {
      await expect(this.articleTagLocator(tagName)).toBeVisible();
    });
  }
}
