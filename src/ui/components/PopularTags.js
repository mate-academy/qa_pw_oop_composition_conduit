import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  #container;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#container = this.page.locator('.sidebar');
  }

  tagLink(tagName) {
    return this.#container
      .locator('.tag-pill')
      .filter({ hasText: new RegExp(`^${tagName}$`) });
  }

  async openTag(tagName) {
    await this.step(`Open tag "${tagName}" from Popular tags`, async () => {
      await this.tagLink(tagName).click();
    });
  }

  async assertTagIsVisible(tagName) {
    await this.step(`Assert tag "${tagName}" is in Popular tags`, async () => {
      await expect(this.tagLink(tagName)).toBeVisible();
    });
  }
}
