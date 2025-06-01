import { expect } from '../../../../common/helpers/pw';
import { BaseComponent } from '../../BaseComponent';

export class BaseViewArticleBlock extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);
    this.articleTitleHeader = page.getByRole('heading');
    this.articleAuthor = page.locator('a.author');
  }

  authorLinkInArticleHeader(username) {
    return this.articleAuthor.filter({ hasText: username }).first();
  }

  tagListItem(tagName) {
    return this.page.getByRole('listitem').filter({ hasText: tagName });
  }

  async assertArticleTitleIsVisible(title) {
    await this.step(`Assert the article has correct title`, async () => {
      await expect(this.articleTitleHeader).toContainText(title);
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

  async assertArticleTextIsVisible(text) {
    await this.step(`Assert the article has correct text`, async () => {
      await expect(this.page.getByText(text)).toBeVisible();
    });
  }

  async assertArticleTagsAreVisible(tags) {
    await this.step(`Assert the article has correct tags`, async () => {
      for (let i = 0; i < tags.length; i++) {
        await expect(this.tagListItem(tags[i])).toBeVisible();
      }
    });
  }
}
