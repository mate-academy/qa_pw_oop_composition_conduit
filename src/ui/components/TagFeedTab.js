import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class TagFeedTab extends BaseComponent {
  #feedToggle;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#feedToggle = this.page.locator('.feed-toggle');
  }

  tagFeedLink(tagName) {
    return this.#feedToggle.getByText(tagName);
  }

  async assertTabLinkVisible(tagName) {
    await this.step(
      `Assert '${tagName}' tag feed tab is visible`,
      async () => {
        await expect(this.tagFeedLink(tagName)).toBeVisible();
      },
    );
  }
}
