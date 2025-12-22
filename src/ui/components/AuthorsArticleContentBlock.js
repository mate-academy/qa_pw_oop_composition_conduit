import { BaseArticleContentBlock } from './BaseArticleContentBlock';
import { expect } from '../../common/helpers/pw';

export class AuthorsArticleContentBlock extends BaseArticleContentBlock {
  constructor(page) {
    super(page);
    this.editButton = page.getByText('Edit Article');
    this.deleteButton = page.getByText('Delete Article');
  }

  async clickEdit() {
    await this.editButton.click();
  }

  async clickDelete() {
    await this.deleteButton.click();
  }

  async assertEditVisible() {
    await expect(this.editButton).toBeVisible();
  }

  async assertDeleteVisible() {
    await expect(this.deleteButton).toBeVisible();
  }
}
