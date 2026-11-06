import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  firstArticleHeading() {
    return this.page
      .getByRole('heading')
      .filter({ hasText: /^Article title:/i })
      .first();
  }

  articleHeading(articleTitle) {
    return this.page.getByRole('heading').filter({ hasText: articleTitle });
  }

  articleLink(articleTitle) {
    return this.articleHeading(articleTitle).locator('xpath=ancestor::a[1]');
  }

  async firstArticleTitle() {
    return await this.step(
      `Read the first article title in the feed`,
      async () => {
        const heading = this.firstArticleHeading();
        await expect(heading).toBeVisible();
        return (await heading.innerText())
          .replace(/^Article title:\s*/i, '')
          .trim();
      },
    );
  }

  async assertArticleVisible(articleTitle) {
    await this.step(
      `Assert article '${articleTitle}' is visible in the feed`,
      async () => {
        await expect(this.articleHeading(articleTitle)).toBeVisible();
      },
    );
  }

  async assertFirstArticleVisible() {
    await this.step(
      `Assert the first article is visible in the feed`,
      async () => {
        await expect(this.firstArticleHeading()).toBeVisible();
      },
    );
  }

  async openArticle(articleTitle) {
    await this.step(
      `Open article '${articleTitle}' from the feed`,
      async () => {
        await this.articleLink(articleTitle).click();
      },
    );
  }

  async openFirstArticle() {
    const articleTitle = await this.firstArticleTitle();
    await this.openArticle(articleTitle);
  }
}
