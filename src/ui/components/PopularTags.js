import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  #popularTagsTitle;
  #tagList;

  constructor(page, userId = 0) {
    super(page, userId);

    this.#popularTagsTitle = this.page.getByText('Popular Tags');
    this.#tagList = this.page.locator('.sidebar').locator('.tag-list');
  }

  #tag(tagName) {
    return this.#tagList.getByText(tagName, { exact: true });
  }

  async clickTag(tagName) {
    await this.step(
      `Click '${tagName}' tag in the 'Popular Tags' section`,
      async () => {
        await this.#tag(tagName).click();
      },
    );
  }

  async assertPopularTagsIsVisible() {
    await this.step(`Assert 'Popular Tags' section is visible`, async () => {
      await expect(this.#popularTagsTitle).toBeVisible();
    });
  }

  async assertTagIsVisible(tagName) {
    await this.step(
      `Assert '${tagName}' tag is visible in the 'Popular Tags' section`,
      async () => {
        await expect(this.#tag(tagName)).toBeVisible();
      },
    );
  }
}
