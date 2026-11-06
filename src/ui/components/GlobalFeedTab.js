import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class GlobalFeedTab extends BaseComponent {
  #globalFeedLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#globalFeedLink = this.page.getByText('Global Feed');
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
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

  async assertArticleVisible(articleTitle) {
    await this.articleFeedItem.assertArticleVisible(articleTitle);
  }

  async assertFirstArticleVisible() {
    await this.articleFeedItem.assertFirstArticleVisible();
  }

  async openArticle(articleTitle) {
    await this.articleFeedItem.openArticle(articleTitle);
  }

  async openFirstArticle() {
    await this.articleFeedItem.openFirstArticle();
  }
}
