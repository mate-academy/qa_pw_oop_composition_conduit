import { expect } from '../../common/helpers/pw';
import { BaseComponent } from './BaseComponent';

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);

    this.popularTagsBlock = page.locator('.sidebar');
    this.tags = this.popularTagsBlock.locator('.tag-pill');
  }

  tagLink(tagName) {
    return this.tags.getByText(tagName, { exact: true });
  }

  async getFirstPopularTag() {
    return await this.step('Get first popular tag', async () => {
      await expect(this.tags.first()).toBeVisible();

      const tagName = await this.tags.first().innerText();

      return tagName.trim();
    });
  }

  async clickTag(tagName) {
    await this.step(`Click '${tagName}' popular tag`, async () => {
      await this.tagLink(tagName).click();
    });
  }

  async assertTagIsVisible(tagName) {
    await this.step(`Assert '${tagName}' popular tag is visible`, async () => {
      await expect(this.tagLink(tagName)).toBeVisible();
    });
  }

  async assertPopularTagsVisible() {
    await this.step('Assert Popular Tags block is visible', async () => {
      await expect(this.popularTagsBlock).toBeVisible();
    });
  }
}
