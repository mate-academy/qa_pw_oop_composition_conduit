import { BaseComponent } from './BaseComponent';

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.tags = this.page.locator('.sidebar .tag-list a');
  }

  async clickTag(tag) {
    await this.step(`Click '${tag}' tag on 'Popular Tags' page`, async () => {
      await this.tags.getByText(tag, { exact: true }).click();
    });
  }
}
