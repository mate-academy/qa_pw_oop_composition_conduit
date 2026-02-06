import { BaseComponent } from './BaseComponent';
import { expect } from '@playwright/test';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  articleLinkByTitle(title) {
    return this.page
      .getByRole('link')
      .filter({
        has: this.page.getByRole('heading').filter({ hasText: title }),
      })
      .first();
  }

  async assertArticleVisibleInFeed(title) {
    await this.step(
      `Assert article with title '${title}' is visible in feed`,
      async () => {
        await expect(this.articleLinkByTitle(title)).toBeVisible({
          timeout: 30000,
        });
      },
    );
  }

  async openArticle(title) {
    await this.step(
      `Open article with title '${title}' from feed`,
      async () => {
        await this.articleLinkByTitle(title).click({ timeout: 30000 });
      },
    );
  }
}
