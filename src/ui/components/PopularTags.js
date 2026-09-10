import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  tagLocator(tagName) {
    return this.page.locator('.sidebar').getByText(tagName, { exact: true });
  }

  async clickTag(tagName) {
    await this.step(`Click '${tagName}' tag in Popular Tags`, async () => {
      await this.tagLocator(tagName).click();
    });
  }

  async assertTagVisible(tagName) {
    await this.step(
      `Assert '${tagName}' tag is visible in Popular Tags`,
      async () => {
        await expect(this.tagLocator(tagName)).toBeVisible();
      },
    );
  }
}
