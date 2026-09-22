import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';
import { escapeRegExp } from '../../../common/helpers/stringHelpers';
import { ArticleFeedItem } from './ArticleFeedItem';

export class TagFeedTab extends BaseComponent {
  #feedTabs;

  constructor(page, userId = 0) {
    super(page, userId);

    this.#feedTabs = this.page.locator('.feed-toggle').locator('a.nav-link');
    this.articleFeedItem = new ArticleFeedItem(this.page, userId);
  }

  #tagFeedLink(tag) {
    return this.#feedTabs.filter({
      hasText: new RegExp(`^\\s*${escapeRegExp(tag)}\\s*$`),
    });
  }

  async assertTabLinkVisible(tag) {
    await this.step(`Assert '${tag}' tag feed link is visible`, async () => {
      await expect(this.#tagFeedLink(tag)).toBeVisible();
    });
  }

  async assertTabIsActive(tag) {
    await this.step(`Assert '${tag}' tag feed tab is active`, async () => {
      await expect(this.#tagFeedLink(tag)).toHaveClass(/active/);
    });
  }
}
