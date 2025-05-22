import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';
import { ArticleListItem } from '../ArticleListItem';

export class YourFeedTab extends BaseComponent {
  #yourFeedLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#yourFeedLink = this.page.getByText('Your Feed');
    this.articleListItem = new ArticleListItem(this.page, userId);
  }

  async assertTabLinkVisible() {
    await this.step(`Assert 'Your Feed' link is visible`, async () => {
      await expect(this.#yourFeedLink).toBeVisible();
    });
  }
}
