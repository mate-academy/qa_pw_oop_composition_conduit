import { expect } from '../../common/helpers/pw';
import { BaseComponent } from './BaseComponent';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  articleItem(title) {
    return this.page.locator('.article-preview').filter({
      has: this.page.locator('.preview-link h1').getByText(title, {
        exact: false,
      }),
    });
  }

  articleTitleLink(title) {
    return this.articleItem(title).locator('.preview-link');
  }

  async clickArticle(title) {
    await this.step(`Open article '${title}' from feed`, async () => {
      await this.articleTitleLink(title).click();
    });
  }

  async assertArticleIsVisible(title) {
    await this.step(
      `Assert article '${title}' is visible in feed`,
      async () => {
        await expect(this.articleItem(title)).toBeVisible();
      },
    );
  }

  async assertArticleAuthorIsVisible(title, username) {
    await this.step(
      `Assert article '${title}' author is '${username}'`,
      async () => {
        await expect(
          this.articleItem(title).getByRole('link', {
            name: username,
            exact: true,
          }),
        ).toBeVisible();
      },
    );
  }
}
