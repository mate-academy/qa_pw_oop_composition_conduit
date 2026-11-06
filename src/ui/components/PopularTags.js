import { BaseComponent } from './BaseComponent';
import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  #popularTagsLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#popularTagsLink = this.page.getByText('Popular Tags');
  }

  async assertPopularTagsVisible() {
    await this.step(`Assert 'Popular Tags' is visible`, async () => {
      await expect(this.#popularTagsLink).toBeVisible();
    });
  }
}
