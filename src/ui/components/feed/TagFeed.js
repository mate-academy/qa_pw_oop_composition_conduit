import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeed extends BaseComponent {
  articleFeedItem;

  constructor(page, userId = 0) {
    super(page, userId);
    this.articleFeedItem = new ArticleFeedItem(page);
  }

  feedTagLocator(tagName) {
    return this.page.locator('.link.nav-link').filter({
      has: this.page.locator('.ion-pound'),
      hasText: tagName,
    });
  }

  async assertTagFeedIsVisible(tagName) {
    await this.step(`Assert '${tagName}' link is visible`, async () => {
      await expect(this.feedTagLocator(tagName)).toHaveText(tagName);
    });
  }
}
