import { BaseComponent } from '../BaseComponent';
import { expect } from '../../../common/helpers/pw';
import { escapeRegExp } from '../../../common/helpers/stringHelpers';

export class ArticleFeedItem extends BaseComponent {
  #articleFeedItems;

  constructor(page, userId = 0) {
    super(page, userId);

    this.#articleFeedItems = this.page.locator('.article-preview');
  }

  #articleFeedItem(title) {
    return this.#articleFeedItems.filter({
      has: this.page.getByRole('heading', {
        name: new RegExp(`${escapeRegExp(title)}\\s*$`),
      }),
    });
  }

  #articleDescription(title) {
    return this.#articleFeedItem(title).locator('.preview-link p');
  }

  #articleAuthorLink(title) {
    return this.#articleFeedItem(title).locator('.author');
  }

  #articleTagListItem(title, tagName) {
    return this.#articleFeedItem(title)
      .locator('.tag-list')
      .getByText(tagName, { exact: true });
  }

  #articleLink(title) {
    return this.#articleFeedItem(title).locator('a.preview-link');
  }

  async clickArticle(title) {
    await this.step(`Click the '${title}' article in the feed`, async () => {
      await this.#articleLink(title).click();
    });
  }

  async isArticleVisible(title) {
    return await this.#articleFeedItem(title).isVisible();
  }

  async assertArticleIsVisible(title) {
    await this.step(
      `Assert the '${title}' article is visible in the feed`,
      async () => {
        await expect(this.#articleFeedItem(title)).toBeVisible();
      },
    );
  }

  async assertArticleDescriptionIsVisible(title, description) {
    await this.step(
      `Assert the '${title}' article has correct description`,
      async () => {
        await expect(this.#articleDescription(title)).toContainText(
          description,
        );
      },
    );
  }

  async assertArticleAuthorIsVisible(title, username) {
    await this.step(
      `Assert the '${title}' article has '${username}' author`,
      async () => {
        await expect(this.#articleAuthorLink(title)).toHaveText(username);
      },
    );
  }

  async assertArticleTagsAreVisible(title, tags) {
    await this.step(
      `Assert the '${title}' article has correct tags`,
      async () => {
        for (let i = 0; i < tags.length; i++) {
          await expect(this.#articleTagListItem(title, tags[i])).toBeVisible();
        }
      },
    );
  }
}
