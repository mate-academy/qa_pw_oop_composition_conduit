import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
  }

  async assertTagFeedActive(tagName) {
    await this.step(`Assert Tag Feed for '${tagName}' is active`, async () => {
      await expect(this.page).toHaveURL(new RegExp(`/tag/${tagName}`));
    });
  }
}
