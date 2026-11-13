import { expect } from '../../common/helpers/pw';
import { BaseComponent } from './BaseComponent';

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.popularTagSection = this.page.locator('.tag-list');
  }

  popularTagLocator(tagName) {
    return this.popularTagSection.getByText(tagName);
  }

  async clickTagByName(tagName) {
    await this.step(
      `Click ${tagName} tag  in popular tag section`,
      async () => {
        await this.popularTagLocator(tagName).click();
      },
    );
  }

  async assertTagIsInThePopularTagsSection(tagName) {
    await this.step(
      `Assert ${tagName} tag is in popular tag section`,
      async () => {
        await expect(this.popularTagLocator(tagName)).toBeVisible();
      },
    );
  }
}
