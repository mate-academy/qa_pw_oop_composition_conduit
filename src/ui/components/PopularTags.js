import { BaseComponent } from './BaseComponent';

export class PopularTags extends BaseComponent {
  #tagList;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#tagList = this.page.locator('.sidebar .tag-list');
  }

  async clickTag(tagName) {
    await this.step(`Click on tag ${tagName}`, async () => {
      await this.#tagList.getByText(tagName, { exact: true }).click();
    });
  }
}
