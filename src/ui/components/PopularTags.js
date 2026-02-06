import { BaseComponent } from './BaseComponent';
import { expect } from '@playwright/test';

export class PopularTags extends BaseComponent {
  #sidebarLocator;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#sidebarLocator = this.page.locator('.sidebar');
  }

  tagLink(tagName) {
    return this.#sidebarLocator.getByText(tagName, { exact: true });
  }

  async clickTag(tagName) {
    await this.step(`Click tag '${tagName}' in Popular Tags`, async () => {
      await this.tagLink(tagName).click({ timeout: 15000 });
    });
  }

  async assertTagIsVisible(tagName) {
    await this.step(
      `Assert tag '${tagName}' is visible in Popular Tags`,
      async () => {
        await expect(this.tagLink(tagName)).toBeVisible();
      },
    );
  }
}
