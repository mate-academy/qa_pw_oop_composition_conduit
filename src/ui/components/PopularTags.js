import { BaseComponent } from "./BaseComponent";

export class PopularTags extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.tagList = page.locator('.tag-list');
    this.tagListItem = this.tagList.locator('.tag-pill')
  }

  async clickTag(tagName) {
    await this.step(`Click on tag '${tagName}'`, async () => {
      await this.tagListItem.filter({hasText: tagName}).click();
    });
  } 
}
