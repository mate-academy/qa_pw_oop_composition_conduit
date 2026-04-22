import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {

  constructor(page, userId = 0) {
    super(page, userId);
  }

  #tagName(tagName) {
    return this.page
      .locator("div.sidebar div.tag-list a")
      .filter({ hasText: tagName });
  }

  async clickTag(name) {
    await this.step(`Open tag page`, async () => {
      await this.#tagName(name).click();
    });
  }

  async assertTagIsVisible(tag) {
    await this.step(`Assert 'Tag' link is visible`, async () => {
      await expect(this.#tagName(tag)).toBeVisible();
    });
  }

  async assertTagIsHidden(tag) {
    await this.step(`Assert 'Tag' link is hidden`, async () => {
      await expect(this.#tagName(tag)).toBeHidden();
    });
  }
}