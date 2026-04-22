import { BaseArticleContentBlock } from "./BaseArticleContentBlock";
import { expect } from '../../common/helpers/pw';

export class AuthorsArticleContentBlock extends BaseArticleContentBlock {
  #editArticleButton;
  #deleteArticleButton;

  constructor(page, userId) {
    super(page, userId);

    this.#editArticleButton = this.page.getByRole('link', {
      name: 'Edit Article',
    });
    this.#deleteArticleButton = this.page.getByRole('button', {
      name: 'Delete Article',
    });
  }

  async assertArticleAuthorNameIsVisible(username) {
    await this.step(
      `Assert the article has correct author username`,
      async () => {
        await expect(this.authorLinkInArticleHeader(username)).toBeVisible();
      },
    );
  }
}