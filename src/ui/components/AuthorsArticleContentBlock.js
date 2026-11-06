import { expect } from '../../common/helpers/pw';
import { BaseArticleContentBlock } from './BaseArticleContentBlock';

export class AuthorArticleContentBlock extends BaseArticleContentBlock {
  authorLinkInArticleHeader(username) {
    return this.page.getByRole('link', { username }).first();
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

export { AuthorArticleContentBlock as AuthorsArticleContentBlock };
