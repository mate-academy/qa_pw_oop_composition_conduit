import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class GlobalFeedTab extends BaseComponent {
  #globalFeedLink;
  #previews;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#globalFeedLink = this.page.getByText('Global Feed');
    this.article = 
    (title) => new ArticleFeedItem(this.page, title, this.userId);
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

  _articleCardByTitle(title) {
    const titleLink = this.page.getByRole('link', { name: title });
    return this.#previews.filter({ has: titleLink });
  }

  async assertArticleVisibleByTitle(title) {
    await this.step(`Assert article '${title}' is visible in feed`
      , async () => {
      await expect(this._articleCardByTitle(title)).toBeVisible();
    });
  }



}
