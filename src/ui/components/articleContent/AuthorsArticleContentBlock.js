import { expect } from 'playwright/test';
import { BaseArticleContentBlock } from './BaseArticleContentBlock';

export class AuthorsArticleContentBlock extends BaseArticleContentBlock {
  constructor(page, userId = 0) {
    super(page, userId);
  }

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