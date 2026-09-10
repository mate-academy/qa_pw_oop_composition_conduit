import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
  }

  tabLink(tagName) {
    return this.page
      .locator('.feed-toggle')
      .getByText(tagName, { exact: true });
  }

  async open(tagName) {
    await this.step(`Open '# ${tagName}' tab`, async () => {
      await this.tabLink(tagName).click();
    });
  }

  async assertTabLinkVisible(tagName) {
    await this.step(`Assert '# ${tagName}' tab link is visible`, async () => {
      await expect(this.tabLink(tagName)).toBeVisible();
    });
  }
}
