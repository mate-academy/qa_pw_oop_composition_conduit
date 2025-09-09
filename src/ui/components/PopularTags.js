import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.tagList = page.locator('.tag-list');
  }

  popularTagListItem(tagName) {
    return this.page.locator('.tag-list a').filter({ hasText: tagName });
  }

  async clickTag(tagName) {
    await this.step(`Click on tag "${tagName}"`, async () => {
      await this.popularTagListItem(tagName).click();
    });
  }
}
