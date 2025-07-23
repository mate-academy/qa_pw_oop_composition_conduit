import { BaseComponent } from './BaseComponent';
import { expect } from 'allure-playwright';

export class PopularTags extends BaseComponent {
  constructor(page) {
    super(page);
  }

  getTagLocator(tagName) {
    return this.page.locator('.tag-list a', { hasText: tagName }).first();
  }

  async clickTag(tagName) {
    await this.step(`Click '${tagName}' in Popular Tags section`, async () => {
      await this.getTagLocator(tagName).click();
    });
  }

  async assertTagIsVisible(tagName) {
    await this.step(`Assert tag '${tagName} is visible'`, async () => {
      await expect(this.getTagLocator(tagName)).toBeVisible();
    });
  }
}
