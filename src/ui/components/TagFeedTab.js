import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  #articles;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#articles = this.page.locator('.article-preview');
  }

  async assertTagTabVisible(tagName) {
    await this.step(
      `Assert tag feed tab for "${tagName}" is visible`,
      async () => {
        const tagTab = this.page.getByText(`# ${tagName}`);
        await expect(tagTab).toBeVisible();
      },
    );
  }

  getArticleByTitle(title) {
    return new ArticleFeedItem(
      this.#articles.filter({
        has: this.page.locator(`h1:has-text("${title}")`),
      }),
    );
  }
}
