import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class GlobalFeedTab extends BaseComponent {
  #globalFeedLink;
  #articleFeedItem;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#globalFeedLink = this.page.getByText('Global Feed');
    this.#articleFeedItem = new ArticleFeedItem(page, userId);
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
  async assertArticleTitleIsVisible(title) {
    await this.#articleFeedItem.assertArticleTitleIsVisible(title);
  }

  async assertArticleDescriptionIsVisible(title, description) {
    await this.#articleFeedItem
      .assertArticleDescriptionIsVisible(title, description);
  }

  async assertArticleAuthorNameIsVisible(title, authorName) {
    await this.#articleFeedItem
      .assertArticleAuthorNameIsVisible(title, authorName);
  }

  async clickArticleTitle(title) {
    await this.#articleFeedItem.clickArticleTitle(title);
  }
}
