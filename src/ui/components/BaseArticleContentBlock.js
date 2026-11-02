import { expect } from '../../common/helpers/pw';
import { BaseComponent } from './BaseComponent';

export class BaseArticleContentBlock extends BaseComponent {
  constructor(page, userId = 0) {
    super(page, userId);

    this.articleTitleHeader = page.getByRole('heading').first();
    this.articleBody = page.locator('.article-content');
  }

  authorLinkInArticleHeader(username) {
    return this.page
      .getByRole('link', {
        name: username,
        exact: true,
      })
      .first();
  }

  tagListItem(tagName) {
    return this.articleBody
      .locator('li.tag-pill')
      .getByText(tagName, { exact: true });
  }

  async assertArticleTitleIsVisible(title) {
    await this.step('Assert the article has correct title', async () => {
      await expect(this.articleTitleHeader).toContainText(title);
    });
  }

  async assertArticleAuthorNameIsVisible(username) {
    await this.step(
      'Assert the article has correct author username',
      async () => {
        await expect(this.authorLinkInArticleHeader(username)).toBeVisible();
      },
    );
  }

  async assertArticleTextIsVisible(text) {
    await this.step('Assert the article has correct text', async () => {
      await expect(this.articleBody.getByText(text)).toBeVisible();
    });
  }

  async assertArticleTagsAreVisible(tags) {
    await this.step('Assert the article has correct tags', async () => {
      for (const tag of tags) {
        await expect(this.tagListItem(tag)).toBeVisible();
      }
    });
  }
}
