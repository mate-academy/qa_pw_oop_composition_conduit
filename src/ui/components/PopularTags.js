import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  #popularTagsSection;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#popularTagsSection = this.page.getByText('Popular Tags');
  }

  tagItem(tagName) {
    return this.page.locator('.sidebar .tag-list').getByText(tagName);
  }

  async clickTag(tagName) {
    await this.step(`Click '${tagName}' tag in Popular Tags`, async () => {
      await this.tagItem(tagName).click();
    });
  }

  async assertSectionIsVisible() {
    await this.step(`Assert 'Popular Tags' section is visible`, async () => {
      await expect(this.#popularTagsSection).toBeVisible();
    });
  }
}
