import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class YourFeedTab extends BaseComponent {
  #yourFeedLink;
  articleFeedItem;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#yourFeedLink = this.page.getByText('Your Feed');
    this.articleFeedItem = new ArticleFeedItem(page);
  }

  async assertTabLinkVisible() {
    await this.step(`Assert 'Your Feed' link is visible`, async () => {
      await expect(this.#yourFeedLink).toBeVisible();
    });
  }
}
