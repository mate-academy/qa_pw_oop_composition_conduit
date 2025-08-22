import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.tags = page.locator('.tag-list a');
  }

  async clickTag(tagName) {
    await this.step(`Click on the tag: ${tagName}'`, async () => {
      await this.tags.filter({ hasText: tagName }).first().click();
    });
  }

  async assertAllTagsAreVisibleInPopular(tagNames = []) {
    await this.step(`All tags are visible in Tags section`, async () => {
      for (const tagName of tagNames) {
        const tag = this.tags.filter({ hasText: tagName }).first();
        await expect(tag, `Tag "${tagName}" is visible`).toBeVisible();
      }
    });
  }
}
