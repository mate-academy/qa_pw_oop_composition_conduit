import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';

export class ArticleFeedItem extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleAuthor = this.page.locator('.article-meta .info .author');
  }

  async assertArticleContainsAuthorName(username) {
    await this.step(
      `Assert 'Article Feed' item has article created by '${username}'`,
      async () => {
        await expect(
          this.articleAuthor.getByText(username, { exact: true }).first(),
        ).toBeVisible();
      },
    );
  }
}
