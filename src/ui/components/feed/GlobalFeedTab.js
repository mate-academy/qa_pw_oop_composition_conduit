import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw'
import { ArticleListItem } from '../ArticleListItem';

export class GlobalFeedTab extends BaseComponent {
  #globalFeedLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#globalFeedLink = this.page.getByText('Global Feed');
    this.articleListItem = new ArticleListItem(this.page, userId);
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
}
