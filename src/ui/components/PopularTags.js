import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  #popularTagsSidebar;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#popularTagsSidebar = this.page.getByText('Popular Tags');
  }

  async assertSidebarVisible() {
    await this.step(`Assert 'Popular Tags' sidebar is visible`, async () => {
      await expect(this.#popularTagsSidebar).toBeVisible();
    });
  }

  tagName(tagName) {
    return this.page.locator('.tag-list a', { hasText: tagName });
  }

  async assertTagIsVisible(tagName) {
    await this.step(`Assert tag ${tagName} is visible`, async () => {
      await expect(this.tagName(tagName)).toBeVisible();
    });
  }

  async assertTagClickable(tagName) {
    await this.step(`Assert tag ${tagName} is clickable`, async () => {
      await expect(this.tagName(tagName)).toBeEnabled();
    });
  }

  async clickTag(tagName) {
    await this.step(`Click tag ${tagName}`, async () => {
      await this.tagName(tagName).click();
    });
  }
}
