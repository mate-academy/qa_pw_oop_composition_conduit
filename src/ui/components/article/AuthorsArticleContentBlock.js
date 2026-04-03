import { BaseArticleContentBlock } from './BaseArticleContentBlock';

export class AuthorsArticleContentBlock extends BaseArticleContentBlock {
  #editArticleButton;
  #deleteArticleButton;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#editArticleButton = this.page.getByRole('link', {
      name: 'Edit Article',
    });
    this.#deleteArticleButton = this.page.getByRole('button', {
      name: 'Delete Article',
    });
  }

  async clickEditArticleButton() {
    await this.step(`Click 'Edit Article' button`, async () => {
      await this.#editArticleButton.click();
    });
  }

  async clickDeleteArticleButton() {
    await this.step(`Click 'Delete Article' button`, async () => {
      await this.#deleteArticleButton.click();
    });
  }
}
