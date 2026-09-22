import { BaseArticleContentBlock } from './BaseArticleContentBlock';
import { expect } from '../../../common/helpers/pw';

export class ArticleContentBlock extends BaseArticleContentBlock {
  #articleTitleHeader;
  #tagList;

  constructor(page, userId = 0) {
    super(page, userId);

    this.#articleTitleHeader = this._banner.getByRole('heading');
    this.#tagList = this._articleContent.locator('.tag-list');
  }

  #authorLink(username) {
    return this._banner.getByRole('link', { name: username }).first();
  }

  #tagListItem(tagName) {
    return this.#tagList.getByRole('listitem').filter({ hasText: tagName });
  }

  async assertArticleTitleIsVisible(title) {
    await this.step(`Assert the article has correct title`, async () => {
      await expect(this.#articleTitleHeader).toContainText(title);
    });
  }

  async assertArticleAuthorNameIsVisible(username) {
    await this.step(
      `Assert the article has correct author username`,
      async () => {
        await expect(this.#authorLink(username)).toBeVisible();
      },
    );
  }

  async assertArticleTextIsVisible(text) {
    await this.step(`Assert the article has correct text`, async () => {
      await expect(this._articleContent.getByText(text)).toBeVisible();
    });
  }

  async assertArticleTagsAreVisible(tags) {
    await this.step(`Assert the article has correct tags`, async () => {
      for (let i = 0; i < tags.length; i++) {
        await expect(this.#tagListItem(tags[i])).toBeVisible();
      }
    });
  }
}
