import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  async assertArticleLinkIsVisible(title) {
    await this.step(
      `Assert the article link with title "${title}" is visible`,
      async () => {
        const articleLink = this.page.getByRole('link', {
          name: `Article title: ${title}`,
        });
        await expect(articleLink).toBeVisible();
      },
    );
  }

  async assertArticleLinkIsVisibleAfterReload(title) {
    await this.step(
      `Assert article "${title}" is visible (with reload)`,
      async () => {
        await expect(async () => {
          await this.page.reload();
          await expect(this.articleLink(title)).toBeVisible({ timeout: 3000 });
        }).toPass({ timeout: 20000 });
      },
    );
  }

  articleLink(title) {
    return this.page.getByRole('link', {
      name: `Article title: ${title}`,
    });
  }

  async openArticle(title) {
    await this.step(`Open article "${title}"`, async () => {
      await this.articleLink(title).click();
    });
  }
}
