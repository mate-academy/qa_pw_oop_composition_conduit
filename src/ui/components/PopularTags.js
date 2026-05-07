import { expect } from '../../common/helpers/pw';
import { BaseComponent } from './BaseComponent';

export class PopularTags extends BaseComponent {
  #tagList;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#tagList = page.locator('.tag-list');
  }

  ownTag(tag) {
    return this.#tagList.locator('a', { hasText: tag }).first();
  }

  async assertOwnTagIsVisible(tag) {
    await this.step(`Assert tag ${tag} on popular tags`, async () => {
      await expect(this.#tagList).toContainText(tag);
    });
  }

  async clickTagOnPopularTags(tag) {
    await this.step(`Click tag ${tag} on popular tags`, async () => {
      await this.ownTag(tag).click();
    });
  }
}