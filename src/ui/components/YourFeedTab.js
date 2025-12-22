import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class YourFeedTab extends BaseComponent {
  #yourFeedLink;
  #articles;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#yourFeedLink = this.page.getByText('Your Feed');
    this.#articles = this.page.locator('.article-preview');
  }

  async assertTabLinkVisible() {
    await this.step(`Assert 'Your Feed' link is visible`, async () => {
      await expect(this.#yourFeedLink).toBeVisible();
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
