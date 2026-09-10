import { BaseArticleContentBlock } from './BaseArticleContentBlock';
import { expect } from '../../../common/helpers/pw';

export class AuthorsArticleContentBlock extends BaseArticleContentBlock {
  constructor(page, userId = 0) {
    super(page, userId);
  }

  editArticleLink() {
    return this.page.getByRole('link', { name: 'Edit Article' }).first();
  }

  deleteArticleButton() {
    return this.page.getByRole('button', { name: 'Delete Article' }).first();
  }

  async clickEditArticle() {
    await this.step(`Click 'Edit Article' link`, async () => {
      await this.editArticleLink().click();
    });
  }

  async clickDeleteArticle() {
    await this.step(`Click 'Delete Article' button`, async () => {
      await this.deleteArticleButton().click();
    });
  }

  async assertEditArticleLinkVisible() {
    await this.step(`Assert 'Edit Article' link is visible`, async () => {
      await expect(this.editArticleLink()).toBeVisible();
    });
  }
}
