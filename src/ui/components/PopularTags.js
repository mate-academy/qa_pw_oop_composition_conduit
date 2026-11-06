import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  #popularTagsLink;
  #tagLinks;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#popularTagsLink = this.page.getByText('Popular Tags');
    this.#tagLinks = this.page.locator('.sidebar .tag-list a.tag-pill');
  }

  async assertPopularTagsVisible() {
    await this.step(`Assert 'Popular Tags' is visible`, async () => {
      await expect(this.#popularTagsLink).toBeVisible();
    });
  }

  async clickTag(tagName) {
    await this.step(`Select the '${tagName}' tag`, async () => {
      const exactTagName = new RegExp(
        `^${tagName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`,
      );
      await this.#tagLinks.filter({ hasText: exactTagName }).click();
    });
  }

  async firstTagName() {
    return await this.step(`Get the first Popular Tags entry`, async () => {
      await expect(this.#tagLinks.first()).toBeVisible();
      return (await this.#tagLinks.first().innerText()).trim();
    });
  }
}
