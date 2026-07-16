import { BaseComponent } from '../BaseComponent';

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  tagItem(tagName) {
    return this.page.locator('.sidebar .tag-pill', { hasText: tagName });
  }

  async clickTag(tagName) {
    await this.step(`Click on the ${tagName} tag`, async () => {
      await this.tagItem(tagName).click();
    });
  }
}
