import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';
import { ArticleListItem } from '../article/ArticleListItem';

export class GlobalFeedTab extends BaseComponent {
  #globalFeedLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#globalFeedLink = this.page.getByText('Global Feed');
    this.articleListItem = new ArticleListItem(page, userId = 0);
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

  async openArticleFromGlobalFeed(title) {
    await this.step('open article from global feed', async () => {
      await this.page.getByRole('heading', { name: title }).click();
    });
  }
}
