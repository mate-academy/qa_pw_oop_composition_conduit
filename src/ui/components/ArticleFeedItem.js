import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  articlePreviewByTitle(title) {
    return this.page.locator('.article-preview').filter({ hasText: title });
  }

  articleTitleLink(title) {
    return this.articlePreviewByTitle(title).locator('h1');
  }

  articleAuthorLink(title, username) {
    return this.articlePreviewByTitle(title)
      .locator('.author')
      .filter({ hasText: username });
  }

  articleDescription(title) {
    return this.articlePreviewByTitle(title).locator('p');
  }

  async clickArticleTitle(title) {
    await this.step(`Click on article title '${title}'`, async () => {
      await this.articleTitleLink(title).click();
    });
  }

  async assertArticleVisible(title) {
    await this.step(`Assert article '${title}' is visible in feed`, async () => {
      await expect(this.articlePreviewByTitle(title)).toBeVisible();
    });
  }

  async assertArticleAuthor(title, username) {
    await this.step(
      `Assert article '${title}' has author '${username}'`,
      async () => {
        await expect(this.articleAuthorLink(title, username)).toBeVisible();
      },
    );
  }

  async assertArticleDescription(title, description) {
    await this.step(
      `Assert article '${title}' has correct description`,
      async () => {
        await expect(this.articleDescription(title)).toContainText(
          description,
        );
      },
    );
  }
}
