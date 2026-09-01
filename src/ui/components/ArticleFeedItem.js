import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  articleTitleLink(title) {
    return this.page.getByRole('link', { name: title });
  }

  async openArticle(title) {
    await this.step(`Open article "${title}"`, async () => {
      await this.articleTitleLink(title).click();
    });
  }

  async waitForArticleInFeed(title) {
    await this.step(`Wait for article "${title}" in the feed`, async () => {
      await expect(async () => {
        await this.page.reload();
        await expect(this.articleTitleLink(title)).toBeVisible({
          timeout: 2000,
        });
      }).toPass({ timeout: 45000, intervals: [2000, 3000, 5000] });
    });
  }

  async assertArticleIsVisible(title) {
    await this.step(
      `Assert article "${title}" is visible in the feed`,
      async () => {
        await expect(this.articleTitleLink(title)).toBeVisible();
      },
    );
  }
}
