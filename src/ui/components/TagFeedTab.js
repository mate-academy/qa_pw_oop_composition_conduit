import { BaseComponent } from './BaseComponent';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  #previews;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#previews = this.page.locator('.article-preview');
  }

  item(title) {
    return new ArticleFeedItem(this.page, this.#previews, title, this.userId);
  }

  async assertArticleVisibleByTitle(title) {
    await this.item(title).assertVisible();
  }

  async openArticleByTitle(title) {
    await this.item(title).open();
  }
}