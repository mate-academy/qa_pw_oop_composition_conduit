import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  #popularTagsSection;
  #popularTagsTitle;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#popularTagsSection = this.page.locator('.sidebar');
    this.#popularTagsTitle = this.page.getByText('Popular Tags');
  }

  tagLink(tagName) {
    return this.page.locator('.tag-list .tag-pill').filter({ hasText: tagName });
  }

  async clickTag(tagName) {
    await this.step(`Click on tag '${tagName}' in Popular Tags`, async () => {
      await this.tagLink(tagName).click();
    });
  }

  async assertPopularTagsVisible() {
    await this.step(`Assert 'Popular Tags' section is visible`, async () => {
      await expect(this.#popularTagsTitle).toBeVisible();
    });
  }

  async assertTagVisible(tagName) {
    await this.step(`Assert tag '${tagName}' is visible`, async () => {
      await expect(this.tagLink(tagName)).toBeVisible();
    });
  }
}
