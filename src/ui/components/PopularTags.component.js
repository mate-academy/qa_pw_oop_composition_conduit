import { BaseComponent } from './BaseComponent.js';

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.tagLocator = page.locator('.sidebar');
  }

  async clickTag(tagName) {
    const tagElement = this.tagLocator.getByText(tagName);
    await this.step(`Click on tag '${tagName}'`, async () => {
      await tagElement.click();
    });
  }
}
