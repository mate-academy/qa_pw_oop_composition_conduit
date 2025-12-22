import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class GlobalFeedTab extends BaseComponent {
  #globalFeedLink;
  #articles;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#globalFeedLink = this.page.getByText('Global Feed');
    this.#articles = this.page.locator('.article-preview');
  }

  async open() {
    await this.step(`Open 'Global Feed' tab`, async () => {
      await this.#globalFeedLink.click();
    });
  }

  async assertTabLinkVisible() {
    await this.step(`Assert 'Global Feed' link is visible`, async () => {
      await expect(this.#globalFeedLink).toBeVisible();
    });
  }

  getArticleByTitle(title) {
    return new ArticleFeedItem(
      this.#articles.filter({
        has: this.page.locator(`h1:has-text("${title}")`),
      }),
    );
  }
}
