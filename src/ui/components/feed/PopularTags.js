import { expect } from '../../../common/helpers/pw';
import { BaseComponent } from '../BaseComponent';

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page);
    this.popularTag = page.locator('.sidebar .tag-list');
  }

  tagLocator(tagName) {
    return this.popularTag.getByText(tagName, { exact: true });
  }

  async clickTagLink(tagName) {
    await this.step(`Click on '${tagName}' tag`, async () => {
      await this.tagLocator(tagName).click();
    });
  }

  async assertTagIsVisible(tagName) {
    await this.step(`Assert tag '${tagName}' is visible`, async () => {
      await expect(this.tagLocator(tagName)).toHaveText(tagName);
    });
  }
}
