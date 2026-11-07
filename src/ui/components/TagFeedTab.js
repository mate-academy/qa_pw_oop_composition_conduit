import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './article/ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
  }

  #tab(tagName) {
    return this.page
      .locator('.feed-toggle')
      .getByText(tagName, { exact: true });
  }

  async open(tagName) {
    await this.step(`Open '${tagName}' tag feed tab`, async () => {
      await this.#tab(tagName).click();
    });
  }

  async assertTabLinkIsVisible(tagName) {
    await this.step(`Assert '${tagName}' tag feed tab is visible`, async () => {
      await expect(this.#tab(tagName)).toBeVisible();
    });
  }
}
