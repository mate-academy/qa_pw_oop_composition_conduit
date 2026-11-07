import { BaseArticleContentBlock } from './BaseArticleContentBlock';

export class AuthorsArticleContentBlock extends BaseArticleContentBlock {
  #editArticleLink;
  #deleteArticleButton;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#editArticleLink = this.page.getByRole('link', {
      name: 'Edit Article',
    });
    this.#deleteArticleButton = this.page.getByRole('button', {
      name: 'Delete Article',
    });
  }

  async clickEditArticleLink() {
    await this.step(`Click 'Edit Article' link`, async () => {
      await this.#editArticleLink.click();
    });
  }

  async clickDeleteArticleButton() {
    await this.step(`Click 'Delete Article' button`, async () => {
      await this.#deleteArticleButton.click();
    });
  }
}
