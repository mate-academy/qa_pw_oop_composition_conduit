import { BaseComponent } from './BaseComponent';
// import { expect } from '../../common/helpers/pw';

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  tagLink(tag) {
    return this.page.locator('.tag-list').getByText(tag, { exact: true });
  }

  async clickTag(tag) {
    await this.step(`Click '${tag}' tag in Popular Tags`, async () => {
      await this.tagLink(tag).click();
    });
  }
}
